"use client"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, Mail, Phone, MapPin } from "lucide-react"

interface FormData {
  template: string
  businessInfo: {
    companyName: string
    contactPerson: string
    email: string
    phone: string
    address: string
    logo?: File
  }
  projectInfo: {
    title: string
    executiveSummary: string
  }
  objectives: {
    items: string[]
  }
  budget: {
    items: Array<{
      name: string
      description: string
      amount: number
    }>
  }
  timeline: {
    startDate: string
    endDate: string
    milestones: Array<{
      title: string
      date: string
    }>
  }
}

interface ProposalPreviewProps {
  formData: FormData
}

export function ProposalPreview({ formData }: ProposalPreviewProps) {
  const totalBudget = formData.budget.items.reduce((sum, item) => sum + (item.amount || 0), 0)

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not specified"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTemplateName = (template: string) => {
    return template.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  return (
    <div className="bg-white border rounded-lg shadow-sm h-full overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center border-b pb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Building2 className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{formData.projectInfo.title || "Project Title"}</h1>
          <p className="text-gray-600 mt-1">{formData.businessInfo.companyName || "Company Name"}</p>
          <Badge variant="outline" className="mt-2">
            {getTemplateName(formData.template)}
          </Badge>
        </div>

        {/* Business Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Business Information</h2>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gray-500" />
              <span>{formData.businessInfo.companyName || "Company Name"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span>{formData.businessInfo.email || "email@company.com"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{formData.businessInfo.phone || "Phone Number"}</span>
            </div>
            {formData.businessInfo.address && (
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                <span>{formData.businessInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Executive Summary */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Executive Summary</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {formData.projectInfo.executiveSummary ||
              "Your executive summary will appear here. Provide a brief overview of your project, its goals, and expected outcomes."}
          </p>
        </div>

        <Separator />

        {/* Objectives */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Project Objectives</h2>
          <ul className="space-y-2">
            {formData.objectives.items.filter((item) => item.trim()).length > 0 ? (
              formData.objectives.items
                .filter((item) => item.trim())
                .map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))
            ) : (
              <li className="text-sm text-gray-500 italic">Add objectives to see them here</li>
            )}
          </ul>
        </div>

        <Separator />

        {/* Budget */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Budget Breakdown</h2>
          <div className="space-y-3">
            {formData.budget.items.filter((item) => item.name.trim()).length > 0 ? (
              formData.budget.items
                .filter((item) => item.name.trim())
                .map((item, index) => (
                  <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
                      {item.description && <p className="text-xs text-gray-600 mt-1">{item.description}</p>}
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-sm">${item.amount.toLocaleString()}</span>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-sm text-gray-500 italic">Add budget items to see breakdown</p>
            )}

            {totalBudget > 0 && (
              <div className="border-t pt-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total Project Cost:</span>
                  <span className="text-xl font-bold text-green-600">${totalBudget.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Timeline */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Project Timeline</h2>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Start Date:</span>
                <p className="text-gray-600">{formatDate(formData.timeline.startDate)}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">End Date:</span>
                <p className="text-gray-600">{formatDate(formData.timeline.endDate)}</p>
              </div>
            </div>

            {formData.timeline.milestones.filter((m) => m.title.trim()).length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">Key Milestones:</h4>
                <div className="space-y-2">
                  {formData.timeline.milestones
                    .filter((milestone) => milestone.title.trim())
                    .map((milestone, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded">
                        <span className="text-sm text-gray-700">{milestone.title}</span>
                        <span className="text-xs text-blue-600 font-medium">{formatDate(milestone.date)}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-6 text-center">
          <p className="text-xs text-gray-500">Generated by Professional Proposal Generator</p>
          <p className="text-xs text-gray-400 mt-1">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
