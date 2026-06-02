import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import pepperoni from "@/assets/menu/pepperoni.jpeg.asset.json";
import pepperoniBurrata from "@/assets/menu/pepperoni-burrata.jpeg.asset.json";
import calabresa from "@/assets/menu/calabresa.jpeg.asset.json";
import picadinho from "@/assets/menu/picadinho.jpeg.asset.json";
import quatroQueijos from "@/assets/menu/quatro-queijos.jpeg.asset.json";
import carciofi from "@/assets/menu/carciofi.jpeg.asset.json";
import brasileira from "@/assets/menu/brasileira.jpeg.asset.json";
import palmito from "@/assets/menu/palmito.jpeg.asset.json";
import peitoPeru from "@/assets/menu/peito-peru.jpeg.asset.json";
import chocolateCoco from "@/assets/menu/chocolate-coco.jpeg.asset.json";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Pizza Party Brasil" },
      { name: "description", content: "Sabores napoletanos artesanais — salgados e doces para o seu evento." },
      { property: "og:title", content: "Cardápio — Pizza Party Brasil" },
      { property: "og:image", content: pepperoniBurrata.url },
    ],
  }),
  component: CardapioPage,
});

const TINTS = [
  "var(--blush)",
  "var(--sage-light)",
  "#FFE4B5",
  "var(--blush-light)",
];

const pizzas = [
  { img: pepperoni.url, nome: "Pepperoni", tipo: "Clássica" },
  { img: pepperoniBurrata.url, nome: "Pepperoni & Burrata", tipo: "Especial" },
  { img: calabresa.url, nome: "Calabresa", tipo: "Tradicional" },
  { img: picadinho.url, nome: "Picadinho", tipo: "Carne" },
  { img: quatroQueijos.url, nome: "Quatro Queijos", tipo: "Branca" },
  { img: carciofi.url, nome: "Carciofi", tipo: "Vegetariana" },
  { img: brasileira.url, nome: "Brasileira", tipo: "Tradicional" },
  { img: palmito.url, nome: "Palmito", tipo: "Vegetariana" },
  { img: peitoPeru.url, nome: "Peito de Peru & Catupiry", tipo: "Branca" },
  { img: chocolateCoco.url, nome: "Chocolate & Coco", tipo: "Sobremesa" },
];

function CardapioPage() {
  return (
    <div className="bg-paper text-ink min-h-screen pb-16">
      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto bg-cream-light/85 backdrop-blur-xl rounded-full shadow-[0_8px_30px_-15px_rgba(26,20,16,0.15)] flex items-center justify-between px-3 sm:px-6 py-2.5 border border-ink/5">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Pizza Party" width={42} height={42} className="rounded-full" style={{ width: 42, height: 42 }} />
            <span className="serif italic text-tomato text-lg hidden sm:block">Pizza Party</span>
          </Link>
          <Link to="/" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors flex items-center gap-1">
            <span>←</span> Voltar
          </Link>
        </nav>
      </header>

      <section className="px-4 pt-12 pb-8">
        <div className="max-w-6xl mx-auto panel-rounded relative" style={{ background: "var(--gradient-warm)" }}>
          <div className="px-8 md:px-14 py-14 md:py-20 text-center text-cream-light">
            <div className="text-xs tracking-[0.28em] uppercase mb-5 text-cream-light/80">Cardápio</div>
            <h1 className="serif text-6xl md:text-8xl leading-[0.95]">
              Sabores
              <span className="block italic">inesquecíveis</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-cream-light/85 text-[0.95rem]">
              Selecione livremente, harmonizando entre doces e salgados.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
          {pizzas.map((p, i) => (
            <figure key={p.nome} className="text-center group">
              <div className="relative aspect-square mb-5">
                <div className="absolute inset-3 rounded-full blur-2xl opacity-70" style={{ background: TINTS[i % TINTS.length] }} />
                <img
                  src={p.img}
                  alt={p.nome}
                  loading="lazy"
                  className="relative w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105 shadow-[0_20px_50px_-15px_rgba(26,20,16,0.25)]"
                />
              </div>
              <figcaption>
                <h3 className="serif text-xl text-ink">{p.nome}</h3>
                <div className="text-[0.6rem] tracking-[0.22em] uppercase text-tomato/80 font-semibold mt-1">{p.tipo}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto panel-rounded p-10 md:p-16 text-center" style={{ background: "var(--gradient-blush)" }}>
          <h2 className="serif text-4xl md:text-5xl text-tomato-dark mb-6">
            Monte o cardápio do seu <em className="italic">evento</em>.
          </h2>
          <Link to="/orcamento" className="btn-pill btn-tomato">
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
