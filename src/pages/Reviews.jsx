import Navbar from '../components/Navbar'

export default function Reviews(){
  const reviews = [
    { name: 'Trustpilot Reviewer', rating: 5, text: 'Impeccable service. The finish around the frames is flawless and the team were a pleasure to have around.' },
    { name: 'Google Reviewer', rating: 5, text: 'Prompt, tidy and transparent pricing. House is much warmer after the new glazing.' },
    { name: 'Helen, Didsbury', rating: 5, text: 'Great communication throughout and a stunning composite door. Wouldn\'t hesitate to recommend.' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">Customer Reviews</h1>
          <p className="text-slate-300 mt-3">What homeowners are saying about our workmanship and service.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                {Array.from({ length: r.rating }).map((_, i2) => (
                  <span key={i2} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-200 mt-3">“{r.text}”</p>
              <div className="text-slate-400 text-sm mt-3">{r.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Start Your Project Today</a>
        </div>
      </section>
    </div>
  )
}
