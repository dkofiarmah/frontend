import React from 'react'
import { Bell, Search, Upload, Database, Network, ChevronDown, ExternalLink, Zap, TrendingUp, AlertTriangle, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, Bar, BarChart, Line, LineChart } from "@/components/ui/charts"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-cyan-800">IntelliSurve</h1>
        <nav className="space-y-4 flex-grow">
          <Button variant="ghost" className="w-full justify-start">
            <Zap className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Globe className="mr-2 h-4 w-4" /> News Analysis
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Network className="mr-2 h-4 w-4" /> Entity Network
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="mr-2 h-4 w-4" /> Advanced Search
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Upload className="mr-2 h-4 w-4" /> Data Integration
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" /> Alerts
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Database className="mr-2 h-4 w-4" /> Data Sources
          </Button>
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            John Doe
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </div>
      </aside>

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
                    { name: "Jan", "AI": 111, "Cybersecurity": 35, "Blockchain": 99 },
                    { name: "Feb", "AI": 157, "Cybersecurity": 78, "Blockchain": 43 },
                    { name: "Mar", "AI": 129, "Cybersecurity": 110, "Blockchain": 58 },
                    { name: "Apr", "AI": 187, "Cybersecurity": 80, "Blockchain": 61 },
                    { name: "May", "AI": 200, "Cybersecurity": 150, "Blockchain": 105 },
                  ]}
                  index="name"
                  categories={["AI", "Cybersecurity", "Blockchain"]}
                  colors={["cyan", "indigo", "fuchsia"]}
                  valueFormatter={(number: number) => `${number} mentions`}
                  yAxisWidth={60}
                />
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
                  index="name"
                  categories={["value"]}
                  colors={["cyan"]}
                  valueFormatter={(number: number) => `${number} mentions`}
                  yAxisWidth={48}
                />
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
                  index="name"
                  categories={["positive", "neutral", "negative"]}
                  colors={["emerald", "yellow", "rose"]}
                  valueFormatter={(number: number) => `${number}%`}
                  layout="vertical"
                  yAxisWidth={80}
                />
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
      </main>
    </div>
  )
}