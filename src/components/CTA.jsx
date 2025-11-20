import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="py-16 bg-gradient-to-br from-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center">
          <h3 className="text-3xl sm:text-4xl text-white font-semibold">Ready to upgrade your home?</h3>
          <p className="text-slate-300 mt-2">Speak to our friendly team and get a clear, no-obligation quote.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Request a Free Quote</Link>
            <Link to="/services" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
