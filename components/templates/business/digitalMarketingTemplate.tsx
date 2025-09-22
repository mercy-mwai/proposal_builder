"use client"
import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, User, TrendingUp, Target, Users, Mail } from "lucide-react"


interface DigitalMarketingTemplateProps {
  clientName?: string
  companyName?: string
  agencyName?: string
  projectTitle?: string
  monthlyBudget?: string
  campaignDuration?: string
}

export default function  DigitalMarketingTemplate ({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  agencyName = "{{agency_name}}",
  projectTitle = "{{project_title}}",
  monthlyBudget = "{{monthly_budget}}",
  campaignDuration = "{{campaign_duration}}",
}: DigitalMarketingTemplateProps) {
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
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Digital Marketing Proposal Template</h1>
            <p className="text-xl mb-6">Drive growth with data-driven marketing strategies</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
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
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
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
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🚀 Marketing Guide</h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">Campaign Strategy</h4>
                  <p>
                    Focus on data-driven approaches that align with business objectives and target audience behavior.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">Multi-Channel Approach</h4>
                  <p>Integrate SEO, PPC, social media, and content marketing for maximum reach and impact.</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">ROI Tracking</h4>
                  <p>
                    Establish clear KPIs and tracking mechanisms to measure campaign success and optimize performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Proposal Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Cover Page */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
                <p className="text-xl mb-6">Digital Marketing Strategy & Campaign Management</p>
                <div className="text-lg">
                  <p>
                    Prepared for: <span className="font-semibold">{clientName}</span>
                  </p>
                  <p>
                    Company: <span className="font-semibold">{companyName}</span>
                  </p>
                  <p className="mt-4">
                    Prepared by: <span className="font-semibold">{agencyName}</span>
                  </p>
                  <p className="mt-4">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Summary</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">Dear {clientName},</p>
                  <p className="mb-4">
                    In today's digital landscape, {companyName} has tremendous opportunities to expand its market reach
                    and drive sustainable growth through strategic digital marketing initiatives.
                  </p>
                  <p className="mb-4">
                    Our comprehensive digital marketing approach combines data-driven strategies, creative excellence,
                    and performance optimization to deliver measurable results that align with your business objectives.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Expected Outcomes:</h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-1">
                      <li>Increase website traffic by 150-200%</li>
                      <li>Improve lead generation by 75-100%</li>
                      <li>Boost brand awareness and engagement</li>
                      <li>Achieve 4:1 minimum ROI on ad spend</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current Challenges */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Digital Marketing Challenges</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Based on our analysis, {companyName} faces several common digital marketing challenges:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-red-600 mb-2" />
                      <h3 className="font-semibold text-red-800 mb-2">Limited Online Visibility</h3>
                      <p className="text-red-700 text-sm">
                        Low search engine rankings and minimal social media presence limiting brand discovery.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <Target className="h-6 w-6 text-orange-600 mb-2" />
                      <h3 className="font-semibold text-orange-800 mb-2">Ineffective Targeting</h3>
                      <p className="text-orange-700 text-sm">
                        Broad, unfocused marketing efforts resulting in low conversion rates and wasted budget.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-yellow-600 mb-2" />
                      <h3 className="font-semibold text-yellow-800 mb-2">Poor Lead Quality</h3>
                      <p className="text-yellow-700 text-sm">
                        Generating traffic but struggling to convert visitors into qualified leads and customers.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-600 mb-2" />
                      <h3 className="font-semibold text-purple-800 mb-2">Inconsistent Messaging</h3>
                      <p className="text-purple-700 text-sm">
                        Lack of cohesive brand messaging across different marketing channels and touchpoints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proposed Strategy */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Digital Marketing Strategy</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive {campaignDuration} digital marketing campaign focused on driving
                    qualified traffic, generating leads, and increasing conversions.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">🔍 Search Engine Optimization (SEO)</h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>Comprehensive keyword research and strategy</li>
                        <li>On-page optimization and technical SEO</li>
                        <li>Content creation and optimization</li>
                        <li>Local SEO and Google My Business optimization</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">💰 Pay-Per-Click Advertising (PPC)</h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>Google Ads campaign setup and management</li>
                        <li>Facebook and Instagram advertising</li>
                        <li>LinkedIn advertising for B2B targeting</li>
                        <li>Retargeting campaigns for conversion optimization</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">📱 Social Media Marketing</h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>Social media strategy and content calendar</li>
                        <li>Community management and engagement</li>
                        <li>Influencer partnerships and collaborations</li>
                        <li>Social media advertising and promotion</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-3">📝 Content Marketing</h3>
                      <ul className="list-disc list-inside text-orange-700 space-y-1 text-sm">
                        <li>Blog content strategy and creation</li>
                        <li>Video marketing and production</li>
                        <li>Email marketing campaigns</li>
                        <li>Lead magnets and downloadable resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline & Milestones */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Campaign Timeline</h2>
                <div className="prose max-w-none text-gray-600">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold">Month 1: Foundation & Setup</h3>
                        <p className="text-sm text-gray-600">
                          Account setup, research, strategy finalization, and initial campaign launches
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        2-3
                      </div>
                      <div>
                        <h3 className="font-semibold">Months 2-3: Optimization & Growth</h3>
                        <p className="text-sm text-gray-600">
                          Campaign optimization, content creation, and performance improvements
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        4-6
                      </div>
                      <div>
                        <h3 className="font-semibold">Months 4-6: Scale & Expand</h3>
                        <p className="text-sm text-gray-600">
                          Scaling successful campaigns and expanding to new channels and audiences
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment & Pricing */}
              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Investment</h2>
                <div className="prose max-w-none text-gray-600">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-orange-600 mb-2">{monthlyBudget}/month</h3>
                      <p className="text-gray-600">Marketing Management Fee</p>
                      <p className="text-sm text-gray-500 mt-2">+ Ad spend budget (recommended: $3,000-$5,000/month)</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-800 mb-2">Starter Package</h3>
                      <p className="text-2xl font-bold text-orange-600 mb-2">$2,500/mo</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>SEO optimization</li>
                        <li>Google Ads management</li>
                        <li>Monthly reporting</li>
                        <li>Basic social media</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-4 text-center">
                      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full mb-2">RECOMMENDED</div>
                      <h3 className="font-semibold text-gray-800 mb-2">Growth Package</h3>
                      <p className="text-2xl font-bold text-orange-600 mb-2">$4,500/mo</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Everything in Starter</li>
                        <li>Social media advertising</li>
                        <li>Content marketing</li>
                        <li>Email campaigns</li>
                        <li>Advanced analytics</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-800 mb-2">Enterprise Package</h3>
                      <p className="text-2xl font-bold text-orange-600 mb-2">$7,500/mo</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Everything in Growth</li>
                        <li>Video marketing</li>
                        <li>Influencer partnerships</li>
                        <li>Custom integrations</li>
                        <li>Dedicated account manager</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Let's transform {companyName}'s digital presence and drive measurable growth through strategic
                    marketing initiatives.
                  </p>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-4">Next Steps:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-orange-700">
                      <li>Schedule a strategy call to discuss your goals</li>
                      <li>Finalize campaign objectives and budget</li>
                      <li>Sign the marketing services agreement</li>
                      <li>Begin campaign setup and launch</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">Ready to accelerate your digital growth?</p>
                    <div className="space-y-2">
                      <p className="font-semibold">{agencyName}</p>
                      <p>Digital Marketing Specialists</p>
                      <p>Email: hello@agency.com</p>
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

  


