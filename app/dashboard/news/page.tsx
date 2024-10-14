"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 13+
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ExternalLink, Filter } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const NewsAnalysis = () => {
  const router = useRouter(); // Initialize router for navigation

  const handleViewDetail = () => {
    router.push('/news-detail'); // Navigate to the news detail page
  };

  return (
    <>
      {/* Main Content */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-cyan-800">News Analysis</h2>
          <p className="text-slate-600">Dive deep into the latest intelligence</p>
        </div>
        <Input type="search" placeholder="Global search..." className="w-64" />
      </header>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="major">Major Publications</SelectItem>
            <SelectItem value="tech">Tech Blogs</SelectItem>
            <SelectItem value="finance">Financial News</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="politics">Politics</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
          </SelectContent>
        </Select>
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
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> More Filters
        </Button>
      </div>

      {/* News Feed with AI Analysis */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">AI Breakthrough: New Model Achieves Human-Level Performance in Complex Problem Solving</CardTitle>
            <CardDescription>Source: TechCrunch | 2 hours ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">
              A team of researchers has unveiled a new AI model that demonstrates unprecedented problem-solving 
              capabilities across various domains, including mathematics, physics, and strategic planning. This 
              development marks a significant milestone in the pursuit of artificial general intelligence (AGI).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Artificial Intelligence</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">AGI</Badge>
            </div>
            <div className="bg-slate-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2">AI-Generated Analysis:</h4>
              <p className="text-sm text-slate-700">
                This breakthrough could have far-reaching implications across industries, potentially accelerating 
                scientific research, drug discovery, and complex systems optimization. However, it also raises 
                ethical concerns about AI's role in decision-making processes and potential job displacement. 
                Investors should watch for increased funding in AGI research and potential regulatory discussions.
              </p>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-slate-500 flex justify-between">
            <Button variant="link" className="p-0" onClick={handleViewDetail}>
              Full Article <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
            <div className="flex items-center space-x-2">
              <span>Relevance:</span>
              <Slider
                defaultValue={[85]}
                max={100}
                step={1}
                className="w-[100px]"
              />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Global Economic Forum Warns of Increasing Cyber Threats to Financial Systems</CardTitle>
            <CardDescription>Source: Financial Times | 5 hours ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">
              The Global Economic Forum has issued a stark warning about the rising sophistication and frequency 
              of cyberattacks targeting financial institutions worldwide. The report highlights the need for 
              enhanced cybersecurity measures and international cooperation to safeguard global financial stability.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Cybersecurity</Badge>
              <Badge variant="secondary">Global Economy</Badge>
              <Badge variant="secondary">Financial Institutions</Badge>
            </div>
            <div className="bg-slate-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2">AI-Generated Analysis:</h4>
              <p className="text-sm text-slate-700">
                This warning signals a potential surge in cybersecurity investments across the financial sector. 
                Expect increased demand for advanced threat detection systems, AI-driven security solutions, and 
                cybersecurity talent. Companies specializing in financial cybersecurity may see significant growth 
                opportunities. Additionally, this could lead to stricter regulations and compliance requirements 
                for financial institutions regarding their cybersecurity practices.
              </p>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-slate-500 flex justify-between">
            <Button variant="link" className="p-0" onClick={handleViewDetail}>
              Full Article <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
            <div className="flex items-center space-x-2">
              <span>Relevance:</span>
              <Slider
                defaultValue={[92]}
                max={100}
                step={1}
                className="w-[100px]"
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default NewsAnalysis;
