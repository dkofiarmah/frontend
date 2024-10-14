import React from 'react'
import { Database, Plus, RefreshCw, Settings, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DataSources() {
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
            <h2 className="text-3xl font-bold text-cyan-800">Data Sources</h2>
            <p className="text-slate-600">Manage and monitor your connected data sources</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Source
          </Button>
        </header>

        {/* Data Source Filters */}
        <div className="flex space-x-4 mb-6">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Source Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="api">API</SelectItem>
              <SelectItem value="database">Database</SelectItem>
              <SelectItem value="file">File Upload</SelectItem>
              <SelectItem value="scraper">Web Scraper</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Search sources..." className="w-64" />
        </div>

        {/* Data Sources Table */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Synced</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Company CRM</TableCell>
                  <TableCell>API</TableCell>
                  <TableCell><Badge variant="outline" className="bg-green-100 text-green-800">Active</Badge></TableCell>
                  <TableCell>2 hours ago</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><RefreshCw className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Settings className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Financial Database</TableCell>
                  <TableCell>Database</TableCell>
                  <TableCell><Badge variant="outline" className="bg-yellow-100 text-yellow-800">Syncing</Badge></TableCell>
                  <TableCell>1 day ago</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><RefreshCw className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Settings className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">News API</TableCell>
                  <TableCell>API</TableCell>
                  <TableCell><Badge variant="outline" className="bg-red-100 text-red-800">Error</Badge></TableCell>
                  <TableCell>3 days ago</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm"><RefreshCw className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Settings className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}