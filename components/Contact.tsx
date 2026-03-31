"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2200);
    });
  }

  return (
    <section style={{ backgroundColor: "#1b2b4b", padding: "96px 32px", textAlign: "center" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "40px" }}>
          감사합니다.
        </p>
        <div style={{ width: "48px", height: "3px", backgroundColor: "#3b82f6", borderRadius: "2px", margin: "0 auto 40px" }} />
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            onClick={copyEmail}
            style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#ffffff", color: "#1b2b4b", fontWeight: 600, fontSize: "14px", padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}
          >
            {personalInfo.email}
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#ffffff", fontWeight: 600, fontSize: "14px", padding: "12px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none" }}
          >
            LinkedIn →
          </a>
        </div>
        <p style={{ marginTop: "56px", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
          © 2026 김정수. All rights reserved.
        </p>
      </div>

      {/* Toast */}
      <div
        style={{
          position: "fixed",
          bottom: "32px",
          left: "50%",
          transform: `translateX(-50%) translateY(${toastVisible ? "0" : "12px"})`,
          opacity: toastVisible ? 1 : 0,
          transition: "opacity 0.22s ease, transform 0.22s ease",
          backgroundColor: "#1b2b4b",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#ffffff",
          fontSize: "13px",
          fontWeight: 500,
          padding: "12px 22px",
          borderRadius: "8px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        이메일 주소가 복사되었습니다.
      </div>
    </section>
  );
}
