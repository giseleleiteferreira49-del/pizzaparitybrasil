import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";
import doughImg from "@/assets/processo-massa.jpg.asset.json";
import ovenImg from "@/assets/processo-forno.jpg.asset.json";
import servicoImg from "@/assets/processo-servico.jpg.asset.json";
import celebracaoImg from "@/assets/celebracao-pizza.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Party Brasil — Pizza Napoletana Artesanal" },
      { name: "description", content: "Pizza napoletana artesanal para celebrações exclusivas. Longa fermentação, forno em alta temperatura e pizzaiolo no local." },
      { property: "og:title", content: "Pizza Party Brasil — Pizza Napoletana Artesanal" },
      { property: "og:description", content: "Pizza napoletana artesanal para celebrações exclusivas." },
      { property: "og:image", content: heroPizza },
    ],
  }),
  component: Index,
});

function Logo({ size = 44 }: { size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="Pizza Party Brasil — Napoletana"
      width={size}
      height={size}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  );
}

function Nav() {
  const links = [
    { href: "#servico", label: "Serviço" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#processo", label: "Processo" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
      <a href="#top" className="flex items-center gap-3">
        <Logo size={36} />
        <div className="hidden sm:block leading-tight">
          <div className="serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party Brasil</div>
          <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/40">Napoletana</div>
        </div>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contato" className="btn-gold btn-gold-hover text-[0.62rem] !py-2 !px-4">Orçamento</a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black-warm">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(123,31,46,0.25) 0%, transparent 60%)`,
        }}
      />
      <img
        src={heroPizza}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <Logo size={120} />
        </div>
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          Uma <span className="serif gold-gradient-text text-6xl md:text-8xl lg:text-9xl italic block mt-2">Imersão Gastronômica</span>
          <span className="block mt-2 text-cream-light">para os seus convidados.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-cream/70 text-lg md:text-xl font-light mb-10">
          Massa de longa fermentação, forno em alta temperatura e ingredientes selecionados, servidos diretamente para seus convidados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contato" className="btn-gold btn-gold-hover">Solicitar Orçamento</a>
          <a href="#cardapio" className="btn-ghost-gold hover:bg-gold hover:text-black-rich">Ver Cardápio</a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[0.65rem] tracking-[0.25em] uppercase text-cream/40">
          <span>72h de fermentação</span>
          <span className="text-gold">·</span>
          <span>Forno a 450°C</span>
          <span className="text-gold">·</span>
          <span>Pizzaiolo no local</span>
        </div>
      </div>
    </section>
  );
}

function Servico() {
  const pillars = [
    { n: "01", t: "Chef Pizzaiolo no Evento", d: "Garantimos a consistência e a qualidade das Pizzas em todo o processo. Uma atenção genuína elaborada com amor e respeito ao seu paladar." },
    { n: "02", t: "Tecnologia na Preparação", d: "Nossas Pizzas são assadas em temperatura controlada que atinge 450°C. Cada pizza assa em 90 segundos, com borda alveolada mantendo o Aroma Característico e Delicioso." },
    { n: "03", t: "Massa Artesanal", d: "Fermentação natural de 72 horas com Blend de farinhas italianas selecionadas. Azeite de Oliva que proporciona leveza, digestibilidade e sabor incomparáveis." },
  ];
  return (
    <section id="servico" className="py-32 bg-black-warm relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <div className="eyebrow mb-4">O Serviço</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Mais que um buffet, uma <em className="serif gold-gradient-text text-5xl md:text-6xl italic">experiência gastronômica</em>.
          </h2>
          <p className="text-cream/65 text-lg">
            Conduzimos você e seus convidados por uma aventura de aromas, paladares e sensações que nunca sentiram ao degustar uma pizza. Algo único, inovador e memorável.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {pillars.map((p) => (
            <div key={p.n} className="bg-black-warm p-10 hover:bg-black-card transition-colors group">
              <div className="serif text-gold/50 text-5xl mb-6 group-hover:text-gold transition-colors">{p.n}</div>
              <h3 className="serif text-2xl mb-4 text-cream-light">{p.t}</h3>
              <p className="text-cream/55 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cardapio() {
  const pizzas = [
    { nome: "Margherita D.O.P.", desc: "Molho de tomate San Marzano, mozzarella di bufala, manjericão fresco, azeite extra-virgem.", tipo: "Clássica" },
    { nome: "Diavola", desc: "Tomate, fior di latte, salame piccante calabrês, mel de pimenta.", tipo: "Picante" },
    { nome: "Quatro Formaggi", desc: "Mozzarella, gorgonzola, parmigiano reggiano 24 meses, taleggio.", tipo: "Branca" },
    { nome: "Prosciutto e Rucola", desc: "Mozzarella, prosciutto di Parma, rúcula selvagem, lascas de parmesão.", tipo: "Especial" },
    { nome: "Funghi Tartufati", desc: "Creme branco, mix de cogumelos, mozzarella, óleo de trufa negra.", tipo: "Premium" },
    { nome: "Capricciosa", desc: "Tomate, mozzarella, presunto cozido, cogumelos, alcachofras, azeitonas.", tipo: "Clássica" },
    { nome: "Doce: Nutella & Frutas", desc: "Massa fina assada, creme de avelã, morangos, framboesas, açúcar de confeiteiro.", tipo: "Sobremesa" },
    { nome: "Doce: Banana com Canela", desc: "Doce de leite artesanal, banana caramelizada, canela em pó.", tipo: "Sobremesa" },
  ];
  return (
    <section id="cardapio" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">Cardápio</div>
          <h2 className="serif text-4xl md:text-5xl mb-4">
            Sabores Inesquecíveis
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto mb-8">Selecione livremente os sabores harmonizando entre doces e salgados.</p>
          <a href="#contato" className="btn-gold btn-gold-hover inline-block">Veja nosso cardápio completo</a>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-16">
          {pizzas.map((p) => (
            <div key={p.nome} className="group">
              <div className="flex items-baseline justify-between gap-4 mb-2 pb-2 border-b border-gold/20 group-hover:border-gold/60 transition-colors">
                <h3 className="serif text-2xl text-cream-light">{p.nome}</h3>
                <span className="text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 whitespace-nowrap">{p.tipo}</span>
              </div>
              <p className="text-cream/55 text-sm leading-relaxed italic">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/40 text-xs tracking-[0.2em] uppercase mt-16">
          + Antepastos, Bruschetta, Mini saladas
        </p>
      </div>
    </section>
  );
}

function Celebracao() {
  return (
    <section className="py-32 relative bg-black-warm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={celebracaoImg.url} alt="Convidado celebrando com pizza" width={1463} height={974} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-black-rich border border-gold/40 p-6 max-w-xs">
            <div className="serif gold-gradient-text text-5xl">500+</div>
            <div className="text-xs text-cream/60 tracking-[0.15em] uppercase mt-1">celebrações realizadas</div>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">Celebrações</div>
          <h2 className="serif text-4xl md:text-5xl mb-8 leading-tight">
            Momentos que ficam na <em className="serif gold-gradient-text text-5xl md:text-6xl italic">memória</em>.
          </h2>
          <p className="text-cream/65 text-lg mb-6">
            Cada celebração é única. Personalizamos o cardápio, o ritmo do serviço e a experiência para que seus convidados vivam algo verdadeiramente memorável.
          </p>
          <p className="text-cream/55">
            Mais de 500 celebrações conduzidas pelo nosso Chef Pizzaiolo, com a qualidade artesanal da Pizza Party Brasil.
          </p>
        </div>
      </div>
    </section>
  );
}

function Processo() {
  const steps = [
    { img: doughImg.url, n: "01", t: "Massa", d: "Tudo começa pelas mãos. Fermentação lenta de 72h com Blend das melhores farinhas italianas tipo 00, o tempo é o nosso ingrediente secreto." },
    { img: ovenImg.url, n: "02", t: "Forno", d: "Assadas com perfeição a 450°C, liberando os sabores e aromas em segundos. O controle excelente entre agilidade e cozimento que só o forno napoletano entrega." },
    { img: servicoImg.url, n: "03", t: "Serviço", d: "O Chef Pizzaiolo cria a obra e, com precisão, servimos seus convidados, para que absorvam, fatia a fatia, a melhor experiência da noite." },
  ];
  return (
    <section id="processo" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow mb-4">Processo</div>
          <h2 className="serif text-4xl md:text-5xl mb-6">Do <em className="serif gold-gradient-text text-5xl md:text-6xl italic">Calor</em> à Mesa</h2>
          <p className="text-cream/65 text-lg">
            Três atos de uma mesma celebração: a paciência da massa, a intensidade do forno e o ritual de servir. Cada etapa pensada para transformar uma refeição em memória.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="relative overflow-hidden mb-5 aspect-[4/5]">
                <img src={s.img} alt={s.t} width={1024} height={1280} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-5 serif text-gold text-3xl">{s.n}</div>
              </div>
              <h3 className="serif text-2xl mb-2">{s.t}</h3>
              <p className="text-cream/55 text-sm leading-relaxed">{s.d}</p>
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
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.2), transparent 70%)` }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="eyebrow mb-4">Vamos Conversar</div>
        <h2 className="serif text-4xl md:text-6xl mb-6 leading-tight">
          Pronto para <em className="serif gold-gradient-text text-5xl md:text-7xl italic">surpreender</em> seus convidados?
        </h2>
        <p className="text-cream/65 text-lg mb-12 max-w-xl mx-auto">
          Conte-nos sobre a sua celebração. Respondemos em até 24 horas com uma proposta personalizada.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://wa.me/5511974418038" className="btn-gold btn-gold-hover">WhatsApp</a>
          <a href="mailto:contato@pizzapartybrasil.com" className="btn-ghost-gold hover:bg-gold hover:text-black-rich">E-mail</a>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-center pt-12 border-t border-gold/15">
          <div>
            <div className="eyebrow mb-2 !text-cream/40">Telefone</div>
            <div className="serif text-gold-light text-lg">+55 11 97441-8038</div>
          </div>
          <div>
            <div className="eyebrow mb-2 !text-cream/40">E-mail</div>
            <div className="serif text-gold-light text-lg">contato@pizzapartybrasil.com</div>
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
    <footer className="bg-black py-12 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <div className="leading-tight">
            <div className="serif text-gold text-sm tracking-[0.18em] uppercase">Pizza Party Brasil</div>
            <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/35">Napoletana · Longa Fermentação</div>
          </div>
        </div>
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/30">© 2026 · Feito com fogo, farinha e fermento.</p>
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
      <Cardapio />
      <Celebracao />
      <Processo />
      <Contato />
      <Footer />
    </div>
  );
}
