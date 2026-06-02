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
    "w-full bg-cream-light/60 border border-ink/10 rounded-2xl px-5 py-3.5 text-ink placeholder:text-ink/40 focus:outline-none focus:border-tomato focus:bg-cream-light transition-colors";

  return (
    <div className="bg-paper text-ink min-h-screen pb-12">
      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="max-w-6xl mx-auto bg-cream-light/85 backdrop-blur-xl rounded-full shadow-[0_8px_30px_-15px_rgba(26,20,16,0.15)] flex items-center justify-between px-4 sm:px-6 py-2.5 border border-ink/5">
          <Link to="/" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">← Voltar</Link>
          <span className="serif italic text-tomato text-lg">Pizza Party</span>
          <Link to="/cardapio" className="text-xs font-semibold tracking-wide text-ink/70 hover:text-tomato transition-colors">Cardápio</Link>
        </nav>
      </header>

      <section className="px-4 pt-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4 text-tomato">Orçamento na hora</div>
          <h1 className="serif text-5xl md:text-6xl text-ink leading-[1.05]">
            Receba uma estimativa <em className="italic text-tomato">imediata</em>
          </h1>
          <p className="mt-5 text-ink/70 max-w-lg mx-auto">
            Preencha os dados do seu evento e veja na hora o valor estimado. Mínimo de {MIN_CONVIDADOS} convidados.
          </p>
        </div>
      </section>

      <section className="px-4 mt-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <form onSubmit={handleSubmit} className="panel-rounded bg-cream-light p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="eyebrow !text-ink-soft mb-2 block">Convidados</span>
                <input
                  type="number"
                  min={MIN_CONVIDADOS}
                  inputMode="numeric"
                  value={form.convidados}
                  onChange={(e) => update("convidados", e.target.value)}
                  placeholder="Ex: 80"
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

            <div className="h-px bg-ink/10 my-2" />

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

            <div className="grid md:grid-cols-2 gap-5">
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
                <span className="eyebrow !text-ink-soft mb-2 block">Telefone (DDD)</span>
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

            <button
              type="submit"
              disabled={!valido}
              className="btn-pill btn-tomato w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Receber orçamento no WhatsApp
            </button>
          </form>

          <aside className="panel-rounded p-8 md:p-10 text-cream-light h-fit lg:sticky lg:top-28" style={{ background: "var(--gradient-warm)" }}>
            <div className="eyebrow !text-cream-light/80 mb-4">Sua estimativa</div>
            <div className="serif text-5xl md:text-6xl leading-none">
              {estimativa > 0 ? formatBRL(estimativa) : "—"}
            </div>
            <p className="mt-4 text-cream-light/85 text-sm">
              {convidadosNum < MIN_CONVIDADOS
                ? `Informe pelo menos ${MIN_CONVIDADOS} convidados para calcular.`
                : `Baseado em ${convidadosNum} convidados a ${formatBRL(PRECO_POR_CONVIDADO)} por pessoa.`}
            </p>
            <div className="h-px bg-cream-light/20 my-6" />
            <ul className="space-y-2 text-sm text-cream-light/90">
              <li>✓ Pizzaiolo no evento</li>
              <li>✓ Forno e brigada inclusos</li>
              <li>✓ Rodízio contínuo de pizzas</li>
              <li>✓ Massa de fermentação 72h</li>
            </ul>
            {submitted && (
              <div className="mt-6 rounded-2xl bg-cream-light/15 px-4 py-3 text-sm">
                Abrimos o WhatsApp com seus dados. Em breve retornamos!
              </div>
            )}
            <p className="mt-6 text-[0.7rem] text-cream-light/70 leading-relaxed">
              * Valor estimado. A proposta final pode variar conforme deslocamento, cardápio e estrutura do local.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
