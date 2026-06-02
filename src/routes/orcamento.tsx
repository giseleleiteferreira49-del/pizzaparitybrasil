import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/pizza-party-logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento — Pizza Party Brasil" },
      { name: "description", content: "Solicite um orçamento personalizado para o seu evento. Buffet de pizza napoletana com pizzaiolo no local." },
      { property: "og:title", content: "Orçamento — Pizza Party Brasil" },
      { property: "og:description", content: "Solicite um orçamento personalizado para o seu evento." },
    ],
  }),
  component: Orcamento,
});

function Orcamento() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoEvento: "Casamento",
    convidados: "",
    data: "",
    local: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Gostaria de um orçamento.%0A%0A` +
        `*Nome:* ${form.nome}%0A` +
        `*E-mail:* ${form.email}%0A` +
        `*Telefone:* ${form.telefone}%0A` +
        `*Tipo de evento:* ${form.tipoEvento}%0A` +
        `*Convidados:* ${form.convidados}%0A` +
        `*Data:* ${form.data}%0A` +
        `*Local:* ${form.local}%0A` +
        `*Mensagem:* ${form.mensagem}`,
    );
    window.open(`https://wa.me/5511974418038?text=${text}`, "_blank");
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const inputCls =
    "w-full bg-transparent border border-gold/20 focus:border-gold/70 outline-none text-cream-light px-4 py-3 text-sm placeholder:text-cream/30 transition-colors";
  const labelCls = "block text-[0.6rem] tracking-[0.25em] uppercase text-gold/80 mb-2";

  return (
    <div className="bg-black text-cream-light min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black-rich/90 border-b border-gold/15">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Pizza Party Brasil" width={36} height={36} className="rounded-full" />
          <div className="hidden sm:block leading-tight">
            <div className="serif text-gold text-sm tracking-[0.18em] uppercase font-semibold">Pizza Party</div>
            <div className="text-[0.55rem] tracking-[0.28em] uppercase text-cream/40">Brasil · Napoletana</div>
          </div>
        </Link>
        <Link to="/" className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors">
          ← Voltar
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-black-warm">
        <img src={heroPizza} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow mb-4 justify-center">Solicite seu orçamento</div>
          <h1 className="serif text-4xl md:text-6xl leading-tight mb-6">
            Um evento <em className="serif gold-gradient-text text-5xl md:text-7xl italic">memorável</em> começa aqui
          </h1>
          <p className="text-cream/65 max-w-xl mx-auto">
            Conte-nos sobre o seu evento e receba uma proposta personalizada em até 24 horas.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6 border border-gold/15 bg-black-warm/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Nome completo</label>
                <input required value={form.nome} onChange={update("nome")} className={inputCls} placeholder="Seu nome" />
              </div>
              <div>
                <label className={labelCls}>E-mail</label>
                <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="voce@email.com" />
              </div>
              <div>
                <label className={labelCls}>Telefone / WhatsApp</label>
                <input required value={form.telefone} onChange={update("telefone")} className={inputCls} placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className={labelCls}>Tipo de evento</label>
                <select value={form.tipoEvento} onChange={update("tipoEvento")} className={inputCls}>
                  <option className="bg-black">Casamento</option>
                  <option className="bg-black">Noivado</option>
                  <option className="bg-black">Aniversário</option>
                  <option className="bg-black">Corporativo</option>
                  <option className="bg-black">Festival / Marca</option>
                  <option className="bg-black">Outro</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Número de convidados</label>
                <input required type="number" min="20" value={form.convidados} onChange={update("convidados")} className={inputCls} placeholder="Ex. 120" />
              </div>
              <div>
                <label className={labelCls}>Data do evento</label>
                <input required type="date" value={form.data} onChange={update("data")} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Local do evento</label>
              <input value={form.local} onChange={update("local")} className={inputCls} placeholder="Cidade, espaço ou endereço" />
            </div>
            <div>
              <label className={labelCls}>Mensagem</label>
              <textarea rows={5} value={form.mensagem} onChange={update("mensagem")} className={inputCls} placeholder="Conte-nos detalhes do seu evento, expectativas e sabores favoritos." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="submit" className="btn-gold btn-gold-hover flex-1 justify-center">
                Enviar via WhatsApp
              </button>
              <a
                href="https://wa.me/5511974418038?text=Gostaria%20de%20mais%20informações"
                className="btn-ghost-gold hover:bg-gold hover:text-black-rich flex-1 justify-center text-center"
              >
                Falar direto agora
              </a>
            </div>
          </form>

          {/* Trust */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16 text-center">
            <div className="border-t border-gold/15 pt-6">
              <div className="serif gold-gradient-text text-3xl mb-1">24h</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-cream/40">Resposta garantida</div>
            </div>
            <div className="border-t border-gold/15 pt-6">
              <div className="serif gold-gradient-text text-3xl mb-1">500+</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-cream/40">Eventos realizados</div>
            </div>
            <div className="border-t border-gold/15 pt-6">
              <div className="serif gold-gradient-text text-3xl mb-1">100%</div>
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-cream/40">Personalização</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/30">© 2026 Pizza Party Brasil · Feito com fogo, farinha e fermento.</p>
        </div>
      </footer>
    </div>
  );
}
