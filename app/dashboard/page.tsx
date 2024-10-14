"use client"

import React, { useState } from 'react'
import { Bell, Search, Upload, Database, Network, ChevronDown, ExternalLink, Zap, TrendingUp, AlertTriangle, Globe, ArrowUpRight, ArrowDownRight, ArrowRight, Calendar, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Dashboard() {
  const [selectedEntity, setSelectedEntity] = useState(null)

  const trendData = [
    { month: "Jan", AI: 111, Cybersecurity: 35, Blockchain: 99 },
    { month: "Feb", AI: 157, Cybersecurity: 78, Blockchain: 43 },
    { month: "Mar", AI: 129, Cybersecurity: 110, Blockchain: 58 },
    { month: "Apr", AI: 187, Cybersecurity: 80, Blockchain: 61 },
    { month: "May", AI: 200, Cybersecurity: 150, Blockchain: 105 },
    { month: "Jun", AI: 220, Cybersecurity: 170, Blockchain: 130 },
  ]

  const entityData = [
    { name: "OpenAI", value: 156, description: "Leading AI research company" },
    { name: "Tesla", value: 124, description: "Electric vehicle and clean energy company" },
    { name: "Google", value: 118, description: "Multinational technology company" },
    { name: "Apple", value: 107, description: "Consumer electronics and software company" },
    { name: "Microsoft", value: 98, description: "Technology corporation" },
  ]

  const sentimentData = [
    { name: "AI", positive: 65, neutral: 25, negative: 10 },
    { name: "Climate", positive: 40, neutral: 35, negative: 25 },
    { name: "Economy", positive: 30, neutral: 45, negative: 25 },
    { name: "Politics", positive: 20, neutral: 30, negative: 50 },
    { name: "Healthcare", positive: 55, neutral: 30, negative: 15 },
  ]

  const predictiveData = [
    { month: "Jan", actual: 100, predicted: 90 },
    { month: "Feb", actual: 120, predicted: 130 },
    { month: "Mar", actual: 140, predicted: 150 },
    { month: "Apr", actual: 160, predicted: 170 },
    { month: "May", actual: 180, predicted: 190 },
    { month: "Jun", actual: null, predicted: 210 },
    { month: "Jul", actual: null, predicted: 230 },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Intelligence Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Summary Section */}
      <Card>
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
          <CardDescription>Key insights and metrics for the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Entities Tracked</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,231</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +2.5%
                  </span>{" "}
                  vs last period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Connections</CardTitle>
                <Network className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +180.1%
                  </span>{" "}
                  vs last period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Emerging Trends</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    +3
                  </span>{" "}
                  new trends identified
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 inline-flex items-center">
                    <ArrowDownRight className="mr-1 h-4 w-4" />
                    -2
                  </span>{" "}
                  vs yesterday
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Trends and Insights */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
            <CardDescription>Comparison of key technology trends over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                AI: {
                  label: "AI",
                  color: "hsl(var(--chart-1))",
                },
                Cybersecurity: {
                  label: "Cybersecurity",
                  color: "hsl(var(--chart-2))",
                },
                Blockchain: {
                  label: "Blockchain",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area type="monotone" dataKey="AI" stackId="1" stroke="var(--color-AI)" fill="var(--color-AI)" />
                  <Area type="monotone" dataKey="Cybersecurity" stackId="1" stroke="var(--color-Cybersecurity)" fill="var(--color-Cybersecurity)" />
                  <Area type="monotone" dataKey="Blockchain" stackId="1" stroke="var(--color-Blockchain)" fill="var(--color-Blockchain)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <ArrowUpRight className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">AI continues rapid growth</p>
                  <p className="text-sm text-muted-foreground">85% increase in AI-related patents filed this quarter</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="font-medium">Cybersecurity focus shifts</p>
                  <p className="text-sm text-muted-foreground">Increased emphasis on AI-powered threat detection systems</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowDownRight className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">Blockchain adoption slows</p>
                  <p className="text-sm text-muted-foreground">20% decrease in new blockchain projects in traditional finance</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Entities by Mentions</CardTitle>
            <CardDescription>Click on a bar to see more details about the entity</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Mentions",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={entityData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    fill="var(--color-value)" 
                    onClick={(data) => setSelectedEntity(data)}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis</CardTitle>
            <CardDescription>Breakdown of sentiment across key topics</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                positive: {
                  label: "Positive",
                  color: "hsl(var(--chart-1))",
                },
                neutral: {
                  label: "Neutral",
                  color: "hsl(var(--chart-2))",
                },
                negative: {
                  label: "Negative",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sentimentData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="positive" stackId="a" fill="var(--color-positive)" />
                  <Bar dataKey="neutral" stackId="a" fill="var(--color-neutral)" />
                  <Bar dataKey="negative" stackId="a" fill="var(--color-negative)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Predictive Analysis</CardTitle>
            <CardDescription>Actual vs predicted trend for the next 2 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                actual: {
                  label: "Actual",
                  color: "hsl(var(--chart-1))",
                },
                predicted: {
                  label: "Predicted",
                  color: "hsl(var(--chart-2))",
                },
              }}
              
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={predictiveData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="var(--color-actual)" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="predicted" stroke="var(--color-predicted)" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Insights</CardTitle>
          <CardDescription>Latest analysis and predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">AI and Renewable Energy Synergy</h4>
                <p className="text-sm text-muted-foreground">
                  Growing trend of AI applications in optimizing renewable energy systems, potentially disrupting traditional energy markets.
                </p>
                <div className="flex items-center pt-2">
                  <Badge variant="secondary" className="mr-2">AI</Badge>
                  <Badge variant="secondary" className="mr-2">Renewable Energy</Badge>
                  <Badge variant="secondary">Market Disruption</Badge>
                </div>
                <div className="flex items-center space-x-2 pt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>June 15, 2023</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>10:30 AM</span>
                </div>
                <Button variant="link" className="p-0 h-auto mt-2">
                  Read full report
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Geopolitical Impact on Supply Chains</h4>
                <p className="text-sm text-muted-foreground">
                  Recent diplomatic disputes showing early signs of disrupting global supply chains, particularly in semiconductor and rare earth elements industries.
                </p>
                <div className="flex items-center pt-2">
                  <Badge variant="secondary" className="mr-2">Geopolitics</Badge>
                  <Badge variant="secondary" className="mr-2">Supply Chain</Badge>
                  <Badge variant="secondary">International Trade</Badge>
                </div>
                <div className="flex items-center space-x-2 pt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>June 14, 2023</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>2:45 PM</span>
                </div>
                <Button variant="link" className="p-0 h-auto mt-2">
                  Read full report
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      {/* Entity Details Dialog */}
      <Dialog open={!!selectedEntity} onOpenChange={() => setSelectedEntity(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedEntity?.name}</DialogTitle>
            <DialogDescription>{selectedEntity?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-2 font-medium">Mentions:</span>
              <span className="col-span-2">{selectedEntity?.value}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-2 font-medium">Sentiment:</span>
              <span className="col-span-2">Positive</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-2 font-medium">Recent News:</span>
              <span className="col-span-2">
                <Button variant="link" className="p-0 h-auto">
                  View latest articles
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}