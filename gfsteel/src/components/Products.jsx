import { products } from '../data'

export default function Products() {
  return (
    <section id="products" className="bg-steel-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-sm tracking-wide text-ember-400 mb-3">What we supply</p>
        <h2 className="font-display text-4xl sm:text-5xl text-steel-100 max-w-2xl">
          Our Products &amp; Materials
        </h2>
        <p className="mt-4 font-body text-steel-400 max-w-xl">
          Explore our range of iron, steel and building materials.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-800">
          {products.map((p) => (
            <div key={p.n} className="bg-steel-950 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} materials`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="font-display text-sm text-ember-500">{p.n}</span>
                <h3 className="font-display text-2xl text-steel-100 mt-1">{p.title}</h3>
                <p className="mt-2 font-body text-sm text-steel-400">{p.copy}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-flex font-body text-sm text-steel-100 border-b border-ember-500 pb-0.5 hover:text-ember-400"
                >
                  Request Price
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
