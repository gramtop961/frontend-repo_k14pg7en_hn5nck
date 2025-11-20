import Navbar from '../components/Navbar'

export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1616137432255-5f0b4c6c0dc0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560185008-b033106af2fb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4ce3a0c1b6aa?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154258-2e8b33b78b2a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154585-c8a844c3ddb2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605270397118-9a86b30c2b66?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585153837-8a3c7d3b7d4a?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">Project Gallery</h1>
          <p className="text-slate-300 mt-3">Authentic UK home styles, carefully installed for lasting performance.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img src={src} alt="Project" className="w-full h-60 object-cover" />
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
