import { experiences } from "@/data/portfolio";

const DOMAIN_COLORS: Record<string, string> = {
  "게임 UGC 플랫폼": "#2563eb",
  "EdTech (B2C · B2B · B2G)": "#7c3aed",
  "핀테크": "#059669",
  "엔터테인먼트 · 미디어": "#db2777",
  "Travel Tech · 창업": "#d97706",
  "실리콘밸리": "#0891b2",
};

export default function CareerTimeline() {
  return (
    <section style={{ backgroundColor: "#f9f8f6", padding: "88px 32px", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
            Career Path
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#1b2b4b", letterSpacing: "-0.02em" }}>
            커리어
          </h2>
        </div>

        {/* 2-column compact grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {experiences.map((exp, i) => {
            const accentColor = DOMAIN_COLORS[exp.domain] || "#6b7280";
            const isCurrent = i === 0;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${isCurrent ? accentColor + "40" : "#e5e7eb"}`,
                  borderLeft: `3px solid ${isCurrent ? accentColor : "#d1d5db"}`,
                  borderRadius: "12px",
                  padding: "20px 24px",
                }}
              >
                {/* Period + domain */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#9ca3af" }}>{exp.period}</span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: accentColor, backgroundColor: accentColor + "15", padding: "2px 8px", borderRadius: "999px" }}>
                    {exp.domain}
                  </span>
                </div>
                {/* Company + role */}
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1b2b4b", marginBottom: "3px", letterSpacing: "-0.01em" }}>
                  {exp.company}
                </h3>
                <p style={{ fontSize: "12px", color: "#6b7280", fontWeight: 500, marginBottom: "12px" }}>
                  {exp.role}
                </p>
                {/* Highlights */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: "12px", color: "#4b5563", lineHeight: 1.6, paddingLeft: "12px", position: "relative", marginBottom: "2px" }}>
                      <span style={{ position: "absolute", left: 0, top: "8px", width: "4px", height: "1px", backgroundColor: "#9ca3af", display: "block" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
