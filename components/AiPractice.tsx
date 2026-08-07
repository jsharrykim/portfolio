import { aiPracticeIntro, aiPractices } from "@/data/portfolio";

const KIND_STYLE: Record<string, { bg: string; color: string }> = {
  제작: { bg: "rgba(37, 99, 235, 0.12)", color: "#93b4f5" },
  고도화: { bg: "rgba(124, 58, 237, 0.14)", color: "#b79bf0" },
  활용: { bg: "rgba(255, 255, 255, 0.07)", color: "#9ca8bd" },
};

export default function AiPractice() {
  return (
    <section style={{ backgroundColor: "#111d33", padding: "80px 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          AI Practice
        </p>

        <h2
          style={{
            fontSize: "clamp(24px, 3.4vw, 34px)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          {aiPracticeIntro.heading}
        </h2>

        <div style={{ maxWidth: "680px", marginBottom: "52px" }}>
          {aiPracticeIntro.body.map((line) => (
            <p
              key={line}
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.62)",
                marginBottom: "10px",
                whiteSpace: "pre-line",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {aiPractices.map((practice) => (
            <div
              key={practice.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px 30px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#7fa3ea",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                }}
              >
                {practice.layer}
              </p>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.45,
                  marginBottom: "10px",
                }}
              >
                {practice.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "24px",
                }}
              >
                {practice.summary}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {practice.items.map((item) => {
                  const kind = KIND_STYLE[item.kind] ?? KIND_STYLE["활용"];
                  return (
                    <div
                      key={item.name}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                        paddingTop: "18px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          flexWrap: "wrap",
                          marginBottom: "7px",
                        }}
                      >
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#e8edf7" }}>
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: kind.color,
                            backgroundColor: kind.bg,
                            padding: "3px 8px",
                            borderRadius: "999px",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {item.kind}
                        </span>
                      </div>
                      <p style={{ fontSize: "13.5px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)" }}>
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
