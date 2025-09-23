import React from "react";
import Link from "next/link";
import Divider from "../ui/divider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Chrome } from "lucide-react";

const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
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

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <div className="mt-4 text-center">
          <span className="d-block cate pt-10">
            Don't have an account?{" "}
            <Link href="/signup" className="text-sm text-gray-600">
              Sign Up
            </Link>
          </span>
          <Divider />
          <div className="social-login mt-2">
            <Button variant="outline" className="w-full">
              <Chrome className="mr-2 h-4 w-4"/>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoginForm;
