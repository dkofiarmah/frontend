"use client"

import React from 'react'
import { Bell, Search, Upload, Database, Network, ChevronDown, ExternalLink, Zap, TrendingUp, AlertTriangle, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent} from "@/components/ui/chart"

export default function Dashboard() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-cyan-800">Intelligence Dashboard</h2>
            <p className="text-slate-600">Your command center for critical insights</p>
          </div>
          <Input type="search" placeholder="Global search..." className="w-64" />
        </header>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Entities Tracked</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,231</div>
              <p className="text-xs text-muted-foreground">+2.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Connections</CardTitle>
              <Network className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emerging Trends</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">+3 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">-2 from yesterday</p>
            </CardContent>
          </Card>
        </div>

       {/* 3 Columns for different data views */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* First Column: Trending Topics Over Time */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics Over Time</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <AreaChart
                  className="h-[200px]"
                  data={[
                    { month: "Jan", AI: 111, Cybersecurity: 35, Blockchain: 99 },
                    { month: "Feb", AI: 157, Cybersecurity: 78, Blockchain: 43 },
                    { month: "Mar", AI: 129, Cybersecurity: 110, Blockchain: 58 },
                    { month: "Apr", AI: 187, Cybersecurity: 80, Blockchain: 61 },
                    { month: "May", AI: 200, Cybersecurity: 150, Blockchain: 105 },
                  ]}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="AI"
                    type="natural"
                    fill="#8884d8" // Color for AI
                    fillOpacity={0.4}
                    stroke="#8884d8"
                    stackId="a"
                  />
                  <Area
                    dataKey="Cybersecurity"
                    type="natural"
                    fill="#82ca9d" // Color for Cybersecurity
                    fillOpacity={0.4}
                    stroke="#82ca9d"
                    stackId="a"
                  />
                  <Area
                    dataKey="Blockchain"
                    type="natural"
                    fill="#ffc658" // Color for Blockchain
                    fillOpacity={0.4}
                    stroke="#ffc658"
                    stackId="a"
                  />
                </AreaChart>
              </CardContent>
            </Card>
          </div>

          {/* Second Column: Top Entities by Mentions */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Entities by Mentions</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChart
                  className="h-[200px]"
                  data={[
                    { name: "OpenAI", value: 156 },
                    { name: "Tesla", value: 124 },
                    { name: "Google", value: 118 },
                    { name: "Apple", value: 107 },
                    { name: "Microsoft", value: 98 },
                  ]}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="value" fill="#8884d8" radius={4} /> {/* Color for bar */}
                </BarChart>
              </CardContent>
            </Card>
          </div>

          {/* Third Column: Sentiment Analysis of Key Topics */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis of Key Topics</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChart
                  className="h-[200px]"
                  data={[
                    { name: "AI", positive: 65, neutral: 25, negative: 10 },
                    { name: "Climate", positive: 40, neutral: 35, negative: 25 },
                    { name: "Economy", positive: 30, neutral: 45, negative: 25 },
                    { name: "Politics", positive: 20, neutral: 30, negative: 50 },
                    { name: "Healthcare", positive: 55, neutral: 30, negative: 15 },
                  ]}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="positive" fill="#82ca9d" radius={4} /> {/* Color for positive */}
                  <Bar dataKey="neutral" fill="#8884d8" radius={4} /> {/* Color for neutral */}
                  <Bar dataKey="negative" fill="#ff6565" radius={4} /> {/* Color for negative */}
                </BarChart>
              </CardContent>
            </Card>
          </div>
        </div>



        {/* Recent Insights */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-800 mb-4">Recent Insights</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Emerging Synergy Between AI and Renewable Energy Sectors</CardTitle>
                <CardDescription>Generated 10 minutes ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Analysis of recent patent filings and research publications indicates a growing trend of AI applications 
                  in optimizing renewable energy systems. This convergence could lead to significant advancements in energy 
                  efficiency and grid management, potentially disrupting traditional energy markets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Renewable Energy</Badge>
                  <Badge variant="secondary">Market Disruption</Badge>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-slate-500">
                <Button variant="link" className="p-0">
                  Explore Full Analysis <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Geopolitical Tensions Impacting Global Supply Chains</CardTitle>
                <CardDescription>Generated 1 hour ago</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Recent diplomatic disputes between major economic powers are showing early signs of disrupting global 
                  supply chains, particularly in the semiconductor and rare earth elements industries. This could have 
                  cascading effects on various technology sectors and international trade relationships.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Geopolitics</Badge>
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">International Trade</Badge>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-slate-500">
                <Button variant="link" className="p-0">
                  Explore Full Analysis <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}