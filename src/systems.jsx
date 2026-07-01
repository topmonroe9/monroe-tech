import { useId } from "react";
import { useApp } from "./app-context.jsx";

// One coded visual language for every project. Each `kind` draws a distinct
// abstract diagram, sharing the frame: a dark panel with a dot grid, a
// brand-gradient stroke, muted nodes, and a short benefit caption (localized,
// plain-language — no tech jargon). The single moving part is the "flow"
// connector (respects prefers-reduced-motion via global CSS).

const CAPTION = {
  ru: {
    docs: "разбор и сверка — сами",
    crypto: "весь рынок на одном экране",
    saas: "запись · оплата · видео",
    blueprint: "расчёт → готовый документ",
    chat: "сообщение → запись → к вам",
    bim: "по нормам, без ручной рутины",
    web: "быстрый сайт → заявки",
  },
  en: {
    docs: "sorted & matched on its own",
    crypto: "the whole market, one screen",
    saas: "book · pay · meet",
    blueprint: "calc → finished document",
    chat: "message → booked → to you",
    bim: "to standard, no manual work",
    web: "fast site → leads",
  },
};

export function SystemVisual({ kind, th, style }) {
  const { lang } = useApp();
  const caption = (CAPTION[lang] || CAPTION.en)[kind];
  const uid = useId().replace(/[:]/g, "");
  const gid = `g-${uid}`;
  const pid = `p-${uid}`;
  const glow = `glow-${uid}`;
  const A = th.g1, B = th.g2; // gradient stops
  const grad = `url(#${gid})`;

  return (
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block", ...style }}
      role="img"
      aria-label={caption}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={A} />
          <stop offset="1" stopColor={B} />
        </linearGradient>
        <radialGradient id={glow} cx="0.85" cy="0.1" r="0.7">
          <stop offset="0" stopColor={B} stopOpacity="0.22" />
          <stop offset="1" stopColor={B} stopOpacity="0" />
        </radialGradient>
        <pattern id={pid} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={th.text3} opacity="0.28" />
        </pattern>
      </defs>

      {/* frame — full-bleed; the card/modal clips the top corners */}
      <rect x="0" y="0" width="400" height="240" fill={th.bg2} />
      <rect x="0" y="0" width="400" height="240" fill={`url(#${pid})`} />
      <rect x="0" y="0" width="400" height="240" fill={`url(#${glow})`} />

      {kind === "docs" && <Docs th={th} grad={grad} />}
      {kind === "crypto" && <Crypto th={th} grad={grad} A={A} B={B} />}
      {kind === "saas" && <Saas th={th} grad={grad} />}
      {kind === "blueprint" && <Blueprint th={th} grad={grad} />}
      {kind === "chat" && <Chat th={th} grad={grad} />}
      {kind === "bim" && <Bim th={th} grad={grad} />}
      {kind === "web" && <Web th={th} grad={grad} />}

      <text x="20" y="222" fontFamily="'JetBrains Mono', monospace" fontSize="10.5"
        letterSpacing="1.2" fill={th.text3} style={{ textTransform: "uppercase" }}>
        {caption}
      </text>
    </svg>
  );
}

const node = (th, grad, x, y, r = 7) => (
  <circle cx={x} cy={y} r={r} fill={th.bg2} stroke={grad} strokeWidth="2" />
);

