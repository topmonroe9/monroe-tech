import { SystemVisual } from "./systems.jsx";
import { Arrow } from "./ui.jsx";

// Client-facing project card: a plain task-type label, a result-first title,
// and a before→after the visitor recognizes. No stack, no jargon.
export default function CaseCard({ item, th, work, onOpen, delay = 0 }) {
  return (
    <button
      className="ledger-card"
      onClick={() => onOpen(item)}
      aria-label={`${item.resultTitle} — ${work.openLabel}`}
      style={{
        opacity: 0, transform: "translateY(24px)",
        animation: `modalIn .6s cubic-bezier(.16,1,.3,1) ${delay}s forwards`,
      }}
    >
      <div style={{ background: th.bg2, borderBottom: `1px solid ${th.border}`, lineHeight: 0 }}>
        <SystemVisual kind={item.kind} th={th} />
      </div>
      <div style={{ padding: "20px 24px 22px" }}>
        <div className="meta-line" style={{ color: th.accentText, marginBottom: 12 }}>
          {item.taskType}
        </div>
        <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.28, marginBottom: 8 }}>
          {item.resultTitle}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: th.text2, marginBottom: 18 }}>{item.oneLiner}</p>

        <div className="ba" style={{ marginBottom: 20 }}>
          <span className="ba-cell ba-before">{item.before}</span>
          <span className="ba-arrow"><Arrow size={16} /></span>
          <span className="ba-cell ba-after">{item.after}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span className="meta-line" style={{ color: th.text3 }}>{item.industry}</span>
          <span className="open-link">{work.openLabel} <Arrow size={14} /></span>
        </div>
      </div>
    </button>
  );
}
