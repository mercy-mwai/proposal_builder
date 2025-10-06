"use client" 

import React, { useState } from "react";
import Link from "next/link";
import Divider from "../ui/divider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "../ui/alert";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";

interface LoginFormData {
  email:string,
  password:string
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess]= useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const config={
      withCredentials:true,
      headers:{
        'Accept': 'application/json'
      }
    }
    try {
     await axios.get("http://localhost:8000/sanctum/csrf-cookie", config);
     const response=await axios.post(
      "http://localhost:8000/api/auth/login",
      formData,
      config
     );
     const data= response.data;

      if (data.success) {
        setSuccess(data.message || "Logged in successfully")
       const redirectUrl= localStorage.getItem("redirect_after_login")
       if(redirectUrl){
        localStorage.removeItem("redirect_after_login");
        router.push(redirectUrl);
       }else{
         router.push("/dashboard");
       }
      } else {
        setError(data.message || "Login Failed");
      }
    } catch (error) {
      setError("Network error. Please check your connction and try again");
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignIn=()=>{
    window.location.href= "http://127.0.0.1:8000/auth/google"
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="rounded text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-gray-600">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
               {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <span className="d-block cate pt-10">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-sm text-gray-600">
              Sign Up
            </Link>
          </span>
          <Divider />
          <div className="social-login mt-2">
            <Button
              variant="outline"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <img src="/assets/icons/google.svg" className="h-5 w-5" />
              <span>Sign in with google</span>
              
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
