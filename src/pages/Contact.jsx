import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', address:'', jobType:'', message:'' })
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    // In a full build, this would submit to the backend. For now, show success state.
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">Request Your Free Quote</h1>
          <p className="text-slate-300 mt-3">Tell us a little about your project and well come back with friendly advice and clear pricing.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Address</label>
                  <input name="address" value={form.address} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">Job Type</label>
                  <select name="jobType" value={form.jobType} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white">
                    <option value="">Select an option</option>
                    <option>Windows</option>
                    <option>Doors</option>
                    <option>Conservatory</option>
                    <option>Repairs</option>
                    <option>Glass Upgrade</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white" />
                </div>
              </div>
              <button className="mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Send Request</button>
              {sent && <p className="text-green-400 mt-3">Thank you — well be in touch shortly.</p>}
            </form>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1546790971-8888748e8054?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZXJ2aWNlJTIwYXJlYSUyMG1hcCUyMHBsYWNlaG9sZGVyfGVufDB8MHx8fDE3NjM2NDQ4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Service area map placeholder" className="w-full h-[420px] object-cover" />
            </div>
            <div className="mt-4 flex gap-3">
              <a href="tel:+441612345678" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Call 0161 234 5678</a>
              <a href="https://wa.me/441612345678" className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
