import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", backgroundColor: "#f9f8f6", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 32px 80px", width: "100%" }}>
        <h1 style={{ fontSize: "clamp(52px, 7vw, 80px)", fontWeight: 800, color: "#1b2b4b", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
          {personalInfo.name}
        </h1>
        <p style={{ fontSize: "18px", fontWeight: 500, color: "#9ca3af", marginBottom: "40px", letterSpacing: "-0.01em" }}>
          {personalInfo.title}
        </p>
        <div style={{ width: "48px", height: "4px", backgroundColor: "#2563eb", borderRadius: "2px", marginBottom: "40px" }} />
        <p style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 700, color: "#111827", lineHeight: 1.45, marginBottom: "36px", maxWidth: "760px", whiteSpace: "nowrap" }}>
          &ldquo;{personalInfo.tagline}&rdquo;
        </p>
        <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
          {personalInfo.intro.map((line, i) => (
            <p key={i} style={{ fontSize: "16px", color: "#374151", lineHeight: 1.8, marginBottom: i < personalInfo.intro.length - 1 ? "10px" : 0 }}>
              {line}
            </p>
          ))}
        </div>
        <a
          href="#competencies"
          style={{ display: "inline-block", backgroundColor: "#1b2b4b", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "12px 24px", borderRadius: "8px", textDecoration: "none" }}
        >
          역량 보기 ↓
        </a>
      </div>
    </section>
  );
}
