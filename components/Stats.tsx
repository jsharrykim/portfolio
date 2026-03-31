import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#1b2b4b" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
        {stats.map((stat, i) => (
          <div key={stat.label} style={{ padding: "40px 20px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", textAlign: "center" }}>
            <p style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "8px",
              whiteSpace: "nowrap",
            }}>
              {stat.value}
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 500, lineHeight: 1.4 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
