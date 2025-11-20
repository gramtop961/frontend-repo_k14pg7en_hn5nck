import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(37,99,235,0.25),transparent),radial-gradient(1200px_600px_at_80%_-10%,rgba(14,165,233,0.25),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Premium uPVC Windows & Secure Doors, Installed with Precision
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              Trusted UK specialists delivering energy-efficient glazing and beautifully finished installations. Enhance security, comfort and kerb appeal with certified craftsmanship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                Get a Free Quote
              </Link>
              <Link to="/gallery" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white">
                View Our Work
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-slate-300">
              <div>
                <div className="text-2xl font-semibold text-white">10-Year</div>
                <div className="text-sm">Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">A+ Rated</div>
                <div className="text-sm">Energy Efficient</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">FENSA</div>
                <div className="text-sm">Registered</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-900/30">
              <img src="https://images.unsplash.com/photo-1674727465886-e0ac0919aa6a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVSyUyMGhvbWUlMjB3aXRoJTIwbmV3JTIwd2luZG93c3xlbnwwfDB8fHwxNzYzNjQ0ODEzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="UK home with new windows" className="w-full h-[420px] object-cover" />
            </div>
            <p className="text-xs text-slate-400 mt-2">Modern UK home imagery for representation only.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
