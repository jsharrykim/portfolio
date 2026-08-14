import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectById, competencies } from "@/data/portfolio";
import type { ProjectCycle, ProjectTable } from "@/data/portfolio";
import { ProjectImage, AgenticStudioArchitectureRef, StudioOptimizationDashboardRef, StudioOptimizationDashboardRef2, StudioOptimizationDashboardRef3 } from "@/components/ProjectImage";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};
  return { title: `${project.title} — 김정수`, description: project.summary };
}

async function fetchOgData(url: string) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
      next: { revalidate: 86400 }
    });
    const html = await res.text();
    
    let image = null;
    const imgRegex1 = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i;
    const imgRegex2 = /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i;
    const imgMatch = html.match(imgRegex1) || html.match(imgRegex2);
    if (imgMatch) image = imgMatch[1];
    
    return { image };
  } catch (e) {
    return null;
  }
}

function getCompetency(projectId: string) {
  return competencies.find((c) => c.projectIds.includes(projectId));
}

function getAdjacent(projectId: string) {
  const comp = getCompetency(projectId);
  if (!comp) return { prev: null, next: null };
  const ids = comp.projectIds;
  const idx = ids.indexOf(projectId);
  return { prev: idx > 0 ? getProjectById(ids[idx - 1]) : null, next: idx < ids.length - 1 ? getProjectById(ids[idx + 1]) : null };
}

