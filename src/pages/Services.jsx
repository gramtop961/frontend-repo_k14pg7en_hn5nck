import Navbar from '../components/Navbar'

const sections = [
  {
    title: 'Window Installations',
    copy: 'uPVC and aluminium frames with advanced sealing, acoustic control and A+ rated glazing. Precise measuring, tidy fitting and a premium finish as standard.',
    bullets: ['A+ Energy ratings', 'Acoustic glass options', 'Multiple colours & styles', 'Expert finishing'],
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Door Installations',
    copy: 'Composite, uPVC and aluminium doors designed for security and kerb appeal. Engineering-grade locks, reinforced frames and smooth operation.',
    bullets: ['Multi-point locking', 'Police approved hardware', 'Secure & durable', 'Dozens of styles'],
    img: 'https://images.unsplash.com/photo-1560185008-b033106af2fb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Conservatories',
    copy: 'Made-to-measure conservatories built for year-round comfort. Thermally efficient roofs, glazing and ventilation tailored to your home.',
    bullets: ['Thermally efficient', 'Bespoke design', 'Ventilation options', 'Elegant finishes'],
    img: 'https://images.unsplash.com/photo-1600585154258-2e8b33b78b2a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Repairs & Replacements',
    copy: 'From misted units to hardware upgrades, our technicians diagnose and restore performance with care.',
    bullets: ['Misted units replaced', 'Hinges & handles', 'Seals & draught-proofing', 'Smooth adjustments'],
    img: 'https://images.unsplash.com/photo-1600607687920-4ce3a0c1b6aa?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Glass Upgrades',
    copy: 'Switch to energy-efficient glazing and feel the difference. Keep heat in, noise out and comfort up.',
    bullets: ['Low-E coatings', 'Laminated & acoustic', 'Warm-edge spacers', 'Argon filled units'],
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Services(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">Services</h1>
          <p className="text-slate-300 mt-3 max-w-2xl">Premium installations, durable materials and meticulous attention to detail across every project.</p>
        </div>
      </section>

      <div className="space-y-16 pb-20">
        {sections.map((s, i) => (
          <section key={s.title} className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
              <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
                  <img src={s.img} alt={s.title} className="w-full h-[380px] object-cover" />
                </div>
              </div>
              <div className={`lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-semibold text-white">{s.title}</h2>
                <p className="text-slate-300 mt-3">{s.copy}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-200">
                  {s.bullets.map(b => <li key={b} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">{b}</li>)}
                </ul>
                <a href="/contact" className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Get a Free Quote</a>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer className="py-10 text-center text-slate-400 border-t border-white/10">Ready to start? Request your free quote today.</footer>
    </div>
  )
}
