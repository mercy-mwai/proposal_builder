"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Download,
  User,
  TrendingUp,
  Rocket,
  Compass,
  Sparkles,
  Target,
  Users,
  Mail,
} from "lucide-react";

interface DigitalMarketingTemplateProps {
  clientName?: string;
  companyName?: string;
  agencyName?: string;
  projectTitle?: string;
  monthlyBudget?: string;
  campaignDuration?: string;
}

export default function DigitalMarketingTemplate({
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
  });
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Download requested:", downloadForm);
    setIsDownloadOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Digital Marketing Proposal Template
            </h1>
            <p className="text-xl mb-6">
              Drive growth with data-driven marketing strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
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
                          onChange={(e) =>
                            setDownloadForm({
                              ...downloadForm,
                              firstName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={downloadForm.lastName}
                          onChange={(e) =>
                            setDownloadForm({
                              ...downloadForm,
                              lastName: e.target.value,
                            })
                          }
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
                        onChange={(e) =>
                          setDownloadForm({
                            ...downloadForm,
                            email: e.target.value,
                          })
                        }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-gray-500 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                🚀 Marketing Guide
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Campaign Strategy
                  </h4>
                  <p>
                    Focus on data-driven approaches that align with business
                    objectives and target audience behavior.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Multi-Channel Approach
                  </h4>
                  <p>
                    Integrate SEO, PPC, social media, and content marketing for
                    maximum reach and impact.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">ROI Tracking</h4>
                  <p>
                    Establish clear KPIs and tracking mechanisms to measure
                    campaign success and optimize performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
                <p className="text-xl mb-6">
                  Digital Marketing Strategy & Campaign Management
                </p>
                <div className="text-lg">
                  <p>
                    Prepared for:{" "}
                    <span className="font-semibold">{clientName}</span>
                  </p>
                  <p>
                    Company:{" "}
                    <span className="font-semibold">{companyName}</span>
                  </p>
                  <p className="mt-4">
                    Prepared by:{" "}
                    <span className="font-semibold">{agencyName}</span>
                  </p>
                  <p className="mt-4">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Executive Summary
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">Dear {clientName},</p>
                  <p className="mb-4">
                    In today's digital landscape, {companyName} has tremendous
                    opportunities to expand its market reach and drive
                    sustainable growth through strategic digital marketing
                    initiatives.
                  </p>
                  <p className="mb-4">
                    Our comprehensive digital marketing approach combines
                    data-driven strategies, creative excellence, and performance
                    optimization to deliver measurable results that align with
                    your business objectives.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">
                      Expected Outcomes:
                    </h3>
                    <ul className="list-disc list-inside text-orange-700 space-y-1">
                      <li>Increase website traffic by 150-200%</li>
                      <li>Improve lead generation by 75-100%</li>
                      <li>Boost brand awareness and engagement</li>
                      <li>Achieve 4:1 minimum ROI on ad spend</li>
                    </ul>
                  </div>
                </div>
              </div>

              <section
                style={{
                  padding: "2rem",
                  marginBottom: "2rem",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    marginBottom: "1rem",
                  }}
                >
                  Current Situation Analysis
                </h2>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#3498db",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Challenges We've Identified
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  Based on our initial analysis of your business, we've
                  identified several key challenges that are limiting your
                  digital growth:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    Limited online visibility in search results
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Inconsistent social media presence and engagement
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Lack of targeted lead generation strategies
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Minimal conversion optimization on existing digital assets
                  </li>
                </ul>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#3498db",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Market Opportunities
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  The your industry presents significant digital marketing
                  opportunities. With 73% of consumers researching online before
                  making purchasing decisions, there's tremendous potential to
                  capture market share through strategic digital marketing.
                </p>
              </section>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Digital Marketing Strategy
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive {campaignDuration} digital
                    marketing campaign focused on driving qualified traffic,
                    generating leads, and increasing conversions.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        🔍 Search Engine Optimization (SEO)
                      </h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>Comprehensive keyword research and strategy</li>
                        <li>On-page optimization and technical SEO</li>
                        <li>Content creation and optimization</li>
                        <li>Local SEO and Google My Business optimization</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">
                        💰 Pay-Per-Click Advertising (PPC)
                      </h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>Google Ads campaign setup and management</li>
                        <li>Facebook and Instagram advertising</li>
                        <li>LinkedIn advertising for B2B targeting</li>
                        <li>
                          Retargeting campaigns for conversion optimization
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">
                        📱 Social Media Marketing
                      </h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>Social media strategy and content calendar</li>
                        <li>Community management and engagement</li>
                        <li>Influencer partnerships and collaborations</li>
                        <li>Social media advertising and promotion</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-3">
                        📝 Content Marketing
                      </h3>
                      <ul className="list-disc list-inside text-orange-700 space-y-1 text-sm">
                        <li>Blog content strategy and creation</li>
                        <li>Video marketing and production</li>
                        <li>Email marketing campaigns</li>
                        <li>Lead magnets and downloadable resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="digital-marketing">
                  <img
                    src="/assets/image/digitalMarketing.png"
                    alt="digital-marketing"
                    style={{
                      maxWidth: "100%",
                      marginTop: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Timeline & Milestones
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Our digital marketing implementation follows a strategic
                    timeline designed to build momentum and deliver results
                    progressively.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Foundation & Setup
                        </h3>
                        <p className="text-sm text-gray-600">
                          Complete website audit, keyword research, set up
                          tracking systems, launch initial PPC campaigns, and
                          begin content creation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Optimization & Expansion
                        </h3>
                        <p className="text-sm text-gray-600">
                          Optimize based on initial data, expand successful
                          campaigns, increase content production, and implement
                          email marketing automation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Compass className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Growth & Refinement
                        </h3>
                        <p className="text-sm text-gray-600">
                          Scale high-performing campaigns, implement advanced
                          targeting, launch retargeting campaigns, and optimize
                          conversion funnels.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-rose-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Sustained Growth
                        </h3>
                        <p className="text-sm text-gray-600">
                          Focus on sustainable growth, advanced SEO strategies,
                          brand building, and continuous optimization based on
                          performance data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Investment & Pricing
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Our digital marketing services are structured to provide
                  maximum value and measurable ROI. Below is our comprehensive
                  pricing breakdown:
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 p-4 rounded-t-lg font-bold text-gray-800">
                    <h3>Digital Marketing Service Packages</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 font-bold text-gray-700 border-b border-gray-300">
                    <span>Service</span>
                    <span>Monthly Fee</span>
                    <span>Setup Fee</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>SEO Optimization & Management</span>
                    <span>$2,500</span>
                    <span>$1,500</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>PPC Campaign Management</span>
                    <span>$1,800</span>
                    <span>$800</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Social Media Marketing</span>
                    <span>$1,200</span>
                    <span>$500</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Content Marketing</span>
                    <span>$1,500</span>
                    <span>$600</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Email Marketing</span>
                    <span>$800</span>
                    <span>$400</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 font-bold rounded-b-lg">
                    <span>Complete Package (20% Discount)</span>
                    <span>$6,240</span>
                    <span>$2,880</span>
                  </div>
                </div>
                <p className="mt-6 text-base text-gray-600">
                  <strong className="font-semibold">Ad Spend:</strong>{" "}
                  Recommended monthly ad spend of $5,000 (managed separately,
                  billed directly by platforms)
                </p>
                <p className="text-base text-gray-600 mt-2">
                  <strong className="font-semibold">Contract Terms:</strong>{" "}
                  12-month agreement with 30-day payment terms
                </p>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Expected Results & ROI
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Based on our experience with similar businesses and current
                  market conditions, here are the results you can expect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm ">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      3-Month Goals
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>50% increase in organic website traffic</li>
                      <li>25 new qualified leads per month</li>
                      <li>3:1 ROI on PPC campaigns</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      6-Month Goals
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>100% increase in organic traffic</li>
                      <li>50 new qualified leads per month</li>
                      <li>4:1 ROI on total marketing spend</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      12-Month Goals
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>200% increase in organic traffic</li>
                      <li>100 new qualified leads per month</li>
                      <li>5:1 ROI on total marketing investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Get Started?
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    Let's transform {companyName}'s digital presence and drive
                    measurable growth through strategic marketing initiatives.
                  </p>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-4">
                      Next Steps:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-orange-700">
                      <li>Schedule a strategy call to discuss your goals</li>
                      <li>Finalize campaign objectives and budget</li>
                      <li>Sign the marketing services agreement</li>
                      <li>Begin campaign setup and launch</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">
                      Ready to accelerate your digital growth?
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">{agencyName}</p>
                      <p>Digital Marketing Specialists</p>
                      <p>Email: hello@agency.com</p>
                      <p>Phone: 07890986568</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 rounded-lg mt-8 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold mb-4">
                    Digital Marketing Proposal Template
                  </h1>
                  <p className="text-xl mb-6">
                    Drive growth with data-driven marketing strategies
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setIsDownloadOpen(true)}
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Template
                    </button>
                    <a
                      href="#"
                      onClick={handleDownload}
                      className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
                    >
                      <User className="mr-2 h-5 w-5" />
                      Use Template Builder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
