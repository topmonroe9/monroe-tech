// Brand theme tokens for Monroe Tech. Dark is the primary identity;
// light is a faithful inverse. Kept as one source of truth so the landing
// and the /work showcase never drift apart.
export const makeTheme = (dark) =>
  dark
    ? {
        bg: "#08080a", bg2: "#111114", bg3: "#18181c",
        card: "#131316", cardHover: "#1a1a1f",
        text: "#f0f0f2", text2: "#a0a0ab", text3: "#65656f",
        accent: "#6366f1", accentSoft: "rgba(99,102,241,0.12)", accentText: "#818cf8",
        green: "#22c55e",
        border: "#1f1f24", borderLight: "#2a2a30",
        gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
        gradientText: "linear-gradient(135deg, #818cf8, #c084fc)",
        glass: "rgba(8,8,10,0.85)",
        g1: "#818cf8", g2: "#c084fc",
      }
    : {
        bg: "#fafafa", bg2: "#f0f0f2", bg3: "#e8e8ec",
        card: "#ffffff", cardHover: "#f8f8fa",
        text: "#111114", text2: "#555560", text3: "#888892",
        accent: "#4f46e5", accentSoft: "rgba(79,70,229,0.08)", accentText: "#4f46e5",
        green: "#16a34a",
        border: "#e4e4e8", borderLight: "#d4d4d8",
        gradient: "linear-gradient(135deg, #4f46e5, #9333ea)",
        gradientText: "linear-gradient(135deg, #4f46e5, #7c3aed)",
        glass: "rgba(250,250,250,0.88)",
        g1: "#6366f1", g2: "#9333ea",
      };
