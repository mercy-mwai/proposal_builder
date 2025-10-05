"use client"

import { TemplateSelector } from "../components/template-selector"
import { Button } from "@/components/ui/button"
import { FileText, Users, Zap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router= useRouter();
  const handleAuth=()=>{
    router.push("/auth/signup");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-400">
    
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ProposalGen</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">My Proposals</Button>
            </Link>
            <Button onClick={handleAuth}>Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Proposal Generator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create winning proposals and tender documents in minutes. Choose your template and get started.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">Create professional proposals in just a few guided steps</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Templates</h3>
            <p className="text-gray-600">Choose from industry-specific templates designed to win</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600">Join SMEs, freelancers, and NGOs who trust our platform</p>
          </div>
        </div>

        <TemplateSelector />
      </div>
    </div>
  )
}
