import { motion } from "framer-motion";
import { useEffect } from "react";
import { Globe, PenLine, Workflow, Compass, MapPin, Phone } from "lucide-react";
import { Preloader } from "@/components/Preloader";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton, getWhatsAppLink } from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: Globe, title: "Site", desc: "Página que vende sem ruído. Clara, rápida, com um único caminho." },
  { icon: PenLine, title: "Copy", desc: "Texto que decide. Sem enrolação, sem firula. Só o que move." },
  { icon: Workflow, title: "Automação", desc: "Fluxos que tiram a operação do seu colo. Você dorme, ele entrega." },
  { icon: Compass, title: "Plano", desc: "O mapa do próximo passo. Curto, executável, com data marcada." },
];

const steps = [
  { n: "01", title: "Você diz o que travou", desc: "Em uma mensagem. Sem briefing de 40 páginas." },
  { n: "02", title: "Eu desenho o destravo", desc: "Diagnóstico direto e um plano que cabe na semana." },
  { n: "03", title: "A gente entrega", desc: "Execução com prazo. O resultado vira realidade, não promessa." },
];

const filters = [
  "Quem tem ideia parada há meses",
  "Quem perde cliente por falta de processo",
  "Quem precisa de site, copy ou automação ontem",
  "Quem quer clareza, não mais opinião",
];

const faqs = [
  {
    q: "Como funciona o primeiro contato?",
    a: "Você manda uma mensagem no WhatsApp com o que travou. Em poucas horas devolvo um diagnóstico curto e o próximo passo claro — sem reunião obrigatória.",
  },
  {
    q: "Em quanto tempo a entrega fica pronta?",
    a: "Depende do escopo. A maioria dos destravos (site enxuto, copy ou automação pontual) sai entre 5 e 15 dias úteis, com data combinada na proposta.",
  },
  {
    q: "Quanto custa?",
    a: "Cada projeto tem um valor sob medida em função do escopo e do prazo. Mando uma proposta objetiva, sem pacotes inflados, depois de entender o que precisa ser destravado.",
  },
  {
    q: "Você atende fora de Guarulhos e São Paulo?",
    a: "Sim. Atendo todo o Brasil de forma remota via WhatsApp, e-mail e chamadas pontuais. O endereço físico é em Guarulhos (SP).",
  },
  {
    q: "Você executa ou só entrega o plano?",
    a: "Os dois. Posso entregar só o plano (mapa do próximo passo) ou executar site, copy e automação junto. Você decide o nível de envolvimento.",
  },
];

const Index = () => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <>
      <Preloader />

      <main className="min-h-screen bg-background text-foreground">
        {/* NAV */}
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
          <div className="container-edge flex h-16 items-center justify-between">
            <a href="#top" className="font-display text-base font-bold tracking-tight">
              Jessé<span className="text-amber">.</span>
            </a>
            <WhatsAppButton variant="ghost" label="WhatsApp" className="hidden sm:inline-flex" />
          </div>
        </header>

        {/* HERO */}
        <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-36">
          <div className="container-edge">
            <Reveal>
              <span className="eyebrow">Estrategista · Transdutor</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
                Diga o que <br className="hidden md:block" />
                travou. <span className="text-amber">Eu destravo.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
                Transformo ruído em plano. Plano em ação. Ação em entrega.
                Sem enrolação, sem reunião sem fim.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <WhatsAppButton />
                <a href="#como" className="group text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <span className="amber-underline pb-1">Ver como funciona</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* subtle grid line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* SERVIÇOS */}
        <section id="resolvo" className="py-24 md:py-32">
          <div className="container-edge">
            <Reveal>
              <span className="eyebrow">O que eu resolvo</span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                Quatro frentes. Um único objetivo: destravar.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-amber/40"
                  >
                    <div className="flex items-start justify-between">
                      <s.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-amber" strokeWidth={1.6} />
                      <span className="font-display text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como" className="border-t border-border bg-secondary/40 py-24 md:py-32">
          <div className="container-edge">
            <Reveal>
              <span className="eyebrow">Como funciona</span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                Três passos. Sem teatro.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.12}>
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="font-display text-7xl font-extrabold text-amber/90 md:text-8xl"
                    >
                      {step.n}
                    </motion.div>
                    <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-16">
                <WhatsAppButton />
              </div>
            </Reveal>
          </div>
        </section>

        {/* QUEM É */}
        <section id="quem" className="py-24 md:py-32">
          <div className="container-edge grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <span className="eyebrow">Quem é</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                Jessé Jusoli
              </h2>
              <p className="mt-3 text-base text-muted-foreground">Estrategista · Transdutor</p>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-7">
              <p className="font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                Transformo ruído em plano e plano em ação.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Trabalho com quem precisa sair do lugar. Escuto o que está
                travado, traduzo em estratégia objetiva e coloco em
                movimento — site, copy, automação ou plano. Direto. Confiante.
                Sem rodeios.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PARA QUEM */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container-edge">
            <Reveal>
              <span className="eyebrow">Para quem é</span>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
                Se você se reconhecer aqui, a gente conversa.
              </h2>
            </Reveal>

            <ul className="mt-12 divide-y divide-border border-y border-border">
              {filters.map((f, i) => (
                <Reveal key={f} delay={i * 0.06}>
                  <li className="group flex items-center gap-6 py-6 transition-colors">
                    <span className="font-display text-sm font-semibold text-amber">0{i + 1}</span>
                    <span className="font-display text-xl font-semibold transition-colors group-hover:text-amber md:text-2xl">
                      {f}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTATO FINAL */}
        <section id="contato" className="bg-ink py-24 text-primary-foreground md:py-36">
          <div className="container-edge">
            <Reveal>
              <span className="eyebrow !text-amber before:!bg-amber/60">Próximo passo</span>
              <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Não pense mais. <br />
                <span className="text-amber">Resolva agora.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg text-primary-foreground/70">
                Mande uma mensagem com o que travou. Em poucas horas você
                tem um próximo passo claro.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10">
                <WhatsAppButton />
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-16 grid gap-8 border-t border-primary-foreground/10 pt-10 md:grid-cols-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                  aria-label="WhatsApp +55 11 95317-2779"
                >
                  <Phone className="mt-1 h-5 w-5 text-amber" strokeWidth={1.8} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/50">WhatsApp</p>
                    <p className="mt-1 font-display text-lg font-semibold transition-colors group-hover:text-amber">
                      +55 11 95317-2779
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-amber" strokeWidth={1.8} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/50">Endereço</p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      Av. Coqueiral, 60 — Guarulhos, SP
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="bg-ink pb-10 text-primary-foreground/50">
          <div className="container-edge flex flex-col items-start justify-between gap-2 text-xs md:flex-row">
            <p>© {new Date().getFullYear()} Jessé Jusoli. Destravo. Organizo. Entrego.</p>
            <p>Feito para decidir, não para enfeitar.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
