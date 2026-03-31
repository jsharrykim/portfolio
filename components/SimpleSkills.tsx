import { simpleSkills } from "@/data/portfolio";

export default function SimpleSkills() {
  return (
    <section style={{ backgroundColor: "#f9f8f6", borderTop: "1px solid #e5e7eb", padding: "48px 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
          Additional Skills
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {simpleSkills.map((skill) => (
            <span key={skill} style={{ fontSize: "13px", color: "#374151", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", padding: "8px 16px", borderRadius: "999px" }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
