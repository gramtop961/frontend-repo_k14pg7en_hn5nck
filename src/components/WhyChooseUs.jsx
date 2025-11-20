import { Shield, Sparkles, BadgeCheck, Wrench, Award, Lock } from 'lucide-react'

const points = [
  { icon: BadgeCheck, title: 'Certified Installers', desc: 'FENSA registered with strict compliance on every project.' },
  { icon: Shield, title: '10-Year Guarantee', desc: 'Long-lasting products and workmanship you can rely on.' },
  { icon: Sparkles, title: 'Premium Finishes', desc: 'Clean lines, neat sealing and attention to detail as standard.' },
  { icon: Lock, title: 'Security First', desc: 'Multi-point locking, reinforced frames and accredited hardware.' },
  { icon: Award, title: 'Top Energy Ratings', desc: 'A+ rated glazing options to boost comfort and reduce costs.' },
  { icon: Wrench, title: 'Aftercare & Repairs', desc: 'Responsive support with clear communication and tidy work.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" alt="Installer fitting a window" className="w-full h-[420px] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why Homeowners Choose Us</h2>
            <p className="text-slate-300 mt-3">We combine high-spec products with exacting installation and a tidy, respectful approach. The result: homes that feel warmer, safer and more refined.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-600/20 text-blue-300 grid place-items-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">{title}</div>
                    <div className="text-slate-300 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
