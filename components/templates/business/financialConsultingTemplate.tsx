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
  Target,
  BarChart, 
  DollarSign, 
  Shield, 
  PieChart, 
} from "lucide-react";
import { useRouter } from "next/navigation";
import EditableField from "../EditableField";

interface FinancialConsultingTemplateProps {
  clientName?: string;
  companyName?: string;
  agencyName?: string;
  projectTitle?: string;
  timeline?: string;
  totalInvestment?: string;
  userEmail?:string;
  userPhone?:string;
}

export default function FinancialConsultingProposalTemplate({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  agencyName = "{{agency_name}}",
  projectTitle = "Strategic Financial Optimization & Growth Planning",
  timeline = "{{timeline}}",
  totalInvestment = "{{total_investment}}",
  userEmail="{{user_email}}",
  userPhone="{{user_phone}}"
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
                📈 Financial Advisory Blueprint
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Financial Analysis
                  </h4>
                  <p>
                    Deep dive into current P&L, balance sheet, and cash flow for optimization.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Budget Planning
                  </h4>
                  <p>
                    Develop flexible, zero-based, or activity-based budgets for the next FY.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Investment Strategy
                  </h4>
                  <p>
                    Create a capital allocation plan for optimal returns on internal and external projects.
                  </p>
                </div>

                 <div>
                  <h4 className="font-medium text-gray-800">
                    Risk Assessment
                  </h4>
                  <p>
                    Identify, quantify, and develop mitigation strategies for key financial risks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-700 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">
                  <EditableField label="Project Title" defaultValue={projectTitle} />
                </h1>
                <p className="text-xl mb-6">
                  Financial advisory covering budgeting, forecasting, investment planning, and risk management.
                </p>
                <div className="text-lg">
                  <p>
                    Prepared for:{" "}
                    <span className="font-semibold">
                      <EditableField label="clientName" defaultValue={clientName} />
                    </span>
                  </p>
                  <p>
                    Company:{" "}
                    <span className="font-semibold">
                      <EditableField label="companyName" defaultValue={companyName} />
                    </span>
                  </p>
                  <p className="mt-4">
                    Prepared by:{" "}
                    <span className="font-semibold">
                      <EditableField label="agencyName" defaultValue={agencyName} />
                    </span>
                  </p>
                  <p className="mt-4">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Executive Summary
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">Dear  <EditableField label="clientName" defaultValue={clientName} />,</p>
                  <p className="mb-4">
                    To accelerate profitable growth,  <EditableField label="companyName" defaultValue={companyName} /> requires a sophisticated and forward-looking financial framework. Our goal is to move beyond historical reporting to a proactive **{'{{Financial Strategy}}'}** that supports investment and mitigates exposure.
                  </p>
                  <p className="mb-4">
                    This proposal outlines a <EditableField label="timeline" defaultValue={timeline} /> Financial Optimization Plan** focused on **Financial Analysis**, **Budget Planning**, and **Risk Assessment** to maximize capital efficiency and secure future profitability.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      Key Objectives of This Engagement:
                    </h3>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li>
                        Establish a robust, rolling forecasting and budgeting cycle.
                      </li>
                      <li>
                        Develop a clear **Investment Strategy** for capital expenditure.
                      </li>
                      <li>
                        Identify and quantify major operational and market risks.
                      </li>
                      <li>
                        Improve key financial metrics (e.g., Working Capital, ROI).
                      </li>
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
                  Current State Financial Gaps
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
                  Identified Challenges in Financial Management
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  Based on our preliminary review, we've pinpointed specific areas where financial clarity and control can be significantly improved:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    Inconsistent budgeting leading to frequent mid-year revisions and variances.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Lack of a standardized process for evaluating large capital expenditure (CapEx) proposals.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Underutilized cash flow and working capital due to inefficient resource allocation.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Inadequate formal **Risk Assessment** of foreign exchange or commodity price volatility.
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
                  Opportunity for Financial Leverage
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  By implementing best-practice financial modeling and governance, 
                  <EditableField label="companyName" defaultValue={companyName} /> 
                  can unlock substantial value, including reduced cost of capital and higher returns on strategic initiatives.
                </p>
              </section>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Financial Consulting Framework
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive, **{'{{timeline}}'} Financial Optimization Blueprint** structured around the core elements of sustainable business finance: **Analysis, Planning, Strategy, and Protection.**
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        <BarChart className="inline-block mr-2 h-5 w-5" /> Pillar 1: Financial Analysis & Modeling
                      </h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>
                          Conduct a deep-dive analysis of profitability and cost centers.
                        </li>
                        <li>
                          Develop a custom 3-statement financial forecasting model.
                        </li>
                        <li>
                          Benchmark key financial KPIs against industry peers.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">
                        <PieChart className="inline-block mr-2 h-5 w-5" /> Pillar 2: Budget Planning & Forecasting
                      </h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>
                          Design and implement a structured annual **Budget Planning** process.
                        </li>
                        <li>
                          Integrate a rolling 12-month or 18-month cash flow forecast.
                        </li>
                        <li>
                          Training for the finance team on variance analysis and reporting.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">
                        <DollarSign className="inline-block mr-2 h-5 w-5" /> Pillar 3: Investment Strategy & Capital Allocation
                      </h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>
                          Create a formal framework for evaluating CapEx and M&A opportunities (DCF, IRR, NPV).
                        </li>
                        <li>
                          Develop a capital structure review and optimization plan.
                        </li>
                        <li>
                          Formulate a clear **Investment Strategy** for surplus cash.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-3">
                        <Shield className="inline-block mr-2 h-5 w-5" /> Pillar 4: Risk Assessment & Mitigation
                      </h3>
                      <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                        <li>
                          Conduct a comprehensive financial **Risk Assessment** (liquidity, market, credit).
                        </li>
                        <li>
                          Develop a financial contingency plan and stress-testing scenarios.
                        </li>
                        <li>
                          Recommend internal control improvements to safeguard assets.
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
                  <p className="text-center text-xs text-gray-500 mt-2">Conceptual Financial Optimization Model</p>
                </div>
              </div>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Timeline & Key Phases
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Our engagement is structured to move quickly from diagnostic analysis to implementing the new financial systems and controls.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <BarChart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 1: Financial Analysis & Diagnostic (Weeks 1-4)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Data collection, historical performance review, and initial gap analysis. Deliverable: Current State Financial Report.
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
                          Phase 2: Strategy Design & Modeling (Weeks 5-8)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Develop the core forecasting model, new **Budget Planning** templates, and **Investment Strategy** framework.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 3: Implementation & Control (Weeks 9-12)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Roll out new financial processes, conduct **Risk Assessment** workshops, and transition ownership to the internal finance team.
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
                  Our consulting services are structured to deliver clear, measurable improvements in financial efficiency and strategic decision-making.
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 p-4 rounded-t-lg font-bold text-gray-800">
                    <h3>Financial Optimization Packages</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 font-bold text-gray-700 border-b border-gray-300">
                    <span>Service Component</span>
                    <span>Fee (Lump Sum)</span>
                    <span>Team Allocation (Weeks)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 1: Financial Analysis</span>
                    <span>$25,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 2: Strategy & Modeling</span>
                    <span>$40,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 3: Implementation & Control</span>
                    <span>$35,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Ongoing Financial Advisory (Optional)</span>
                    <span>$12,000 / month</span>
                    <span>On Demand</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 font-bold rounded-b-lg">
                    <span>Total Core Financial Investment</span>
                    <span><EditableField label="totalInvestment" defaultValue={totalInvestment} /></span>
                    <span>12 Weeks (Core)</span>
                  </div>
                </div>
                <p className="mt-6 text-base text-gray-600">
                  <strong className="font-semibold">Payment Terms:</strong>{" "}
                  Invoices issued at the start of each phase (3 payments).
                </p>
                <p className="text-base text-gray-600 mt-2">
                  <strong className="font-semibold">Contract Terms:</strong>{" "}
                  12-week minimum engagement for the core financial transformation.
                </p>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Expected Deliverables & Value
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  The primary outcome is a clear, scalable, and risk-managed financial platform that directly supports
                   <EditableField label="companyName" defaultValue={companyName} />'s strategic goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm ">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Core Deliverables
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Custom 3-Statement Financial Model</li>
                      <li>Formal **Budget Planning** Document & Templates</li>
                      <li>Comprehensive **Risk Assessment** Report</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Investment Impact
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Clear **Investment Strategy** for CapEx and R&D</li>
                      <li>**10-20% improvement** in Working Capital cycle</li>
                      <li>Enhanced cash flow visibility for decision-making</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Operational Value
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Improved accuracy in revenue and expense forecasts</li>
                      <li>Standardized financial reporting and KPIs</li>
                      <li>Reduced exposure to financial and operational risk</li>
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
                     <EditableField label="companyName" defaultValue={companyName} />'s
                      long-term success requires a strong financial foundation. 
                      <EditableField label="agencyName" defaultValue={agencyName} />
                       is ready to provide the rigorous analysis and strategic planning necessary to optimize your 
                       resources and secure your future.
                  </p>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-4">
                      Next Steps to Financial Kickoff:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                      <li>Schedule a final Q&A session with the CFO/Finance Leadership</li>
                      <li>Approve the Financial Consulting Agreement</li>
                      <li>
                        Form the joint <EditableField label="agencyName" defaultValue={agencyName} />
                        /
                        <EditableField label="companyName" defaultValue={companyName} />
                         Financial project team
                      </li>
                      <li>Commence Phase 1: Financial Analysis & Diagnostic</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">
                      Ready to optimize your financial strategy?
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold"><EditableField label="agencyName" defaultValue={agencyName} /></p>
                      <p>Financial Consulting & Advisory Partners</p>
                      <p><EditableField  label="userEmail" defaultValue={userEmail}/></p>
                      <p><EditableField label="userPhone" defaultValue={userPhone} /></p>
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
                    Financial advisory template covering budgeting, forecasting, investment planning, and financial optimization.
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