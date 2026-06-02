import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";
import doughImg from "@/assets/dough.jpg";
import eventImg from "@/assets/event.jpg";
import pepperoni from "@/assets/menu/pepperoni.jpeg.asset.json";
import pepperoniBurrata from "@/assets/menu/pepperoni-burrata.jpeg.asset.json";
import quatroQueijos from "@/assets/menu/quatro-queijos.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Party Brasil — Buffet de Pizza Napoletana" },
      { name: "description", content: "Buffet de pizza napoletana artesanal para casamentos e eventos exclusivos." },
      { property: "og:title", content: "Pizza Party Brasil — Buffet de Pizza Napoletana" },
      { property: "og:image", content: heroPizza },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Pizza Party Brasil" width={32} height={32} style={{ width: 32, height: 32 }} />
          <span className="serif italic text-gold text-base tracking-wide">Pizza Party</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[0.7rem] tracking-[0.22em] uppercase">
          <a href="#sobre" className="text-ink/70 hover:text-gold transition-colors">Sobre</a>
          <Link to="/cardapio" className="text-ink/70 hover:text-gold transition-colors">Cardápio</Link>
          <a href="#eventos" className="text-ink/70 hover:text-gold transition-colors">Eventos</a>
          <a href="#processo" className="text-ink/70 hover:text-gold transition-colors">Processo</a>
        </div>
        <Link to="/orcamento" className="text-[0.7rem] tracking-[0.22em] uppercase text-gold hover:text-tomato transition-colors">
          Orçamento
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-32 min-h-[80vh]">
        <div>
          <div className="flex items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-gold/70 mb-10">
            <span>01</span>
            <span className="w-16 h-px bg-gold/30" />
            <span>Napoletana</span>
          </div>
          <h1 className="serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-cream-light">
            Pizza<br/>
            <span className="italic text-gold">Napoletana</span>
          </h1>
          <p className="mt-10 max-w-md text-ink/60 text-sm leading-relaxed">
            Uma imersão gastronômica artesanal para casamentos, eventos corporativos e celebrações exclusivas.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/orcamento" className="btn-pill btn-tomato">Solicitar Orçamento</Link>
            <Link to="/cardapio" className="btn-pill btn-outline-ink">Ver Cardápio</Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={heroPizza} alt="Pizza napoletana artesanal" className="w-full max-w-[480px] aspect-square object-cover" />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="eyebrow mb-6">Sobre</div>
          <h2 className="serif text-4xl md:text-5xl leading-[1.1] text-cream-light">
            Mais que um buffet,<br/>
            <em className="italic text-gold">uma experiência.</em>
          </h2>
        </div>
        <div className="space-y-8 text-ink/70 text-sm leading-relaxed">
          <p>
            Pizza Party Brasil é um buffet napoletano artesanal para quem busca uma celebração com sabor, ritual e presença.
          </p>
          <p>
            Massa de longa fermentação, forno em alta temperatura e ingredientes selecionados — servidos diretamente para seus convidados.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-ink/10">
            <div>
              <div className="serif text-3xl text-gold">72h</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-ink/50 mt-2">Fermentação</div>
            </div>
            <div>
              <div className="serif text-3xl text-gold">450°</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-ink/50 mt-2">Forno</div>
            </div>
            <div>
              <div className="serif text-3xl text-gold">500+</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-ink/50 mt-2">Eventos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SaboresPreview() {
  const featured = [
    { img: pepperoni.url, nome: "Pepperoni" },
    { img: pepperoniBurrata.url, nome: "Pepperoni & Burrata" },
    { img: quatroQueijos.url, nome: "Quatro Queijos" },
  ];
  return (
    <section id="sabores" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="eyebrow mb-4">Sabores</div>
            <h2 className="serif text-4xl md:text-5xl text-cream-light">Cardápio</h2>
          </div>
          <Link to="/cardapio" className="hidden md:inline-block text-[0.7rem] tracking-[0.22em] uppercase text-gold hover:text-tomato transition-colors">
            Ver tudo →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {featured.map((p) => (
            <Link to="/cardapio" key={p.nome} className="bg-paper group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.nome} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="px-6 py-6 flex items-center justify-between">
                <h3 className="serif text-xl text-cream-light">{p.nome}</h3>
                <span className="text-gold text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const tipos = [
    "Casamentos",
    "Corporativo",
    "Aniversários",
    "Festivais & Marcas",
  ];
  return (
    <section id="eventos" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <img src={eventImg} alt="Buffet de pizza em evento" className="w-full aspect-[4/5] object-cover" />
        <div>
          <div className="eyebrow mb-6">Eventos</div>
          <h2 className="serif text-4xl md:text-5xl leading-[1.1] mb-12 text-cream-light">
            Camadas <em className="italic text-gold">personalizadas</em><br/>
            para cada celebração.
          </h2>
          <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {tipos.map((t) => (
              <li key={t} className="py-5 flex items-center justify-between">
                <span className="serif text-lg text-cream-light">{t}</span>
                <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold/60">Sob medida</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Processo() {
  const steps = [
    { img: doughImg, n: "01", t: "Massa", d: "Fermentação lenta de 72 horas." },
    { img: eventImg, n: "02", t: "Preparação", d: "Recheios selecionados e montagem cuidadosa." },
    { img: heroPizza, n: "03", t: "Forno", d: "Assada a 450°C em 90 segundos." },
  ];
  return (
    <section id="processo" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="mb-16">
          <div className="eyebrow mb-4">Processo</div>
          <h2 className="serif text-4xl md:text-5xl text-cream-light">Do <em className="italic text-gold">calor</em> à mesa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-8">
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">{s.n}</div>
              <h3 className="serif text-2xl text-cream-light mb-2">{s.t}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow mb-6">Contato</div>
          <h2 className="serif text-5xl md:text-6xl leading-[1.05] text-cream-light">
            Vamos <em className="italic text-gold">conversar?</em>
          </h2>
          <p className="mt-8 text-ink/60 text-sm max-w-md leading-relaxed">
            Conte-nos sobre o seu evento. Respondemos em até 24 horas com uma proposta personalizada.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/orcamento" className="btn-pill btn-tomato">Solicitar Orçamento</Link>
            <a href="https://wa.me/5511974418038?text=Gostaria%20de%20mais%20informações" className="btn-pill btn-outline-ink">WhatsApp</a>
          </div>
        </div>
        <div className="space-y-8 lg:border-l lg:border-ink/10 lg:pl-16">
          <div>
            <div className="eyebrow mb-3">WhatsApp</div>
            <div className="serif text-3xl text-cream-light">+55 11 97441-8038</div>
          </div>
          <div className="h-px bg-ink/10" />
          <div>
            <div className="eyebrow mb-3">Atendimento</div>
            <div className="serif text-3xl text-cream-light">São Paulo · SP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Pizza Party Brasil" width={28} height={28} style={{ width: 28, height: 28 }} />
          <span className="serif italic text-gold text-base">Pizza Party Brasil</span>
        </div>
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ink/40">© 2026 — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      <Nav />
      <Hero />
      <Sobre />
      <SaboresPreview />
      <Eventos />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
}
