import React from 'react'
import { Bell, Eye, Trash2, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function Alerts() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar (same as dashboard) */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        {/* ... (sidebar content, same as in dashboard.tsx) ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-cyan-800">Alerts</h2>
            <p className="text-slate-600">Stay informed about critical updates</p>
          </div>
          <Button>
            <Bell className="mr-2 h-4 w-4" /> Create New Alert
          </Button>
        </header>

        {/* Alert Filters */}
        <div className="flex space-x-4 mb-6">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Alert Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="entity">Entity Mentions</SelectItem>
              <SelectItem value="topic">Topic Trends</SelectItem>
              <SelectItem value="sentiment">Sentiment Shifts</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Search alerts..." className="w-64" />
        </div>

        {/* Alert List */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Sudden increase in AI-related patents</CardTitle>
              <Badge>High Priority</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-2">
                There's been a 50% increase in AI-related patent filings over the last month, 
                potentially indicating a surge in AI innovation or strategic positioning by tech companies.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <span>Triggered: 2 hours ago</span>
                <span>Source: Patent Databases</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> Edit Alert
                </Button>
              </div>
              <Button size="sm" variant="ghost">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Negative sentiment spike for Tech Giant Inc.</CardTitle>
              <Badge variant="outline">Medium Priority</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-2">
                Social media sentiment for Tech Giant Inc. has turned sharply negative in the last 24 hours, 
                possibly due to rumors of a data breach. This could impact stock prices and public relations.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <span>Triggered: 5 hours ago</span>
                <span>Source: Social Media Analysis</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> Edit Alert
                </Button>
              </div>
              <Button size="sm" variant="ghost">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}