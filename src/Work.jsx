import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApp } from "./app-context.jsx";
import { t } from "./i18n.js";
import { cases } from "./cases.js";
import { Reveal, TelegramIcon, Arrow } from "./ui.jsx";
import { SystemVisual } from "./systems.jsx";
import CaseCard from "./CaseCard.jsx";

// Client quotes are placeholders until real ones (with consent) are added —
// fake testimonials cost trust. Flip to true once quotes are real.
const SHOW_QUOTES = false;

const uniq = (arr) => [...new Set(arr)];

export default function Work() {
  const { lang, th } = useApp();
  const c = t[lang];
  const w = c.work;
  const list = cases[lang];
  const [params, setParams] = useSearchParams();
  const [filter, setFilter] = useState(null); // { dim, value } | null

  const activeId = params.get("case");
  const active = list.find((x) => x.id === activeId) || null;

  const taskTypes = uniq(list.map((x) => x.taskType));
  const industries = uniq(list.map((x) => x.industry));
  const shown = filter ? list.filter((x) => x[filter.dim] === filter.value) : list;
  const isActive = (dim, value) => filter && filter.dim === dim && filter.value === value;
  // Modal steps through the *visible* cases so the sequence matches the grid.
  const shownIndex = shown.findIndex((x) => x.id === activeId);

  const open = (item) => setParams({ case: item.id }, { replace: true });
  const close = () => setParams({}, { replace: true });
  const goto = (i) => { if (i >= 0 && i < shown.length) setParams({ case: shown[i].id }, { replace: true }); };

  const modalRef = useRef(null);
  const restoreFocus = useRef(null);

  useEffect(() => {
    if (!active) return;
    restoreFocus.current = document.activeElement;
    modalRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowRight") goto(shownIndex + 1);
      if (e.key === "ArrowLeft") goto(shownIndex - 1);
      if (e.key === "Tab" && modalRef.current) {
        const f = modalRef.current.querySelectorAll('a[href],button:not([disabled]),input,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreFocus.current?.focus?.();
    };
  }, [active, shownIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* page hero */}
      <header style={{ padding: "128px 0 32px" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{w.eyebrow}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontSize: "clamp(34px,6vw,54px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.045em", whiteSpace: "pre-line", marginBottom: 20, maxWidth: 760 }}>
              {w.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: th.text2, maxWidth: 600 }}>{w.sub}</p>
          </Reveal>
        </div>
      </header>

      {/* filters + index */}
      <section style={{ padding: "8px 0 100px" }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              <div className="case-tabs" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span className="filter-label">{w.byTask}</span>
                <button className="filter-chip" data-active={!filter} onClick={() => setFilter(null)}>{w.filterAll}</button>
                {taskTypes.map((tt) => (
                  <button key={tt} className="filter-chip" data-active={isActive("taskType", tt)} onClick={() => setFilter({ dim: "taskType", value: tt })}>{tt}</button>
                ))}
              </div>
              <div className="case-tabs" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span className="filter-label">{w.byIndustry}</span>
                {industries.map((ind) => (
                  <button key={ind} className="filter-chip" data-active={isActive("industry", ind)} onClick={() => setFilter({ dim: "industry", value: ind })}>{ind}</button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="ledger-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {shown.map((item, i) => (
              <CaseCard key={item.id} item={item} th={th} work={w} onOpen={open} delay={(i % 2) * 0.06} />
            ))}
          </div>

          {/* closing CTA */}
          <Reveal>
            <div className="card" style={{ marginTop: 32, padding: "40px 36px", borderRadius: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>{c.contact.title.replace("\n", " ")}</h3>
                <p style={{ fontSize: 15, color: th.text2, lineHeight: 1.6, maxWidth: 440 }}>{c.contact.sub}</p>
              </div>
              <a href="https://t.me/topmonroe9" className="tg-btn" target="_blank" rel="noopener">
                <TelegramIcon />
                {c.contact.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* case modal */}
      {active && (
        <div className="modal-overlay" onClick={close} role="dialog" aria-modal="true" aria-label={active.resultTitle}>
          <div className="modal" ref={modalRef} tabIndex={-1} style={{ position: "relative", outline: "none" }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close} aria-label={w.closeLabel}>×</button>

            <div style={{ background: th.bg2, borderRadius: "24px 24px 0 0", borderBottom: `1px solid ${th.border}`, overflow: "hidden", lineHeight: 0 }}>
              <SystemVisual kind={active.kind} th={th} />
            </div>

            <div style={{ padding: "28px 32px 32px" }}>
              <div className="meta-line" style={{ marginBottom: 12 }}>
                <span style={{ color: th.accentText }}>{active.taskType}</span> · {active.industry}
              </div>
              <h2 style={{ fontSize: "clamp(23px,4vw,31px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.16, marginBottom: 12 }}>
                {active.resultTitle}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: th.text2, marginBottom: 20 }}>{active.oneLiner}</p>

              <div className="ba" style={{ marginBottom: 28 }}>
                <span className="ba-cell ba-before">{w.beforeLabel}: {active.before}</span>
                <span className="ba-arrow"><Arrow size={18} /></span>
                <span className="ba-cell ba-after">{w.afterLabel}: {active.after}</span>
              </div>

              <Block th={th} label={w.clientLabel}>
                <p style={{ fontSize: 15, lineHeight: 1.72, color: th.text2 }}>{active.clientTask}</p>
              </Block>
              <Block th={th} label={w.painLabel}>
                <p style={{ fontSize: 15, lineHeight: 1.72, color: th.text2 }}>{active.pain}</p>
              </Block>
              <Block th={th} label={w.solutionLabel}>
                <p style={{ fontSize: 15, lineHeight: 1.72, color: th.text2 }}>{active.solution}</p>
              </Block>

              <Block th={th} label={w.resultLabel}>
                <div className="metrics-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {active.results.map((m, i) => (
                    <div key={i} className="metric-box">
                      <div className="metric-val">{m.value}</div>
                      <div className="metric-label">{m.unit}</div>
                    </div>
                  ))}
                </div>
              </Block>

              {SHOW_QUOTES && active.quote && (
                <div style={{ background: th.bg2, border: `1px solid ${th.border}`, borderRadius: 16, padding: "22px 24px", marginBottom: 8 }}>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: th.text, fontStyle: "italic", marginBottom: 12 }}>«{active.quote.text}»</p>
                  <p style={{ fontSize: 13, color: th.text3 }}>— {active.quote.name}, {active.quote.role}</p>
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a href="https://t.me/topmonroe9" className="tg-btn" target="_blank" rel="noopener" style={{ padding: "13px 22px", fontSize: 15 }}>
                  <TelegramIcon size={18} />
                  {w.cta}
                </a>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="modal-nav" onClick={() => goto(shownIndex - 1)} disabled={shownIndex <= 0} aria-label={w.prevLabel}>
                    <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Arrow size={15} /></span>
                  </button>
                  <button className="modal-nav" onClick={() => goto(shownIndex + 1)} disabled={shownIndex < 0 || shownIndex >= shown.length - 1}>
                    {w.nextLabel} <Arrow size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Block = ({ th, label, children }) => (
  <div style={{ marginBottom: 24 }}>
    <p style={{ fontSize: 12, fontWeight: 700, color: th.text3, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>
      {label}
    </p>
    {children}
  </div>
);
