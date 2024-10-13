import React from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpFAQ() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Sidebar (same as dashboard) */}
      <aside className="w-64 bg-slate-200 p-4 flex flex-col">
        {/* ... (sidebar content, same as in dashboard.tsx) ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-cyan-800">Help & FAQ</h2>
          <p className="text-slate-600">Find answers to common questions and learn how to use IntelliSurve</p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input type="search" placeholder="Search for help..." className="pl-8" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create a new alert?</AccordionTrigger>
                <AccordionContent>
                  To create a new alert, navigate to the Alerts page and click on the "Create New Alert" button. 
                  Fill in the required information such as alert type, keywords, and notification preferences. 
                  Once you've set up your alert, click "Save" to activate it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I integrate external data sources?</AccordionTrigger>
                <AccordionContent>
                  To integrate external data sources, go to the Data Sources page and click "Add New Source". 
                  Select the type of source you want to add (e.g., API, database, file upload) and follow the 
                  prompts to provide the necessary connection details. Once configured, the system will begin 
                  syncing data from the new source.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I customize my dashboard?</AccordionTrigger>
                <AccordionContent>
                  To customize your dashboard, click on the "Customize" button in the top right corner of the 
                  dashboard. You can then add, remove, or rearrange widgets by dragging and dropping them. 
                  Each widget also has its own settings that you can adjust to display the information most 
                  relevant to you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What types of reports can I generate?</AccordionTrigger>
                <AccordionContent>
                  IntelliSurve offers various types of reports including daily briefings, weekly summaries, 
                  monthly analyses, and custom reports. To generate a report, go to the Reports page and click 
                  "Create New Report". Select the report type, choose your parameters, and the system will 
                  generate the report based on your specifications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How secure is my data on IntelliSurve?</AccordionTrigger>
                <AccordionContent>
                  We take data security very seriously. All data is encrypted both in transit and at rest using 
                  industry-standard encryption protocols. We employ multi-factor authentication, regular security 
                  audits, and strict access controls to ensure your data remains protected. For more details, 
                  please refer to our Security Policy in the Settings page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="w-full">Contact Support</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}