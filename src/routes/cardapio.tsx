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
import margherita from "@/assets/menu/margherita.jpeg.asset.json";
import napoletana from "@/assets/menu/napoletana.jpeg.asset.json";
import margueritaParmesao from "@/assets/menu/marguerita-parmesao.jpeg.asset.json";
import burrata from "@/assets/menu/burrata.jpeg.asset.json";
import milho from "@/assets/menu/milho.jpeg.asset.json";
import frangoCatupiry from "@/assets/menu/frango-catupiry.jpeg.asset.json";
import frangoEspecial from "@/assets/menu/frango-especial.jpeg.asset.json";
import chocolateMorango from "@/assets/menu/chocolate-morango.jpeg.asset.json";
import chocolateBelga from "@/assets/menu/chocolate-belga.jpeg.asset.json";
import oreo from "@/assets/menu/oreo.jpeg.asset.json";

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

const pizzas = [
  { img: margherita.url, nome: "Margherita", tipo: "Clássica" },
  { img: pepperoni.url, nome: "Pepperoni", tipo: "Clássica" },
  { img: pepperoniBurrata.url, nome: "Pepperoni & Burrata", tipo: "Especial" },
  { img: burrata.url, nome: "Burrata", tipo: "Especial" },
  { img: napoletana.url, nome: "Napoletana", tipo: "Tradicional" },
  { img: margueritaParmesao.url, nome: "Marguerita & Parmesão", tipo: "Branca" },
  { img: calabresa.url, nome: "Calabresa", tipo: "Tradicional" },
  { img: picadinho.url, nome: "Picadinho", tipo: "Carne" },
  { img: quatroQueijos.url, nome: "Quatro Queijos", tipo: "Branca" },
  { img: carciofi.url, nome: "Carciofi", tipo: "Vegetariana" },
  { img: brasileira.url, nome: "Brasileira", tipo: "Tradicional" },
  { img: palmito.url, nome: "Palmito", tipo: "Vegetariana" },
  { img: milho.url, nome: "Milho", tipo: "Vegetariana" },
  { img: peitoPeru.url, nome: "Peito de Peru & Catupiry", tipo: "Branca" },
  { img: frangoCatupiry.url, nome: "Frango & Catupiry", tipo: "Tradicional" },
  { img: frangoEspecial.url, nome: "Frango Especial", tipo: "Especial" },
  { img: chocolateCoco.url, nome: "Chocolate & Coco", tipo: "Sobremesa" },
  { img: chocolateMorango.url, nome: "Chocolate & Morango", tipo: "Sobremesa" },
  { img: chocolateBelga.url, nome: "Chocolate Belga", tipo: "Sobremesa" },
  { img: oreo.url, nome: "Oreo", tipo: "Sobremesa" },
];

function CardapioPage() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Pizza Party" width={32} height={32} style={{ width: 32, height: 32 }} />
            <span className="serif italic text-gold text-base">Pizza Party</span>
          </Link>
          <Link to="/" className="text-[0.7rem] tracking-[0.22em] uppercase text-ink/70 hover:text-gold transition-colors">
            ← Voltar
          </Link>
        </nav>
      </header>

      <section className="px-6 lg:px-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">Cardápio</div>
          <h1 className="serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-cream-light max-w-3xl">
            Sabores <em className="italic text-gold">inesquecíveis</em>
          </h1>
          <p className="mt-8 max-w-md text-ink/60 text-sm leading-relaxed">
            Selecione livremente, harmonizando entre doces e salgados.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {pizzas.map((p) => (
            <figure key={p.nome} className="bg-paper group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.nome}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-5">
                <div className="text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mb-2">{p.tipo}</div>
                <h3 className="serif text-lg text-cream-light leading-tight">{p.nome}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 border-t border-ink/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="serif text-4xl md:text-5xl text-cream-light mb-8">
            Monte o cardápio do seu <em className="italic text-gold">evento</em>.
          </h2>
          <Link to="/orcamento" className="btn-pill btn-tomato">
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
