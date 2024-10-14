import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Globe, Network } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-800">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intellisurve-logo-HXbXBVpzrWVXZXMXXXXXXXXX.png" alt="IntelliSurve Logo" width={180} height={40} />
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#4A5568] hover:bg-[#2D3748] text-white">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-[#2D3748]">Empower Your Decisions with AI</h1>
          <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Unlock the power of advanced intelligence. Transform complex data into actionable insights with IntelliSurve.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-[#4A5568] hover:bg-[#2D3748] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </section>

        <section className="mb-20">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard-mockup-KXbXBVpzrWVXZXMXXXXXXXXX.png" 
            alt="IntelliSurve Dashboard" 
            width={1200} 
            height={600} 
            className="rounded-lg shadow-2xl"
          />
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <Brain className="h-12 w-12 mb-4 text-[#4A5568]" />
              <CardTitle className="text-xl mb-2 text-[#2D3748]">AI-Powered Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Harness the power of advanced AI to process and analyze complex data sets in real-time.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <Globe className="h-12 w-12 mb-4 text-[#4A5568]" />
              <CardTitle className="text-xl mb-2 text-[#2D3748]">Global Intelligence Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Access a vast network of global intelligence sources for comprehensive insights.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <CardHeader>
              <Network className="h-12 w-12 mb-4 text-[#4A5568]" />
              <CardTitle className="text-xl mb-2 text-[#2D3748]">Advanced Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Visualize complex relationships and patterns with our cutting-edge graph technology.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8 text-[#2D3748]">Trusted by Industry Leaders</h2>
          <div className="flex justify-center space-x-12">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/company-logo-1-LXbXBVpzrWVXZXMXXXXXXXXX.png" alt="Company Logo 1" width={120} height={60} />
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/company-logo-2-MXbXBVpzrWVXZXMXXXXXXXXX.png" alt="Company Logo 2" width={120} height={60} />
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/company-logo-3-NXbXBVpzrWVXZXMXXXXXXXXX.png" alt="Company Logo 3" width={120} height={60} />
          </div>
        </section>

        <section className="bg-[#EDF2F7] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2D3748]">Ready to Transform Your Intelligence Operations?</h2>
          <p className="text-xl mb-8 text-gray-600">Join the ranks of industry leaders leveraging IntelliSurve for unparalleled insights.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#4A5568] hover:bg-[#2D3748] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-[#2D3748] text-white py-12 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="/security" className="hover:text-gray-300">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/documentation" className="hover:text-gray-300">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2023 IntelliSurve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}