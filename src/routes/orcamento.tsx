import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento na hora — Pizza Party Brasil" },
      { name: "description", content: "Receba na hora um orçamento personalizado para o seu evento com pizza napoletana artesanal." },
      { property: "og:title", content: "Orçamento na hora — Pizza Party Brasil" },
      { property: "og:description", content: "Receba na hora um orçamento personalizado para o seu evento." },
    ],
  }),
  component: OrcamentoPage,
});

const PRECO_POR_CONVIDADO = 89;
const MIN_CONVIDADOS = 40;

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}

function maskPhone(v: string) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function maskCEP(v: string) {
  const d = onlyDigits(v).slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}

function OrcamentoPage() {
  const [form, setForm] = useState({
    convidados: "",
    data: "",
    cep: "",
    nome: "",
    email: "",
    telefone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const convidadosNum = Math.max(0, parseInt(form.convidados || "0", 10) || 0);
  const estimativa = useMemo(() => {
    if (convidadosNum < MIN_CONVIDADOS) return 0;
    return convidadosNum * PRECO_POR_CONVIDADO;
  }, [convidadosNum]);

  const valido =
    convidadosNum >= MIN_CONVIDADOS &&
    form.data &&
    onlyDigits(form.cep).length === 8 &&
    form.nome.trim().length >= 2 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    onlyDigits(form.telefone).length >= 10;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valido) return;
    setSubmitted(true);
    const msg = `Olá! Gostaria de um orçamento.%0A%0A*Nome:* ${form.nome}%0A*E-mail:* ${form.email}%0A*Telefone:* ${form.telefone}%0A*Convidados:* ${convidadosNum}%0A*Data:* ${form.data}%0A*CEP:* ${form.cep}%0A*Estimativa:* ${formatBRL(estimativa)}`;
    window.open(`https://wa.me/5511974418038?text=${msg}`, "_blank");
  }

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  const inputCls =
    "w-full bg-transparent border-0 border-b border-ink/15 rounded-none px-0 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <div className="bg-paper text-ink min-h-screen pb-20">
      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 py-3">
          <Link to="/" className="text-xs font-semibold tracking-wide text-ink/60 hover:text-gold transition-colors">← Voltar</Link>
          <span className="serif italic text-gold text-lg">Pizza Party</span>
          <Link to="/cardapio" className="text-xs font-semibold tracking-wide text-ink/60 hover:text-gold transition-colors">Cardápio</Link>
        </nav>
      </header>

      <section className="px-6 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow mb-5">Orçamento na hora</div>
          <h1 className="serif text-5xl md:text-6xl text-ink leading-[1.05]">
            Uma estimativa <em className="italic text-gold">imediata</em>
          </h1>
          <p className="mt-6 text-ink/60 max-w-md mx-auto text-sm">
            Preencha os dados do seu evento. Mínimo de {MIN_CONVIDADOS} convidados.
          </p>
        </div>
      </section>

      <section className="px-6 mt-16">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="eyebrow !text-ink-soft mb-2 block">Convidados</span>
              <input
                type="number"
                min={MIN_CONVIDADOS}
                inputMode="numeric"
                value={form.convidados}
                onChange={(e) => update("convidados", e.target.value)}
                placeholder="80"
                className={inputCls}
                required
              />
            </label>
            <label className="block">
              <span className="eyebrow !text-ink-soft mb-2 block">Data do evento</span>
              <input
                type="date"
                value={form.data}
                onChange={(e) => update("data", e.target.value)}
                className={inputCls}
                required
              />
            </label>
          </div>

          <label className="block">
            <span className="eyebrow !text-ink-soft mb-2 block">CEP da festa</span>
            <input
              type="text"
              inputMode="numeric"
              value={form.cep}
              onChange={(e) => update("cep", maskCEP(e.target.value))}
              placeholder="00000-000"
              className={inputCls}
              required
            />
          </label>

          <label className="block">
            <span className="eyebrow !text-ink-soft mb-2 block">Nome completo</span>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => update("nome", e.target.value)}
              placeholder="Seu nome"
              className={inputCls}
              required
            />
          </label>

          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="eyebrow !text-ink-soft mb-2 block">E-mail</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="voce@email.com"
                className={inputCls}
                required
              />
            </label>
            <label className="block">
              <span className="eyebrow !text-ink-soft mb-2 block">Telefone</span>
              <input
                type="tel"
                value={form.telefone}
                onChange={(e) => update("telefone", maskPhone(e.target.value))}
                placeholder="(11) 99999-9999"
                className={inputCls}
                required
              />
            </label>
          </div>

          <div className="pt-8 flex flex-col items-center gap-2 border-t border-ink/10">
            <div className="eyebrow !text-ink-soft">Estimativa</div>
            <div className="serif text-5xl md:text-6xl text-gold leading-none">
              {estimativa > 0 ? formatBRL(estimativa) : "—"}
            </div>
            <p className="text-ink/50 text-xs mt-1 text-center">
              {convidadosNum < MIN_CONVIDADOS
                ? `Informe pelo menos ${MIN_CONVIDADOS} convidados.`
                : `${convidadosNum} convidados · ${formatBRL(PRECO_POR_CONVIDADO)} por pessoa`}
            </p>
          </div>

          <button
            type="submit"
            disabled={!valido}
            className="btn-pill btn-tomato w-full !py-4 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Receber orçamento no WhatsApp
          </button>

          {submitted && (
            <p className="text-center text-sm text-ink/60">
              Abrimos o WhatsApp com seus dados. Em breve retornamos.
            </p>
          )}

          <p className="text-center text-[0.7rem] text-ink/40 leading-relaxed pt-2">
            * Valor estimado. A proposta final pode variar conforme deslocamento, cardápio e estrutura.
          </p>
        </form>
      </section>
    </div>
  );
}
