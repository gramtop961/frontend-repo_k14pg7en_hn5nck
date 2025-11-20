import { Link } from 'react-router-dom'

export default function GalleryPreview(){
  const images = [
    'https://images.unsplash.com/photo-1616137432255-5f0b4c6c0dc0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560185008-b033106af2fb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4ce3a0c1b6aa?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154258-2e8b33b78b2a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Recent Installations</h2>
            <p className="text-slate-300 mt-2">A glimpse at the quality and care that goes into every window and door we fit.</p>
          </div>
          <Link to="/gallery" className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white">View Gallery</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src={src} alt="Project" className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white inline-block">Request Your Free Quote</Link>
        </div>
      </div>
    </section>
  )
}
