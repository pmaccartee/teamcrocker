import type React from "react";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Building2, TrendingUp, Search, Menu, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import { ObfuscatedContact } from "@/components/obfuscated-contact";
import { Layout } from "@/components/layout";

// Brand colors for Realtor 510: Monochrome + Strong Accent
// Using existing Tailwind classes but we can customize later

const team = [
  {
    name: "Patrick MacCartee",
    role: "Realtor",
    bio: "15 years corporate, 7 years hospitality. Analytical rigor with a focus on making transactions easy.",
    image: "/images/patrick-headshot.png",
    dre: "02142693",
    phone: "415-637-0257",
    email: "patrick@grubbco.com",
  },
  {
    name: "Matt Detert",
    role: "Realtor",
    bio: "Deep local knowledge and a steady hand in complex negotiations.",
    image: "https://images.squarespace-cdn.com/content/v1/6092cf1a9767951ea1d60de0/840a9311-5a66-4797-b89a-47f4168344fe/Matt+Detert+B%26W+Crop+1.18.jpg",
    dre: "02048188",
    phone: "",
    email: "",
  },
  {
    name: "Doug Sager",
    role: "Realtor",
    bio: "Decades of East Bay experience and a reputation for excellence.",
    image: "https://images.squarespace-cdn.com/content/v1/6092cf1a9767951ea1d60de0/0ec52265-c32e-4f5e-a8ba-6b7f83731a83/Doug_Sager_Headshot_19N0981_BW_Hi_Res.jpg",
    dre: "01864687",
    phone: "",
    email: "",
  },
];

