"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Building2, Heart, User, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
interface Template {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
  features: string[]
  popular?: boolean
}

const templates: Template[] = [
  {
    id: "business-proposal",
    title: "Basic Business Proposal",
    description: "Perfect for service providers, consultants, and small businesses pitching to clients.",
    icon: <FileText className="h-8 w-8" />,
    category: "Business",
    features: ["Executive Summary", "Service Details", "Pricing Tables", "Terms & Conditions"],
    popular: true,
  },
  {
    id: "government-tender",
    title: "Government Tender Format",
    description: "Structured format compliant with government procurement requirements.",
    icon: <Building2 className="h-8 w-8" />,
    category: "Government",
    features: ["Compliance Checklist", "Technical Specifications", "Financial Breakdown", "Legal Requirements"],
  },
  {
    id: "ngo-donor",
    title: "NGO/Donor Proposal",
    description: "Designed for non-profits seeking funding from donors and grant organizations.",
    icon: <Heart className="h-8 w-8" />,
    category: "Non-Profit",
    features: ["Project Impact", "Budget Justification", "Sustainability Plan", "Monitoring Framework"],
  },
  {
    id: "freelancer-quote",
    title: "Freelancer Quote",
    description: "Quick and professional quotes for freelancers and independent contractors.",
    icon: <User className="h-8 w-8" />,
    category: "Freelance",
    features: ["Scope of Work", "Deliverables", "Timeline", "Payment Terms"],
    popular: true,
  },
  {
    id: "event-service",
    title: "Event/Service Quotation",
    description: "Comprehensive quotes for event planners and service-based businesses.",
    icon: <Calendar className="h-8 w-8" />,
    category: "Events",
    features: ["Service Breakdown", "Venue Details", "Equipment Lists", "Staff Requirements"],
  },
]

export function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const router =useRouter();

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      window.location.href = `/templates/${selectedTemplate}`
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTemplate === template.id ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
            }`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedTemplate === template.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {template.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">{template.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                {template.popular && (
                  <Badge variant="default" className="bg-orange-500">
                    Popular
                  </Badge>
                )}
                {selectedTemplate === template.id && <CheckCircle className="h-6 w-6 text-blue-500" />}
              </div>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-sm text-gray-600 mb-4">{template.description}</CardDescription>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                <ul className="space-y-1">
                  {template.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedTemplate && (
        <div className="text-center">
          <Button onClick={handleContinue} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Continue with Selected Template
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
