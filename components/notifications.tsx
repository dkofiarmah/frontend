import React from 'react'
import { Bell, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Notifications() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Bell className="h-5 w-5" />
        <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px]">3</Badge>
      </Button>
      
      {isOpen && (
        <Card className="absolute right-0 mt-2 w-80 z-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 mt-0.5">New</Badge>
                <div>
                  <p className="text-sm font-medium">New intelligence report available</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 mt-0.5">Alert</Badge>
                <div>
                  <p className="text-sm font-medium">Unusual activity detected in data source</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="bg-green-100 text-green-800 mt-0.5">Update</Badge>
                <div>
                  <p className="text-sm font-medium">System update completed successfully</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full">View All Notifications</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}