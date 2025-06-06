import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HilltopHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-serif">
      <header className="bg-white shadow-md p-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">Hilltop Valuation Group, LLC</div>
        <nav className="space-x-6 text-base">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#process" className="hover:underline">Process</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Valuations for Real Businesses</h1>
        <p className="text-lg max-w-2xl mx-auto">Simple. Honest. Professional business valuation services built for small and midsize companies.</p>
      </section>

      <section id="about" className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">About Hilltop</h2>
        <p className="text-lg max-w-3xl">Hilltop Valuation Group was founded to serve the real businesses that power our communities. We provide thoughtful, straightforward valuations with clarity and confidence — without the fluff. Inspired by the heritage and perspective of old New England, we bring a steady, experienced hand to every engagement.</p>
      </section>

      <section id="services" className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>Business Valuation for M&A</li>
          <li>Succession & Exit Planning</li>
          <li>Buy-Sell Agreement Support</li>
          <li>Valuations for SBA Loans</li>
          <li>Estate & Tax Planning Valuation</li>
        </ul>
      </section>

      <section id="process" className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Initial consultation to understand your goals</li>
          <li>Document review and business analysis</li>
          <li>Valuation modeling and scenario development</li>
          <li>Review call to walk through findings</li>
          <li>Final report delivered digitally and in print</li>
        </ol>
      </section>

      <section id="contact" className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <Card className="max-w-2xl mx-auto p-6">
          <CardContent className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hilltop Valuation Group, LLC. All rights reserved.
      </footer>
    </div>
  );
}
