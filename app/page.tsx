import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Globe, Network } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">IntelliSurve</h1>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-blue-100 dark:hover:bg-gray-700">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">Advanced Intelligence Platform</h2>
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Gain critical insights with our AI-powered analytics, empowering your decision-making process.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-2 border-blue-200 dark:border-blue-900 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Zap className="h-12 w-12 mb-4 text-blue-500" />
              <CardTitle className="text-xl mb-2">Real-time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Process and analyze data in real-time for immediate, actionable insights.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-200 dark:border-green-900 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Globe className="h-12 w-12 mb-4 text-green-500" />
              <CardTitle className="text-xl mb-2">Global Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Access intelligence from sources worldwide for a comprehensive understanding.</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-purple-200 dark:border-purple-900 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Network className="h-12 w-12 mb-4 text-purple-500" />
              <CardTitle className="text-xl mb-2">Entity Network Mapping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Visualize complex relationships between entities and events with ease.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Trusted by Industry Leaders</h3>
          <div className="flex justify-center space-x-12">
            <div className="w-32 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-500 dark:text-gray-300">Logo 1</div>
            <div className="w-32 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-500 dark:text-gray-300">Logo 2</div>
            <div className="w-32 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-gray-500 dark:text-gray-300">Logo 3</div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2023 IntelliSurve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}