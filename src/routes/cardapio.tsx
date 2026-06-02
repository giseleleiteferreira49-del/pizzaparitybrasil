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
  component: Cardapio,
});

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

function Cardapio() {
  return (
    <div className="bg-black text-cream-light min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Pizza Party" width={36} height={36} className="rounded-full" style={{ width: 36, height: 36 }} />
          <div className="serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party</div>
        </Link>
        <Link to="/" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/60 hover:text-gold transition-colors">
          ← Voltar
        </Link>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="eyebrow mb-4">Cardápio</div>
          <h1 className="serif text-5xl md:text-7xl leading-[1.05]">
            Sabores <em className="serif gold-gradient-text italic">inesquecíveis</em>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
          {pizzas.map((p) => (
            <figure key={p.nome} className="group text-center">
              <div className="aspect-square overflow-hidden bg-black-warm rounded-full">
                <img
                  src={p.img}
                  alt={p.nome}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="serif text-xl text-cream-light">{p.nome}</h3>
                <div className="text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mt-1">{p.tipo}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="https://wa.me/5511974418038?text=Gostaria%20de%20mais%20informações" className="btn-gold btn-gold-hover">
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
}
