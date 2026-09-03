import { Ruler, Hammer, Factory, MapPin } from 'lucide-react'
import { highlights } from '../data'

const icons = [Ruler, Hammer, Factory, MapPin]

export default function Highlights() {
  return (
    <section className="border-b border-steel-950/10 bg-cream text-steel-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid divide-y divide-steel-950/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {highlights.map((h, i) => {
          const Icon = icons[i]
          return (
            <div key={h.title} className="flex items-start gap-4 px-5 py-6 lg:px-6">
              <Icon size={20} className="mt-0.5 text-ember-600" strokeWidth={1.75} />
              <div>
                <h3 className="text-sm font-bold font-body">{h.title}</h3>
                <p className="mt-1 text-xs leading-5 font-body text-steel-600">{h.copy}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
