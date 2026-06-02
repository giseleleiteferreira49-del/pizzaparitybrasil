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

function Logo({ size = 44 }: { size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="Pizza Party Brasil"
      width={size}
      height={size}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto bg-cream-light/85 backdrop-blur-xl rounded-full shadow-[0_8px_30px_-15px_rgba(26,20,16,0.15)] flex items-center justify-between px-3 sm:px-6 py-2.5 border border-ink/5">
        <div className="hidden md:flex items-center gap-7 flex-1">
          <a href="#sobre" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">Sobre</a>
          <Link to="/cardapio" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">Cardápio</Link>
          <a href="#eventos" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">Eventos</a>
        </div>
        <a href="#top" className="flex items-center gap-2 mx-auto md:mx-0">
          <Logo size={42} />
          <span className="serif italic text-tomato text-lg leading-none hidden sm:block">Pizza Party</span>
        </a>
        <div className="hidden md:flex items-center gap-7 flex-1 justify-end">
          <a href="#processo" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">Processo</a>
          <Link to="/orcamento" className="btn-pill btn-tomato !py-2.5 !px-5 !text-[0.7rem]">Orçamento</Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-4 pt-6">
      <div className="max-w-6xl mx-auto panel-rounded relative" style={{ background: "var(--gradient-warm)" }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,220,150,0.6), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(139,31,18,0.5), transparent 60%)"
        }} />
        <div className="relative grid lg:grid-cols-2 gap-6 items-center px-8 md:px-14 py-14 md:py-20 min-h-[560px]">
          <div className="text-cream-light">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-cream-light/80 mb-6">
              <span>05</span>
              <span className="w-12 h-px bg-cream-light/50" />
              <span>→</span>
            </div>
            <h1 className="serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-tight">
              Pizza
              <span className="block italic text-cream-light/95">Napoletana</span>
            </h1>
            <p className="mt-8 max-w-sm text-cream-light/90 text-[0.95rem] leading-relaxed">
              <span className="text-white font-medium">Uma</span> imersão gastronômica artesanal para casamentos, eventos corporativos e celebrações exclusivas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cardapio" className="btn-pill btn-cream">Ver Cardápio</Link>
              <Link to="/orcamento" className="btn-pill btn-tomato !bg-ink !text-cream-light hover:!bg-tomato-dark">Solicitar Orçamento</Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[320px]">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle at center, #FFD79A 0%, transparent 60%)" }} />
            <img src={heroPizza} alt="Pizza napoletana artesanal" className="relative w-full max-w-[420px] aspect-square object-cover rounded-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] rotate-[-6deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="px-4 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="eyebrow mb-5">Sobre Nós</div>
          <h2 className="serif text-5xl md:text-6xl leading-[1.05] mb-6">
            Mais que um buffet, uma <em className="italic warm-gradient-text">experiência</em>.
          </h2>
          <p className="text-ink-soft text-[0.95rem] leading-relaxed mb-4">
            <strong className="text-ink font-semibold">Pizza Party Brasil</strong> — buffet napoletano artesanal para quem busca uma celebração com sabor, ritual e presença.
          </p>
          <p className="text-ink-soft text-[0.95rem] leading-relaxed">
            Massa de longa fermentação, forno em alta temperatura e ingredientes selecionados — servidos diretamente para seus convidados.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-3 rounded-3xl px-5 py-5 flex items-center justify-center text-center" style={{ background: "var(--sage-light)" }}>
            <div>
              <div className="serif text-3xl text-basil leading-none">72h</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-basil/80 mt-1">Fermentação</div>
            </div>
          </div>
          <div className="col-span-3 rounded-3xl px-5 py-5 flex items-center justify-center text-center bg-amber/15">
            <div>
              <div className="serif text-3xl text-tomato leading-none">450°C</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-tomato/80 mt-1">Forno</div>
            </div>
          </div>
          <div className="col-span-4 rounded-3xl p-6" style={{ background: "var(--gradient-sage)" }}>
            <div className="serif text-xl text-basil mb-1">Chef Pizzaiolo</div>
            <p className="text-[0.78rem] text-basil/80 leading-relaxed">No evento, garantindo consistência e qualidade.</p>
          </div>
          <div className="col-span-2 rounded-3xl p-5 flex items-center justify-center text-center bg-ink text-cream-light">
            <div>
              <div className="serif text-2xl leading-none">500+</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-cream-light/70 mt-1">Eventos</div>
            </div>
          </div>
          <div className="col-span-2 rounded-3xl p-5 flex items-center justify-center text-center" style={{ background: "var(--blush)" }}>
            <div className="serif italic text-xl text-tomato-dark leading-none">100%</div>
          </div>
          <div className="col-span-4 rounded-3xl p-6" style={{ background: "var(--gradient-blush)" }}>
            <div className="serif text-xl text-tomato-dark mb-1">Massa Artesanal</div>
            <p className="text-[0.78rem] text-tomato-dark/80 leading-relaxed">Blend de farinhas italianas com azeite de oliva.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SaboresPreview() {
  const featured = [
    { img: pepperoni.url, nome: "Pepperoni", tint: "var(--blush)", accent: "text-tomato-dark" },
    { img: pepperoniBurrata.url, nome: "Pepperoni & Burrata", tint: "var(--sage-light)", accent: "text-basil" },
    { img: quatroQueijos.url, nome: "Quatro Queijos", tint: "#FFE4B5", accent: "text-tomato" },
  ];
  return (
    <section id="sabores" className="px-4 py-24 bg-cream/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Sabores</div>
          <h2 className="serif text-5xl md:text-6xl">Cardápio</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((p) => (
            <div key={p.nome} className="text-center group">
              <div className="relative aspect-square mb-6">
                <div className="absolute inset-4 rounded-full blur-2xl opacity-70" style={{ background: p.tint }} />
                <img src={p.img} alt={p.nome} loading="lazy" className="relative w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105 shadow-[0_20px_50px_-15px_rgba(26,20,16,0.25)]" />
              </div>
              <Link to="/cardapio" className={`btn-pill btn-cream ${p.accent}`}>
                {p.nome} <span>↗</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/cardapio" className="btn-pill btn-outline-ink">Ver cardápio completo</Link>
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const tipos = [
    { t: "Noivados & Matrimônios", bg: "var(--gradient-blush)", color: "text-tomato-dark" },
    { t: "Corporativo", bg: "var(--gradient-sage)", color: "text-basil" },
    { t: "Aniversários", bg: "var(--blush-light)", color: "text-tomato-dark" },
    { t: "Festivais & Marcas", bg: "var(--cream)", color: "text-ink" },
  ];
  return (
    <section id="eventos" className="px-4 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="panel-rounded relative">
          <img src={eventImg} alt="Buffet de pizza em evento" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div>
          <div className="eyebrow mb-4">Eventos</div>
          <h2 className="serif text-5xl md:text-6xl leading-[1.05] mb-8">
            Camadas <em className="italic warm-gradient-text">personalizadas</em> para cada celebração.
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {tipos.map((t) => (
              <div key={t.t} className={`rounded-3xl px-5 py-6 ${t.color}`} style={{ background: t.bg }}>
                <div className="serif text-lg leading-tight">{t.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Processo() {
  const steps = [
    { img: doughImg, n: "01", t: "Massa", d: "Fermentação lenta de 72h." },
    { img: eventImg, n: "02", t: "Preparação", d: "Recheios selecionados e montagem cuidadosa." },
    { img: heroPizza, n: "03", t: "Forno", d: "Assada a 450°C, em 90 segundos." },
  ];
  return (
    <section id="processo" className="px-4 py-24 bg-cream/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="eyebrow mb-4">Processo</div>
          <h2 className="serif text-5xl md:text-6xl">Do <em className="italic warm-gradient-text">calor</em> à mesa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card-soft overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.25em] uppercase text-tomato font-semibold mb-1">{s.n}</div>
                <h3 className="serif text-2xl mb-1">{s.t}</h3>
                <p className="text-sm text-ink-soft">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="px-4 py-12">
      <div className="max-w-6xl mx-auto panel-rounded relative" style={{ background: "var(--gradient-blush)" }}>
        <div className="grid lg:grid-cols-2 gap-8 items-center px-8 md:px-14 py-14 md:py-20">
          <div>
            <h2 className="serif text-5xl md:text-6xl leading-[1.05] mb-6 text-tomato-dark">
              Vamos <em className="italic">conversar?</em>
            </h2>
            <p className="text-tomato-dark/80 text-[0.95rem] max-w-md mb-8">
              Conte-nos sobre o seu evento. Respondemos em até 24 horas com uma proposta personalizada.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/orcamento" className="btn-pill btn-tomato">Solicitar Orçamento</Link>
              <a href="https://wa.me/5511974418038?text=Gostaria%20de%20mais%20informações" className="btn-pill btn-cream">WhatsApp</a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="card-soft p-6">
              <div className="eyebrow mb-2 !text-ink-soft">WhatsApp</div>
              <div className="serif text-2xl text-ink">+55 11 97441-8038</div>
            </div>
            <div className="card-soft p-6">
              <div className="eyebrow mb-2 !text-ink-soft">Atendimento</div>
              <div className="serif text-2xl text-ink">São Paulo · SP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <span className="serif italic text-tomato text-lg">Pizza Party Brasil</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-ink/50">
          <a href="#sobre" className="hover:text-tomato transition-colors">Sobre</a>
          <Link to="/cardapio" className="hover:text-tomato transition-colors">Cardápio</Link>
          <a href="#eventos" className="hover:text-tomato transition-colors">Eventos</a>
          <a href="#contato" className="hover:text-tomato transition-colors">Contato</a>
        </div>
        <p className="text-xs text-ink/40">© 2026</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-paper text-ink min-h-screen pb-6">
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
