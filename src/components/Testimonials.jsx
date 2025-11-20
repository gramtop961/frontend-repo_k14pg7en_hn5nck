export default function Testimonials(){
  const items = [
    { name: 'Sarah, Stockport', text: 'Professional from start to finish. Our home is noticeably warmer and the finish is immaculate.' },
    { name: 'James, Sale', text: 'The new composite door looks fantastic and feels incredibly secure. Highly recommend.' },
    { name: 'Amrita, Altrincham', text: 'Clear communication, tidy work and great value for the quality provided.' },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Kind Words from Homeowners</h2>
            <p className="text-slate-300 mt-2">Real feedback from projects across Greater Manchester and the North West.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
