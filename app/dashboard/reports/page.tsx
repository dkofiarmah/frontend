import React from 'react'
import { FileText, Download, Share2, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Reports() {
  return (
    <>
      {/* Main Content */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-cyan-800">Reports</h2>
          <p className="text-slate-600">Generate and manage intelligence reports</p>
        </div>
        <Input type="search" placeholder="Global search..." className="w-64" />
      </header>

      {/* Report Filters */}
      <div className="flex space-x-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Report Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="daily">Daily Briefing</SelectItem>
            <SelectItem value="weekly">Weekly Summary</SelectItem>
            <SelectItem value="monthly">Monthly Analysis</SelectItem>
            <SelectItem value="custom">Custom Report</SelectItem>
          </SelectContent>
        </Select>
        <Input type="date" className="w-[180px]" />
        <Input type="text" placeholder="Search reports..." className="w-64" />
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Generated Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date Generated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Daily Intelligence Briefing</TableCell>
                <TableCell>Daily</TableCell>
                <TableCell>2023-06-15</TableCell>
                <TableCell><Badge variant="outline" className="bg-green-100 text-green-800">Completed</Badge></TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm"><FileText className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Share2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weekly Market Trends</TableCell>
                <TableCell>Weekly</TableCell>
                <TableCell>2023-06-11</TableCell>
                <TableCell><Badge variant="outline" className="bg-green-100 text-green-800">Completed</Badge></TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm"><FileText className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Share2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Competitor Analysis Q2 2023</TableCell>
                <TableCell>Custom</TableCell>
                <TableCell>2023-06-01</TableCell>
                <TableCell><Badge variant="outline" className="bg-yellow-100 text-yellow-800">In Progress</Badge></TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm"><FileText className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" disabled><Download className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" disabled><Share2 className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}