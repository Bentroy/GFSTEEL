import { MapPin, Layers, Truck, MessageCircle } from 'lucide-react'
import { whyUs } from '../data'

const icons = [MapPin, Layers, Truck, MessageCircle]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-600 mb-3">Why work with us</p>
            <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-950 max-w-2xl leading-[0.95]">
              A direct line to the materials you need.
            </h2>
          </div>
          <p className="font-body text-steel-600 max-w-xs">
            Clear communication and a practical local presence for
            construction, fabrication and industrial requirements.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w, i) => {
            const Icon = icons[i]
            return (
              <div key={w.n} className="border border-steel-950/10 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-ember-600">{w.n}</span>
                  <Icon size={18} className="text-ember-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold uppercase text-lg text-steel-950 mt-4">{w.title}</h3>
                <p className="mt-2 font-body text-sm text-steel-600">{w.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
