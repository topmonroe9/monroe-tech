import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useApp } from "./app-context.jsx";
import { t } from "./i18n.js";
import { TelegramIcon } from "./ui.jsx";

export default function Layout() {
  const { lang, dark, th, toggleLang, toggleDark } = useApp();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const c = t[lang];

  // Landing anchors work from any route: on /work we route home first, then scroll.
  const goSection = (id) => {
    setMenu(false);
    if (id === "work") { navigate("/work"); window.scrollTo({ top: 0 }); return; }
    if (location.pathname !== "/") { navigate(`/#${id}`); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setMenu(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menu]);

  return (
    <div style={{ background: th.bg, color: th.text, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", transition: "background 0.4s, color 0.4s" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; }
        ::selection { background:${th.accent}33; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.4;} }
        @keyframes svflow { to { stroke-dashoffset:-24; } }
        @keyframes svpulse { 0%,100%{ opacity:1; transform:scale(1);} 50%{ opacity:.45; transform:scale(1.35);} }
        @keyframes modalIn { from { opacity:0; transform:translateY(24px) scale(.985);} to { opacity:1; transform:none;} }
        @keyframes overlayIn { from { opacity:0;} to { opacity:1;} }
        .gradient-text { background:${th.gradientText}; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

        .wrap { max-width:1080px; margin:0 auto; padding:0 24px; }
        .nav-link { cursor:pointer; padding:6px 0; color:${th.text2}; transition:color .2s; font-size:14px; font-weight:500; background:none; border:none; font-family:inherit; }
        .nav-link:hover { color:${th.text}; }
        .pill { display:inline-flex; align-items:center; gap:8px; background:${th.accentSoft}; border-radius:100px; padding:6px 16px 6px 12px; font-size:12px; font-weight:600; color:${th.accentText}; letter-spacing:0.03em; }
        .toggle { background:${th.bg2}; border:1px solid ${th.border}; border-radius:10px; padding:7px 12px; cursor:pointer; color:${th.text2}; font-size:13px; font-weight:500; transition:all .2s; font-family:inherit; }
        .toggle:hover { border-color:${th.borderLight}; color:${th.text}; }
        .card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; transition:all .35s cubic-bezier(.16,1,.3,1); }
        .card:hover { border-color:${th.accent}22; box-shadow:0 8px 32px ${th.accent}08; }
        .sol-card { padding:32px; cursor:default; height:100%; }
        .sol-card:hover { transform:translateY(-3px); }
        .metric-box { background:${th.bg2}; border:1px solid ${th.border}; border-radius:16px; padding:20px; text-align:center; min-width:120px; flex:1; }
        .metric-val { font-size:28px; font-weight:800; letter-spacing:-0.04em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .metric-label { font-size:12px; color:${th.text3}; margin-top:4px; font-weight:500; }
        .step-num { font-size:48px; font-weight:800; letter-spacing:-0.05em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; opacity:0.3; line-height:1; margin-bottom:12px; }
        .testimonial-card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; padding:32px; }
        .stat-val { font-size:36px; font-weight:800; letter-spacing:-0.04em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .stat-label { font-size:13px; color:${th.text3}; margin-top:4px; }
        .tg-btn { display:inline-flex; align-items:center; gap:10px; background:${th.gradient}; color:#fff; border:none; border-radius:14px; padding:16px 28px; font-size:16px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .3s; text-decoration:none; }
        .tg-btn:hover { transform:translateY(-2px); box-shadow:0 8px 32px ${th.accent}33; }
        .tg-btn svg { width:20px; height:20px; }
        .tg-float { position:fixed; bottom:24px; right:24px; z-index:90; width:56px; height:56px; border-radius:16px; background:${th.gradient}; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 4px 20px ${th.accent}44; transition:transform .2s; text-decoration:none; }
        .tg-float:hover { transform:scale(1.08); }
        .tg-float svg { width:24px; height:24px; fill:#fff; }
        .input { background:${th.bg2}; border:1px solid ${th.border}; border-radius:14px; padding:14px 18px; color:${th.text}; font-size:15px; font-family:inherit; width:100%; outline:none; transition:border-color .25s; }
        .input:focus { border-color:${th.accent}; }
        .input::placeholder { color:${th.text3}; }
        .send-btn { background:${th.bg3}; border:1px solid ${th.border}; border-radius:14px; padding:14px 28px; color:${th.text}; font-size:15px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .25s; }
        .send-btn:hover { border-color:${th.accent}; color:${th.accentText}; }
        .section-label { font-size:12px; font-weight:700; color:${th.accentText}; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:8px; }
        .section-title { font-size:clamp(26px,5vw,40px); font-weight:800; letter-spacing:-0.035em; line-height:1.15; }

        /* mono utility — the "engineering log" voice */
        .mono { font-family:'JetBrains Mono', monospace; }
        .meta-line { font-family:'JetBrains Mono', monospace; font-size:11.5px; letter-spacing:0.02em; color:${th.text3}; text-transform:uppercase; }
        .chip { font-family:'JetBrains Mono', monospace; font-size:11px; color:${th.text2}; background:${th.bg2}; border:1px solid ${th.border}; border-radius:7px; padding:4px 9px; white-space:nowrap; }
        .filter-chip { font-family:inherit; font-size:13px; font-weight:600; color:${th.text2}; background:${th.bg2}; border:1px solid ${th.border}; border-radius:11px; padding:9px 16px; cursor:pointer; transition:all .2s; white-space:nowrap; }
        .filter-chip:hover { color:${th.text}; border-color:${th.borderLight}; }
        .filter-chip[data-active="true"] { background:${th.accentSoft}; border-color:${th.accent}44; color:${th.accentText}; }
        .filter-label { font-size:11px; font-weight:700; color:${th.text3}; text-transform:uppercase; letter-spacing:0.1em; margin-right:4px; align-self:center; }

        /* pains — "узнай себя" */
        .pain-card { background:${th.card}; border:1px solid ${th.border}; border-radius:16px; padding:22px 22px; height:100%; transition:border-color .3s, transform .3s; }
        .pain-card:hover { border-color:${th.accent}33; transform:translateY(-2px); }
        .pain-mark { color:${th.accentText}; font-size:20px; line-height:1; margin-bottom:12px; }

        /* about advantages */
        .adv-item { display:flex; gap:12px; align-items:flex-start; }
        .adv-dot { flex:none; width:8px; height:8px; border-radius:50%; background:${th.gradient}; margin-top:7px; }

        /* trust badges */
        .trust-card { background:${th.card}; border:1px solid ${th.border}; border-radius:16px; padding:24px; height:100%; }
        .trust-check { width:26px; height:26px; border-radius:8px; background:${th.accentSoft}; display:flex; align-items:center; justify-content:center; margin-bottom:14px; }

        /* pricing */
        .price-card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; padding:28px 26px; height:100%; display:flex; flex-direction:column; transition:border-color .3s, transform .3s, box-shadow .3s; }
        .price-card:hover { border-color:${th.accent}44; transform:translateY(-3px); box-shadow:0 12px 36px ${th.accent}12; }
        .price-val { font-size:26px; font-weight:800; letter-spacing:-0.03em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .price-time { font-family:'JetBrains Mono', monospace; font-size:12px; color:${th.text3}; margin-top:4px; }
        .price-incl { display:flex; gap:9px; align-items:flex-start; font-size:13.5px; line-height:1.5; color:${th.text2}; }
        .price-incl svg { flex:none; margin-top:3px; }

        /* faq accordion */
        .faq-item { border:1px solid ${th.border}; border-radius:14px; background:${th.card}; margin-bottom:10px; overflow:hidden; transition:border-color .25s; }
        .faq-item[data-open="true"] { border-color:${th.accent}33; }
        .faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; text-align:left; background:none; border:none; font-family:inherit; color:${th.text}; font-size:16px; font-weight:600; padding:20px 22px; cursor:pointer; }
        .faq-icon { flex:none; color:${th.accentText}; transition:transform .28s cubic-bezier(.16,1,.3,1); }
        .faq-item[data-open="true"] .faq-icon { transform:rotate(45deg); }
        .faq-a { display:grid; grid-template-rows:0fr; transition:grid-template-rows .3s cubic-bezier(.16,1,.3,1); }
        .faq-item[data-open="true"] .faq-a { grid-template-rows:1fr; }
        .faq-a-inner { overflow:hidden; min-height:0; }
        .faq-a p { margin:0; padding:0 22px 20px; color:${th.text2}; font-size:15px; line-height:1.7; }

        /* before → after signature strip */
        .ba { display:inline-flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .ba-cell { font-family:'JetBrains Mono', monospace; font-size:12.5px; padding:6px 12px; border-radius:9px; border:1px solid ${th.border}; }
        .ba-before { color:${th.text3}; background:${th.bg2}; text-decoration:line-through; text-decoration-color:${th.text3}66; }
        .ba-after { color:${th.accentText}; background:${th.accentSoft}; border-color:${th.accent}33; font-weight:500; }
        .ba-arrow { color:${th.accentText}; display:inline-flex; }

        /* ledger cards */
        .ledger-card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; overflow:hidden; cursor:pointer; text-align:left; width:100%; min-width:0; font-family:inherit; color:inherit; padding:0; transition:transform .35s cubic-bezier(.16,1,.3,1), border-color .35s, box-shadow .35s; }
        .ledger-card:hover { transform:translateY(-4px); border-color:${th.accent}44; box-shadow:0 16px 44px ${th.accent}14; }
        .ledger-card:focus-visible { outline:2px solid ${th.accent}; outline-offset:3px; }
        .open-link { font-family:'JetBrains Mono', monospace; font-size:12px; color:${th.accentText}; display:inline-flex; align-items:center; gap:6px; }

        /* system-visual motion */
        .sv-flow { stroke-dasharray:5 7; animation:svflow 1.1s linear infinite; }
        .sv-pulse { animation:svpulse 2.2s ease-in-out infinite; transform-origin:center; transform-box:fill-box; }

        /* modal */
        .modal-overlay { position:fixed; inset:0; z-index:200; background:rgba(0,0,0,.62); backdrop-filter:blur(8px); display:flex; align-items:flex-start; justify-content:center; padding:40px 20px; overflow-y:auto; animation:overlayIn .25s ease; }
        .modal { background:${th.bg}; border:1px solid ${th.border}; border-radius:24px; max-width:760px; width:100%; margin:auto; box-shadow:0 30px 80px rgba(0,0,0,.5); animation:modalIn .4s cubic-bezier(.16,1,.3,1); }
        .modal-close { position:absolute; top:14px; right:14px; width:36px; height:36px; border-radius:10px; border:1px solid ${th.border}; background:${th.glass}; backdrop-filter:blur(8px); color:${th.text2}; font-size:20px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .2s; z-index:2; }
        .modal-close:hover { color:${th.text}; border-color:${th.borderLight}; }
        .modal-nav { background:${th.bg2}; border:1px solid ${th.border}; border-radius:12px; padding:10px 16px; color:${th.text2}; font-size:13px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .2s; display:inline-flex; align-items:center; gap:8px; }
        .modal-nav:hover:not(:disabled) { border-color:${th.accent}44; color:${th.text}; }
        .modal-nav:disabled { opacity:.4; cursor:not-allowed; }
        .approach-item { display:flex; gap:12px; align-items:flex-start; font-size:14.5px; line-height:1.6; color:${th.text2}; }
        .approach-item::before { content:'›'; color:${th.accentText}; font-weight:700; line-height:1.5; }

        .burger { display:none; background:none; border:none; cursor:pointer; padding:8px; flex-direction:column; gap:5px; }
        .burger span { display:block; width:20px; height:2px; background:${th.text}; border-radius:2px; }
        .mob-menu { position:fixed; inset:0; background:${th.glass}; backdrop-filter:blur(24px); z-index:99; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:28px; }
        .mob-menu button { background:none; border:none; color:${th.text}; font-size:22px; font-weight:600; cursor:pointer; font-family:inherit; }

        @media (max-width:1024px) {
          .price-grid { grid-template-columns:repeat(2,1fr) !important; }
          .pains-grid { grid-template-columns:repeat(2,1fr) !important; }
        }

        @media (max-width:768px) {
          .burger { display:flex; }
          .desk-nav { display:none !important; }
          .solutions-grid { grid-template-columns:1fr !important; }
          .metrics-row { flex-direction:column !important; }
          .steps-grid { grid-template-columns:1fr !important; }
          .testimonials-grid { grid-template-columns:1fr !important; }
          .stats-row { flex-direction:column !important; gap:24px !important; }
          .ledger-grid { grid-template-columns:1fr !important; }
          .teaser-grid { grid-template-columns:1fr !important; }
          .pains-grid { grid-template-columns:1fr !important; }
          .price-grid { grid-template-columns:1fr !important; }
          .trust-grid { grid-template-columns:1fr !important; }
          .adv-grid { grid-template-columns:1fr !important; }
          .modal { border-radius:20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
          .sv-flow { stroke-dasharray:none; }
        }
      `}</style>

      {/* nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: th.glass, backdropFilter: "blur(16px)", borderBottom: `1px solid ${th.border}` }}>
        <div className="wrap" style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.04em", cursor: "pointer" }} onClick={goHome}>
            <span className="gradient-text">Monroe Tech</span>
          </div>
          <div className="desk-nav" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {Object.entries(c.nav).map(([k, v]) => <button key={k} className="nav-link" onClick={() => goSection(k)}>{v}</button>)}
            <div style={{ width: 1, height: 16, background: th.border }} />
            <button className="toggle" onClick={toggleLang}>{lang === "en" ? "RU" : "EN"}</button>
            <button className="toggle" onClick={toggleDark}>{dark ? "Light" : "Dark"}</button>
          </div>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu} aria-controls="mobile-menu"><span /><span /><span /></button>
        </div>
      </nav>

      {menu && (
        <div className="mob-menu" id="mobile-menu">
          <button style={{ position: "absolute", top: 16, right: 20, fontSize: 28, fontWeight: 400 }} onClick={() => setMenu(false)} aria-label="Close">×</button>
          {Object.entries(c.nav).map(([k, v]) => <button key={k} onClick={() => goSection(k)}>{v}</button>)}
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button className="toggle" onClick={toggleLang}>{lang === "en" ? "RU" : "EN"}</button>
            <button className="toggle" onClick={toggleDark}>{dark ? "Light" : "Dark"}</button>
          </div>
        </div>
      )}

      <Outlet />

      {/* footer */}
      <footer style={{ borderTop: `1px solid ${th.border}`, padding: 20 }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: th.text3 }}>{c.footer.copy}</span>
          <span style={{ fontSize: 12, color: th.text3, fontFamily: "'JetBrains Mono',monospace" }}>{c.footer.built}</span>
        </div>
      </footer>

      {/* floating telegram */}
      <a href="https://t.me/topmonroe9" className="tg-float" target="_blank" rel="noopener" aria-label="Telegram">
        <TelegramIcon size={24} />
      </a>
    </div>
  );
}
