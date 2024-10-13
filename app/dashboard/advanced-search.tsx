import React from 'react'
import { Search, Filter, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function AdvancedSearch() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar (same as dashboard) */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        {/* ... (sidebar content, same as in dashboard.tsx) ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-cyan-800">Advanced Search</h2>
          <p className="text-slate-600">Find precise intelligence across all data sources</p>
        </header>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <Input type="text" placeholder="Enter keywords..." className="flex-grow" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Data Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="news">News Articles</SelectItem>
                    <SelectItem value="reports">Reports</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 Hours</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Entity Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Entities</SelectItem>
                    <SelectItem value="person">Person</SelectItem>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" /> More Filters
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="exact-match" />
                <label
                  htmlFor="exact-match"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Exact Match
                </label>
              </div>
              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-800">Search Results</h3>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Breakthrough in Quantum Computing</CardTitle>
              <CardDescription>News Article | 2 days ago</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-2">
                Researchers at Tech University have achieved a significant milestone in quantum computing, 
                demonstrating a new qubit architecture that could revolutionize the field...
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Quantum Computing</Badge>
                <Badge variant="secondary">AI</Badge>
                <Badge variant="secondary">Research</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0">View Full Article</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Global Tech Summit 2023 Announces Keynote Speakers</CardTitle>
              <CardDescription>Event | Upcoming in 2 weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-2">
                The Global Tech Summit 2023 has revealed its lineup of keynote speakers, including 
                industry leaders from major tech companies and pioneering startups...
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Tech Event</Badge>
                <Badge variant="secondary">Industry Leaders</Badge>
                <Badge variant="secondary">Innovation</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0">View Event Details</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}