/* ── AI document processing: messy stack → pipeline → matched rows ── */
function Docs({ th, grad }) {
  return (
    <g>
      {/* messy scanned stack */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${34 + i * 6},${58 + i * 8}) rotate(${-6 + i * 5} 24 30)`}>
          <rect width="48" height="60" rx="5" fill={th.bg3 || th.card} stroke={th.border} />
          <line x1="9" y1="16" x2="39" y2="16" stroke={th.text3} strokeWidth="2" opacity="0.6" />
          <line x1="9" y1="26" x2="33" y2="26" stroke={th.text3} strokeWidth="2" opacity="0.4" />
          <line x1="9" y1="36" x2="39" y2="36" stroke={th.text3} strokeWidth="2" opacity="0.4" />
        </g>
      ))}
      {/* flow into pipeline */}
      <path className="sv-flow" d="M108 92 H176" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* pipeline rail */}
      <line x1="196" y1="62" x2="196" y2="164" stroke={th.border} strokeWidth="2" />
      {node(th, grad, 196, 72)}
      {node(th, grad, 196, 113)}
      {node(th, grad, 196, 154)}
      {/* matched rows */}
      {[72, 113, 154].map((y, i) => (
        <g key={i}>
          <path d={`M204 ${y} H250`} stroke={th.border} strokeWidth="2" fill="none" />
          <rect x="256" y={y - 12} width="104" height="24" rx="6" fill={th.card} stroke={th.border} />
          <path d={`M264 ${y} l5 5 l9 -11`} stroke={th.green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="286" y1={y} x2="350" y2={y} stroke={th.text3} strokeWidth="2" opacity="0.5" />
        </g>
      ))}
    </g>
  );
}

/* ── Real-time crypto desk: area chart + candles + liquidation heat + whale dots ── */
function Crypto({ th, grad, A, B }) {
  return (
    <g>
      {/* liquidation heat grid (top-right) */}
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={250 + c * 18} y={40 + r * 18} width="14" height="14" rx="3"
            fill={B} opacity={0.12 + ((r * 6 + c) % 5) * 0.13} />
        ))
      )}
      {/* area chart */}
      <path d="M34 150 L70 132 L100 140 L134 104 L168 118 L200 78 L226 92"
        fill="none" stroke={grad} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 150 L70 132 L100 140 L134 104 L168 118 L200 78 L226 92 L226 176 L34 176 Z"
        fill={A} opacity="0.10" />
      {/* candlesticks along the bottom */}
      {[
        [50, 150, 168], [82, 138, 162], [116, 128, 150], [150, 112, 146], [184, 96, 132], [214, 104, 138],
      ].map(([x, hi, lo], i) => (
        <g key={i}>
          <line x1={x} y1={hi} x2={x} y2={lo} stroke={th.text3} strokeWidth="1.5" />
          <rect x={x - 4} y={(hi + lo) / 2 - 6} width="8" height="12" rx="1.5" fill={i % 2 ? th.green : B} opacity="0.85" />
        </g>
      ))}
      {/* whale signal dots */}
      <circle className="sv-pulse" cx="200" cy="78" r="5" fill={B} />
      <circle cx="134" cy="104" r="3.5" fill={A} />
      {/* baseline */}
      <line x1="30" y1="176" x2="360" y2="176" stroke={th.border} strokeWidth="1.5" />
    </g>
  );
}

/* ── SaaS: calendar → video → payment, wired together ── */
function Saas({ th, grad }) {
  return (
    <g>
      {/* calendar tile */}
      <rect x="34" y="70" width="86" height="86" rx="12" fill={th.card} stroke={th.border} />
      <line x1="34" y1="90" x2="120" y2="90" stroke={th.border} strokeWidth="1.5" />
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={44 + c * 18} y={100 + r * 16} width="10" height="10" rx="2.5"
            fill={r === 1 && c === 2 ? grad : th.bg2} stroke={th.border} strokeWidth="1" />
        ))
      )}
      {/* connector */}
      <path className="sv-flow" d="M120 113 H160" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* video tile */}
      <rect x="160" y="76" width="92" height="74" rx="12" fill={th.card} stroke={th.border} />
      <circle cx="206" cy="113" r="17" fill={th.bg2} stroke={grad} strokeWidth="2" />
      <path d="M201 105 l12 8 l-12 8 Z" fill={grad} />
      {/* connector */}
      <path className="sv-flow" d="M252 113 H292" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* payment card */}
      <rect x="292" y="86" width="74" height="54" rx="10" fill={th.card} stroke={th.border} />
      <rect x="292" y="98" width="74" height="9" fill={grad} opacity="0.85" />
      <line x1="302" y1="122" x2="338" y2="122" stroke={th.text3} strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      <circle cx="352" cy="122" r="4" fill={th.green} />
    </g>
  );
}

/* ── Defect sheets: top-view piping schematic → generated sheet ── */
function Blueprint({ th, grad }) {
  return (
    <g>
      {/* schematic: horizontal main + risers */}
      <line x1="40" y1="150" x2="200" y2="150" stroke={grad} strokeWidth="2.5" strokeLinecap="round" />
      {[64, 104, 144, 184].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="150" x2={x} y2={i % 2 ? 92 : 108} stroke={th.text3} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          {node(th, grad, x, i % 2 ? 92 : 108, 5)}
        </g>
      ))}
      {/* fitting nodes on main */}
      <rect x="36" y="146" width="8" height="8" fill={grad} />
      <circle cx="200" cy="150" r="5" fill={th.bg2} stroke={grad} strokeWidth="2" />
      {/* dimension line */}
      <line x1="40" y1="170" x2="200" y2="170" stroke={th.text3} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="167" x2="40" y2="173" stroke={th.text3} strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="167" x2="200" y2="173" stroke={th.text3} strokeWidth="1" opacity="0.5" />
      {/* flow to sheet */}
      <path className="sv-flow" d="M214 130 H250" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* generated sheet */}
      <rect x="258" y="58" width="104" height="128" rx="8" fill={th.card} stroke={th.border} />
      <rect x="258" y="58" width="104" height="22" rx="8" fill={grad} opacity="0.9" />
      <rect x="258" y="72" width="104" height="8" fill={grad} opacity="0.9" />
      {[92, 106, 120, 134, 148, 162].map((y, i) => (
        <line key={i} x1="270" y1={y} x2={i % 3 === 2 ? 320 : 350} y2={y} stroke={th.text3} strokeWidth="2" opacity="0.45" />
      ))}
    </g>
  );
}

/* ── Legal AI agent: multichannel messages → phased qualify → CRM deal ── */
function Chat({ th, grad }) {
  return (
    <g>
      {/* incoming bubbles from channels */}
      {[[40, 66], [56, 104], [40, 142]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y - 14} width="66" height="28" rx="14" fill={th.card} stroke={th.border} />
          <circle cx={x + 16} cy={y} r="4" fill={grad} />
          <line x1={x + 28} y1={y} x2={x + 56} y2={y} stroke={th.text3} strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
        </g>
      ))}
      {/* funnel into agent */}
      <path className="sv-flow" d="M126 104 H168" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* phase dots */}
      <line x1="182" y1="104" x2="286" y2="104" stroke={th.border} strokeWidth="2" />
      {[182, 208, 234, 260, 286].map((x, i) => (
        <circle key={i} cx={x} cy="104" r={i === 4 ? 6 : 4.5}
          fill={i === 4 ? grad : th.bg2} stroke={grad} strokeWidth="2" />
      ))}
      {/* CRM card */}
      <path className="sv-flow" d="M298 88 h20" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="300" y="60" width="64" height="60" rx="10" fill={th.card} stroke={th.border} />
      <circle cx="318" cy="78" r="7" fill={th.bg2} stroke={grad} strokeWidth="2" />
      <line x1="330" y1="76" x2="352" y2="76" stroke={th.text3} strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
      <line x1="312" y1="98" x2="352" y2="98" stroke={th.text3} strokeWidth="2.5" opacity="0.4" strokeLinecap="round" />
      <path d="M312 108 l5 5 l9 -11" stroke={th.green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/* ── BIM agent: isometric riser network → verify loop ── */
function Bim({ th, grad }) {
  // isometric-ish node lattice
  const pts = [
    [70, 150], [120, 122], [170, 150], [120, 178],
    [120, 78], [200, 108], [250, 136],
  ];
  const edges = [[0, 1], [1, 2], [1, 3], [1, 4], [2, 5], [5, 6]];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]}
          stroke={i === 3 ? grad : th.text3} strokeWidth={i === 3 ? 2.5 : 2}
          opacity={i === 3 ? 1 : 0.55} strokeLinecap="round" className={i === 3 ? "sv-flow" : undefined} />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 7 : 5} fill={th.bg2} stroke={grad} strokeWidth="2" />
      ))}
      {/* generated code chip */}
      <rect x="276" y="70" width="88" height="44" rx="9" fill={th.card} stroke={th.border} />
      <text x="288" y="88" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill={th.g1}>&lt;/&gt;</text>
      <line x1="288" y1="100" x2="342" y2="100" stroke={th.text3} strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      {/* verify loop */}
      <path d="M300 130 a20 20 0 1 1 -6 -14" fill="none" stroke={grad} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M294 112 l6 4 l-2 8" fill="none" stroke={grad} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M290 150 l6 6 l11 -13" stroke={th.green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/* ── Marketing site: browser window with sections + speed gauge ── */
function Web({ th, grad }) {
  return (
    <g>
      {/* browser window */}
      <rect x="40" y="52" width="228" height="140" rx="12" fill={th.card} stroke={th.border} />
      <line x1="40" y1="74" x2="268" y2="74" stroke={th.border} strokeWidth="1.5" />
      <circle cx="54" cy="63" r="3" fill={th.text3} />
      <circle cx="66" cy="63" r="3" fill={th.text3} />
      <circle cx="78" cy="63" r="3" fill={th.text3} />
      <rect x="96" y="59" width="160" height="8" rx="4" fill={th.bg2} />
      {/* hero */}
      <rect x="56" y="88" width="120" height="12" rx="4" fill={grad} opacity="0.9" />
      <rect x="56" y="106" width="86" height="7" rx="3.5" fill={th.text3} opacity="0.5" />
      {/* section grid */}
      {[0, 1, 2].map((c) => (
        <rect key={c} x={56 + c * 68} y="128" width="56" height="46" rx="8" fill={th.bg2} stroke={th.border} />
      ))}
      {/* flow to gauge */}
      <path className="sv-flow" d="M268 122 H300" stroke={grad} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* speed gauge */}
      <path d="M306 150 a44 44 0 0 1 62 0" fill="none" stroke={th.border} strokeWidth="8" strokeLinecap="round" />
      <path d="M306 150 a44 44 0 0 1 55 -26" fill="none" stroke={grad} strokeWidth="8" strokeLinecap="round" />
      <line x1="337" y1="150" x2="356" y2="128" stroke={th.text} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="337" cy="150" r="4" fill={th.text} />
      <text x="316" y="176" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill={th.green}>100</text>
    </g>
  );
}
