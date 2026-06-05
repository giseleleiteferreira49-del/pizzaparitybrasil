import { useState } from "react";
import { UtensilsCrossed, Coffee, Wine, Star, Check } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";
import doughImg from "@/assets/processo-massa.jpg.asset.json";
import ovenImg from "@/assets/processo-forno.jpg.asset.json";
import servicoImg from "@/assets/processo-servico.jpg.asset.json";
import celebracaoImg from "@/assets/celebracao-pizza.jpg.asset.json";
import hookDecepcao from "@/assets/hook-decepcao.png.asset.json";
import hookEstressado from "@/assets/hook-estressado.png.asset.json";
import hookEsquecivel from "@/assets/hook-esquecivel.png.asset.json";
import hookPagouCaro from "@/assets/hook-pagou-caro.png.asset.json";
import incSemGluten from "@/assets/inc-sem-gluten.png.asset.json";
import incVegana from "@/assets/inc-vegana.png.asset.json";
import incSemLactose from "@/assets/inc-sem-lactose.png.asset.json";
import pacotePrata from "@/assets/pacote-prata.png.asset.json";
import pacoteOuro from "@/assets/pacote-ouro.png.asset.json";
import pacoteExperience from "@/assets/pacote-experience.png.asset.json";
import car1 from "@/assets/carrossel/c1.png.asset.json";
import car2 from "@/assets/carrossel/c2.jpg.asset.json";
import car3 from "@/assets/carrossel/c3.jpg.asset.json";
import car4 from "@/assets/carrossel/c4.jpg.asset.json";
import car5 from "@/assets/carrossel/c5.jpg.asset.json";
import car6 from "@/assets/carrossel/c6.jpg.asset.json";
import car7 from "@/assets/carrossel/c7.jpg.asset.json";
import car8 from "@/assets/carrossel/c8.jpg.asset.json";
import car9 from "@/assets/carrossel/c9.jpg.asset.json";
import car10 from "@/assets/carrossel/c10.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Party Brasil — Buffet Premium de Pizzas para Eventos" },
      { name: "description", content: "Buffet Premium de Pizzas para Celebrações, Aniversários e Eventos Corporativos em São Paulo. Mais de 8.000 eventos realizados desde 2013." },
      { property: "og:title", content: "Pizza Party Brasil — Buffet Premium de Pizzas para Eventos" },
      { property: "og:description", content: "Buffet Premium de Pizzas para Celebrações, Aniversários e Eventos Corporativos em São Paulo." },
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
    { href: "#diferencial", label: "Experiência" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#pacotes", label: "Pacotes" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
      <a href="#top" className="flex items-center gap-3">
        <Logo size={36} />
        <div className="hidden sm:block leading-tight">
          <div className="serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party Brasil</div>
          <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/40">Buffet Premium de Pizzas</div>
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
      <img src={heroPizza} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8"><Logo size={120} /></div>
        <div className="eyebrow mb-6 justify-center">Uma experiência exclusiva para você</div>
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          Seu evento merece mais que uma <em className="serif gold-gradient-text italic">pizza</em>.
          <span className="block mt-2 text-cream-light">Merece uma <em className="serif gold-gradient-text italic">memória</em>.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-cream/70 text-lg md:text-xl font-light mb-3">
          Buffet Premium de Pizzas para Celebrações, Aniversários e Eventos Corporativos em São Paulo
        </p>
        <p className="max-w-2xl mx-auto text-cream/50 text-sm md:text-base font-light mb-10 tracking-wide">
          Mais de 25 sabores · Sem limite de consumo · Jornada sensorial em 4 tempos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contato" className="btn-gold btn-gold-hover">Solicitar Orçamento</a>
          <a href="#diferencial" className="btn-ghost-gold hover:bg-gold hover:text-black-rich">Nossa experiência</a>
        </div>
        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-4">
          {[
            { n: "10+", l: "Anos de tradição" },
            { n: "8.000+", l: "Eventos realizados" },
            { n: <span className="inline-flex items-center gap-1">5 <Star className="w-5 h-5 fill-current" /></span>, l: "Google Reviews" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="serif gold-gradient-text text-3xl md:text-4xl">{s.n}</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-cream/40 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hook() {
  const hooks = [
    { img: hookDecepcao.url, t: "O buffet decepcionou seus convidados", d: "Pizza fria, massa borrachuda, sabores genéricos. A comida deveria ser o ponto alto, virou o ponto de conversa errado. Isso nunca mais vai acontecer no seu evento." },
    { img: hookEstressado.url, t: "O serviço foi desorganizado e estressante", d: "Equipe despreparada, atrasos, falta de atenção. Você deveria estar curtindo a festa, não resolvendo problema de fornecedor. Nossa equipe cuida de tudo para você." },
    { img: hookEsquecivel.url, t: "A comida foi esquecível", d: "Semanas depois do evento, ninguém falava sobre a comida. A experiência não criou memória. Nossos clientes recebem mensagens dos convidados pedindo o contato da pizza." },
    { img: hookPagouCaro.url, t: "Pagou caro por algo ordinário", d: "Preço premium, entrega mediana. Qualidade inconsistente que não justificou o investimento. Com a Pizza Party Brasil, cada real investido se traduz em experiência visível e memorável." },
  ];
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">O problema que resolvemos</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Você já viveu alguma dessas <em className="serif gold-gradient-text italic">situações?</em>
          </h2>
          <p className="text-cream/65 text-lg">Esses são os momentos que nos motivam a existir, e que nos fazem trabalhar com obsessão por cada detalhe.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {hooks.map((h) => (
            <div key={h.t} className="bg-black p-10 hover:bg-black-card transition-colors flex gap-6 items-start">
              <img src={h.img} alt={h.t} loading="lazy" className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 -mt-2" />
              <div>
                <h3 className="serif text-xl mb-3 text-cream-light">{h.t}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{h.d}</p>
              </div>
            </div>
          ))}
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

function Diferencial() {
  const tempos = [
    { n: "01", badge: "Despertar", nome: "Abertura com Frescor", desc: "Pizzas leves, aromáticas e herbáceas que despertam as papilas sem causar fadiga sensorial. O início perfeito para preparar o paladar para o que vem a seguir.", sci: "Sabores suaves e herbáceos estimulam as papilas degustativas sem causar sobrecarga sensorial, preparando o convidado para absorver toda a experiência que virá." },
    { n: "02", badge: "Clássico", nome: "Conforto e Familiaridade", desc: "Sabores tradicionais e queridinhos que evocam os melhores fins de semana em família. O momento em que seus convidados relaxam completamente e se sentem em casa.", sci: "Sabores familiares ativam memórias afetivas e proporcionam uma sensação profunda de satisfação e conforto, o gatilho emocional mais poderoso da experiência." },
    { n: "03", badge: "Ápice", nome: "Combinações Ousadas", desc: "Pizzas premium com ingredientes nobres e combinações inesperadas. O pico da experiência, o momento que gera conversas, surpresas e que será lembrado por muito tempo.", sci: "O contraste com sabores mais intensos cria o pico de experiência sensorial. É neste momento que memórias gastronômicas duradouras são formadas no cérebro." },
    { n: "04", badge: "Celebração Doce", nome: "Finalização Memorável", desc: "Pizzas doces gourmet que encerram a jornada com doçura e leveza. A última impressão, e a mais poderosa, que seus convidados levarão para sempre.", sci: "Sabores doces estimulam a liberação de dopamina e serotonina, gerando uma sensação genuína de satisfação. A última impressão define como o evento inteiro será lembrado." },
  ];
  return (
    <section id="diferencial" className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Nosso diferencial</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Não é um rodízio. <br/>É uma <em className="serif gold-gradient-text italic">jornada sensorial</em>.
          </h2>
          <p className="text-cream/65 text-lg">Cada evento é dividido em 4 momentos cuidadosamente orquestrados — uma sequência de sabores planejada para surpreender seus convidados do início ao fim.</p>
        </div>
        <div className="space-y-px bg-gold/15">
          {tempos.map((t) => (
            <div key={t.n} className="bg-black-warm grid md:grid-cols-12 gap-8 p-8 md:p-10 hover:bg-black-card transition-colors">
              <div className="md:col-span-1 serif text-gold/50 text-5xl">{t.n}</div>
              <div className="md:col-span-6">
                <span className="inline-block text-[0.6rem] tracking-[0.22em] uppercase text-gold border border-gold/40 px-3 py-1 mb-3">{t.badge}</span>
                <h3 className="serif text-2xl text-cream-light mb-2">{t.nome}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
              <div className="md:col-span-5 border-l border-gold/15 pl-6">
                <p className="text-cream/45 text-sm italic leading-relaxed">"{t.sci}"</p>
              </div>
            </div>
          ))}
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
          <p className="text-cream/65 text-lg">Três atos de uma mesma celebração: a paciência da massa, a intensidade do forno e o ritual de servir.</p>
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


function Pacotes() {
  const pacotes = [
    { tier: "Pacote 01", nome: "Prata", img: pacotePrata.url, tag: "A experiência completa em 4 tempos com foco no essencial: pizza artesanal impecável, serviço profissional e sabores que surpreendem.", inc: [
      "16 sabores em 4 tempos sensoriais", "Garçom dedicado para servir", "Massa artesanal tradicional", "Suporte de apresentação", "Guardanapos inclusos",
    ]},
    { tier: "Pacote 02", nome: "Ouro", featured: true, img: pacoteOuro.url, tag: "A escolha mais popular, combina a jornada sensorial completa com entradinhas sofisticadas, bebidas e serviço de mesa elegante.", inc: [
      "25 sabores em 4 tempos sensoriais", "Corniccione com antepasto de entrada", "Garçom dedicado para servir", "Massa artesanal tradicional", "Copos de vidro, pratos com talheres", "Refrigerante, suco e água", "Guardanapos inclusos",
    ]},
    { tier: "Pacote 03", nome: "Experience", img: pacoteExperience.url, tag: "A experiência gastronômica completa. Massa napolitana de longa fermentação, tábua de frios premium e encerramento com estação de café gourmet.", inc: [
      "27 sabores premium em 4 tempos", "Tábua de frios sofisticada de entrada", "Massa napolitana, longa fermentação", "Garçom dedicado para servir", "Copos de vidro, pratos com talheres", "Bebidas não alcoólicas inclusas", "Estação de café gourmet de encerramento",
    ]},
  ];
  return (
    <section id="pacotes" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow mb-4 justify-center">Escolha seu pacote</div>
          <h2 className="serif text-4xl md:text-5xl mb-6">Três experiências. <em className="serif gold-gradient-text italic">Um padrão de excelência.</em></h2>
          <p className="text-cream/65 text-lg">Todos os pacotes incluem a nossa assinatura: a jornada sensorial em 4 tempos, ingredientes premium e equipe treinada. O que varia é a profundidade da experiência.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pacotes.map((p) => (
            <div key={p.nome} className="flex flex-col h-full">
              <div className={`relative border p-8 flex flex-col flex-1 ${p.featured ? "border-gold bg-black-card" : "border-gold/20 bg-black-warm"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black-rich text-[0.6rem] tracking-[0.2em] uppercase px-4 py-1 font-semibold inline-flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> Mais escolhido</div>
                )}
                <div className="text-[0.6rem] tracking-[0.25em] uppercase text-cream/40 mb-2">{p.tier}</div>
                <h3 className={`serif text-3xl mb-4 ${p.featured ? "text-gold" : "text-cream-light"}`}>{p.nome}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">{p.tag}</p>
                <div className="text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mb-3 mt-auto">O que está incluso</div>
                <ul className="space-y-2 mb-6">
                  {p.inc.map((i) => (
                    <li key={i} className="text-cream/65 text-sm flex gap-2"><span className="text-gold mt-0.5"><Check className="w-3.5 h-3.5" /></span><span>{i}</span></li>
                  ))}
                </ul>
                <a href="#contato" className={p.featured ? "btn-gold btn-gold-hover text-center" : "btn-ghost-gold hover:bg-gold hover:text-black-rich text-center"}>Quero o {p.nome}</a>
              </div>
              <div className="mt-8 flex items-center justify-center h-48">
                <img src={p.img} alt={`Pacote ${p.nome}`} loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Upgrades() {
  const ups = [
    { icon: <UtensilsCrossed className="w-10 h-10 text-gold/80" strokeWidth={1.5} />, n: "Tábua de Frios", d: "Uma entrada que por si só já é um evento. Queijos finos, embutidos selecionados, frutas e acompanhamentos artesanais montados em tábua rústica.", items: ["4 tipos de queijos finos", "3 tipos de patês", "Salame e copa selecionados", "Frutas da estação", "Crostinis, castanhas e torradinhas premium", "Pão italiano artesanal e geleias"] },
    { icon: <Coffee className="w-10 h-10 text-gold/80" strokeWidth={1.5} />, n: "Café Gourmet", d: "O encerramento perfeito. Na última hora do evento, nosso barista monta uma estação de café especial que se torna o assunto final da noite.", items: ["Café expresso artesanal", "Cappuccino tradicional", "Cappuccino Nutella", "Chocolate quente e cremoso", "Biscoitos finos"] },
    { icon: <Wine className="w-10 h-10 text-gold/80" strokeWidth={1.5} />, n: "Locação de Utensílios", d: "Eleve a apresentação do serviço com utensílios de qualidade. Disponíveis para locação mediante contratação de garçom adicional.", items: ["Taças de vinho", "Taças de espumante", "Jogo de pratos e talheres", "Toalha cobre-mancha xadrez", "Copos de vidro", "Garçom adicional"] },
  ];
  return (
    <section id="cardapio" className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Eleve ainda mais</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Upgrades que <em className="serif gold-gradient-text italic">transformam</em> o ordinário em extraordinário
          </h2>
          <p className="text-cream/65 text-lg">Cada upgrade foi criado para adicionar uma camada extra de sofisticação e memória afetiva ao seu evento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {ups.map((u) => (
            <div key={u.n} className="bg-black-warm p-10">
              <div className="mb-5">{u.icon}</div>
              <h3 className="serif text-2xl text-cream-light mb-3">{u.n}</h3>
              <p className="text-cream/60 text-sm mb-5 leading-relaxed">{u.d}</p>
              <ul className="space-y-1.5">
                {u.items.map((it) => (
                  <li key={it} className="text-cream/55 text-sm flex gap-2"><span className="text-gold/60">·</span><span>{it}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inclusao() {
  const opts = [
    { img: incVegana.url, n: "Cardápio Vegano", d: "Mussarela vegana em todas as pizzas. Sabores: Marguerita Vegan, Brócolis Vegan, Abobrinha Vegan e Doce de Leite com Coco Ralado." },
    { img: incSemGluten.url, n: "Massa Sem Glúten", d: "Para convidados com intolerância ao glúten. Mesmos sabores do pacote escolhido, com massa especialmente preparada e segura." },
    { img: incSemLactose.url, n: "Sem Lactose", d: "Mussarela sem lactose para convidados com intolerância. Sabor completo e textura idêntica, sem abrir mão da experiência." },
  ];
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Inclusão e diversidade</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Ninguém fica <em className="serif gold-gradient-text italic">de fora</em>
          </h2>
          <p className="text-cream/65 text-lg">Oferecemos cardápios especiais para que todos os convidados, independente de restrições alimentares, vivam a mesma experiência.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {opts.map((o) => (
            <div key={o.n} className="bg-black p-10 text-center">
              <img src={o.img} alt={o.n} loading="lazy" className="w-40 h-40 object-contain mx-auto mb-4" />
              <h3 className="serif text-2xl text-cream-light mb-3">{o.n}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{o.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProvaSocial() {
  const reviews = [
    { t: "As pizzas eram incríveis, mas o que me surpreendeu foi o serviço. A equipe era extremamente atenciosa e profissional. Todos os meus convidados pediram o contato!", a: "Ana Paula M.", e: "Aniversário de 40 anos · 60 convidados" },
    { t: "Já fizemos vários eventos corporativos, e a Pizza Party Brasil foi de longe a melhor escolha. A organização foi impecável do início ao fim. Recomendo sem hesitar.", a: "Ricardo F.", e: "Confraternização Corporativa · 90 convidados" },
    { t: "A experiência dos 4 tempos fez toda a diferença. Os convidados ficaram encantados, disseram que foi a melhor festa que já foram. Fizemos o Pacote Experience e valeu cada centavo.", a: "Mariana C.", e: "Casamento intimista · 45 convidados" },
  ];
  return (
    <section className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Prova social</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            8.000 eventos. <br/>Uma só <em className="serif gold-gradient-text italic">reputação</em>.
          </h2>
          <p className="text-cream/65 text-lg mb-6">Em mais de uma década, construímos algo que nenhum marketing compra: a confiança genuína de quem viveu a experiência.</p>
          <div className="inline-flex items-center gap-4 border border-gold/30 px-5 py-3">
            <div className="serif text-gold text-2xl">G</div>
            <div>
              <div className="text-gold tracking-wider inline-flex gap-1"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/50">5.0 no Google · Centenas de reviews</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.a} className="border border-gold/15 bg-black p-8">
              <div className="serif text-gold text-6xl leading-none mb-2">"</div>
              <div className="text-gold tracking-wider mb-3 inline-flex gap-1"><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /></div>
              <p className="text-cream/70 text-sm italic leading-relaxed mb-5">{r.t}</p>
              <div className="serif text-cream-light">{r.a}</div>
              <div className="text-[0.65rem] tracking-[0.18em] uppercase text-cream/40 mt-1">{r.e}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Como() {
  const steps = [
    { n: "1", t: "Consulta Personalizada", d: "Você nos conta sobre o seu evento, data, número de convidados, estilo da festa. Nós apresentamos a melhor solução para a sua celebração." },
    { n: "2", t: "Proposta e Reserva", d: "Enviamos a proposta customizada. Com a confirmação, sua data está reservada e garantida na nossa agenda." },
    { n: "3", t: "Chegamos Prontos", d: "No dia do evento, nossa equipe chega com antecedência, monta toda a estrutura e prepara tudo com nossa obsessão habitual por detalhe." },
    { n: "4", t: "Você Aproveita", d: "Enquanto a jornada sensorial acontece, você curte cada momento com seus convidados. Nós cuidamos de tudo, do início ao encerramento." },
  ];
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Sem complicação</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Como garantimos a <em className="serif gold-gradient-text italic">perfeição</em> no seu evento
          </h2>
          <p className="text-cream/65 text-lg">Da conversa inicial até o último café, cuidamos de cada detalhe para que você aproveite cada momento sem preocupação.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-gold/30 pt-6">
              <div className="serif gold-gradient-text text-5xl mb-4">{s.n}</div>
              <h3 className="serif text-xl text-cream-light mb-2">{s.t}</h3>
              <p className="text-cream/55 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
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
            <div className="serif gold-gradient-text text-5xl">8.000+</div>
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
            Mais de 8.000 eventos conduzidos pelo nosso Chef Pizzaiolo, com a qualidade artesanal da Pizza Party Brasil.
          </p>
        </div>
      </div>
    </section>
  );
}

function Condicoes() {
  const blocks = [
    { t: "Estrutura e Equipamentos", items: [
      "Levamos forno a gás com pedra refratária. Se o local não permitir entrada de gás, solicitamos com antecedência um forno elétrico, é necessária tomada 220V com disjuntor de 30A (cabo 4mm).",
      "Mesmo que o local tenha forno próprio, utilizamos nosso equipamento para garantir o padrão consistente que nossos clientes esperam.",
      "As massas chegam pré-assadas e são finalizadas no local do evento, garantindo frescor e crocância em cada pizza servida.",
    ]},
    { t: "Flexibilidade e Garantias", items: [
      "Conseguimos suprir até 10% a mais de convidados além do contratado, mantendo o mesmo padrão de qualidade. O excedente é servido ao final do evento.",
      "Se o número de convidados for menor que o contratado, o valor é mantido, pois os ingredientes e a equipe já foram dimensionados para o contrato.",
      "Prorrogação de horário disponível mediante solicitação prévia.",
    ]},
  ];
  return (
    <section className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Transparência total</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Tudo que você precisa <em className="serif gold-gradient-text italic">saber</em>
          </h2>
          <p className="text-cream/65 text-lg">Acreditamos que uma boa parceria começa com transparência. Sem letras miúdas, sem surpresas.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {blocks.map((b) => (
            <div key={b.t} className="bg-black-warm p-10">
              <h3 className="serif text-2xl text-cream-light mb-5">{b.t}</h3>
              <ul className="space-y-4">
                {b.items.map((it) => (
                  <li key={it} className="text-cream/60 text-sm leading-relaxed flex gap-3"><span className="text-gold mt-1">◆</span><span>{it}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContatoForm() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", convidados: "", data: "", cep: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento.%0A%0ANome: ${form.nome}%0ATelefone: ${form.telefone}%0AE-mail: ${form.email}%0AConvidados: ${form.convidados}%0AData da festa: ${form.data}%0ACEP: ${form.cep}`;
    window.open(`https://wa.me/5511974418038?text=${msg}`, "_blank");
  };
  const inputCls = "w-full bg-black-rich border border-gold/20 px-4 py-3 text-cream-light placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors text-sm";
  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
      <input required name="nome" value={form.nome} onChange={onChange} placeholder="Nome" className={`${inputCls} sm:col-span-2`} />
      <input required name="telefone" value={form.telefone} onChange={onChange} placeholder="Telefone" className={inputCls} />
      <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="E-mail" className={inputCls} />
      <input required type="number" min={1} name="convidados" value={form.convidados} onChange={onChange} placeholder="Número de convidados" className={inputCls} />
      <input required type="date" name="data" value={form.data} onChange={onChange} placeholder="Data da festa" className={inputCls} />
      <input required name="cep" value={form.cep} onChange={onChange} placeholder="CEP do local da festa" className={`${inputCls} sm:col-span-2`} />
      <button type="submit" className="btn-gold btn-gold-hover sm:col-span-2 mt-2">Enviar</button>
    </form>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-32 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.2), transparent 70%)` }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="eyebrow mb-4 justify-center">Vamos conversar</div>
        <h2 className="serif text-4xl md:text-6xl mb-6 leading-tight">
          Vamos criar uma <em className="serif gold-gradient-text italic">memória inesquecível</em> juntos?
        </h2>
        <p className="text-cream/65 text-lg mb-10 max-w-xl mx-auto">
          Preencha o formulário que entraremos em contato.
        </p>
        <ContatoForm />
        <div className="grid sm:grid-cols-3 gap-8 text-center pt-12 mt-12 border-t border-gold/15">
          <div>
            <div className="eyebrow mb-2 !text-cream/40">Telefone</div>
            <a href="https://wa.me/5511974418038" className="serif text-gold-light text-lg hover:text-gold transition-colors">+55 11 97441-8038</a>
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
    <footer className="bg-black-warm py-12 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <div className="leading-tight">
            <div className="serif text-gold text-sm tracking-[0.18em] uppercase">Pizza Party Brasil</div>
            <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/35">Desde 2013 · Mais de 8.000 eventos</div>
          </div>
        </div>
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/30">© 2026 · Feito com fogo, farinha e fermento.</p>
      </div>
    </footer>
  );
}

function Linhas() {
  const linhas = [
    {
      tag: "Linha 01",
      nome: "Experiência Clássica",
      desc: "Nosso modelo consagrado em mais de 8.000 eventos. Variedade, agilidade e o sabor que conquistou São Paulo desde 2013.",
      pontos: [
        "Mais de 25 sabores",
        "Servida sem limite de consumo",
        "Alta produtividade no serviço",
        "Ideal para eventos grandes (até 300 convidados)",
      ],
    },
    {
      tag: "Linha 02",
      featured: true,
      nome: "Experiência Napoletana",
      desc: "A linha premium da casa. Massa de longa fermentação, assada na hora em forno napoletano para celebrações onde cada detalhe importa.",
      pontos: [
        "Massa de longa fermentação (72h)",
        "Assada na hora a 450°C",
        "Ingredientes premium selecionados",
        "Ideal para eventos exclusivos e ticket premium",
      ],
    },
  ];
  return (
    <section id="linhas" className="py-32 bg-black-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Duas linhas de serviço</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Escolha a experiência <em className="serif gold-gradient-text italic">certa</em> para o seu evento
          </h2>
          <p className="text-cream/65 text-lg">Duas formas de viver a Pizza Party Brasil — a tradição que escalamos em mais de uma década, e a sofisticação napoletana para quem busca o ápice gastronômico.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {linhas.map((l) => (
            <div key={l.nome} className={`relative border p-10 ${l.featured ? "border-gold bg-black-card" : "border-gold/20 bg-black"}`}>
              <div className="text-[0.6rem] tracking-[0.25em] uppercase text-cream/40 mb-2">{l.tag}</div>
              <h3 className={`serif text-3xl mb-4 ${l.featured ? "text-gold" : "text-cream-light"}`}>{l.nome}</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">{l.desc}</p>
              <ul className="space-y-2">
                {l.pontos.map((p) => (
                  <li key={p} className="text-cream/70 text-sm flex gap-2"><span className="text-gold mt-0.5"><Check className="w-3.5 h-3.5" /></span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  const reasons = [
    "Mais de 8.000 eventos realizados desde 2013",
    "Especialistas em eventos com pizza",
    "Mais de 25 sabores no cardápio",
    "Pizzas servidas sem limite de consumo",
    "Equipe treinada e atenciosa",
    "Nota máxima nas avaliações do Google",
    "Estrutura para 30 a 300 convidados",
    "Chef Pizzaiolo finalizando ao vivo no seu evento",
  ];
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">Por que somos diferentes</div>
          <h2 className="serif text-4xl md:text-5xl leading-tight mb-6">
            Mais de uma década <em className="serif gold-gradient-text italic">construindo memórias</em>
          </h2>
          <p className="text-cream/65 text-lg">Não é promessa. É histórico. Cada item abaixo é uma decisão que tomamos todos os dias para entregar a melhor experiência de pizza para eventos em São Paulo.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {reasons.map((r) => (
            <div key={r} className="bg-black p-6 flex gap-4 items-start hover:bg-black-card transition-colors">
              <span className="text-gold mt-1"><Check className="w-5 h-5" /></span>
              <span className="text-cream-light text-base">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Carrossel() {
  const imgs = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
  const loop = [...imgs, ...imgs];
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <div className="eyebrow mb-4 justify-center">Momentos reais</div>
        <h2 className="serif text-4xl md:text-5xl">A experiência <em className="serif gold-gradient-text italic">Pizza Party</em> em cada evento.</h2>
      </div>
      <div className="relative">
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-carrossel w-max">
            {loop.map((im, i) => (
              <div key={i} className="relative w-[320px] md:w-[420px] h-[260px] md:h-[320px] flex-shrink-0 overflow-hidden border border-gold/15">
                <img src={im.url} alt={`Evento Pizza Party ${(i % imgs.length) + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/60" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="bg-black text-cream-light">
      <Nav />
      <Hero />
      <Carrossel />
      <Hook />
      <PorQue />
      <Linhas />
      <Servico />
      <Diferencial />
      <Processo />
      <Pacotes />
      <Upgrades />
      <Inclusao />
      <ProvaSocial />
      <Como />
      <Celebracao />
      <Condicoes />
      <Contato />
      <Footer />
    </div>
  );
}
