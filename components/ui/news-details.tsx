"use client"

import React from 'react';
import { ArrowLeft, ExternalLink, Clock, Calendar, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewsDetail() {
  const newsArticle = {
    title: "AI Breakthrough: New Model Achieves Human-Level Performance in Complex Problem Solving",
    source: "TechCrunch",
    date: "2023-06-15T10:30:00Z",
    content: "A team of researchers has unveiled a new AI model that demonstrates unprecedented problem-solving capabilities across various domains, including mathematics, physics, and strategic planning. This development marks a significant milestone in the pursuit of artificial general intelligence (AGI).",
    tags: ["Artificial Intelligence", "Machine Learning", "AGI"],
    url: "https://techcrunch.com/2023/06/15/ai-breakthrough-human-level-performance",
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Button variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to News Feed
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{newsArticle.title}</CardTitle>
          <CardDescription className="flex items-center space-x-4">
            <span className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              {newsArticle.source}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(newsArticle.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {new Date(newsArticle.date).toLocaleTimeString()}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">{newsArticle.content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {newsArticle.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <Button variant="outline" className="mt-2">
            Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="summary" className="mt-8">
        <TabsList>
          <TabsTrigger value="summary">AI Summary</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="history">Article History</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI-Generated Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                This breakthrough in AI technology represents a significant step towards artificial general intelligence (AGI). 
                The new model's ability to solve complex problems across various domains could revolutionize fields such as 
                scientific research, drug discovery, and optimization of complex systems. However, it also raises important 
                ethical questions about AI's role in decision-making and its potential impact on employment. This development 
                is likely to accelerate investment in AGI research and may prompt discussions about AI regulation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Additional Tabs Content */}
      </Tabs>
    </div>
  )
}