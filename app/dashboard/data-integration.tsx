import React from 'react'
import { Upload, Database, RefreshCw, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DataIntegration() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar (same as dashboard) */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        {/* ... (sidebar content, same as in dashboard.tsx) ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-cyan-800">Data Integration</h2>
          <p className="text-slate-600">Upload and manage your data sources</p>
        </header>

        {/* File Upload Section */}
        <Card className="mb-8">
          
          <CardHeader>
            <CardTitle>Upload Data</CardTitle>
            <CardDescription>Supported formats: CSV, PDF, JSON</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">CSV, PDF, JSON (MAX. 100MB)</p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Upload Files
            </Button>
          </CardFooter>
        </Card>

        {/* Data Sources Section */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Database className="h-6 w-6 text-blue-500" />
                  <div>
                    <p className="font-medium">Company CRM</p>
                    <p className="text-sm text-slate-500">Last synced: 2 hours ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-500">Active</Badge>
              </div>
              <Progress value={33} className="w-full" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Database className="h-6 w-6 text-purple-500" />
                  <div>
                    <p className="font-medium">Social Media API</p>
                    <p className="text-sm text-slate-500">Last synced: 1 day ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-yellow-500">Syncing</Badge>
              </div>
              <Progress value={66} className="w-full" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Database className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="font-medium">Financial Database</p>
                    <p className="text-sm text-slate-500">Last synced: 5 days ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-red-500">Error</Badge>
              </div>
              <Progress value={100} className="w-full" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" /> Sync All
            </Button>
            <Button variant="outline">
              <AlertTriangle className="mr-2 h-4 w-4" /> View Errors
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}