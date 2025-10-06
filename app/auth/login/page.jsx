"use server"
import React from 'react'
import { FileText } from "lucide-react"
import  LoginForm  from "@/components/auth/login-form"
import Link from 'next/link'

const loginPage = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ProposalGen</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to create professional proposals</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default loginPage