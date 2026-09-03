import { highlights } from '../data'

export default function Highlights() {
  return (
    <section className="border-t border-steel-800 bg-steel-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className={`py-10 pr-6 ${i !== 0 ? 'lg:border-l border-steel-800' : ''} ${
              i % 2 !== 0 ? 'border-l border-steel-800 lg:border-l-0' : ''
            } ${i >= 2 ? 'border-t lg:border-t-0 border-steel-800' : ''}`}
          >
            <h3 className="font-display text-xl text-steel-100">{h.title}</h3>
            <p className="mt-2 font-body text-sm text-steel-400">{h.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
