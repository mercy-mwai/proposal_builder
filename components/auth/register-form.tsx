import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Divider from "../ui/divider";
import { useState } from "react";

interface LoginFormData {
  name: Text;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit=async (e: React.FormEvent)=>{
e.preventDefault();
setIsLoading(true);
setError("");

if(formData.password !== formData.confirmPassword){
    setError("Passwords do not match");
    setIsLoading(false);
    return
}
try{
    const response= await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:formData.name,
            email:formData.email,
            password:formData.password,
            password_confirmation:formData.confirmPassword
        })
    });
    const data= await response.json();
    if(data.success){
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user))
    }else{
        setError(data.message || "Registration Failed")
    }
}catch(error){
    setError("Network error. Please try again")
}finally{
    setIsLoading(false);
}
}

  const handleGoogleSignIn = () => {
    window.location.href = "http://127.0.0.1:8000/auth/google";
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-lg">Register</CardTitle>
        <CardContent>
          <form className="space-y-4">
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <div className="space-y-2 mt-3">
              <Label htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Your Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading} onClick={handleSubmit}>
             {isLoading? "Creating account...": "Sign up"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <span className="d-block cate pt-10">
              Have an account? <Link href={"/auth/login"}>Login</Link>
            </span>
            <Divider />
            <div className="social-login mt-2">
              <Button
                variant="outline"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="/assets/icons/google.svg"
                  alt="Google icon"
                  className="h-5 w-5"
                />
                <span>Sign In with Google</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default RegisterForm;
