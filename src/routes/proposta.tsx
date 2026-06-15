import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import { ArrowRight, FileText, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/proposta")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial — Pizza Party Brasil" },
      {
        name: "description",
        content:
          "Solicite sua proposta comercial personalizada para o seu evento. Buffet Premium de Pizzas em São Paulo.",
      },
      { property: "og:title", content: "Proposta Comercial — Pizza Party Brasil" },
      {
        property: "og:description",
        content: "Solicite sua proposta comercial personalizada para o seu evento.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pizzapartybrasil.com.br/proposta" }],
  }),
  component: PropostaPage,
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
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
      <a href="/" className="flex items-center gap-3">
        <Logo size={36} />
        <div className="block leading-tight">
          <div className="serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party Brasil</div>
          <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/40">Buffet Premium de Pizzas</div>
        </div>
      </a>
      <a href="/" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">
        Voltar ao site
      </a>
    </nav>
  );
}

function PropostaPage() {
  const benefits = [
    {
      icon: <FileText className="w-6 h-6 text-gold" />,
      title: "Proposta Personalizada",
      desc: "Criada sob medida para as necessidades do seu evento, com todos os detalhes claros e transparentes.",
    },
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "Resposta Rápida",
      desc: "Receba sua proposta em pouco tempo. Nosso time está pronto para atender você com agilidade.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Sem Compromisso",
      desc: "Solicitar uma proposta é totalmente gratuito e sem qualquer obrigação de contratação.",
    },
  ];

  return (
    <div className="min-h-screen bg-black-warm">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(123,31,46,0.25) 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 text-center py-20">
          <div className="flex justify-center mb-8">
            <Logo size={100} />
          </div>

          <div className="eyebrow mb-6 justify-center">Proposta Comercial</div>

          <h1 className="serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Sua proposta <em className="serif gold-gradient-text italic">personalizada</em>
            <br />
            <span className="text-cream-light">em poucos cliques</span>
          </h1>

          <p className="max-w-xl mx-auto text-cream/70 text-lg md:text-xl font-light mb-4">
            Clique no botão abaixo para acessar nosso sistema de propostas e receber uma cotação sob medida para o seu evento.
          </p>

          <p className="max-w-xl mx-auto text-cream/50 text-sm md:text-base font-light mb-12 tracking-wide">
            Rápido, prático e sem compromisso.
          </p>

          <a
            href="https://propostapizza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-gold-hover inline-flex items-center gap-3 text-[0.8rem] !py-4 !px-10"
          >
            Acessar Proposta
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Benefits */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 text-left">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-black-card/60 border border-gold/10 p-6 rounded-lg hover:border-gold/25 transition-colors"
              >
                <div className="mb-4">{b.icon}</div>
                <h3 className="serif text-lg text-cream-light mb-2">{b.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/10 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Pizza Party Brasil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
