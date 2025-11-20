import Navbar from '../components/Navbar'

export default function About(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">About Us</h1>
          <p className="text-slate-300 mt-3 max-w-2xl">Proudly serving homeowners across the North West, we specialise in premium windows, doors and bespoke conservatories. Our team brings years of experience and a commitment to honest advice and meticulous workmanship.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>
              <p className="text-slate-300 mt-2">Founded to raise the standard of local installations, we believe in tidy work, respectful service and products that stand the test of time. Were FENSA registered and only use accredited, energy-efficient systems.</p>
              <h3 className="text-xl font-medium text-white mt-6">Mission & Values</h3>
              <ul className="text-slate-300 list-disc list-inside mt-2 space-y-1">
                <li>Quality without compromise</li>
                <li>Security and safety first</li>
                <li>Clear communication, no pressure</li>
                <li>Aftercare you can rely on</li>
              </ul>
              <h3 className="text-xl font-medium text-white mt-6">Areas We Cover</h3>
              <p className="text-slate-300 mt-2">Greater Manchester, Cheshire, Stockport, Trafford, Salford and surrounding areas.</p>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop" alt="Our team" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 border-t border-white/10">Speak to our team for expert advice and a free quote.</footer>
    </div>
  )
}
