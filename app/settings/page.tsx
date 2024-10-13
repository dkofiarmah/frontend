'use client'

import React from 'react'
import { Save } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Settings() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar (same as dashboard) */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        {/* ... (sidebar content, same as in dashboard.tsx) ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-cyan-800">Settings</h2>
          <p className="text-slate-600">Configure your IntelliSurve experience</p>
        </header>

        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">Language</label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timezone" className="text-sm font-medium">Time Zone</label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select Time Zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="cet">Central European Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="darkMode" />
                  <label htmlFor="darkMode" className="text-sm font-medium">Enable Dark Mode</label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="emailNotifications" />
                  <label htmlFor="emailNotifications" className="text-sm font-medium">Email Notifications</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="pushNotifications" />
                  <label htmlFor="pushNotifications" className="text-sm font-medium">Push Notifications</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="smsNotifications" />
                  <label htmlFor="smsNotifications" className="text-sm font-medium">SMS Notifications</label>
                </div>
                <div className="space-y-2">
                  <label htmlFor="notificationFrequency" className="text-sm font-medium">Notification Frequency</label>
                  <Select defaultValue="realtime">
                    <SelectTrigger id="notificationFrequency">
                      <SelectValue placeholder="Select Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="twoFactor" />
                  <label htmlFor="twoFactor" className="text-sm font-medium">Enable Two-Factor Authentication</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dataSharing" />
                  <label htmlFor="dataSharing" className="text-sm font-medium">Allow Data Sharing for Improved Services</label>
                </div>
                <div className="space-y-2">
                  <label htmlFor="sessionTimeout" className="text-sm font-medium">Session Timeout (minutes)</label>
                  <Input id="sessionTimeout" type="number" defaultValue={30} min={5} max={120} />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Slack logo" className="h-6 w-6" />
                    <span className="text-sm font-medium">Slack</span>
                  </div>
                  <Switch id="slackIntegration" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Microsoft Teams logo" className="h-6 w-6" />
                    <span className="text-sm font-medium">Microsoft Teams</span>
                  </div>
                  <Switch id="teamsIntegration" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Jira logo" className="h-6 w-6" />
                    <span className="text-sm font-medium">Jira</span>
                  </div>
                  <Switch id="jiraIntegration" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}