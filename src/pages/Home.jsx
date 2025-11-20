import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Badges from '../components/Badges'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import GalleryPreview from '../components/GalleryPreview'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Badges />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <CTA />
      <footer className="py-10 text-center text-slate-400 border-t border-white/10">© {new Date().getFullYear()} Premier Windows & Doors. All rights reserved.</footer>
    </div>
  )
}
