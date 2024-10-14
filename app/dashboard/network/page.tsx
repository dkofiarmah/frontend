"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as d3 from "d3";
import Autocomplete from "@/components/ui/Autocomplete";

interface Entity {
  id: string;
  type: string;
  description: string;
  x?: number;
  y?: number;
}

interface Connection {
  source: string;
  target: string;
  strength: string;
}

const EntityNetwork: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState("OpenAI");
  const [graphData, setGraphData] = useState<{ nodes: Entity[]; links: Connection[] } | null>(null);

  const entities: Entity[] = [
    { id: "OpenAI", type: "Organization", description: "Artificial Intelligence Research Laboratory" },
    { id: "Elon Musk", type: "Person", description: "Entrepreneur and business magnate" },
    { id: "Microsoft", type: "Organization", description: "Multinational technology corporation" },
    { id: "GPT-3", type: "AI Model", description: "Large language model by OpenAI" },
    { id: "DeepMind", type: "Organization", description: "AI research laboratory" },
  ];

  const connections: Connection[] = [
    { source: "OpenAI", target: "Elon Musk", strength: "strong" },
    { source: "OpenAI", target: "Microsoft", strength: "strong" },
    { source: "OpenAI", target: "GPT-3", strength: "strong" },
    { source: "OpenAI", target: "DeepMind", strength: "weak" },
    { id: "Elon Musk", target: "Microsoft", strength: "medium" },
    { source: "Microsoft", target: "GPT-3", strength: "medium" },
  ];

  useEffect(() => {
    const width = 800;
    const height = 600;

    const simulation = d3.forceSimulation<Entity>(entities)
      .force("link", d3.forceLink<Entity, Connection>(connections).id(d => d.id))
      .force("charge", d3.forceManyBody<Entity>())
      .force("center", d3.forceCenter<Entity>(width / 2, height / 2));

    simulation.on("tick", () => {
      setGraphData({
        nodes: entities.map(entity => ({
          ...entity,
          x: entity.x || Math.random() * width,
          y: entity.y || Math.random() * height,
        })),
        links: connections,
      });
    });

    return () => {
      simulation.stop();
    };
  }, []);

  const selectedEntityData = entities.find(e => e.id === selectedEntity);
  const entityConnections = connections.filter(
    c => c.source === selectedEntity || c.target === selectedEntity
  );

  const handleEntityChange = (value: string) => {
    setSelectedEntity(value);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-cyan-800">Entity Network</h1>
          <p className="text-slate-600">Visualize and explore entity relationships</p>
        </div>
        <Input type="search" placeholder="Global search..." className="w-64" />
      </header>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-3/4">
          {/* Network Controls */}
          <div className="flex flex-wrap justify-between mb-4 gap-2">
            <Autocomplete
              value={selectedEntity}
              onChange={handleEntityChange}
              options={entities.map(entity => entity.id)}
              className="w-[180px]"
            />
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
              More Filters
            </Button>
          </div>

          {/* Network Visualization */}
          <div className="bg-white border rounded-lg shadow-inner overflow-hidden h-[600px]">
            <svg width="100%" height="100%">
              {graphData && (
                <>
                  {graphData.links.map((link, i) => {
                    const sourceNode = graphData.nodes.find(n => n.id === link.source);
                    const targetNode = graphData.nodes.find(n => n.id === link.target);
                    if (!sourceNode || !targetNode) return null;
                    return (
                      <line
                        key={i}
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={link.strength === "strong" ? "#000" : link.strength === "medium" ? "#666" : "#ccc"}
                        strokeWidth={link.strength === "strong" ? 2 : 1}
                      />
                    );
                  })}
                  {graphData.nodes.map((node, i) => (
                    <g key={i} transform={`translate(${node.x},${node.y})`}>
                      <circle r={node.id === selectedEntity ? 8 : 5} fill={node.id === selectedEntity ? "#0ea5e9" : "#9ca3af"} />
                      <text dy=".35em" x={12} fontSize={12}>{node.id}</text>
                    </g>
                  ))}
                </>
              )}
            </svg>
          </div>
        </div>

        <div className="lg:w-1/4">
          {/* Entity Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Selected Entity: {selectedEntityData?.id}</CardTitle>
              <CardDescription>{selectedEntityData?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{selectedEntityData?.type}</Badge>
              </div>
              <h4 className="font-semibold mb-2">Key Connections:</h4>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                {entityConnections.map((connection, index) => (
                  <li key={index}>
                    {connection.source === selectedEntity ? connection.target : connection.source}
                    <span className="ml-2 text-xs">
                      ({connection.strength})
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="text-sm text-slate-500">
              <Button variant="link" className="p-0">
                View Full Profile
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EntityNetwork;
