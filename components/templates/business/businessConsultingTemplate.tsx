"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Users, Target, Clock, DollarSign } from "lucide-react"

interface BusinessConsultingTemplateProps {
  clientName?: string
  consultantName?: string
  consultantCompany?: string
  projectTitle?: string
  projectDescription?: string
  timeline?: string
  investment?: string
}

export default function BusinessConsultingTemplate ({
  clientName = "[Client Name]",
  consultantName = "[Your Name]",
  consultantCompany = "[Your Company]",
  projectTitle = "[Project Title]",
  projectDescription = "[Project Description]",
  timeline = "[Timeline]",
  investment = "[Investment Amount]",
}: BusinessConsultingTemplateProps) {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleDownloadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Download form submitted:", formData)
    // Here you would typically send the proposal via email
    setIsDownloadOpen(false)
  }

  const handleUseTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Redirect to sign up/sign in page
    window.location.href = "/auth/signin"
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Download Template Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Business Consulting Proposal Template</h1>
            <p className="text-xl mb-6">Professional template to win more consulting projects</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Download className="mr-2 h-5 w-5" />
                    Download Template
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Get Your Business Consulting Template</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleDownloadSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Template to Email
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                onClick={handleUseTemplate}
              >
                Use Template Builder
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Explanations */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-4">Template Guide</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Executive Summary</h4>
                  <p>
                    Start with a compelling overview that captures the client's attention and summarizes your value
                    proposition.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Problem & Solution</h4>
                  <p>Clearly articulate the client's challenges and present your strategic approach to solving them.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methodology</h4>
                  <p>Outline your proven consulting framework and how it applies to their specific situation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Investment</h4>
                  <p>Present pricing transparently with clear value justification and ROI expectations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Proposal Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Consulting Proposal</h1>
                <p className="text-lg text-gray-600">Prepared for {clientName}</p>
                <p className="text-gray-500">
                  By {consultantName}, {consultantCompany}
                </p>
                <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
              </div>

              {/* Executive Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="mr-2 h-6 w-6 text-blue-600" />
                  Executive Summary
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Dear {clientName},<br />
                    <br />
                    We are pleased to present this comprehensive business consulting proposal for {projectTitle}. Our
                    analysis indicates significant opportunities for growth and operational improvement within your
                    organization. Through our proven methodology and strategic approach, we will help you achieve
                    measurable results and sustainable competitive advantage.
                  </p>
                </div>
              </section>

              {/* Problem Statement */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Challenges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 mb-2">Operational Inefficiencies</h3>
                    <p className="text-red-700 text-sm">Current processes are not optimized for scale and growth.</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-semibold text-yellow-800 mb-2">Market Positioning</h3>
                    <p className="text-yellow-700 text-sm">
                      Competitive advantage needs strengthening in key market segments.
                    </p>
                  </div>
                </div>
              </section>

              {/* Proposed Solution */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Strategic Approach</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 mb-2">Phase 1: Assessment & Analysis</h3>
                    <p className="text-green-700">
                      Comprehensive evaluation of current state and identification of improvement opportunities.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Phase 2: Strategy Development</h3>
                    <p className="text-blue-700">
                      Creation of customized strategic roadmap with clear milestones and success metrics.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 mb-2">Phase 3: Implementation Support</h3>
                    <p className="text-purple-700">
                      Hands-on guidance and support throughout the transformation process.
                    </p>
                  </div>
                </div>
              </section>

              {/* Timeline */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-blue-600" />
                  Project Timeline
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        1
                      </div>
                      <h3 className="font-semibold">Weeks 1-2</h3>
                      <p className="text-sm text-gray-600">Discovery & Assessment</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        2
                      </div>
                      <h3 className="font-semibold">Weeks 3-6</h3>
                      <p className="text-sm text-gray-600">Strategy Development</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        3
                      </div>
                      <h3 className="font-semibold">Weeks 7-12</h3>
                      <p className="text-sm text-gray-600">Implementation</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Team */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-2 h-6 w-6 text-blue-600" />
                  Your Consulting Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                      {consultantName.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-lg">{consultantName}</h3>
                    <p className="text-blue-600 mb-2">Lead Consultant</p>
                    <p className="text-gray-600 text-sm">
                      15+ years of experience in business transformation and strategic planning.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                      SA
                    </div>
                    <h3 className="font-semibold text-lg">Senior Analyst</h3>
                    <p className="text-purple-600 mb-2">Data & Analytics Specialist</p>
                    <p className="text-gray-600 text-sm">
                      Expert in business intelligence and performance optimization.
                    </p>
                  </div>
                </div>
              </section>

              {/* Investment */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-blue-600" />
                  Investment & ROI
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Project Investment</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Discovery & Assessment</span>
                          <span className="font-semibold">$15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Strategy Development</span>
                          <span className="font-semibold">$25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Implementation Support</span>
                          <span className="font-semibold">$35,000</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Investment</span>
                          <span className="text-blue-600">$75,000</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Expected ROI</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>3-Month Impact</span>
                          <span className="font-semibold text-green-600">15% efficiency gain</span>
                        </div>
                        <div className="flex justify-between">
                          <span>6-Month Impact</span>
                          <span className="font-semibold text-green-600">25% cost reduction</span>
                        </div>
                        <div className="flex justify-between">
                          <span>12-Month Impact</span>
                          <span className="font-semibold text-green-600">300% ROI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Review and approve this proposal</li>
                    <li>Sign the consulting agreement</li>
                    <li>Schedule project kickoff meeting</li>
                    <li>Begin discovery and assessment phase</li>
                  </ol>
                  <div className="mt-6 p-4 bg-white rounded border-l-4 border-green-500">
                    <p className="font-semibold text-green-800">Ready to get started?</p>
                    <p className="text-green-700">
                      Contact us at [your-email] or [your-phone] to discuss this proposal further.
                    </p>
                  </div>
                </div>
              </section>

              {/* Signature */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement</h2>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="mb-4">Client Signature:</p>
                      <div className="border-b-2 border-gray-300 h-12 mb-2"></div>
                      <p className="text-sm text-gray-600">Name: {clientName}</p>
                      <p className="text-sm text-gray-600">Date: ___________</p>
                    </div>
                    <div>
                      <p className="mb-4">Consultant Signature:</p>
                      <div className="border-b-2 border-gray-300 h-12 mb-2"></div>
                      <p className="text-sm text-gray-600">Name: {consultantName}</p>
                      <p className="text-sm text-gray-600">Date: ___________</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

