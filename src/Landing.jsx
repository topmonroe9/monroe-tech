import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "./app-context.jsx";
import { t } from "./i18n.js";
import { cases, featuredIds } from "./cases.js";
import { Reveal, SolutionIcon, TelegramIcon, Arrow, Check, Plus } from "./ui.jsx";
import CaseCard from "./CaseCard.jsx";

const TG = "https://t.me/topmonroe9";

function FaqItem({ q, a, th }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" data-open={open}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
        <Plus size={18} color={th.accentText} />
      </button>
      <div className="faq-a"><div className="faq-a-inner"><p>{a}</p></div></div>
    </div>
  );
}

export default function Landing() {
  const { lang, th } = useApp();
  const c = t[lang];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
    }
  }, [location.hash]);

  const featured = featuredIds.map((id) => cases[lang].find((x) => x.id === id)).filter(Boolean);
  const openCase = (item) => navigate(`/work?case=${item.id}`);

  return (
    <>
      {/* hero */}
      <header style={{ padding: "128px 0 72px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <div className="pill" style={{ marginBottom: 26 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: th.green, animation: "pulse 2s infinite" }} />
              {c.hero.badge}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(32px,5.4vw,50px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.04em", marginBottom: 24 }}>
              {c.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: th.text2, maxWidth: 640, marginBottom: 34 }}>{c.hero.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={TG} className="tg-btn" target="_blank" rel="noopener"><TelegramIcon />{c.hero.cta}</a>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
              {c.hero.trust.map((tr, i) => (
                <span key={i} style={{ fontSize: 13, color: th.text3, fontFamily: "'JetBrains Mono',monospace" }}>{tr}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* pains — узнай себя */}
      <section id="pains" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.pains.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom: 40, maxWidth: 720 }}>{c.pains.title}</h2></Reveal>
          <div className="pains-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {c.pains.items.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="pain-card">
                  <div className="pain-mark">—</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 8, lineHeight: 1.3 }}>{p.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: th.text2 }}>{p.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* solutions */}
      <section id="solutions" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.solutions.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">{c.solutions.title}</h2></Reveal>
          <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 40 }}>
            {c.solutions.items.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card sol-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <SolutionIcon id={s.iconId} color={th.accentText} />
                    <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{s.name}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: th.text2, marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.points.map((p, j) => (
                      <span key={j} style={{ fontSize: 13, color: th.text3, paddingLeft: 22, position: "relative", lineHeight: 1.5 }}>
                        <span style={{ position: "absolute", left: 0, top: 2, color: th.accentText, display: "inline-flex" }}><Check size={13} /></span>{p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* work teaser */}
      <section id="work" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.workTeaser.label}</p></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
              <div style={{ maxWidth: 560 }}>
                <h2 className="section-title" style={{ marginBottom: 12 }}>{c.workTeaser.title}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: th.text2 }}>{c.workTeaser.sub}</p>
              </div>
              <button className="modal-nav" onClick={() => navigate("/work")} style={{ marginBottom: 4 }}>
                {c.workTeaser.cta} <Arrow size={15} />
              </button>
            </div>
          </Reveal>
          <div className="teaser-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 40 }}>
            {featured.map((item, i) => (
              <CaseCard key={item.id} item={item} th={th} work={c.work} onOpen={openCase} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="process" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.process.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom: 40, maxWidth: 720 }}>{c.process.title}</h2></Reveal>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {c.process.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card" style={{ padding: 32, height: "100%" }}>
                  <div className="step-num">{s.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: th.text2, marginBottom: 16 }}>{s.desc}</p>
                  <span className="chip" style={{ color: th.accentText, borderColor: `${th.accent}33`, background: th.accentSoft }}>{s.timing}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal>
            <div className="card" style={{ padding: "48px 40px", borderRadius: 24 }}>
              <h2 className="section-title" style={{ marginBottom: 20 }}>{c.about.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: th.text2, maxWidth: 680, marginBottom: 12 }}>{c.about.text}</p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: th.text2, maxWidth: 680, marginBottom: 32 }}>{c.about.text2}</p>
              <div className="adv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 40 }}>
                {c.about.advantages.map((a, i) => (
                  <div key={i} className="adv-item">
                    <span className="adv-dot" />
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{a.h}</h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: th.text2 }}>{a.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="stats-row" style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                {c.about.stats.map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div className="stat-val">{s.v}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* trust */}
      <section id="trust" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.trust.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom: 40, maxWidth: 720 }}>{c.trust.title}</h2></Reveal>
          <div className="trust-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {c.trust.items.map((it, i) => (
              <Reveal key={i} delay={(i % 2) * 0.07}>
                <div className="trust-card">
                  <div className="trust-check"><Check size={15} color={th.accentText} /></div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>{it.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: th.text2 }}>{it.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.pricing.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom: 12, maxWidth: 720 }}>{c.pricing.title}</h2></Reveal>
          <Reveal delay={0.08}><p style={{ fontSize: 15, lineHeight: 1.65, color: th.text2, maxWidth: 640, marginBottom: 36 }}>{c.pricing.note}</p></Reveal>
          <div className="price-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {c.pricing.packages.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <div className="price-card">
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, letterSpacing: "-0.01em" }}>{p.name}</h3>
                  <div className="price-val">{p.priceFrom}</div>
                  <div className="price-time">{p.timeFrom}</div>
                  <p style={{ fontSize: 13, color: th.text3, lineHeight: 1.5, margin: "14px 0 16px" }}>{p.forWho}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: "auto" }}>
                    {p.includes.map((inc, j) => (
                      <span key={j} className="price-incl"><Check size={13} color={th.accentText} />{inc}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginTop: 32 }}>
              <a href={TG} className="tg-btn" target="_blank" rel="noopener"><TelegramIcon />{c.hero.cta}</a>
              <p style={{ fontSize: 14, color: th.text3, lineHeight: 1.5, maxWidth: 420 }}>{c.pricing.freeStep}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section id="faq" style={{ padding: "72px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal><p className="section-label">{c.faq.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom: 36 }}>{c.faq.title}</h2></Reveal>
          <Reveal delay={0.08}>
            <div>
              {c.faq.items.map((f, i) => <FaqItem key={i} q={f.h} a={f.p} th={th} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* contact */}
      <section id="contact" style={{ padding: "72px 0 120px" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.contact.label}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title" style={{ whiteSpace: "pre-line", marginBottom: 12 }}>{c.contact.title}</h2>
            <p style={{ fontSize: 16, color: th.text2, lineHeight: 1.7, maxWidth: 540, marginBottom: 24 }}>{c.contact.sub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={TG} className="tg-btn" target="_blank" rel="noopener" style={{ marginBottom: 16, display: "inline-flex" }}><TelegramIcon />{c.contact.cta}</a>
            <p style={{ fontSize: 13, color: th.text3, lineHeight: 1.6, maxWidth: 520, marginBottom: 36 }}>{c.contact.trustLine}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize: 13, color: th.text3, marginBottom: 16 }}>{c.contact.or}</p>
            <div style={{ maxWidth: 440, display: "flex", flexDirection: "column", gap: 12 }}>
              <input className="input" name="name" aria-label={c.contact.namePh} placeholder={c.contact.namePh} />
              <textarea className="input" name="message" aria-label={c.contact.msgPh} placeholder={c.contact.msgPh} rows={3} style={{ resize: "vertical" }} />
              <button type="button" className="send-btn" style={{ alignSelf: "flex-start" }} onClick={() => window.open(TG, "_blank", "noopener")}>{c.contact.send}</button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
