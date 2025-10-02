"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  Copy,
  Trash2,
  FileText,
  Calendar,
  DollarSign,
  Building2,
  MoreHorizontal,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useRouter } from "next/navigation"

interface Proposal {
  id: string
  title: string
  template: string
  status: "draft" | "completed" | "paid"
  createdAt: string
  updatedAt: string
  totalBudget: number
  companyName: string
  downloadCount: number
}

// Mock data - in real app this would come from API
const mockProposals: Proposal[] = [
  {
    id: "1",
    title: "Website Development Project",
    template: "business-proposal",
    status: "paid",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
    totalBudget: 15000,
    companyName: "Tech Solutions Ltd",
    downloadCount: 3,
  },
  {
    id: "2",
    title: "Mobile App Development",
    template: "freelancer-quote",
    status: "completed",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-12",
    totalBudget: 25000,
    companyName: "StartupCo",
    downloadCount: 1,
  },
  {
    id: "3",
    title: "Digital Marketing Campaign",
    template: "business-proposal",
    status: "draft",
    createdAt: "2024-01-08",
    updatedAt: "2024-01-08",
    totalBudget: 8000,
    companyName: "Marketing Pro",
    downloadCount: 0,
  },
  {
    id: "4",
    title: "Event Management Services",
    template: "event-service",
    status: "paid",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05",
    totalBudget: 12000,
    companyName: "Events Plus",
    downloadCount: 2,
  },
  {
    id: "5",
    title: "NGO Funding Proposal",
    template: "ngo-donor",
    status: "completed",
    createdAt: "2024-01-03",
    updatedAt: "2024-01-04",
    totalBudget: 50000,
    companyName: "Hope Foundation",
    downloadCount: 1,
  },
]

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "draft" | "completed" | "paid">("all")

  const getTemplateName = (template: string) => {
    return template.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  const router= useRouter();

  const handleCreateProposal=()=>{
    router.push("/create")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "paid":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredProposals = proposals.filter((proposal) => {
    const matchesSearch =
      proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposal.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || proposal.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleDelete = (id: string) => {
    setProposals(proposals.filter((p) => p.id !== id))
  }

  const handleDuplicate = (proposal: Proposal) => {
    const newProposal = {
      ...proposal,
      id: Date.now().toString(),
      title: `${proposal.title} (Copy)`,
      status: "draft" as const,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
      downloadCount: 0,
    }
    setProposals([newProposal, ...proposals])
  }

  const stats = {
    total: proposals.length,
    drafts: proposals.filter((p) => p.status === "draft").length,
    completed: proposals.filter((p) => p.status === "completed").length,
    paid: proposals.filter((p) => p.status === "paid").length,
    totalRevenue: proposals.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.totalBudget, 0),
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Proposals</h1>
            <p className="text-gray-600 mt-1">Manage and track your proposal documents</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleCreateProposal}>
            <Plus className="h-4 w-4 mr-2" />
            New Proposal
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Proposals</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Edit className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Drafts</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.drafts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Paid</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.paid}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search proposals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Tabs value={statusFilter} onValueChange={(value) => setStatusFilter(value as any)}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="paid">Paid</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proposals List */}
        <div className="space-y-4">
          {filteredProposals.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No proposals found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery || statusFilter !== "all"
                    ? "Try adjusting your search or filters"
                    : "Get started by creating your first proposal"}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Proposal
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{proposal.title}</h3>
                        <Badge className={getStatusColor(proposal.status)}>
                          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {getTemplateName(proposal.template)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{proposal.companyName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>${proposal.totalBudget.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Updated {new Date(proposal.updatedAt).toLocaleDateString()}</span>
                        </div>
                        {proposal.downloadCount > 0 && (
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            <span>{proposal.downloadCount} downloads</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {proposal.status === "paid" && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}

                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDuplicate(proposal)}>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDelete(proposal.id)} className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
