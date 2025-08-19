"use client"

import React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ProposalPreview } from "@/components/proposal-preview"
import { PaymentModal } from "@/components/payment-modal"
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  FileText,
  Target,
  DollarSign,
  Calendar,
  CheckCircle,
  Plus,
  Trash2,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react"

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

const steps = [
  { id: 1, title: "Business Info", icon: Building2, description: "Company details and contact information" },
  { id: 2, title: "Project Info", icon: FileText, description: "Project title and executive summary" },
  { id: 3, title: "Objectives", icon: Target, description: "Goals and deliverables" },
  { id: 4, title: "Budget", icon: DollarSign, description: "Cost breakdown and pricing" },
  { id: 5, title: "Timeline", icon: Calendar, description: "Project schedule and milestones" },
  { id: 6, title: "Review", icon: CheckCircle, description: "Final review and confirmation" },
]

export function FormWizard() {
  const searchParams = useSearchParams()
  const template = searchParams.get("template") || "business-proposal"

  const [currentStep, setCurrentStep] = useState(1)
  const [showPreview, setShowPreview] = useState(true)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    template,
    businessInfo: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
    },
    projectInfo: {
      title: "",
      executiveSummary: "",
    },
    objectives: {
      items: [""],
    },
    budget: {
      items: [{ name: "", description: "", amount: 0 }],
    },
    timeline: {
      startDate: "",
      endDate: "",
      milestones: [{ title: "", date: "" }],
    },
  })

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (section: keyof FormData, data: any) => {
    if (section === "template") {
      setFormData((prev) => ({
        ...prev,
        [section]: data,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], ...data },
      }))
    }
  }

  const addObjectiveItem = () => {
    setFormData((prev) => ({
      ...prev,
      objectives: {
        items: [...prev.objectives.items, ""],
      },
    }))
  }

  const removeObjectiveItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      objectives: {
        items: prev.objectives.items.filter((_, i) => i !== index),
      },
    }))
  }

  const updateObjectiveItem = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      objectives: {
        items: prev.objectives.items.map((item, i) => (i === index ? value : item)),
      },
    }))
  }

  const addBudgetItem = () => {
    setFormData((prev) => ({
      ...prev,
      budget: {
        items: [...prev.budget.items, { name: "", description: "", amount: 0 }],
      },
    }))
  }

  const removeBudgetItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      budget: {
        items: prev.budget.items.filter((_, i) => i !== index),
      },
    }))
  }

  const updateBudgetItem = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      budget: {
        items: prev.budget.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
      },
    }))
  }

  const addMilestone = () => {
    setFormData((prev) => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        milestones: [...prev.timeline.milestones, { title: "", date: "" }],
      },
    }))
  }

  const removeMilestone = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        milestones: prev.timeline.milestones.filter((_, i) => i !== index),
      },
    }))
  }

  const updateMilestone = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        milestones: prev.timeline.milestones.map((milestone, i) =>
          i === index ? { ...milestone, [field]: value } : milestone,
        ),
      },
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.businessInfo.companyName}
                  onChange={(e) => updateFormData("businessInfo", { companyName: e.target.value })}
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.businessInfo.contactPerson}
                  onChange={(e) => updateFormData("businessInfo", { contactPerson: e.target.value })}
                  placeholder="Enter contact person name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.businessInfo.email}
                  onChange={(e) => updateFormData("businessInfo", { email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.businessInfo.phone}
                  onChange={(e) => updateFormData("businessInfo", { phone: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Textarea
                id="address"
                value={formData.businessInfo.address}
                onChange={(e) => updateFormData("businessInfo", { address: e.target.value })}
                placeholder="Enter your business address"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Company Logo (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Upload Logo
                  </Button>
                  <p className="mt-2 text-sm text-gray-500">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectTitle">Project Title *</Label>
              <Input
                id="projectTitle"
                value={formData.projectInfo.title}
                onChange={(e) => updateFormData("projectInfo", { title: e.target.value })}
                placeholder="Enter your project title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="executiveSummary">Executive Summary *</Label>
              <Textarea
                id="executiveSummary"
                value={formData.projectInfo.executiveSummary}
                onChange={(e) => updateFormData("projectInfo", { executiveSummary: e.target.value })}
                placeholder="Provide a brief overview of your project, its goals, and expected outcomes..."
                rows={8}
              />
              <p className="text-sm text-gray-500">
                Tip: Include the problem you're solving, your approach, and key benefits.
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Project Objectives & Deliverables</h3>
              <Button onClick={addObjectiveItem} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Objective
              </Button>
            </div>

            <div className="space-y-4">
              {formData.objectives.items.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      value={item}
                      onChange={(e) => updateObjectiveItem(index, e.target.value)}
                      placeholder={`Objective ${index + 1}`}
                    />
                  </div>
                  {formData.objectives.items.length > 1 && (
                    <Button
                      onClick={() => removeObjectiveItem(index)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        const totalBudget = formData.budget.items.reduce((sum, item) => sum + (item.amount || 0), 0)

        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Budget Breakdown</h3>
              <Button onClick={addBudgetItem} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>

            <div className="space-y-4">
              {formData.budget.items.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Item Name *</Label>
                      <Input
                        value={item.name}
                        onChange={(e) => updateBudgetItem(index, "name", e.target.value)}
                        placeholder="Service or item name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Input
                        value={item.description}
                        onChange={(e) => updateBudgetItem(index, "description", e.target.value)}
                        placeholder="Brief description"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Amount *</Label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={item.amount}
                          onChange={(e) => updateBudgetItem(index, "amount", Number.parseFloat(e.target.value) || 0)}
                          placeholder="0.00"
                        />
                        {formData.budget.items.length > 1 && (
                          <Button
                            onClick={() => removeBudgetItem(index)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total Budget:</span>
                <span className="text-2xl font-bold text-blue-600">${totalBudget.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startDate">Project Start Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.timeline.startDate}
                  onChange={(e) => updateFormData("timeline", { startDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Project End Date *</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.timeline.endDate}
                  onChange={(e) => updateFormData("timeline", { endDate: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Project Milestones</h3>
                <Button onClick={addMilestone} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Milestone
                </Button>
              </div>

              {formData.timeline.milestones.map((milestone, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Milestone Title</Label>
                    <Input
                      value={milestone.title}
                      onChange={(e) => updateMilestone(index, "title", e.target.value)}
                      placeholder={`Milestone ${index + 1}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Target Date</Label>
                    <div className="flex gap-2">
                      <Input
                        type="date"
                        value={milestone.date}
                        onChange={(e) => updateMilestone(index, "date", e.target.value)}
                      />
                      {formData.timeline.milestones.length > 1 && (
                        <Button
                          onClick={() => removeMilestone(index)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Review Your Proposal</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Company:</strong> {formData.businessInfo.companyName}
                  </p>
                  <p>
                    <strong>Contact:</strong> {formData.businessInfo.contactPerson}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.businessInfo.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.businessInfo.phone}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Title:</strong> {formData.projectInfo.title}
                  </p>
                  <p>
                    <strong>Summary:</strong> {formData.projectInfo.executiveSummary.substring(0, 100)}...
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Budget Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    ${formData.budget.items.reduce((sum, item) => sum + (item.amount || 0), 0).toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">{formData.budget.items.length} budget items</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Start:</strong> {formData.timeline.startDate}
                  </p>
                  <p>
                    <strong>End:</strong> {formData.timeline.endDate}
                  </p>
                  <p>
                    <strong>Milestones:</strong> {formData.timeline.milestones.length}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                Your proposal is ready! Click "Generate PDF" to proceed to payment and download.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const handleGeneratePDF = () => {
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    // Here you would trigger the actual PDF generation and download
    console.log("Payment successful, generating PDF...")

    // Simulate PDF download
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = "#" // This would be the actual PDF URL
      link.download = `${formData.projectInfo.title || "proposal"}.pdf`
      link.click()
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Create Proposal</h1>
          <div className="flex items-center gap-3">
            <Button onClick={() => setShowPreview(!showPreview)} variant="outline" size="sm" className="lg:hidden">
              {showPreview ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Badge variant="outline" className="text-sm">
              {template.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Badge>
          </div>
        </div>

        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-600 mt-2">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
        </p>
      </div>

      {/* Step Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id

            return (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                </div>
                <span className="text-xs mt-2 text-center max-w-20">{step.title}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Form Content */}
        <div className={`${showPreview ? "lg:block" : "col-span-2"}`}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
                {steps[currentStep - 1].title}
              </CardTitle>
              <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
            </CardHeader>
            <CardContent>{renderStepContent()}</CardContent>
          </Card>
        </div>

        {showPreview && (
          <div className="lg:block hidden">
            <div className="sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                <Badge variant="secondary" className="text-xs">
                  Updates in real-time
                </Badge>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-auto">
                <ProposalPreview formData={formData} />
              </div>
            </div>
          </div>
        )}

        {showPreview && (
          <div className="lg:hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-auto">
                  <ProposalPreview formData={formData} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 1} variant="outline">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {currentStep === steps.length ? (
          <Button onClick={handleGeneratePDF} className="bg-green-600 hover:bg-green-700">
            Generate PDF
            <FileText className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentSuccess={handlePaymentSuccess}
        proposalTitle={formData.projectInfo.title || "Untitled Proposal"}
        totalAmount={500}
      />
    </div>
  )
}
