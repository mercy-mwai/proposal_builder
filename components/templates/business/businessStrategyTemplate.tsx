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
  Compass,
  Target,  
} from "lucide-react";
import { useRouter } from "next/navigation";
import EditableField from "../EditableField";

interface BusinessStrategyTemplateProps {
  clientName?: string;
  companyName?: string;
  agencyName?: string;
  projectTitle?: string;
  timeline?: string;
  totalInvestment?: string;
  userEmail?:string;
  userPhone?:string;
}

export default function BusinessStrategyProposalTemplate({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  agencyName = "{{agency_name}}",
  projectTitle = "{{project_title}}",
  timeline = "{{timeline}}",
  userEmail = "{{user_email}}",
  userPhone= "{{user_phone}}",
  totalInvestment = "{{total_investment}}",
}: BusinessStrategyTemplateProps) {
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
                🎯 Strategy Guide
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Vision & Mission
                  </h4>
                  <p>
                    Define a clear, inspiring vision and an actionable mission
                    statement to guide all strategic efforts.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Comprehensive Analysis
                  </h4>
                  <p>
                    Utilize frameworks like SWOT, PESTEL, and Porter's Five
                    Forces to understand internal and external landscapes.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">KPI Alignment</h4>
                  <p>
                    Establish key performance indicators (KPIs) that directly
                    measure progress toward strategic goals and objectives.
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
                  Strategic Blueprint for Long-Term Value Creation
                </p>
                <div className="text-lg">
                  <p>
                    Prepared for:{" "}
                    <span className="font-semibold">
                      <EditableField label="Client Name" defaultValue={clientName} />
                    </span>
                  </p>
                  <p>
                    Company:{" "}
                    <span className="font-semibold">
                      <EditableField label="Company Name" defaultValue={companyName} />
                    </span>
                  </p>
                  <p className="mt-4">
                    Prepared by:{" "}
                    <span className="font-semibold">
                      <EditableField label="Agency Name" defaultValue={agencyName} />
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
                  <p className="mb-4">Dear <EditableField label="Client Name" defaultValue={clientName} />,</p>
                  <p className="mb-4">
                    The leadership team at <EditableField label="Company Name" defaultValue={companyName} /> 
                    recognizes the need for
                    a refreshed **{"{{Business Strategy}}"}** to navigate market
                    shifts and capture new opportunities for sustainable,
                    long-term growth.
                  </p>
                  <p className="mb-4">
                    This proposal outlines a collaborative approach to develop a
                    robust,<EditableField label="timeline" defaultValue={timeline} /> Strategic Plan** that aligns your
                    organizational capabilities with clear market advantage and
                    defines key initiatives to maximize shareholder and
                    stakeholder value.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      Key Objectives of This Strategy:
                    </h3>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li>
                        Clarify and articulate the core value proposition.
                      </li>
                      <li>Identify 3-5 high-impact strategic growth areas.</li>
                      <li>
                        Optimize operating model for efficiency and scale.
                      </li>
                      <li>Establish a clear, measurable execution roadmap.</li>
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
                  Current State and Strategic Gaps
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
                  Internal Challenges and Strategic Gaps
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  Based on our initial conversations and high-level assessment,
                  we have identified core strategic challenges hindering your
                  potential:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    Unclear prioritization across multiple competing initiatives
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Inefficient resource allocation due to departmental silos
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Lack of a standardized process for market opportunity
                    assessment and entry
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Operating model not fully optimized for current or future
                    scale
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
                  Market and Competitive Landscape
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  The <EditableField label="companyName" defaultValue={companyName} /> industry is experiencing rapid
                  transformation, driven by technological advancements and
                  shifting customer expectations. Our analysis reveals
                  opportunities in [Specific Market Segment] and a clear threat
                  from [Competitive Factor]. A proactive strategy is essential
                  to secure market leadership.
                </p>
              </section>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Business Strategy Framework
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive, <EditableField label="timeline" defaultValue={timeline} /> Strategic
                    Blueprint** structured around three core pillars to ensure
                    holistic and sustainable value creation for <EditableField label="company name" defaultValue={companyName} />.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        ⚡ Strategic Pillar 1: Market Expansion & Growth (The
                        "What")
                      </h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>
                          Define new market entry strategies and M&A screening
                          criteria
                        </li>
                        <li>
                          Identify and prioritize high-potential customer
                          segments
                        </li>
                        <li>
                          Develop a roadmap for product/service innovation and
                          differentiation
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">
                        🛡️ Strategic Pillar 2: Operational Excellence (The
                        "How")
                      </h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>
                          Assess and re-engineer critical business processes
                          (e.g., supply chain)
                        </li>
                        <li>
                          Implement performance management and KPI dashboards
                        </li>
                        <li>
                          Identify cost reduction and efficiency opportunities
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">
                        🏗️ Strategic Pillar 3: Organizational Alignment (The
                        "Who")
                      </h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>
                          Future-state organizational design and governance
                          model
                        </li>
                        <li>Identify key talent and capability gaps</li>
                        <li>
                          Develop change management and communication plan
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="digital-marketing">
                  <img
                    src="/assets/image/businessStrategyModel.png"
                    alt="business-strategy-model"
                    style={{
                      maxWidth: "100%",
                      marginTop: "20px",
                    }}
                  />
                </div>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Timeline & Key Phases
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Our engagement is structured into clear phases to ensure
                    rapid momentum and stakeholder alignment at every critical
                    juncture.
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
                          Phase 1: Discovery & Analysis (Weeks 1-4)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Comprehensive internal interviews, market analysis,
                          data gathering, and current state assessment. Finalize
                          strategic questions.
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
                          Phase 2: Strategy Formulation (Weeks 5-8)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Develop strategic pillars, prioritize options, define
                          target operating model, and establish financial
                          projections.
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
                          Phase 3: Roadmap & Execution (Weeks 9-12)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Create the **{"{{timeline}}"} Implementation
                          Roadmap**, define KPIs, develop a governance
                          structure, and present the final strategic blueprint.
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
                  Our consulting services are structured to deliver maximum
                  strategic clarity and hands-on support for implementation.
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 p-4 rounded-t-lg font-bold text-gray-800">
                    <h3>Strategic Consulting Packages</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 font-bold text-gray-700 border-b border-gray-300">
                    <span>Service Component</span>
                    <span>Fee (Lump Sum)</span>
                    <span>Team Allocation (Weeks)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 1: Discovery & Analysis</span>
                    <span>$25,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 2: Strategy Formulation</span>
                    <span>$40,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 3: Roadmap & Execution</span>
                    <span>$35,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Implementation Support (Optional)</span>
                    <span>$15,000 / month</span>
                    <span>On Demand</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 font-bold rounded-b-lg">
                    <span>Total Strategy Investment</span>
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
                  12-week minimum engagement for the core strategy development.
                </p>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Expected Deliverables & Value
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  The primary outcome of this engagement is a clear, actionable
                  strategic plan that drives both near-term wins and long-term
                  value creation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm ">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Core Deliverables
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Final Strategic Blueprint Document</li>
                      <li>Detailed Implementation Roadmap</li>
                      <li>Strategic Financial Model</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Strategic Impact
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>50% increase in operational efficiency</li>
                      <li>Clear prioritization of business units</li>
                      <li>Identified path to **15-20% YOY** revenue growth</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Organizational Value
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Full leadership alignment on the strategy</li>
                      <li>Metrics established for strategy tracking</li>
                      <li>Empowered team with clear priorities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Partner with Us for Success
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    {companyName}'s next phase of growth requires a focused,
                    insight-driven strategy. {agencyName} is ready to partner
                    with you to build this future.
                  </p>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-4">
                      Next Steps to Strategy Kickoff:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                      <li>Schedule a final Q&A session with the partners</li>
                      <li>Approve the Strategic Consulting Agreement</li>
                      <li>
                        Mobilize the joint <EditableField label="agencyName" defaultValue={agencyName} />/ 
                        <EditableField label="companyName" defaultValue={companyName} />
                         project
                        team
                      </li>
                      <li>Commence Phase 1: Discovery & Analysis</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">
                      Ready to build your next strategic advantage?
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold"><EditableField label="agencyName" defaultValue={agencyName} /></p>
                      <p>Strategic Consulting Partners</p>
                      <p>
                        Email:<EditableField label="user email" defaultValue={userEmail} />
                      </p>
                      <p>
                      Phone:<EditableField label="user phone" defaultValue={userPhone} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 text-white py-16 rounded-lg mt-8 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold mb-4">
                    Business Strategy Proposal Template
                  </h1>
                  <p className="text-xl mb-6">
                    A comprehensive plan for sustainable growth and operational
                    excellence
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
