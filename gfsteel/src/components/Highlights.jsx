import { Wrench, Hammer, Package, MapPin } from 'lucide-react'
import { highlights } from '../data'

const icons = [Wrench, Hammer, Package, MapPin]

export default function Highlights() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((h, i) => {
          const Icon = icons[i]
          return (
            <div
              key={h.title}
              className="bg-white border border-steel-950/10 p-6"
            >
              <Icon size={22} className="text-ember-600" strokeWidth={1.75} />
              <h3 className="font-display font-bold uppercase text-lg text-steel-950 mt-4">{h.title}</h3>
              <p className="mt-2 font-body text-sm text-steel-600">{h.copy}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
