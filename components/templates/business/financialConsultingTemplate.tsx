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
} from "@/components/ui/dialog";
import {
  Download,
  User,
  TrendingUp,
  Compass,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface FinancialConsultingTemplateProps {
  clientName?: string;
  companyName?: string;
  agencyName?: string;
  projectTitle?: string;
  timeline?: string;
  totalInvestment?: string;
}

export default function FinancialConsultingTemplate({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  agencyName = "{{agency_name}}",
  projectTitle = "Comprehensive Financial Strategy & Optimization",
  timeline = "{{timeline}}",
  totalInvestment = "{{total_investment}}",
}: FinancialConsultingTemplateProps) {
  const [downloadForm, setDownloadForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const router = useRouter();
  const handleDownload = (e: React.FormEvent) => {
    router.push("/auth/login");
    e.preventDefault();
    console.log("Download requested:", downloadForm);
    setIsDownloadOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Your Financial Template</DialogTitle>
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
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Send Template to Email
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                📈 Financial Roadmap Guide
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Capital Structure & Funding
                  </h4>
                  <p>
                    Analyze and optimize the blend of debt and equity to minimize the cost of capital.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Risk & Compliance Audit
                  </h4>
                  <p>
                    Identify and mitigate key financial and regulatory risks to ensure business stability.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Profitability Modeling
                  </h4>
                  <p>
                    Develop detailed financial models and forecasts that project profitable growth scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-700 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
                <p className="text-xl mb-6">
                  A comprehensive strategy for enhanced profitability and financial resilience
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
                    The leadership team at {companyName} is focused on maximizing value creation through a rigorous **{'{{Financial Strategy}}'}** that secures funding, manages risk, and drives profitable growth.
                  </p>
                  <p className="mb-4">
                    This proposal outlines a collaborative approach to develop a
                    robust, **{timeline} Financial Optimization Plan** that aligns your capital deployment with long-term strategic goals and ensures compliance and operational stability.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      Key Objectives of This Engagement:
                    </h3>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li>
                        Optimize working capital management and cash flow.
                      </li>
                      <li>Develop a 5-year financial projection model.</li>
                      <li>
                        Establish a robust risk management and compliance framework.
                      </li>
                      <li>Define clear targets for cost of capital reduction.</li>
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
                  Current Financial Health and Key Challenges
                </h2>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#5f7da5",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Internal Financial Gaps and Inefficiencies
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  Based on our initial financial review, we have identified core challenges hindering your profit potential:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    Suboptimal capital expenditure tracking and ROI assessment
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Fragmented budgeting and forecasting processes leading to forecast variance
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    High cost of working capital due to inefficient receivables/payables cycles
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Limited visibility into departmental cost drivers and profit centers
                  </li>
                </ul>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#5f7da5",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Economic and Regulatory Landscape
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  The **{'{{companyName}}'}** sector faces new economic headwinds, driven by rising interest rates and shifting regulatory environments. Our analysis will provide a clear path to **Financial Resilience** against these external pressures, focusing on [Key Compliance Area] and optimizing financing structures.
                </p>
              </section>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Financial Consulting Framework
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive, **{'{{timeline}}'} Financial Optimization Blueprint** structured around three core pillars to ensure holistic and sustainable financial health for {companyName}.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        💰 Pillar 1: Profitability & Growth Modeling
                      </h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>
                          Develop zero-based budgeting (ZBB) or activity-based costing (ABC) models.
                        </li>
                        <li>
                          Implement rolling financial forecasts and sensitivity analysis.
                        </li>
                        <li>
                          Identify and model new revenue stream opportunities and profitability targets.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">
                        🛡️ Pillar 2: Capital & Risk Management
                      </h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>
                          Optimize capital structure, treasury, and debt management.
                        </li>
                        <li>
                          Establish comprehensive internal control and compliance protocols.
                        </li>
                        <li>
                          Implement liquidity stress-testing and cash flow forecasting models.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">
                        📊 Pillar 3: Financial Reporting & Tech Integration
                      </h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>
                          Design executive-level financial reporting dashboards and metrics.
                        </li>
                        <li>
                          Assess and recommend upgrades to ERP/Financial planning systems.
                        </li>
                        <li>
                          Standardize financial data governance and audit readiness processes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="digital-marketing">
                  <img
                    src="/assets/image/financialConsulting.jpg"
                    alt="financial-consulting-model"
                    style={{
                      maxWidth: "100%",
                      marginTop: "20px",
                    }}
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">Conceptual Financial Strategy Model</p>
                </div>
              </div>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Timeline & Key Phases
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Our engagement is structured into clear phases to ensure rapid assessment and implementation of financial controls and growth models.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Compass className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 1: Financial Assessment & Diagnostics (Weeks 1-4)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Comprehensive audit of existing financial statements, systems, and internal controls. Cash flow and capital structure analysis.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 2: Modeling & Optimization (Weeks 5-8)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Development of 5-year financial models, working capital optimization, and initial risk mitigation plan. Cost of capital modeling.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 3: Implementation & Reporting (Weeks 9-12)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Creation of the **{'{{timeline}}'} Financial Roadmap**, training on new reporting systems, and final presentation of the optimized financial blueprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Investment & Services
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Our financial consulting services are designed to provide clear ROI through enhanced financial controls and optimized capital allocation.
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 p-4 rounded-t-lg font-bold text-gray-800">
                    <h3>Financial Consulting Packages</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 font-bold text-gray-700 border-b border-gray-300">
                    <span>Service Component</span>
                    <span>Fee (Lump Sum)</span>
                    <span>Team Allocation (Weeks)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 1: Diagnostics & Audit</span>
                    <span>$30,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 2: Modeling & Optimization</span>
                    <span>$45,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 3: Implementation & Reporting</span>
                    <span>$35,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Ongoing Advisory Support (Optional)</span>
                    <span>$12,000 / month</span>
                    <span>On Demand</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 font-bold rounded-b-lg">
                    <span>Total Core Financial Investment</span>
                    <span>{totalInvestment}</span>
                    <span>12 Weeks (Core)</span>
                  </div>
                </div>
                <p className="mt-6 text-base text-gray-600">
                  <strong className="font-semibold">Payment Terms:</strong>{" "}
                  Invoices issued at the start of each phase (3 payments).
                </p>
                <p className="text-base text-gray-600 mt-2">
                  <strong className="font-semibold">Contract Terms:</strong>{" "}
                  12-week minimum engagement for the core financial strategy development.
                </p>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Expected Deliverables & Value
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  The primary outcome is a complete financial transformation: from improved controls to a clear, measurable path to higher margins and investor confidence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm ">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Core Deliverables
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Final Financial Optimization Blueprint</li>
                      <li>5-Year Dynamic Financial Model (Excel/GSheet)</li>
                      <li>Risk & Compliance Audit Report</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Financial Impact
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>**10-20% reduction** in cost of capital</li>
                      <li>Identified cost savings exceeding investment</li>
                      <li>Clear path to **25% EBITDA Margin** target</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Organizational Value
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Enhanced investor/board confidence</li>
                      <li>Standardized financial reporting package</li>
                      <li>Financial team trained on new forecasting tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Partner with Us for Financial Success
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    {companyName}'s financial future requires diligence, foresight, and a robust modeling capability. {agencyName} is ready to partner with you to achieve financial resilience and accelerated growth.
                  </p>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-4">
                      Next Steps to Financial Kickoff:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                      <li>Schedule a final discussion on investment terms</li>
                      <li>Approve the Financial Consulting Agreement</li>
                      <li>
                        Mobilize the joint {agencyName}/{companyName} finance project team
                      </li>
                      <li>Commence Phase 1: Financial Assessment & Diagnostics</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">
                      Ready to optimize your financial structure?
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">{agencyName}</p>
                      <p>Financial Consulting Partners</p>
                      <p>Email: finance@agency.com</p>
                      <p>Phone: 07890986568</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 text-white py-16 rounded-lg mt-8 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold mb-4">
                    Financial Consulting Proposal Template
                  </h1>
                  <p className="text-xl mb-6">
                    A comprehensive plan for enhanced profitability and financial resilience
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setIsDownloadOpen(true)}
                      className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Template
                    </button>
                    <a
                      href="#"
                      onClick={handleDownload}
                      className="bg-transparent border border-white text-white hover:bg-white hover:text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
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