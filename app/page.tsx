import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Globe, BarChart3 } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-gray-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Image src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/logo-site-SGMDWJGYYsnd5KXOpSjEt2z7YBwh4K.webp" alt="AfriInsight Logo" width={200} height={50} />
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#F6AD55] hover:bg-[#ED8936] text-gray-900 font-semibold">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 text-white">Dominate Sub-Saharan Markets with Unrivaled Intelligence</h1>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Harness the power of quantum-enhanced predictive modeling and satellite-driven geospatial analytics to unlock unprecedented insights across Sub-Saharan Africa.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-[#F6AD55] hover:bg-[#ED8936] text-gray-900 text-lg px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 font-semibold">
              Request Exclusive Access
            </Button>
          </Link>
        </section>

        <section className="mb-20 relative">
          <Image 
            src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/dashboard-cPXC5nLmK7yYp3do79TcMa6QpTaxRU.png" 
            alt="AfriInsight Dashboard" 
            width={1504} 
            height={600} 
            className="rounded-lg shadow-2xl border-2 border-[#F6AD55]"
          />
          <div className="absolute -bottom-10 right-10 bg-[#2D3748] p-4 rounded-lg shadow-xl">
            <p className="text-2xl font-bold text-[#F6AD55]">500+</p>
            <p className="text-sm text-gray-300">Data Sources Integrated</p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-[#2D3748] border-2 border-[#F6AD55] shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <Shield className="h-12 w-12 mb-4 text-[#F6AD55]" />
              <CardTitle className="text-xl mb-2 text-white">Military-Grade Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Benefit from end-to-end encryption and secure data vaults that meet the highest international standards.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2D3748] border-2 border-[#F6AD55] shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <Globe className="h-12 w-12 mb-4 text-[#F6AD55]" />
              <CardTitle className="text-xl mb-2 text-white">Pan-African Intelligence Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Access our vast network of on-ground operatives and satellite infrastructure for real-time insights.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2D3748] border-2 border-[#F6AD55] shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <BarChart3 className="h-12 w-12 mb-4 text-[#F6AD55]" />
              <CardTitle className="text-xl mb-2 text-white">Quantum-Enhanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Leverage our proprietary quantum algorithms for predictive modeling that's light-years ahead of the competition.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Trusted by Global Powers</h2>
          <div className="flex justify-center space-x-12">
            <Image src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/worldbank-rKlShbv63JyK0Z0GrIKk6A1FkLTmGy.png" alt="Client Logo 1" width={120} height={60} />
            <Image src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/kiffc-8agJlaXxGNTU9c947CAgf94bpsLPzi.jpg" alt="Client Logo 2" width={120} height={60} />
            <Image src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/afriexim-NfkzOxuVvpfP6BsaVBDyF2cWBbjLec.jpg" alt="Client Logo 3" width={120} height={60} />
          </div>
        </section>

        <section className="bg-[#2D3748] rounded-lg p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Dominate Sub-Saharan Markets?</h2>
            <p className="text-xl mb-8 text-gray-300">Join the elite circle of decision-makers leveraging AfriInsight for unparalleled market dominance.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#F6AD55] hover:bg-[#ED8936] text-gray-900 text-lg px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 font-semibold">
                Secure Your Advantage
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Image src="https://wwyyftm1ftnx5euh.public.blob.vercel-storage.com/images/africa-VZHTNUmrWxLj8hT0upwkgehMTvRqAS.jpg" alt="Africa Map Overlay" layout="fill" objectFit="cover" />
          </div>
        </section>
      </main>

      <footer className="bg-[#1A202C] text-gray-300 py-12 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AD55]">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/geopolitical-analysis" className="hover:text-white">Geopolitical Analysis</Link></li>
              <li><Link href="/market-intelligence" className="hover:text-white">Market Intelligence</Link></li>
              <li><Link href="/risk-assessment" className="hover:text-white">Risk Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AD55]">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-white">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AD55]">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/insights" className="hover:text-white">Insights Hub</Link></li>
              <li><Link href="/webinars" className="hover:text-white">Webinars</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AD55]">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 AfriInsight. All rights reserved. Empowering strategic decisions across Sub-Saharan Africa.</p>
        </div>
      </footer>
    </div>
  )
}
