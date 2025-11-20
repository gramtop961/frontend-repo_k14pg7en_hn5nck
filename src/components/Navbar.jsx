import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg'
  const active = 'text-white bg-white/5'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20 grid place-items-center text-white font-bold">UK</div>
            <div className="leading-tight">
              <div className="text-white font-semibold">Premier Windows & Doors</div>
              <div className="text-xs text-slate-300">Installers • FENSA Registered</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+441612345678" className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20">
              <Phone size={18} /> 0161 234 5678
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1 bg-slate-900/95">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} block ${isActive ? active : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
            <a href="tel:+441612345678" className="mt-2 inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg w-full justify-center">
              <Phone size={18} /> Call 0161 234 5678
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
