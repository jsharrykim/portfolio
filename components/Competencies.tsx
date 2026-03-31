"use client";

import { useState } from "react";
import Link from "next/link";
import { competencies, projects, getProjectById, personalInfo, type Project } from "@/data/portfolio";
import { ProjectImage } from "@/components/ProjectImage";

const COMP_ACCENT = ["#2563eb", "#7c3aed", "#059669", "#d97706"];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
    >
      {/* image — fixed aspect ratio */}
      <div style={{ padding: "12px 12px 0", flexShrink: 0 }}>
        <ProjectImage projectId={project.id} />
      </div>

      {/* content — grows to fill height */}
      <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px", minHeight: "50px", alignContent: "flex-start" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", fontWeight: 600, color: "#6b7280", backgroundColor: "#f3f4f6", padding: "3px 8px", borderRadius: "999px" }}>{tag}</span>
          ))}
        </div>

        {/* title — fixed 2-line reserve */}
        <h4
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#1b2b4b",
            lineHeight: 1.45,
            marginBottom: "5px",
            letterSpacing: "-0.01em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "41px",
          }}
        >
          {project.title}
        </h4>

        {/* company/period */}
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "14px" }}>
          {project.company} · {project.period}
        </p>

        {/* metrics — sentence format */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
            {project.metrics.slice(0, 3).map((m) => (
              <p key={m.label} style={{ fontSize: "13px", color: "#111827", lineHeight: 1.5, margin: 0, whiteSpace: "pre-line" }}>
                {m.label}{" "}
                <strong style={{ color: "#111827", fontWeight: 800 }}>{m.value}</strong>
              </p>
            ))}
          </div>

          {/* divider + link — always at bottom */}
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "14px", marginTop: "16px" }}>
            <Link href={`/projects/${project.id}`} style={{ fontSize: "13px", fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>
              자세히 보기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Competencies() {
  const [viewMode, setViewMode] = useState<"competency" | "latest">("competency");

  // Sort projects by latest (end date) for the "latest" view
  const latestProjects = [...projects].sort((a, b) => {
    const getEndYearMonth = (period: string) => {
      if (period.includes("진행 중")) return 999999;
      const matches = [...period.matchAll(/(\d{4})\.?(\d{2})?/g)];
      const lastMatch = matches[matches.length - 1];
      if (!lastMatch) return 0;
      return parseInt(lastMatch[1], 10) * 100 + parseInt(lastMatch[2] || "0", 10);
    };
    return getEndYearMonth(b.period) - getEndYearMonth(a.period);
  });

  return (
    <section id="competencies" style={{ backgroundColor: "#ffffff", paddingTop: "96px", paddingBottom: "96px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
              Core Competencies
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800, color: "#1b2b4b", letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.2 }}>
              핵심 역량
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, maxWidth: "520px", whiteSpace: "pre-line" }}>
              {personalInfo.competencyIntro}
            </p>
          </div>
          
          {/* Toggle Filter */}
          <div style={{ display: "flex", backgroundColor: "#f3f4f6", padding: "4px", borderRadius: "8px" }}>
            <button
              onClick={() => setViewMode("competency")}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: viewMode === "competency" ? "#ffffff" : "transparent",
                color: viewMode === "competency" ? "#111827" : "#6b7280",
                boxShadow: viewMode === "competency" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.2s"
              }}
            >
              역량순
            </button>
            <button
              onClick={() => setViewMode("latest")}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: viewMode === "latest" ? "#ffffff" : "transparent",
                color: viewMode === "latest" ? "#111827" : "#6b7280",
                boxShadow: viewMode === "latest" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.2s"
              }}
            >
              최신순
            </button>
          </div>
        </div>

        {/* Content */}
        {viewMode === "competency" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {competencies.map((comp, idx) => {
              const accent = COMP_ACCENT[idx % COMP_ACCENT.length];
              const relatedProjects = comp.projectIds.map((id) => getProjectById(id)).filter(Boolean) as Project[];
              const colCount = relatedProjects.length === 1 ? 1 : 2;
              return (
                <div key={comp.id}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px" }}>
                    <span style={{ fontSize: "36px", fontWeight: 900, color: accent, lineHeight: 1, marginTop: "2px", flexShrink: 0, opacity: 0.2, letterSpacing: "-0.04em" }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 style={{ fontSize: "21px", fontWeight: 800, color: "#1b2b4b", letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "10px" }}>
                        {comp.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7 }}>
                        {comp.why}
                      </p>
                    </div>
                  </div>

                  {/* Cards — align-items: stretch ensures same height in each row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: colCount === 1
                        ? "minmax(0, 360px)"
                        : "repeat(2, minmax(0, 1fr))",
                      gap: "16px",
                      alignItems: "stretch",
                    }}
                  >
                    {relatedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px 16px",
              alignItems: "stretch",
            }}
          >
            {latestProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
