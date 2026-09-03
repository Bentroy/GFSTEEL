import { ArrowRight } from 'lucide-react'
import { products } from '../data'

export default function Products() {
  return (
    <section id="products" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-600 mb-3">What we supply</p>
        <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-950 max-w-2xl leading-[0.95]">
          Our Products &amp; Materials
        </h2>
        <p className="mt-4 font-body text-steel-600 max-w-xl">
          Explore our range of iron, steel and building materials.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-950/10">
          {products.map((p) => (
            <div key={p.n} className="bg-cream group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} materials`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 font-display text-xs font-bold text-ember-400 bg-steel-950/70 px-2 py-1">
                  {p.n}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold uppercase text-xl text-steel-950">{p.title}</h3>
                <p className="mt-2 font-body text-sm text-steel-600">{p.copy}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-steel-950 border-b border-ember-500 pb-0.5 hover:text-ember-600"
                >
                  Request Price
                  <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
