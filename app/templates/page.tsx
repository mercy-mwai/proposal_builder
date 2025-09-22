"use client"

import { useState } from "react"
import BusinessConsultingTemplate from "@/components/templates/business/businessConsultingTemplate"
import  DigitalMarketingTemplate  from "@/components/templates/business/digitalMarketingTemplate"
import  {GeneralConsultingTemplate} from "@/components/templates/business/generalConsultingTemplate"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, TrendingUp, Briefcase } from "lucide-react"

export default function TemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState("business-consulting")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Proposal Templates</h1>
          <p className="text-xl text-gray-600">Choose from our professional proposal templates</p>
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
