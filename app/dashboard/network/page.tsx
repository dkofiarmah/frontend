import React from 'react'
import { Bell, Search, Upload, Database, Network, ChevronDown, ExternalLink, Zap, TrendingUp, AlertTriangle, Globe, Filter, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const EntityNetwork = () => {
  return (
    <>
      {/* Main Content */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-cyan-800">Entity Network</h2>
          <p className="text-slate-600">Visualize and explore entity relationships</p>
        </div>
        <Input type="search" placeholder="Global search..." className="w-64" />
      </header>

      {/* Network Controls */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Entity Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="organization">Organization</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="event">Event</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Relationship Strength" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Strengths</SelectItem>
              <SelectItem value="strong">Strong</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="weak">Weak</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> More Filters
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="flex-grow bg-white border rounded-lg shadow-inner overflow-hidden">
        {/* Placeholder for network visualization */}
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          [Entity Network Visualization]
        </div>
      </div>

      {/* Entity Details */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Selected Entity: OpenAI</CardTitle>
          <CardDescription>Artificial Intelligence Research Laboratory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Organization</Badge>
            <Badge variant="secondary">AI</Badge>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Research</Badge>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation 
            OpenAI LP and its parent company, the non-profit OpenAI Inc. They aim to promote and develop 
            friendly AI in a way that benefits humanity as a whole.
          </p>
          <h4 className="font-semibold mb-2">Key Connections:</h4>
          <ul className="text-sm text-slate-600 list-disc list-inside">
            <li>Elon Musk (Co-founder)</li>
            <li>Sam Altman (CEO)</li>
            <li>Microsoft (Major Investor)</li>
            <li>GPT-3 (AI Model)</li>
            <li>DeepMind (Competitor)</li>
          </ul>
        </CardContent>
        <CardFooter className="text-sm text-slate-500">
          <Button variant="link" className="p-0">
            View Full Profile <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default EntityNetwork;