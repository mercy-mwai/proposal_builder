"use client"

import { useState } from "react"
import BusinessConsultingTemplate from "@/components/templates/business/businessConsultingTemplate"
import  DigitalMarketingTemplate  from "@/components/templates/business/digitalMarketingTemplate"
import  {GeneralConsultingTemplate} from "@/components/templates/business/generalConsultingTemplate"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { FileText, TrendingUp, Briefcase,ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState("business-consulting")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Proposal Templates</h1>
          <p className="text-xl text-gray-600">Choose from our professional proposal templates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/templates/business" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Proposals</h3>
              <p className="text-gray-600">Consulting, strategy, and business development templates</p>
            </div>
          </Link>

          <div className="bg-white rounded-lg shadow-md p-6 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Proposals</h3>
            <p className="text-gray-600">Digital marketing and advertising campaign templates</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-8 w-8 text-purple-600" />
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">General Templates</h3>
            <p className="text-gray-600">Versatile templates for various industries and services</p>
          </div>
        </div>

        <Tabs value={activeTemplate} onValueChange={setActiveTemplate} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="business-consulting" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Business Consulting
            </TabsTrigger>
            <TabsTrigger value="digital-marketing" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Digital Marketing
            </TabsTrigger>
            <TabsTrigger value="general-consulting" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              General Consulting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="business-consulting">
            <BusinessConsultingTemplate />
          </TabsContent>

          <TabsContent value="digital-marketing">
            <DigitalMarketingTemplate />
          </TabsContent>

          <TabsContent value="general-consulting">
            <GeneralConsultingTemplate />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
