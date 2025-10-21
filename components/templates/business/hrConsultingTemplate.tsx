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
  Users, 
  Briefcase, 
  Heart, 
  BarChart, 
} from "lucide-react";
import { useRouter } from "next/navigation";
import EditableField from "../EditableField";

interface HRConsultingTemplateProps {
  clientName?: string;
  companyName?: string;
  agencyName?: string;
  projectTitle?: string;
  timeline?: string;
  totalInvestment?: string;
  userEmail?:string;
  userPhone?:string;
}

export default function HRConsultingTemplate({
  clientName = "{{client_name}}",
  companyName = "{{company_name}}",
  agencyName = "{{agency_name}}",
  projectTitle = "Strategic Human Resources Transformation",
  timeline = "{{timeline}}",
  totalInvestment = "{{total_investment}}",
  userEmail="{{user_email}}",
  userPhone="{{user_phone}}"
}: HRConsultingTemplateProps) {
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
            <DialogTitle>Get Your HR Template</DialogTitle>
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
                👥 HR Transformation Guide
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Talent Management
                  </h4>
                  <p>
                    Develop strategies for recruiting, onboarding, and retaining top talent.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Organizational Design
                  </h4>
                  <p>
                    Structure teams and roles for optimal efficiency and future scalability.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">
                    Culture Development
                  </h4>
                  <p>
                    Audit and shape the organizational culture to drive engagement and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-700 text-white p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">
                  <EditableField label="projectTitle" defaultValue={projectTitle} />
                </h1>
                <p className="text-xl mb-6">
                  Human resources blueprint for talent, design, and culture optimization
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
                  <p className="mb-4">Dear <EditableField label="clientName" defaultValue={clientName} />,</p>
                  <p className="mb-4">
                    To maintain a competitive edge,  <EditableField label="companyName" defaultValue={companyName} /> recognizes the critical need to align its human capital strategy with its business objectives. A modern **{'{{HR Strategy}}'}** is essential to attract, develop, and retain the best workforce.
                  </p>
                  <p className="mb-4">
                    This proposal outlines a <EditableField label="timeline" defaultValue={timeline} /> HR Transformation Plan** focused on **Organizational Design**, **Talent Management**, and **Culture Development** to maximize employee potential and drive sustainable growth.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-2">
                      Key Objectives of This Engagement:
                    </h3>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1">
                      <li>
                        Implement a high-impact talent acquisition and retention strategy.
                      </li>
                      <li>Redesign the organizational structure for agility and scalability.</li>
                      <li>
                        Define and embed core values to enhance employee engagement.
                      </li>
                      <li>Establish a performance management system linked to business outcomes.</li>
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
                  Current State and HR Gaps
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
                  Internal HR Challenges and Organizational Gaps
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  Based on our initial conversations and HR data review, we have identified core challenges hindering your human capital potential:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    High employee turnover in critical departments (e.g., [Department Name])
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Lack of a standardized, objective performance review and career development path
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Organizational structure prone to communication silos and slow decision-making
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Inconsistent culture across international or remote teams
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
                  Competitive Talent Landscape
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "1.5rem",
                  }}
                >
                  The talent market for the <EditableField label="companyName" defaultValue={companyName} /> industry is highly competitive. To attract premium talent, a proactive, data-driven **Talent Strategy** focusing on a compelling Employee Value Proposition (EVP) and modern HR technology is critical.
                </p>
              </section>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our HR Consulting Framework
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    We propose a comprehensive, <EditableField label="timeline" defaultValue={timeline} /> HR Transformation Blueprint** structured around the critical pillars of modern people operations: **Talent Management, Organizational Design, and Culture.**
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">
                        <Briefcase className="inline-block mr-2 h-5 w-5" /> Pillar 1: Talent Management
                      </h3>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                        <li>
                          Audit and redesign the full talent lifecycle (Attraction to Exit).
                        </li>
                        <li>
                          Implement succession planning and high-potential identification programs.
                        </li>
                        <li>
                          Develop a competency-based training and upskilling framework.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">
                        <Users className="inline-block mr-2 h-5 w-5" /> Pillar 2: Organizational Design & Efficiency
                      </h3>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>
                          Analyze and propose future-state organizational structures (e.g., matrix, agile pods).
                        </li>
                        <li>
                          Standardize roles, responsibilities, and decision-making governance.
                        </li>
                        <li>
                          Optimize HR operating model and technology stack (HRIS recommendations).
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">
                        <Heart className="inline-block mr-2 h-5 w-5" /> Pillar 3: Performance Systems & Culture
                      </h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                        <li>
                          Design and launch a continuous performance management system (OKRs/KPIs).
                        </li>
                        <li>
                          Conduct a culture audit and develop a targeted culture development plan.
                        </li>
                        <li>
                          Establish employee engagement surveys and action planning mechanisms.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="digital-marketing">
                 
                  <img
                    src="/assets/image/hr-consulting.jpg"
                    alt="hr-consulting-model"
                    style={{
                      maxWidth: "100%",
                      marginTop: "20px",
                    }}
                  />
                  <p className="text-center text-xs text-gray-500 mt-2">Conceptual HR Transformation Model</p>
                </div>
              </div>

              <div className="p-8 border-b">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Timeline & Key Phases
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Our engagement is structured to move quickly from diagnostic analysis to tangible implementation of the new HR framework.
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
                          Phase 1: HR Audit & Baseline Assessment (Weeks 1-4)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Data collection on turnover, engagement, and performance. Conduct leadership interviews and a culture survey.
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
                          Phase 2: Design & Strategy Formulation (Weeks 5-8)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Design the new organizational structure, talent acquisition model, and core performance management system.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div
                        className={`flex-shrink-0 bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center`}
                      >
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          Phase 3: Implementation & Change Management (Weeks 9-12)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Launch new performance systems, roll out culture initiatives, and train HR and management on the new **{'{{timeline}}'} HR Roadmap**.
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
                  Our consulting services are structured to deliver clear, measurable improvements in employee engagement, retention, and productivity.
                </p>
                <div className="mt-6">
                  <div className="bg-gray-200 p-4 rounded-t-lg font-bold text-gray-800">
                    <h3>HR Transformation Packages</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 font-bold text-gray-700 border-b border-gray-300">
                    <span>Service Component</span>
                    <span>Fee (Lump Sum)</span>
                    <span>Team Allocation (Weeks)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 1: HR Audit & Baseline</span>
                    <span>$20,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 2: Design & Strategy</span>
                    <span>$35,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Phase 3: Implementation & Change</span>
                    <span>$40,000</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                    <span>Post-Launch Advisory (Optional)</span>
                    <span>$10,000 / month</span>
                    <span>On Demand</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 font-bold rounded-b-lg">
                    <span>Total Core HR Investment</span>
                    <span>
                      <EditableField label="totalInvestment" defaultValue={totalInvestment} />
                    </span>
                    <span>12 Weeks (Core)</span>
                  </div>
                </div>
                <p className="mt-6 text-base text-gray-600">
                  <strong className="font-semibold">Payment Terms:</strong>{" "}
                  Invoices issued at the start of each phase (3 payments).
                </p>
                <p className="text-base text-gray-600 mt-2">
                  <strong className="font-semibold">Contract Terms:</strong>{" "}
                  12-week minimum engagement for the core HR transformation.
                </p>
              </div>

              <div className="p-8 border-b bg-white rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Expected Deliverables & Value
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  The primary outcome is a highly engaged, organized, and effective workforce that acts as a true competitive advantage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm ">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Core Deliverables
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Final HR Strategy & Organizational Blueprint</li>
                      <li>New Performance Management System Documentation</li>
                      <li>Culture & Engagement Audit Report</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Talent Impact
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>**15% reduction** in key employee turnover</li>
                      <li>Improved quality of hire and onboarding speed</li>
                      <li>Increased employee engagement scores</li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      Organizational Value
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Clearer roles and responsibilities</li>
                      <li>Full alignment of HR goals with business strategy</li>
                      <li>Stronger internal communication and culture</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Partner with Us for People Success
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-6">
                    <EditableField label="companyName" defaultValue={companyName} />'s future growth is directly linked to the capabilities and engagement of its people.
                     <EditableField label="agencyName" defaultValue={agencyName} /> is ready to build the high-performance workforce and culture you need.
                  </p>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 mb-4">
                      Next Steps to HR Kickoff:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-indigo-700">
                      <li>Schedule a final Q&A session with the HR leadership</li>
                      <li>Approve the HR Consulting Agreement</li>
                      <li>
                        Form the joint 
                        <EditableField label="agencyName" defaultValue={agencyName} />
                        / <EditableField label="companyName" defaultValue={companyName} /> HR project team
                      </li>
                      <li>Commence Phase 1: HR Audit & Baseline Assessment</li>
                    </ol>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="mb-4">
                      Ready to transform your human capital?
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold"><EditableField label="agencyName" defaultValue={agencyName} /></p>
                      <p>Human Resources Consulting Partners</p>
                      <p><EditableField label="userEmail" defaultValue={userEmail} /></p>
                      <p><EditableField label="userPhone" defaultValue={userPhone} /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 text-white py-16 rounded-lg mt-8 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold mb-4">
                    HR Consulting Proposal Template
                  </h1>
                  <p className="text-xl mb-6">
                    Human resources template for talent management, organizational development, and HR strategy.
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