export default function Realtor510() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-black selection:text-white">
      {/* Navigation Override for this page specifically or reuse Layout if we want consistency? 
          Let's build a custom header for 510 to distinguish the brand 
      */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="text-2xl font-bold tracking-tighter">
            REALTOR<span className="text-neutral-400">510</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide items-center">
            <span className="text-xs text-neutral-400 border-r border-neutral-200 pr-6 mr-[-10px]">
              AT THE GRUBB CO.
            </span>
            <a href="#about" className="hover:text-neutral-500 transition-colors">TEAM</a>
            <a href="#listings" className="hover:text-neutral-500 transition-colors">LISTINGS</a>
            <a href="#reviews" className="hover:text-neutral-500 transition-colors">REVIEWS</a>
            <ContactDialog>
              <button className="text-black hover:text-neutral-600 transition-colors">CONTACT</button>
            </ContactDialog>
          </div>
          <ContactDialog>
            <Button className="bg-black text-white hover:bg-neutral-800 rounded-none px-6">
              LET'S TALK
            </Button>
          </ContactDialog>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/images/oakland-hero-gen.png"
            alt="Oakland Skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl">
              MAKE IT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">EASY.</span>
            </h1>
            <p className="mb-10 max-w-xl text-xl text-neutral-300 font-light">
              Your partner in East Bay Real Estate. Serving Oakland, Piedmont, Berkeley, and Alameda with a rigorous, analytical approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactDialog>
                <Button className="h-14 rounded-none bg-white px-8 text-lg font-semibold text-black hover:bg-neutral-200">
                  Schedule Strategy Call
                </Button>
              </ContactDialog>
              <Button variant="outline" className="h-14 rounded-none border-white/30 text-white hover:bg-white/10 px-8 text-lg bg-transparent">
                View Active Listings
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Bio Section */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 items-center">
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="/images/patrick-headshot.png"
              alt="Patrick MacCartee"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Analytical Focus. <br/>Hospitality Heart.</h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Real estate shouldn't be chaotic. With 15 years in corporate strategy, 7 years in hospitality, and 7 years in development and sales, I bring a different level of rigor to the table.
              </p>
              <p>
                My ultimate goal is to provide peace of mind while delivering an aggressive yet seamless transaction. Even in this complex Bay Area market, I prove to my clients how easy buying and selling a home can be.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-neutral-100">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">$100M+</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">Sales Volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Grubb Company Integration - Stark Monochrome */}
      <section className="bg-neutral-900 text-white py-24 border-y border-neutral-800">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
             <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6">
                Brokerage Backing
             </div>
             <h2 className="text-4xl font-bold tracking-tight mb-6">
               Powered by <br/>The Grubb Company.
             </h2>
             <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
               <p>
                 We are backed by the East Bay's premier luxury brokerage. Since 1967, The Grubb Company has set the standard for high-touch service and deep local roots.
               </p>
               <p>
                 This partnership combines our modern, data-driven agility with the stability and network of a legendary local institution.
               </p>
             </div>
             <div className="mt-8">
               <a 
                 href="https://www.grubbco.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:text-neutral-300 transition-colors"
               >
                 Visit Grubbco.com <ArrowRight className="ml-2 h-4 w-4" />
               </a>
             </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="bg-white p-12 w-full max-w-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="/images/grubb-logo.png" 
                alt="The Grubb Company" 
                className="w-full h-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listing (Static Placeholder) */}
      <section id="listings" className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
           <div className="mb-12 flex items-end justify-between">
             <div>
               <div className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">Current Market</div>
               <h2 className="text-4xl font-bold tracking-tight">Featured Properties</h2>
             </div>
             <a href="#" className="hidden md:flex items-center text-sm font-bold hover:text-neutral-600">
               VIEW ALL LISTINGS <ArrowRight className="ml-2 h-4 w-4" />
             </a>
           </div>

           <div className="group relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 cursor-pointer">
             <img 
               src="/images/modern-living.jpg" 
               alt="Luxury Property" 
               className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
             />
             <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
               <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                 <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                   Just Listed
                 </div>
                 <h3 className="text-3xl font-bold text-white md:text-5xl">4280 Piedmont Avenue</h3>
                 <p className="mt-2 text-xl text-neutral-200">Oakland, CA 94611</p>
               </div>
               <div className="mt-6 flex items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                 <span className="text-lg font-bold">View Property Details</span>
                 <ArrowRight className="ml-3 h-5 w-5" />
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Neighborhoods / Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
             <div className="space-y-4">
               <div className="h-12 w-12 flex items-center justify-center bg-black text-white mb-4">
                 <Building2 className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold">Strategic Sales</h3>
               <p className="text-neutral-600">
                 Data-driven pricing and positioning strategies that maximize value in the competitive East Bay market.
               </p>
             </div>
             <div className="space-y-4">
               <div className="h-12 w-12 flex items-center justify-center bg-black text-white mb-4">
                 <Search className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold">Curated Search</h3>
               <p className="text-neutral-600">
                 Access to off-market opportunities and a deep understanding of neighborhood nuances across the 510.
               </p>
             </div>
             <div className="space-y-4">
               <div className="h-12 w-12 flex items-center justify-center bg-black text-white mb-4">
                 <TrendingUp className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold">Investment Focus</h3>
               <p className="text-neutral-600">
                 Identifying properties with long-term appreciation potential and value-add opportunities.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-black text-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-neutral-400">CLIENT WORDS</h2>
          <blockquote className="text-3xl md:text-5xl font-bold leading-tight">
            "Patrick definitely knew the local market, which was invaluable for us in the competitive Oakland market."
          </blockquote>
          <div className="mt-12 flex items-center justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Sparkles key={i} className="h-5 w-5 fill-white text-white" />
            ))}
          </div>
          <div className="mt-4 text-neutral-400 font-medium tracking-wide uppercase">— Susan H.</div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6">
           <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl font-bold mb-4">The Team</h2>
             <p className="text-neutral-600">A collective of specialists dedicated to your success.</p>
           </div>
           
           <div className="grid gap-8 md:grid-cols-3">
             {team.map((m) => (
               <div key={m.name} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                 <div className="aspect-square w-full bg-neutral-100 mb-6 grayscale overflow-hidden">
                   <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                 </div>
                 <h3 className="text-xl font-bold">{m.name}</h3>
                 <p className="text-sm text-neutral-500 uppercase tracking-wider mb-3">{m.role}</p>
                 <p className="text-neutral-600 text-sm mb-4">{m.bio}</p>
                 <div className="text-xs font-bold text-neutral-400">DRE# {m.dre}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-white py-24 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
             <h2 className="text-4xl font-bold tracking-tighter mb-4">Ready to move?</h2>
             <p className="text-neutral-500 text-lg">Let's discuss your goals for the East Bay.</p>
          </div>
          <ContactDialog>
             <Button className="h-16 px-12 text-lg bg-black text-white hover:bg-neutral-800 rounded-none w-full md:w-auto">
               Start the Conversation
             </Button>
          </ContactDialog>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between text-xs text-neutral-400">
           <div>© {new Date().getFullYear()} Realtor 510. All rights reserved.</div>
           <div className="flex gap-6 mt-4 md:mt-0 items-center">
             <img src="/images/grubb-logo-g.png" alt="Grubb Co" className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" />
             <a href="#" className="hover:text-black">Privacy Policy</a>
             <a href="#" className="hover:text-black">Terms of Service</a>
             <a href="#" className="hover:text-black">DRE# 02142693</a>
           </div>
        </div>
      </footer>
    </div>
  );
}