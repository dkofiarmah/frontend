"use client"

import React from 'react'
import { Briefcase, Bell, Search, Upload, Database, Network, ChevronDown, Zap, TrendingUp, AlertTriangle, ExternalLink, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-cyan-800">IntelliSurve</h1>
        <nav className="space-y-4 flex-grow justify-start">
          {[
            { path: '/dashboard', icon: <Zap className="mr-2 h-4 w-4" />, label: 'Dashboard' },
            { path: '/dashboard/news', icon: <Globe className="mr-2 h-4 w-4" />, label: 'News Feed' },
            { path: '/dashboard/network', icon: <Network className="mr-2 h-4 w-4" />, label: 'EntityHub' },
            { path: '/dashboard/search', icon: <Search className="mr-2 h-4 w-4" />, label: 'Advanced Search' },
            { path: '/dashboard/reports/alerts', icon: <Bell className="mr-2 h-4 w-4" />, label: 'Alerts' },
            { path: '/dashboard/reports', icon: <Briefcase className="mr-2 h-4 w-4" />, label: 'Reports' },
            { path: '/dashboard/config/integrate', icon: <Upload className="mr-2 h-4 w-4" />, label: 'Data Integration' },
            { path: '/dashboard/config', icon: <Database className="mr-2 h-4 w-4" />, label: 'Data Sources' },
          ].map((item) => (
            <a key={item.path} href={item.path} className="w-full flex items-center justify-start">
              <Button variant="ghost" className={`w-full justify-start ${pathname === item.path ? 'bg-slate-300' : ''}`}> {/* Highlight active link */}
                {item.icon} {item.label}
              </Button>
            </a>
          ))}
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start flex items-left" onClick={() => {
            const hiddenElement = document.querySelector('.hidden');
            if (hiddenElement) {
              hiddenElement.classList.toggle('hidden');
            }
          }}>
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
          <div className="mt-2 hidden">
            <a href="/dashboard/profile" className="w-full justify-start">
              <Button variant="ghost">Profile</Button>
            </a>
            <a href="/dashboard/settings" className="w-full justify-start mt-2">
              <Button variant="ghost">Settings</Button>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout;