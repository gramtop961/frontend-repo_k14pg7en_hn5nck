import { Link } from 'react-router-dom'
import { ShieldCheck, Home, Wrench, PanelsTopLeft, GlassWater, DoorClosed } from 'lucide-react'

const services = [
  {
    title: 'uPVC Window Installations',
    desc: 'Premium frames, A+ rated glazing and expert fitting for warmer, quieter homes.',
    icon: Home,
  },
  {
    title: 'Composite & Secure Doors',
    desc: 'Beautiful, secure doors with advanced locks and exceptional durability.',
    icon: DoorClosed,
  },
  {
    title: 'Bi-fold & Sliding Doors',
    desc: 'Open up living spaces with smooth, secure and thermally efficient systems.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Conservatories & Orangeries',
    desc: 'Light-filled spaces designed for year-round comfort and performance.',
    icon: GlassWater,
  },
  {
    title: 'Repairs & Replacements',
    desc: 'Misted units, hardware replacements and remedial work done right.',
    icon: Wrench,
  },
  {
    title: 'Glass Upgrades',
    desc: 'Energy-efficient glazing upgrades to improve comfort and reduce bills.',
    icon: ShieldCheck,
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Specialist Installations</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">From secure composite doors to A+ rated windows and bespoke conservatories — every project is installed to exacting standards.</p>
          </div>
          <Link to="/services" className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white">Explore Services</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:from-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-300 grid place-items-center mb-4 group-hover:bg-blue-600/30">
                <Icon />
              </div>
              <h3 className="text-white font-medium text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
              <Link to="/contact" className="inline-block mt-4 text-blue-300 hover:text-blue-200">Get a Free Quote →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
