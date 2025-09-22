"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp, Building, DollarSign, Users, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

const businessTemplates = [
  {
    id: "business-consulting",
    title: "Business Consulting Proposal",
    description:
      "Comprehensive template for business consulting services including strategy, operations, and growth planning.",
    icon: Briefcase,
    category: "Consulting",
    features: ["Strategic Planning", "Process Optimization", "Growth Strategy", "Performance Metrics"],
    color: "bg-blue-500",
    href: "/templates/business-proposal/business-consulting",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Proposal",
    description:
      "Complete digital marketing proposal template covering SEO, social media, content marketing, and analytics.",
    icon: TrendingUp,
    category: "Marketing",
    features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics & Reporting"],
    color: "bg-green-500",
    href: "/templates/business-proposal/digital-marketing",
  },
  {
    id: "business-strategy",
    title: "Business Strategy Proposal",
    description:
      "Strategic planning template for market analysis, competitive positioning, and long-term growth initiatives.",
    icon: Building,
    category: "Strategy",
    features: ["Market Analysis", "Competitive Research", "Strategic Roadmap", "Implementation Plan"],
    color: "bg-purple-500",
    href: "/templates/business-proposal/business-strategy",
  },
  {
    id: "financial-consulting",
    title: "Financial Consulting Proposal",
    description:
      "Financial advisory template covering budgeting, forecasting, investment planning, and financial optimization.",
    icon: DollarSign,
    category: "Finance",
    features: ["Financial Analysis", "Budget Planning", "Investment Strategy", "Risk Assessment"],
    color: "bg-orange-500",
    href: "/templates/business-proposal/financial-consulting",
  },
  {
    id: "hr-consulting",
    title: "HR Consulting Proposal",
    description:
      "Human resources consulting template for talent management, organizational development, and HR strategy.",
    icon: Users,
    category: "Human Resources",
    features: ["Talent Management", "Organizational Design", "Performance Systems", "Culture Development"],
    color: "bg-indigo-500",
    href: "/templates/business-proposal/hr-consulting",
  },
  {
    id: "general-business",
    title: "General Business Proposal",
    description:
      "Versatile business proposal template suitable for various business services and consulting engagements.",
    icon: FileText,
    category: "General",
    features: ["Flexible Structure", "Customizable Sections", "Professional Design", "Easy to Modify"],
    color: "bg-gray-500",
    href: "/templates/business-proposal/general-consulting",
  },
]

export default function BusinessProposalsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(businessTemplates.map((template) => template.category)))]

  const filteredTemplates =
    selectedCategory === "All"
      ? businessTemplates
      : businessTemplates.filter((template) => template.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Proposal Templates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of professional business proposal templates designed to help you win more clients
            and close deals faster.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const IconComponent = template.icon
            return (
              <Card key={template.id} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`${template.color} p-2 rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription className="text-gray-600">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {template.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={template.href}>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Use This Template
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
            <p className="text-lg mb-6">
              Can't find exactly what you're looking for? We can create a custom proposal template tailored to your
              specific business needs.
            </p>
            <Button size="lg" variant="secondary">
              Request Custom Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
