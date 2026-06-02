import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";
import doughImg from "@/assets/dough.jpg";
import eventImg from "@/assets/event.jpg";

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
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
      <a href="#top" className="flex items-center gap-3">
        <Logo size={36} />
        <div className="hidden sm:block serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party</div>
      </a>
      <ul className="hidden md:flex gap-8 list-none items-center">
        <li><a href="#servico" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">Serviço</a></li>
        <li><Link to="/cardapio" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">Cardápio</Link></li>
        <li><a href="#eventos" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">Eventos</a></li>
        <li><a href="#contato" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">Contato</a></li>
      </ul>
      <a href="#contato" className="btn-gold btn-gold-hover text-[0.62rem] !py-2 !px-4">Orçamento</a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black-warm">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(123,31,46,0.20) 0%, transparent 60%)`,
        }}
      />
      <img src={heroPizza} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <Logo size={110} />
        </div>
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
          Uma <em className="serif gold-gradient-text italic">imersão gastronômica</em>
          <span className="block mt-2 text-cream-light">para os seus convidados.</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contato" className="btn-gold btn-gold-hover">Solicitar Orçamento</a>
          <Link to="/cardapio" className="btn-ghost-gold hover:bg-gold hover:text-black-rich">Ver Cardápio</Link>
        </div>
      </div>
    </section>
  );
}

function Servico() {
  const pillars = [
    { n: "01", t: "Chef Pizzaiolo no Evento" },
    { n: "02", t: "Tecnologia na Preparação" },
    { n: "03", t: "Massa Artesanal" },
  ];
  return (
    <section id="servico" className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <div className="eyebrow mb-4">O Serviço</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight">
            Mais que um buffet, uma <em className="serif gold-gradient-text italic">experiência gastronômica</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {pillars.map((p) => (
            <div key={p.n} className="bg-black-warm p-12 hover:bg-black-card transition-colors group">
              <div className="serif text-gold/50 text-5xl mb-6 group-hover:text-gold transition-colors">{p.n}</div>
              <h3 className="serif text-2xl text-cream-light">{p.t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const tipos = [
    { t: "Noivados & Matrimônios" },
    { t: "Corporativo" },
    { t: "Aniversários" },
    { t: "Festivais & Marcas" },
  ];
  return (
    <section id="eventos" className="py-32 bg-black-warm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <img src={eventImg} alt="Buffet de pizza em evento" loading="lazy" className="w-full aspect-[4/3] object-cover" />
        <div>
          <div className="eyebrow mb-4">Eventos</div>
          <h2 className="serif text-4xl md:text-5xl mb-10 leading-tight">
            Camadas <em className="serif gold-gradient-text italic">personalizadas</em> para cada celebração.
          </h2>
          <div className="space-y-4">
            {tipos.map((t) => (
              <div key={t.t} className="border-l border-gold/40 pl-5 hover:border-gold transition-colors">
                <h3 className="serif text-xl text-gold-light">{t.t}</h3>
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
    { img: doughImg, n: "01", t: "Massa" },
    { img: eventImg, n: "02", t: "Preparação" },
    { img: heroPizza, n: "03", t: "Forno" },
  ];
  return (
    <section id="processo" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Processo</div>
          <h2 className="serif text-4xl md:text-5xl">Do <em className="serif gold-gradient-text italic">calor</em> à mesa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="serif text-gold text-2xl">{s.n}</div>
                  <h3 className="serif text-2xl text-cream-light">{s.t}</h3>
                </div>
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
    <section id="contato" className="py-32 bg-black-warm relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.2), transparent 70%)` }} />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="eyebrow mb-4">Vamos Conversar</div>
        <h2 className="serif text-4xl md:text-6xl mb-12 leading-tight">
          Pronto para <em className="serif gold-gradient-text italic">surpreender</em>?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="https://wa.me/5511974418038?text=Gostaria%20de%20mais%20informações" className="btn-gold btn-gold-hover">WhatsApp</a>
          <a href="https://pizzapartybrasil.com.br/#form" className="btn-ghost-gold hover:bg-gold hover:text-black-rich">Orçamento no Site</a>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 text-center pt-12 border-t border-gold/15">
          <div>
            <div className="eyebrow mb-2 !text-cream/40">WhatsApp</div>
            <div className="serif text-gold-light text-lg">+55 11 97441-8038</div>
          </div>
          <div>
            <div className="eyebrow mb-2 !text-cream/40">Atendimento</div>
            <div className="serif text-gold-light text-lg">São Paulo · SP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-10 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div className="serif text-gold text-sm tracking-[0.18em] uppercase">Pizza Party Brasil</div>
        </div>
        <p className="text-[0.6rem] tracking-[0.22em] uppercase text-cream/30">© 2026</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-black text-cream-light">
      <Nav />
      <Hero />
      <Servico />
      <Eventos />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
}
