"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, User, Briefcase, Target, Users } from "lucide-react"

interface GeneralConsultingTemplateProps {
  clientName?: string
  companyName?: string
  consultantName?: string
  consultantTitle?: string
  projectTitle?: string
  totalInvestment?: string
  projectDuration?: string
}

export function GeneralConsultingTemplate({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  consultantName = "{{consultant_name}}",
  consultantTitle = "{{consultant_title}}",
  projectTitle = "{{project_title}}",
  totalInvestment = "{{total_investment}}",
  projectDuration = "{{project_duration}}",
}: GeneralConsultingTemplateProps) {
  const [downloadForm, setDownloadForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Download requested:", downloadForm)
    setIsDownloadOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Download Template Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Professional Consulting Proposal Template</h1>
            <p className="text-xl mb-6">Comprehensive template for all consulting services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                    <Download className="mr-2 h-5 w-5" />
                    Download Template
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Get Your Template</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={downloadForm.firstName}
                          onChange={(e) => setDownloadForm({ ...downloadForm, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={downloadForm.lastName}
                          onChange={(e) => setDownloadForm({ ...downloadForm, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={downloadForm.email}
                        onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
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
                className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600"
              >
                <User className="mr-2 h-5 w-5" />
                Use Template Builder
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Proposal Guide</h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">Professional Presentation</h4>
                  <p>Structure your proposal to build credibility and demonstrate expertise from the first page.</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">Value-Focused Content</h4>
                  <p>Emphasize outcomes and benefits rather than just activities. Show ROI and business impact.</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">Clear Next Steps</h4>
                  <p>Make it easy for clients to say yes with clear processes and defined expectations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Proposal Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Cover Page */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
                <p className="text-xl mb-6">Professional Consulting Services Proposal</p>
                <div className="text-lg">
                  <p>
                    Prepared for: <span className="font-semibold">{clientName}</span>
                  </p>
                  <p>
                    Organization: <span className="font-semibold">{companyName}</span>
                  </p>
                  <p className="mt-4">
                    Prepared by: <span className="font-semibold">{consultantName}</span>
                  </p>
                  <p>{consultantTitle}</p>
                  <p className="mt-4">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Summary</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">Dear {clientName},</p>
                  <p className="mb-4">
                    Thank you for the opportunity to present our consulting services to {companyName}. We understand
                    that your organization is seeking expert guidance to navigate current challenges and capitalize on
                    emerging opportunities.
                  </p>
                  <p className="mb-4">
                    Our proven consulting methodology combines industry expertise, analytical rigor, and practical
                    implementation support to deliver sustainable results that drive your organization forward.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-2">Key Value Propositions:</h3>
                    <ul className="list-disc list-inside text-teal-700 space-y-1">
                      <li>Expert analysis and strategic recommendations</li>
                      <li>Customized solutions tailored to your specific needs</li>
                      <li>Hands-on implementation support and guidance</li>
                      <li>Measurable outcomes and sustainable improvements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* About Us */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Consulting Practice</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    With over a decade of experience serving organizations across various industries, we bring deep
                    expertise and proven methodologies to every engagement.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="h-8 w-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Industry Expertise</h3>
                      <p className="text-sm text-gray-600">
                        Deep knowledge across multiple sectors and business functions
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Results-Driven</h3>
                      <p className="text-sm text-gray-600">Focus on measurable outcomes and sustainable improvements</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Collaborative Approach</h3>
                      <p className="text-sm text-gray-600">
                        Working closely with your team to ensure successful implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Based on our initial discussions and preliminary assessment, we propose a comprehensive consulting
                    engagement designed to address your specific challenges and objectives.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Project Objectives:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Conduct comprehensive analysis of current state and identify improvement opportunities</li>
                      <li>Develop strategic recommendations aligned with organizational goals</li>
                      <li>Create detailed implementation roadmap with clear milestones</li>
                      <li>Provide ongoing support to ensure successful execution</li>
                      <li>Establish metrics and monitoring systems for continuous improvement</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Project Duration</h3>
                      <p className="text-blue-700">{projectDuration}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Total Investment</h3>
                      <p className="text-green-700">{totalInvestment}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Consulting Methodology</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We follow a structured, proven methodology that ensures comprehensive analysis, strategic thinking,
                    and successful implementation.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Discovery & Analysis</h3>
                        <p className="text-gray-600 mb-2">
                          Comprehensive assessment of current state, challenges, and opportunities.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <li>Stakeholder interviews and workshops</li>
                          <li>Data collection and analysis</li>
                          <li>Process mapping and documentation</li>
                          <li>Competitive and market analysis</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Strategy Development</h3>
                        <p className="text-gray-600 mb-2">
                          Creation of strategic recommendations and detailed action plans.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <li>Strategic options evaluation</li>
                          <li>Recommendation development</li>
                          <li>Implementation planning</li>
                          <li>Risk assessment and mitigation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Implementation Support</h3>
                        <p className="text-gray-600 mb-2">
                          Hands-on support to execute recommendations and achieve desired outcomes.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <li>Change management support</li>
                          <li>Project management and coordination</li>
                          <li>Training and capability building</li>
                          <li>Progress monitoring and adjustment</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Evaluation & Optimization</h3>
                        <p className="text-gray-600 mb-2">
                          Ongoing assessment and optimization to ensure sustainable results.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <li>Performance measurement and reporting</li>
                          <li>Continuous improvement recommendations</li>
                          <li>Knowledge transfer and documentation</li>
                          <li>Long-term success planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Deliverables</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Throughout the engagement, you will receive comprehensive deliverables designed to provide
                    actionable insights and support successful implementation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">📊 Analysis Reports</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Current state assessment</li>
                        <li>Gap analysis and recommendations</li>
                        <li>Market and competitive analysis</li>
                        <li>Risk assessment report</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">📋 Strategic Plans</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Strategic roadmap</li>
                        <li>Implementation timeline</li>
                        <li>Resource allocation plan</li>
                        <li>Success metrics framework</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">🛠️ Implementation Tools</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Process documentation</li>
                        <li>Training materials</li>
                        <li>Templates and frameworks</li>
                        <li>Best practice guidelines</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">📈 Progress Reports</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Weekly status updates</li>
                        <li>Monthly progress reports</li>
                        <li>Final project summary</li>
                        <li>Lessons learned document</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Investment</h2>
                <div className="prose max-w-none text-gray-600">
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-teal-600 mb-2">{totalInvestment}</h3>
                      <p className="text-gray-600">Total Project Investment</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Investment Includes:</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>Complete project management
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>All analysis and research
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>Strategic recommendations
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>Implementation support
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>All deliverables and documentation
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>Ongoing communication and updates
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Payment Schedule:</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 40% upon contract execution</li>
                        <li>• 30% at mid-project milestone</li>
                        <li>• 30% upon project completion</li>
                        <li>• Net 15 payment terms</li>
                        <li>• All expenses included in fee</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Next Steps</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We're excited about the opportunity to partner with {companyName} and contribute to your continued
                    success.
                  </p>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-teal-800 mb-4">To proceed with this engagement:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-teal-700">
                      <li>Review and approve this proposal</li>
                      <li>Schedule project kickoff meeting</li>
                      <li>Execute consulting services agreement</li>
                      <li>Begin discovery and analysis phase</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">We look forward to discussing how we can help achieve your objectives.</p>
                    <div className="space-y-2">
                      <p className="font-semibold">{consultantName}</p>
                      <p>{consultantTitle}</p>
                      <p>Email: {consultantName.toLowerCase().replace(" ", ".")}@consulting.com</p>
                      <p>Phone: (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