function Section({ label, content }: { label: string; content?: string }) {
  if (!content) return null;
  return (
    <div style={{ padding: "28px 0", borderBottom: "1px solid #f3f4f6" }}>
      <p style={{ fontSize: "11px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{label}</p>
      <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line" }}>{content}</p>
    </div>
  );
}

function DataTable({ table }: { table: ProjectTable }) {
  return (
    <div style={{ marginTop: "14px" }}>
      <div style={{ overflowX: "auto", border: "1px solid #e5e7eb", borderRadius: "10px", backgroundColor: "#ffffff" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: `${table.headers.length * 150}px` }}>
          <thead>
            <tr>
              {table.headers.map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 14px", backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb", color: "#6b7280", fontWeight: 700, fontSize: "11.5px", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{ padding: "10px 14px", borderBottom: ri === table.rows.length - 1 ? "none" : "1px solid #f3f4f6", color: ci === 0 ? "#1b2b4b" : "#4b5563", fontWeight: ci === 0 ? 700 : 400, lineHeight: 1.6, verticalAlign: "top", whiteSpace: "pre-line" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "8px", lineHeight: 1.6 }}>{table.caption}</p>}
    </div>
  );
}

function CycleCard({ cycle, isLast }: { cycle: ProjectCycle; isLast: boolean }) {
  return (
    <div style={{ position: "relative", paddingLeft: "22px", paddingBottom: isLast ? "0" : "28px" }}>
      <span style={{ position: "absolute", left: 0, top: "7px", width: "9px", height: "9px", borderRadius: "999px", backgroundColor: "#2563eb" }} />
      {!isLast && <span style={{ position: "absolute", left: "4px", top: "20px", bottom: 0, width: "1px", backgroundColor: "#e5e7eb" }} />}

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
        <span style={{ fontSize: "11px", fontWeight: 800, color: "#2563eb", letterSpacing: "0.08em" }}>{cycle.no}</span>
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>{cycle.period}</span>
      </div>
      <p style={{ fontSize: "17px", fontWeight: 800, color: "#1b2b4b", lineHeight: 1.4, letterSpacing: "-0.01em", marginBottom: "8px" }}>{cycle.title}</p>
      <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#92400e", backgroundColor: "#fef3c7", borderRadius: "999px", padding: "4px 11px", marginBottom: "16px" }}>{cycle.status}</span>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "4px 20px", backgroundColor: "#fcfcfb" }}>
        {cycle.blocks.map((block, i) => (
          <div key={block.label} style={{ padding: "18px 0", borderBottom: i === cycle.blocks.length - 1 ? "none" : "1px solid #f0efec" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#6b7280", letterSpacing: "0.08em", marginBottom: "8px" }}>{block.label}</p>
            <p style={{ fontSize: "14.5px", color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line" }}>{block.body}</p>
            {block.table && <DataTable table={block.table} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  const comp = getCompetency(slug);
  const { prev, next } = getAdjacent(slug);

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "52px", backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 32px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← 돌아가기</Link>
          {comp && <span style={{ fontSize: "12px", fontWeight: 600, color: "#2563eb", maxWidth: "320px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{comp.title}</span>}
        </div>
      </header>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "88px 32px 96px" }}>
        {comp && <p style={{ fontSize: "12px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>역량 — {comp.title}</p>}
        <h1 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#1b2b4b", lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: "14px" }}>{project.title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "13px", color: "#9ca3af", marginBottom: "14px" }}>
          <span>{project.company}</span><span style={{ color: "#d1d5db" }}>·</span>
          <span>{project.period}</span><span style={{ color: "#d1d5db" }}>·</span>
          <span>{project.role}</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "12px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px", backgroundColor: "#eef2ff", color: "#3730a3" }}>{tag}</span>
          ))}
        </div>

        {/* Image */}
        <div style={{ marginBottom: "40px" }}>
          <ProjectImage projectId={project.id} />
        </div>

        {/* Summary */}
        <div style={{ backgroundColor: "#f9f8f6", borderRadius: "14px", padding: "22px 26px", marginBottom: "36px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>Summary</p>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#1b2b4b", lineHeight: 1.7 }}>{project.summary}</p>
        </div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px", marginBottom: "48px" }}>
          {project.metrics.map((m) => (
            <div key={m.label} style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "20px", fontWeight: 900, color: "#1b2b4b", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "6px" }}>{m.value}</p>
              <p style={{ fontSize: "11px", color: "#9ca3af", lineHeight: 1.4, whiteSpace: "pre-line" }}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* Case study */}
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "0 28px" }}>
          <Section label={project.sectionLabels?.context ?? "배경 (Context)"} content={project.sections.context} />
          <Section label={project.sectionLabels?.goal ?? "목표 (Goal)"} content={project.sections.goal} />
          <Section label={project.sectionLabels?.problem ?? "문제 정의 (Problem)"} content={project.sections.problem} />
          <Section label={project.sectionLabels?.hypothesis ?? "가설 (Hypothesis)"} content={project.sections.hypothesis} />
          <Section label={project.sectionLabels?.execution ?? "실행 (Execution)"} content={project.sections.execution} />
          <Section label={project.sectionLabels?.result ?? "결과 (Result)"} content={project.sections.result} />
          {project.cycles?.length ? (
            <div style={{ padding: "28px 0", borderBottom: "1px solid #f3f4f6" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>실험 사이클 (Iterations)</p>
              <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.6, marginBottom: "24px" }}>목표에 도달하기 위해 문제 정의 → 가설 → 실행 → 결과 → 회고를 반복한 기록입니다.</p>
              {project.cycles.map((cycle, i) => (
                <CycleCard key={cycle.no} cycle={cycle} isLast={i === project.cycles!.length - 1} />
              ))}
            </div>
          ) : null}
          <Section label={project.sectionLabels?.currentStatus ?? "현재 상황 (Where We Are Now)"} content={project.currentStatus} />
          <div style={{ padding: "28px 0", borderBottom: (project.references?.length || project.referenceImages?.length || project.referenceVideos?.length || project.referenceComponents?.length) ? "1px solid #f3f4f6" : "none" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>배운점 (Lesson Learned)</p>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line" }}>{project.sections.learning}</p>
          </div>
          {(project.referenceImages?.length || project.referenceVideos?.length || project.references?.length || project.referenceComponents?.length) ? (
            <div style={{ padding: "28px 0" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>레퍼런스 (References)</p>
              
              {project.referenceComponents?.map((componentName) => {
                if (componentName === "AgenticStudioArchitectureRef") {
                  return (
                    <div key={componentName} style={{ marginBottom: "24px" }}>
                      <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#f9f8f6", border: "1px solid #e5e7eb" }}>
                        <AgenticStudioArchitectureRef />
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Agentic Studio Phase 1 — AI Agent → Studio 직접 연결 구조 (명령 수신 레이어 Studio 내장)</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (componentName === "StudioOptimizationDashboardRef") {
                  return (
                    <div key={componentName} style={{ marginBottom: "24px" }}>
                      <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                        <StudioOptimizationDashboardRef />
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Performance Dashboard - 성능 지표 트래킹 화면 (Mockup 1)</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (componentName === "StudioOptimizationDashboardRef2") {
                  return (
                    <div key={componentName} style={{ marginBottom: "24px" }}>
                      <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                        <StudioOptimizationDashboardRef2 />
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Performance Dashboard - Memory Overflow Crash Events (Mockup)</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (componentName === "StudioOptimizationDashboardRef3") {
                  return (
                    <div key={componentName} style={{ marginBottom: "24px" }}>
                      <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                        <StudioOptimizationDashboardRef3 />
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Performance Dashboard - Device Retention Trend (Mockup)</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}

              {/* Videos */}
              {project.referenceVideos && project.referenceVideos.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: (project.referenceImages?.length || project.references?.length) ? "24px" : "0", alignItems: "stretch" }}>
                  {project.referenceVideos.map((vid, idx) => (
                    <div key={`vid-${idx}`} style={{ gridColumn: vid.halfWidth ? "span 1" : "span 2", borderRadius: "12px", overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column" }}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", backgroundColor: "#0b1220", flexShrink: 0 }}>
                        <video
                          src={vid.url}
                          poster={vid.poster}
                          controls
                          playsInline
                          preload="metadata"
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", backgroundColor: "#0b1220" }}
                        />
                      </div>
                      {vid.caption && (
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center", margin: 0 }}>{vid.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Images */}
              {project.referenceImages && project.referenceImages.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: project.references?.length ? "24px" : "0", alignItems: "stretch" }}>
                  {project.referenceImages.map((img, idx) => (
                    <div key={`img-${idx}`} style={{ gridColumn: img.halfWidth ? "span 1" : "span 2", borderRadius: "12px", overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", display: "flex", flexDirection: "column" }}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", backgroundColor: "#0b1220", flexShrink: 0 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt={img.caption || "레퍼런스 이미지"} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      </div>
                      {img.caption && (
                        <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff", minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <p style={{ fontSize: "13px", color: "#6b7280", textAlign: "center", margin: 0 }}>{img.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Links with OG Previews */}
              {project.references && project.references.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {await Promise.all(project.references.map(async (ref, idx) => {
                    const ogData = await fetchOgData(ref.link);
                    const isNaverBlog = ref.link.includes('blog.naver.com');
                    return (
                      <a key={`ref-${idx}`} href={ref.link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "stretch", padding: "16px 20px", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s ease" }}>
                        <div style={{ flex: 1, paddingRight: (ogData?.image && !isNaverBlog) ? "20px" : "0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <p style={{ fontSize: "15px", fontWeight: 700, color: "#1b2b4b", marginBottom: ref.description ? "6px" : "0" }}>{ref.title}</p>
                          {ref.description && <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{ref.description}</p>}
                          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "8px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{ref.link}</p>
                        </div>
                        {ogData?.image && !isNaverBlog && (
                          <div style={{ width: "120px", height: "80px", flexShrink: 0, borderRadius: "8px", overflow: "hidden", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb", alignSelf: "center" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ogData.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                        )}
                      </a>
                    );
                  }))}
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Prev/Next */}
        {(prev || next) && (
          <div style={{ marginTop: "56px", paddingTop: "36px", borderTop: "1px solid #e5e7eb", display: "flex", gap: "14px" }}>
            {prev ? (
              <Link href={`/projects/${prev.id}`} style={{ flex: 1, backgroundColor: "#f9f8f6", borderRadius: "12px", padding: "18px", textDecoration: "none", display: "block" }}>
                <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "5px" }}>← 이전 프로젝트</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#1b2b4b", lineHeight: 1.4 }}>{prev.title}</p>
              </Link>
            ) : <div style={{ flex: 1 }} />}
            {next && (
              <Link href={`/projects/${next.id}`} style={{ flex: 1, backgroundColor: "#f9f8f6", borderRadius: "12px", padding: "18px", textDecoration: "none", display: "block", textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "5px" }}>다음 프로젝트 →</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#1b2b4b", lineHeight: 1.4 }}>{next.title}</p>
              </Link>
            )}
          </div>
        )}

        <div style={{ marginTop: "36px", textAlign: "center" }}>
          <Link href="/" style={{ fontSize: "13px", fontWeight: 600, color: "#9ca3af", textDecoration: "none" }}>← 포트폴리오로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
}
