"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const Dashboard = () => {
  return (
    <>
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
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,231</div>
            <p className="text-xs text-muted-foreground">+2.5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emerging Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-2 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different data views */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Trending Topics</TabsTrigger>
          <TabsTrigger value="entities">Top Entities</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="trends" className="space-y-4">
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
                margin={{
                  left: 12,
                  right: 12,
                }}
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
                  fill="var(--color-ai)"
                  fillOpacity={0.4}
                  stroke="var(--color-ai)"
                  stackId="a"
                />
                <Area
                  dataKey="Cybersecurity"
                  type="natural"
                  fill="var(--color-cybersecurity)"
                  fillOpacity={0.4}
                  stroke="var(--color-cybersecurity)"
                  stackId="a"
                />
                <Area
                  dataKey="Blockchain"
                  type="natural"
                  fill="var(--color-blockchain)"
                  fillOpacity={0.4}
                  stroke="var(--color-blockchain)"
                  stackId="a"
                />
              </AreaChart>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="entities" className="space-y-4">
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
                <Bar dataKey="value" fill="var(--color-bar)" radius={4} />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sentiment" className="space-y-4">
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
                <Bar dataKey="positive" fill="var(--color-positive)" radius={4} />
                <Bar dataKey="neutral" fill="var(--color-neutral)" radius={4} />
                <Bar dataKey="negative" fill="var(--color-negative)" radius={4} />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Insights */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-cyan-800 mb-4">Recent AI-Generated Insights</h3>
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
    </>
  )
}

export default Dashboard;