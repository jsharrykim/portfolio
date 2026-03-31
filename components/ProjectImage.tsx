type Props = { style?: React.CSSProperties };

// ─── 1. Studio Optimization ─────────────────────────────────────
export function StudioOptimizationImage({ style }: Props) {
  // Bar chart: churn (lower=better) left, FPS (higher=better) right
  // Churn scale: 50% = 170px height. FPS scale: 25fps = 170px height
  // Baseline y = 355
  const baseline = 355;
  const churnBefore = { h: Math.round(40 / 50 * 170), x: 68, w: 88 };   // 40% → 136px
  const churnAfter  = { h: Math.round(3  / 50 * 170), x: 220, w: 88 };  // 3%  → 10px
  const fpsBefore   = { h: Math.round(6.9 / 25 * 170), x: 468, w: 88 }; // 6.9fps → 47px
  const fpsAfter    = { h: Math.round(21.9/ 25 * 170), x: 620, w: 88 }; // 21.9fps→ 149px

  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#080f1a" />

      {/* Section titles */}
      <text x="200" y="30" fill="rgba(255,255,255,0.65)" fontSize="13" fontWeight="700" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">게임 진입 5초 이탈률</text>
      <text x="600" y="30" fill="rgba(255,255,255,0.65)" fontSize="13" fontWeight="700" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">저사양 기기 FPS</text>
      
      {/* Improvement labels (Moved up and enlarged) */}
      <text x="200" y="75" fill="rgba(34,197,94,0.9)" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">↓ 37%p 감소</text>
      <text x="600" y="75" fill="rgba(34,197,94,0.9)" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">↑ 3.2배 개선</text>

      {/* Center divider */}
      <line x1="400" y1="10" x2="400" y2="385" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5,5" />

      {/* ── Churn baseline ── */}
      <line x1="40" y1={baseline} x2="360" y2={baseline} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

      {/* Churn BEFORE bar */}
      <rect x={churnBefore.x} y={baseline - churnBefore.h} width={churnBefore.w} height={churnBefore.h} rx="4" fill="rgba(239,68,68,0.5)" />
      <rect x={churnBefore.x} y={baseline - churnBefore.h} width={churnBefore.w} height="5" rx="2" fill="rgba(239,68,68,0.85)" />
      <text x={churnBefore.x + churnBefore.w / 2} y={baseline - churnBefore.h - 10} fill="rgba(239,68,68,0.9)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">40%</text>
      <text x={churnBefore.x + churnBefore.w / 2} y={baseline + 16} fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">BEFORE</text>

      {/* Churn AFTER bar */}
      <rect x={churnAfter.x} y={baseline - churnAfter.h} width={churnAfter.w} height={churnAfter.h} rx="4" fill="rgba(34,197,94,0.7)" />
      <rect x={churnAfter.x} y={baseline - churnAfter.h} width={churnAfter.w} height="4" rx="2" fill="rgba(34,197,94,0.95)" />
      <text x={churnAfter.x + churnAfter.w / 2} y={baseline - churnAfter.h - 10} fill="rgba(34,197,94,0.95)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">3%</text>
      <text x={churnAfter.x + churnAfter.w / 2} y={baseline + 16} fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">AFTER</text>

      {/* ── FPS baseline ── */}
      <line x1="440" y1={baseline} x2="760" y2={baseline} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

      {/* FPS BEFORE bar */}
      <rect x={fpsBefore.x} y={baseline - fpsBefore.h} width={fpsBefore.w} height={fpsBefore.h} rx="4" fill="rgba(239,68,68,0.45)" />
      <rect x={fpsBefore.x} y={baseline - fpsBefore.h} width={fpsBefore.w} height="5" rx="2" fill="rgba(239,68,68,0.7)" />
      <text x={fpsBefore.x + fpsBefore.w / 2} y={baseline - fpsBefore.h - 10} fill="rgba(239,68,68,0.8)" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">6.9fps</text>
      <text x={fpsBefore.x + fpsBefore.w / 2} y={baseline + 16} fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">BEFORE</text>

      {/* FPS AFTER bar */}
      <rect x={fpsAfter.x} y={baseline - fpsAfter.h} width={fpsAfter.w} height={fpsAfter.h} rx="4" fill="rgba(34,197,94,0.5)" />
      <rect x={fpsAfter.x} y={baseline - fpsAfter.h} width={fpsAfter.w} height="5" rx="2" fill="rgba(34,197,94,0.9)" />
      <text x={fpsAfter.x + fpsAfter.w / 2} y={baseline - fpsAfter.h - 10} fill="rgba(34,197,94,0.95)" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">21.9fps</text>
      <text x={fpsAfter.x + fpsAfter.w / 2} y={baseline + 16} fill="rgba(255,255,255,0.55)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">AFTER</text>

      {/* ── Bottom D+1 Retention strip ── */}
      <rect x="40" y="402" width="720" height="40" rx="8" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
      <text x="400" y="419" fill="rgba(59,130,246,0.65)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">D+1 Retention  ·  전사 OMTM</text>
      <text x="400" y="435" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">25%  →  31.2%   (+6.2%p)</text>
    </svg>
  );
}

// ─── 2. Studio Metrics ───────────────────────────────────────────
export function StudioMetricsImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#0d1b2a" />
      <rect x="0" y="0" width="800" height="48" fill="rgba(255,255,255,0.03)" />
      <text x="32" y="30" fill="rgba(255,255,255,0.4)" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">Studio Stability Dashboard</text>
      <circle cx="740" cy="24" r="5" fill="rgba(34,197,94,0.8)" />
      <text x="724" y="28" fill="rgba(34,197,94,0.6)" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">LIVE</text>
      {[
        { x: 28, label: "크래시 (1,000h당)", value: "57건", sub: "↓ 81%  (300→57)", col: "rgba(34,197,94,0.8)" },
        { x: 288, label: "오류 발생률", value: "0.4%", sub: "↓ 89%  (3.5%→0.4%)", col: "rgba(34,197,94,0.8)" },
        { x: 548, label: "플랫폼 Top10 월드", value: "2개", sub: "Studio 안정화 이후 진입", col: "rgba(59,130,246,0.8)" },
      ].map((card) => (
        <g key={card.x}>
          <rect x={card.x} y="64" width="236" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={card.x + 16} y="88" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="system-ui, sans-serif">{card.label}</text>
          <text x={card.x + 16} y="128" fill="white" fontSize="28" fontWeight="900" fontFamily="system-ui, sans-serif">{card.value}</text>
          <text x={card.x + 16} y="150" fill={card.col} fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">{card.sub}</text>
        </g>
      ))}
      <text x="32" y="192" fill="rgba(255,255,255,0.15)" fontSize="10" fontFamily="system-ui, sans-serif">Crash Trend (분기별)</text>
      {[{ x: 28, h: 150, label: "Q1" }, { x: 120, h: 115, label: "Q2" }, { x: 212, h: 80, label: "Q3" }, { x: 304, h: 42, label: "Q4" }, { x: 396, h: 18, label: "Now" }].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x} y={370 - bar.h} width={74} height={bar.h} rx="4" fill={i === 4 ? "rgba(34,197,94,0.45)" : "rgba(239,68,68,0.18)"} />
          <text x={bar.x + 37} y={385} fill="rgba(255,255,255,0.2)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">{bar.label}</text>
        </g>
      ))}
      <rect x="520" y="185" width="256" height="195" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="648" y="215" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">"측정 기준이 없던 곳에서</text>
      <text x="648" y="233" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif"> 지표를 만들고 팀을 설득했다"</text>
      <text x="648" y="275" fill="rgba(59,130,246,0.6)" fontSize="38" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">-81%</text>
      <text x="648" y="298" fill="rgba(255,255,255,0.2)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">크래시 감소</text>
      <text x="648" y="335" fill="rgba(34,197,94,0.6)" fontSize="38" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">-89%</text>
      <text x="648" y="358" fill="rgba(255,255,255,0.2)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">오류 발생률</text>
    </svg>
  );
}

// ─── 3. Agentic Studio TF ─────────────────────────────────────────
export function AgenticStudioImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#060d18" />
      <rect x="0" y="0" width="800" height="40" fill="#0d1f35" />
      <circle cx="20" cy="20" r="5" fill="rgba(239,68,68,0.5)" />
      <circle cx="36" cy="20" r="5" fill="rgba(251,191,36,0.5)" />
      <circle cx="52" cy="20" r="5" fill="rgba(34,197,94,0.5)" />
      <text x="400" y="26" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="monospace">Studio Agent — v0.1.5</text>
      {[
        { y: 72, t: "> 게임 오브젝트 배치 시작", c: "rgba(34,197,94,0.85)" },
        { y: 94, t: "  ✓ 플랫폼 맵 로드 완료", c: "rgba(34,197,94,0.45)" },
        { y: 116, t: "> 스크립트 자동 생성 중...", c: "rgba(34,197,94,0.85)" },
        { y: 138, t: "  ✓ Lua 스크립트 32 lines 작성 완료", c: "rgba(34,197,94,0.45)" },
        { y: 160, t: "> 충돌 감지 테스트 실행", c: "rgba(34,197,94,0.85)" },
        { y: 182, t: "  ✓ 테스트 통과 (0 errors)", c: "rgba(34,197,94,0.45)" },
        { y: 204, t: "> 배포 준비 완료 ─────────────────────", c: "rgba(59,130,246,0.7)" },
      ].map((line, i) => <text key={i} x="32" y={line.y} fill={line.c} fontSize="12" fontFamily="monospace">{line.t}</text>)}
      <rect x="32" y="215" width="7" height="14" fill="rgba(34,197,94,0.8)">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="488" y="52" width="288" height="375" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="632" y="84" fill="rgba(255,255,255,0.35)" fontSize="11" fontWeight="600" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">AGENT STATUS</text>
      <text x="632" y="138" fill="rgba(59,130,246,0.9)" fontSize="52" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
      <text x="632" y="160" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Studio 제어 도구 연동</text>
      <line x1="506" y1="178" x2="758" y2="178" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      {[
        { label: "오브젝트 배치", s: "✓" }, { label: "스크립트 생성", s: "✓" },
        { label: "테스트 실행", s: "✓" }, { label: "크리에이터 검증", s: "→ 4월" },
      ].map((item, i) => (
        <g key={i}>
          <text x="506" y={200 + i * 28} fill="rgba(255,255,255,0.3)" fontSize="12" fontFamily="system-ui, sans-serif">{item.label}</text>
          <text x="758" y={200 + i * 28} fill={item.s === "✓" ? "rgba(34,197,94,0.8)" : "rgba(251,191,36,0.7)"} fontSize="12" textAnchor="end" fontFamily="system-ui, sans-serif">{item.s}</text>
        </g>
      ))}
      <rect x="506" y="316" width="248" height="96" rx="8" fill="rgba(59,130,246,0.08)" />
      <text x="630" y="348" fill="rgba(59,130,246,0.6)" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Phase 1 완료</text>
      <text x="630" y="372" fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">코딩 없이 게임 제작</text>
      <text x="630" y="396" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">비전공자도 2주 내 타겟 장르 완성</text>
    </svg>
  );
}

export function StudioOptimizationDashboardRef({ style }: Props) {
  const val50Arr = [50, 50, 52, 51, 51, 51, 50, 51, 51, 51, 50, 51, 51, 51, 41, 39, 38, 38, 37, 37, 36, 37, 36, 35, 34, 34, 34, 33, 34, 34];
  const val20Arr = [43, 42, 43, 43, 42, 42, 42, 42, 43, 43, 44, 42, 43, 43, 37, 36, 35, 35, 33, 32, 32, 33, 32, 31, 31, 30, 31, 31, 31, 32];
  const val10Arr = [37, 35, 36, 36, 35, 36, 35, 35, 35, 36, 38, 35, 36, 36, 34, 33, 32, 32, 30, 30, 29, 30, 29, 29, 29, 29, 29, 28, 29, 29];

  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", backgroundColor: "#f8f9fa", border: "1px solid #e5e7eb", ...style }}>
      {/* Dashboard Title */}
      <text x="24" y="36" fill="#111827" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif">[ WORLD ] Performance Dashboard</text>

      {/* Main Chart Card */}
      <rect x="24" y="56" width="752" height="320" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
      
      {/* Card Title */}
      <text x="48" y="86" fill="#1f2937" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">[ Performance ] AVG FPS</text>
      
      {/* Legend */}
      <g transform="translate(450, 82)">
        <circle cx="0" cy="-4" r="4" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5"/>
        <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="14" y="0" fill="#4b5563" fontSize="11" fontFamily="system-ui, sans-serif">50th</text>
        
        <circle cx="60" cy="-4" r="4" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5"/>
        <line x1="52" y1="-4" x2="68" y2="-4" stroke="#4f46e5" strokeWidth="1.5" />
        <text x="74" y="0" fill="#4b5563" fontSize="11" fontFamily="system-ui, sans-serif">20th</text>
        
        <circle cx="120" cy="-4" r="4" fill="#ffffff" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="112" y1="-4" x2="128" y2="-4" stroke="#22c55e" strokeWidth="1.5" />
        <text x="134" y="0" fill="#4b5563" fontSize="11" fontFamily="system-ui, sans-serif">10th</text>
        
        <circle cx="180" cy="-4" r="4" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="172" y1="-4" x2="188" y2="-4" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2"/>
        <text x="194" y="0" fill="#4b5563" fontSize="11" fontFamily="system-ui, sans-serif">25 FPS</text>
      </g>

      {/* Chart Y Grid */}
      <g transform="translate(48, 110)">
        {[0, 10, 20, 30, 40, 50, 60].map((val) => {
          const y = 230 - (val / 60) * 230;
          return (
            <g key={val}>
              <text x="20" y={y + 4} fill="#9ca3af" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">{val}</text>
              <line x1="30" y1={y} x2="700" y2={y} stroke="#f3f4f6" strokeWidth="1" />
            </g>
          );
        })}
        
        {/* Baseline 25 FPS (Red dotted) */}
        <line x1="30" y1={230 - (25 / 60) * 230} x2="700" y2={230 - (25 / 60) * 230} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4,4" />

        {/* Vertical Event Lines (Orange) */}
        <line x1={150} y1="0" x2={150} y2="230" stroke="#f97316" strokeWidth="1.5" />
        <line x1={380} y1="0" x2={380} y2="230" stroke="#f97316" strokeWidth="1.5" />
        <line x1={580} y1="0" x2={580} y2="230" stroke="#f97316" strokeWidth="1.5" />

        {/* Dense dots and labels */}
        {Array.from({length: 30}).map((_, i) => {
          const x = 30 + i * 23.1; // 700 width / 29 segments ~ 23.1
          const val50 = val50Arr[i];
          const val20 = val20Arr[i];
          const val10 = val10Arr[i];

          const y50 = 230 - (val50 / 60) * 230;
          const y20 = 230 - (val20 / 60) * 230;
          const y10 = 230 - (val10 / 60) * 230;
          
          return (
            <g key={i}>
              {/* Connect to next point */}
              {i < 29 && (
                <>
                  <line x1={x} y1={y50} x2={30 + (i+1)*23.1} y2={230 - (val50Arr[i+1]) / 60 * 230} stroke="#06b6d4" strokeWidth="1.5" />
                  <line x1={x} y1={y20} x2={30 + (i+1)*23.1} y2={230 - (val20Arr[i+1]) / 60 * 230} stroke="#4f46e5" strokeWidth="1.5" />
                  <line x1={x} y1={y10} x2={30 + (i+1)*23.1} y2={230 - (val10Arr[i+1]) / 60 * 230} stroke="#22c55e" strokeWidth="1.5" />
                </>
              )}

              {/* Data Points */}
              <circle cx={x} cy={y50} r="2.5" fill="#ffffff" stroke="#06b6d4" strokeWidth="1.5" />
              <text x={x} y={y50 - 6} fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">{val50}</text>
              
              <circle cx={x} cy={y20} r="2.5" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5" />
              <text x={x} y={y20 - 6} fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">{val20}</text>

              <circle cx={x} cy={y10} r="2.5" fill="#ffffff" stroke="#22c55e" strokeWidth="1.5" />
              <text x={x} y={y10 + 12} fill="#6b7280" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">{val10}</text>
            </g>
          );
        })}

        {/* X Axis */}
        <line x1="30" y1="230" x2="700" y2="230" stroke="#d1d5db" strokeWidth="1" />
        <text x="30" y="248" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">03-01</text>
        <text x="214" y="248" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">03-09</text>
        <text x="398" y="248" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">03-17</text>
        <text x="582" y="248" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">03-25</text>
      </g>
    </svg>
  );
}

export function StudioOptimizationDashboardRef2({ style }: Props) {
  return (
    <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", marginTop: "24px", ...style }}>
      <rect width="800" height="320" fill="#ffffff" rx="10" />
      
      <text x="32" y="36" fill="#111827" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">Memory Overflow Crashes (Daily)</text>
      
      <g transform="translate(600, 24)">
        <rect x="0" y="0" width="12" height="12" rx="2" fill="#ef4444" opacity="0.8" />
        <text x="20" y="10" fill="#6b7280" fontSize="11" fontFamily="system-ui, sans-serif">Before Patch</text>
        
        <rect x="100" y="0" width="12" height="12" rx="2" fill="#22c55e" />
        <text x="120" y="10" fill="#6b7280" fontSize="11" fontFamily="system-ui, sans-serif">After Patch</text>
      </g>

      <g transform="translate(40, 70)">
        {/* Y-axis */}
        {[0, 100, 200, 300, 400].map((val, i) => {
          const y = 160 - (val / 400) * 160;
          return (
            <g key={i}>
              <text x="24" y={y + 4} fill="#9ca3af" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">{val}</text>
              <line x1="36" y1={y} x2="720" y2={y} stroke="#f3f4f6" strokeWidth="1" />
            </g>
          );
        })}
        
        {/* Bars */}
        {Array.from({ length: 24 }).map((_, i) => {
          const isAfter = i > 11;
          const base = isAfter ? ((i * 7) % 20 + 10) : ((i * 17) % 100 + 250);
          const h = (base / 400) * 160;
          const x = 50 + i * 28;
          return (
            <rect key={i} x={x} y={160 - h} width="16" height={h} rx="3" fill={isAfter ? "#22c55e" : "#ef4444"} opacity="0.85" />
          );
        })}

        {/* Event Marker */}
        <line x1={50 + 11.5 * 28} y1="0" x2={50 + 11.5 * 28} y2="160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4" />
        <rect x={50 + 11.5 * 28 - 40} y="-20" width="80" height="24" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
        <text x={50 + 11.5 * 28} y="-4" fill="#1d4ed8" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">v1.2 Patch</text>

        {/* X-axis */}
        <line x1="36" y1="160" x2="720" y2="160" stroke="#d1d5db" strokeWidth="1" />
        <text x="50" y="180" fill="#9ca3af" fontSize="11" fontFamily="system-ui, sans-serif">Mar 1</text>
        <text x={50 + 11 * 28} y="180" fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Mar 12</text>
        <text x={50 + 23 * 28} y="180" fill="#9ca3af" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">Mar 24</text>
      </g>
    </svg>
  );
}

export function StudioOptimizationDashboardRef3({ style }: Props) {
  return (
    <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", marginTop: "24px", ...style }}>
      <rect width="800" height="320" fill="#ffffff" rx="10" />
      
      <text x="32" y="36" fill="#111827" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">[ APP ] Device New Retention (D+1) Trend</text>
      
      <g transform="translate(600, 24)">
        <circle cx="0" cy="6" r="4" fill="#38bdf8" />
        <text x="12" y="10" fill="#6b7280" fontSize="11" fontFamily="system-ui, sans-serif">mid</text>
        
        <circle cx="60" cy="6" r="4" fill="#10b981" />
        <text x="72" y="10" fill="#6b7280" fontSize="11" fontFamily="system-ui, sans-serif">high</text>

        <circle cx="120" cy="6" r="4" fill="#a78bfa" />
        <text x="132" y="10" fill="#6b7280" fontSize="11" fontFamily="system-ui, sans-serif">low</text>
      </g>

      <g transform="translate(40, 70)">
        {/* Y-axis */}
        {[0, 10, 20, 30, 40, 50].map((val) => {
          const y = 180 - (val / 50) * 180;
          return (
            <g key={val}>
              <text x="24" y={y + 4} fill="#9ca3af" fontSize="11" textAnchor="end" fontFamily="system-ui, sans-serif">{val}%</text>
              <line x1="36" y1={y} x2="720" y2={y} stroke="#f3f4f6" strokeWidth="1" />
            </g>
          );
        })}

        {/* Smooth Curves (Bounded inside the chart: min 20%) */}
        {/* High */}
        <path d="M 36 40 C 66 40, 101 20, 131 20 C 161 20, 196 80, 226 80 C 256 80, 291 25, 321 25 C 351 25, 386 75, 416 75 C 446 75, 481 20, 511 20 C 541 20, 576 85, 606 85 C 644 85, 682 40, 720 40" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Mid */}
        <path d="M 36 55 C 66 55, 101 35, 131 35 C 161 35, 196 95, 226 95 C 256 95, 291 45, 321 45 C 351 45, 386 90, 416 90 C 446 90, 481 40, 511 40 C 541 40, 576 100, 606 100 C 644 100, 682 60, 720 60" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Low */}
        <path d="M 36 70 C 66 70, 101 50, 131 50 C 161 50, 196 100, 226 100 C 256 100, 291 65, 321 65 C 351 65, 386 95, 416 95 C 446 95, 481 60, 511 60 C 541 60, 576 105, 606 105 C 644 105, 682 80, 720 80" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* X-axis */}
        <line x1="36" y1="180" x2="720" y2="180" stroke="#d1d5db" strokeWidth="1" />
        {["03-01", "03-05", "03-09", "03-13", "03-17", "03-21", "03-25", "03-29"].map((date, i) => (
          <text key={i} x={36 + i * 94.8} y={200} fill="#9ca3af" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">{date}</text>
        ))}
      </g>
    </svg>
  );
}

export function AgenticStudioArchitectureRef({ style }: Props) {
  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", backgroundColor: "#080f1a", ...style }}>
      <rect width="800" height="350" fill="#080f1a" rx="10" />
      
      {/* Title */}
      <text x="400" y="40" fill="rgba(255,255,255,0.7)" fontSize="15" fontWeight="700" textAnchor="middle" letterSpacing="1" fontFamily="system-ui, sans-serif">Agentic Studio Phase 1 — 3단 아키텍처</text>
      
      {/* Connection Lines & Arrows */}
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4,4" fill="none">
        <path d="M 230 180 L 320 180" />
        <path d="M 480 180 L 570 180" />
      </g>
      
      <g fill="rgba(255,255,255,0.3)">
        <polygon points="315,176 323,180 315,184" />
        <polygon points="235,176 227,180 235,184" />
        <polygon points="565,176 573,180 565,184" />
        <polygon points="485,176 477,180 485,184" />
      </g>

      <text x="275" y="165" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">STDIO 통신</text>
      <text x="525" y="165" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">TCP / JSON-RPC</text>

      {/* Block 1: 뇌 */}
      <rect x="50" y="110" width="180" height="140" rx="16" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <text x="140" y="145" fill="rgba(59,130,246,0.9)" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">① 뇌 (Brain)</text>
      <text x="140" y="175" fill="white" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">OVERDARE Agent</text>
      <rect x="70" y="195" width="140" height="40" rx="6" fill="rgba(0,0,0,0.4)" />
      <text x="140" y="213" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">자체 Agent Loop 제어</text>
      <text x="140" y="228" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">컨텍스트 &amp; 세션 관리</text>

      {/* Block 2: 손발 */}
      <rect x="320" y="110" width="160" height="140" rx="16" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
      <text x="400" y="145" fill="rgba(168,85,247,0.9)" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">② 손발 (Tools)</text>
      <text x="400" y="175" fill="white" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">MCP Server</text>
      <rect x="340" y="195" width="120" height="40" rx="6" fill="rgba(0,0,0,0.4)" />
      <text x="400" y="213" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">명령 번역 다리</text>
      <text x="400" y="228" fill="rgba(34,197,94,0.8)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">21개 제어 도구</text>

      {/* Block 3: 몸 */}
      <rect x="570" y="110" width="180" height="140" rx="16" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5" />
      <text x="660" y="145" fill="rgba(34,197,94,0.9)" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">③ 몸 (Body)</text>
      <text x="660" y="175" fill="white" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">OVERDARE Studio</text>
      <rect x="590" y="195" width="140" height="40" rx="6" fill="rgba(0,0,0,0.4)" />
      <text x="660" y="213" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">실제 게임 실행 환경</text>
      <text x="660" y="228" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">오브젝트 &amp; 스크립트 제어</text>
      
      {/* Footer Info */}
      <rect x="200" y="280" width="400" height="36" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="400" y="303" fill="rgba(255,255,255,0.6)" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">별도 설치 없이 <tspan fill="rgba(59,130,246,0.9)" fontWeight="700">버튼 하나로 동작</tspan>하는 자체 내장 환경 실증 완료</text>
    </svg>
  );
}

// ─── 4. Product Split ────────────────────────────────────────────
export function ProductSplitImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#0d1b2a" />
      <rect x="50" y="150" width="200" height="130" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="150" y="200" fill="rgba(255,255,255,0.3)" fontSize="11" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">BEFORE</text>
      <text x="150" y="232" fill="white" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">SEB 풀스택</text>
      <text x="150" y="258" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">유료 · 1개 과정</text>
      <path d="M 264 180 Q 330 160 370 175" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <path d="M 264 250 Q 330 270 370 255" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <polygon points="370,172 380,178 370,184" fill="rgba(255,255,255,0.12)" />
      <polygon points="370,252 380,258 370,264" fill="rgba(255,255,255,0.12)" />
      <text x="325" y="215" fill="rgba(255,255,255,0.45)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">전략적</text>
      <text x="325" y="228" fill="rgba(255,255,255,0.45)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">재정의</text>
      <rect x="380" y="90" width="200" height="110" rx="14" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
      <text x="480" y="133" fill="rgba(59,130,246,0.6)" fontSize="11" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">FE</text>
      <text x="480" y="162" fill="white" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">프론트엔드</text>
      <text x="480" y="185" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">React · KDT 무료</text>
      <rect x="380" y="240" width="200" height="110" rx="14" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
      <text x="480" y="283" fill="rgba(168,85,247,0.6)" fontSize="11" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">BE</text>
      <text x="480" y="312" fill="white" fontSize="20" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">백엔드</text>
      <text x="480" y="335" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Java · KDT 무료</text>
      <rect x="616" y="140" width="152" height="160" rx="14" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
      <text x="692" y="185" fill="rgba(34,197,94,0.45)" fontSize="11" textAnchor="middle" letterSpacing="2" fontFamily="system-ui, sans-serif">RESULT</text>
      <text x="692" y="228" fill="rgba(34,197,94,0.95)" fontSize="40" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">355%</text>
      <text x="692" y="253" fill="rgba(255,255,255,0.3)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">연간 매출 성장</text>
      <text x="692" y="278" fill="rgba(34,197,94,0.5)" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">240억 규모</text>
      <text x="400" y="398" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">수강생 +141% · 지원 전환율 15%→38% · K-digital 선정</text>
    </svg>
  );
}

// ─── 5. Growth Flywheel ──────────────────────────────────────────
export function GrowthFlywheelImage({ style }: Props) {
  const font = "system-ui, sans-serif";
  const arrowStyle = { fill: "none", stroke: "rgba(255,255,255,0.4)", strokeWidth: 2.5 } as const;

  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", backgroundColor: "#0d1b2a", overflow: "hidden", ...style }}>
      <defs>
        <marker id="gf-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.6)" />
        </marker>
      </defs>

      {/* 800x800 원본 좌표계를 카드 비율(800x450) 중앙에 450x450 사이즈로 렌더링 (x=175로 가로 중앙 정렬) */}
      <svg x="175" y="0" width="450" height="450" viewBox="0 0 800 800" overflow="visible">
        
        {/* 1. GROWTH 코어 -> 기준 미달자 Zero 교육 (시작점 변경) */}
        <path d="M 330 300 Q 210 200 210 110" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 2. 기준 미달자 Zero 교육 -> 채용 신뢰도 */}
        <path d="M 360 85 Q 520 60 610 170" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 3. 채용 신뢰도 -> 특혜 기업 */}
        <path d="M 660 245 Q 730 320 710 420" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 4. 특혜 기업 -> 취업 신뢰도 */}
        <path d="M 680 500 Q 600 680 500 680" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 5. 취업 신뢰도 -> 유입 */}
        <path d="M 340 680 Q 200 660 150 550" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 6. 유입 -> 경쟁률 */}
        <path d="M 140 480 Q 120 400 160 320" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 7. 경쟁률 -> 기준 미달자 비율 */}
        <path d="M 210 240 Q 270 140 330 135" {...arrowStyle} markerEnd="url(#gf-arrow)" />
        {/* 8. 기준 미달자 비율 -> 채용 신뢰도 (내부 순환) */}
        <path d="M 515 135 Q 570 150 610 185" {...arrowStyle} markerEnd="url(#gf-arrow)" />

        {/* 중앙 코어 */}
        <circle cx="400" cy="400" r="150" fill="rgba(220,70,10,0.15)" stroke="rgba(220,70,10,0.5)" strokeWidth="3" />
        <text x="400" y="400" fill="rgba(255,255,255,0.95)" fontSize="28.8" fontWeight="900" dominantBaseline="middle" textAnchor="middle" letterSpacing="3" fontFamily={font}>GROWTH</text>

        {/* 각 노드 배치 (제공해주신 HTML top, left 좌표를 SVG x, y 기준점으로 완벽 매칭하기 위해 dominantBaseline="hanging" 사용) */}
        {/* 상단 좌측 (파랑) */}
        <text x="170" y="75" fill="rgba(96,165,250,0.9)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>기준 미달자 Zero 교육</text>
        {/* 상단 중앙 */}
        <text x="355" y="125" fill="rgba(255,255,255,0.85)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>기준 미달자 비율 ↓</text>
        {/* 상단 우측 (빨강) */}
        <text x="610" y="210" fill="rgba(239,68,68,0.9)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>채용 신뢰도 ↑</text>
        {/* 우측 */}
        <text x="650" y="450" fill="rgba(255,255,255,0.85)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>수료생 특혜 기업 ↑</text>
        {/* 하단 */}
        <text x="380" y="670" fill="rgba(255,255,255,0.85)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>취업 신뢰도 ↑</text>
        {/* 좌측 하단 */}
        <text x="120" y="510" fill="rgba(255,255,255,0.85)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>유입 ↑</text>
        {/* 좌측 */}
        <text x="140" y="265" fill="rgba(255,255,255,0.85)" fontSize="18.4" fontWeight="700" dominantBaseline="hanging" fontFamily={font}>경쟁률 ↑</text>
      </svg>
    </svg>
  );
}

// ─── 6. Creator Hub ──────────────────────────────────────────────
export function CreatorHubImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <defs>
        <linearGradient id="ch-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,58,237,0.35)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0)" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="#0f0a1e" />
      <rect x="0" y="0" width="176" height="450" fill="rgba(255,255,255,0.03)" />
      <text x="22" y="38" fill="rgba(255,255,255,0.55)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Creator Hub</text>
      {["대시보드", "내 월드", "애널리틱스", "수익 정산"].map((item, i) => (
        <g key={i}>
          <rect x="8" y={54 + i * 40} width="160" height="34" rx="6" fill={i === 2 ? "rgba(124,58,237,0.2)" : "transparent"} />
          <text x="22" y={76 + i * 40} fill={i === 2 ? "rgba(167,139,250,0.9)" : "rgba(255,255,255,0.3)"} fontSize="12" fontFamily="system-ui, sans-serif">{item}</text>
        </g>
      ))}
      <text x="200" y="34" fill="rgba(255,255,255,0.5)" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">Analytics Overview</text>
      {[
        { x: 200, label: "일간 방문자", value: "12,847", change: "+23%" },
        { x: 394, label: "D+1 Retention", value: "31.2%", change: "+6.2%p" },
        { x: 588, label: "누적 수익", value: "$2,410", change: "→ 정산" },
      ].map((card) => (
        <g key={card.x}>
          <rect x={card.x} y="46" width="178" height="72" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={card.x + 14} y="70" fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="system-ui, sans-serif">{card.label}</text>
          <text x={card.x + 14} y="100" fill="white" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif">{card.value}</text>
        </g>
      ))}
      <polyline points="200,340 270,310 340,290 410,265 480,245 550,228 620,210 690,195 760,178" fill="none" stroke="rgba(124,58,237,0.8)" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="200,360 270,310 340,290 410,265 480,245 550,228 620,210 690,195 760,178 760,360" fill="url(#ch-area)" />
      {["Jan","Feb","Mar","Apr","May","Jun"].map((m, i) => (
        <text key={m} x={200 + i * 94} y={380} fill="rgba(255,255,255,0.18)" fontSize="10" fontFamily="system-ui, sans-serif">{m}</text>
      ))}
      <text x="480" y="416" fill="rgba(167,139,250,0.85)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">크리에이터 온보딩 · Stripe Connect 수익화 · 알파 테스트 런칭</text>
    </svg>
  );
}

// ─── 7. Side Project Program ──────────────────────────────────────
export function SideProjectImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#0d1b2a" />

      {/* BEFORE panel */}
      <rect x="36" y="48" width="300" height="356" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <text x="186" y="84" fill="rgba(255,255,255,0.2)" fontSize="11" fontWeight="600" textAnchor="middle" letterSpacing="3" fontFamily="system-ui, sans-serif">BEFORE</text>

      {/* 18명 */}
      <text x="186" y="148" fill="rgba(239,68,68,0.75)" fontSize="52" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">18명</text>
      <text x="186" y="172" fill="rgba(255,255,255,0.3)" fontSize="12" textAnchor="middle" fontFamily="system-ui, sans-serif">미취업 수료생</text>

      {/* Person grid: 3×2, properly centered */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const cx = 100 + col * 86;
        const cy = 220 + row * 80;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={26} fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
            <text x={cx} y={cy + 9} textAnchor="middle" fontSize="22" fontFamily="system-ui, sans-serif">😞</text>
          </g>
        );
      })}

      {/* Arrow */}
      <line x1="348" y1="226" x2="428" y2="226" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <polygon points="428,220 440,226 428,232" fill="rgba(255,255,255,0.15)" />
      <text x="388" y="212" fill="rgba(255,255,255,0.12)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">6개월</text>

      {/* AFTER panel */}
      <rect x="452" y="48" width="312" height="356" rx="16" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
      <text x="608" y="84" fill="rgba(34,197,94,0.5)" fontSize="11" fontWeight="600" textAnchor="middle" letterSpacing="3" fontFamily="system-ui, sans-serif">AFTER</text>
      <text x="608" y="175" fill="rgba(34,197,94,0.95)" fontSize="76" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">100%</text>
      <text x="608" y="205" fill="rgba(255,255,255,0.4)" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">희망 직군 취업률</text>
      <line x1="472" y1="228" x2="748" y2="228" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="608" y="268" fill="rgba(34,197,94,0.6)" fontSize="28" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">7.7 / 10</text>
      <text x="608" y="290" fill="rgba(255,255,255,0.25)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">평균 만족도</text>
      <text x="608" y="338" fill="rgba(255,255,255,0.55)" fontSize="24" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+29%</text>
      <text x="608" y="358" fill="rgba(255,255,255,0.2)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">랜딩 노출 후 지원자 증가율</text>

      <text x="400" y="424" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">전사 모든 제품의 핵심 USP로 채택</text>
    </svg>
  );
}

// ─── 8. Buildmusic ───────────────────────────────────────────────
export function BuildmusicImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#0d1b2a" />
      <text x="400" y="50" fill="rgba(255,255,255,0.45)" fontSize="20" fontWeight="800" textAnchor="middle" letterSpacing="4" fontFamily="system-ui, sans-serif">BUILDMUSIC</text>
      <text x="400" y="72" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">음원 협업 플랫폼 · Design Thinking + JTBD</text>
      {Array.from({ length: 60 }, (_, i) => {
        const heights = [22,28,35,42,50,58,62,55,48,40,32,26,30,38,46,54,58,52,44,36,28,24,30,42,52,60,58,50,40,30,26,32,44,54,58,52,42,32,24,28,38,48,56,58,50,40,30,22,28,36,44,50,48,40,30,22,26,34,42,48];
        const h = heights[i] || 30;
        const x = 32 + i * 12;
        const active = i > 16 && i < 42;
        return <rect key={i} x={x} y={180 - h / 2} width={8} height={h} rx={4} fill={active ? "rgba(99,102,241,0.65)" : "rgba(255,255,255,0.08)"} />;
      })}
      {[{ x: 72, value: "165명", label: "설문 참여" }, { x: 294, value: "10인", label: "심층 인터뷰" }, { x: 516, value: "2회", label: "데이터 기반 피봇" }].map((stat) => (
        <g key={stat.x}>
          <rect x={stat.x} y="228" width="168" height="76" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x={stat.x + 84} y="264" fill="rgba(99,102,241,0.8)" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">{stat.value}</text>
          <text x={stat.x + 84} y="288" fill="rgba(255,255,255,0.28)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">{stat.label}</text>
        </g>
      ))}
      <text x="400" y="338" fill="rgba(255,255,255,0.45)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">리스너 → 피봇#1 → 작가 협업 → 피봇#2 → 음원 플랫폼</text>
    </svg>
  );
}

// ─── 9. MASK ──────────────────────────────────────────────────────
export function MaskImage({ style }: Props) {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <defs>
        <radialGradient id="mask-vignette" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(20,30,50,0)" />
          <stop offset="100%" stopColor="rgba(5,10,20,0.85)" />
        </radialGradient>
      </defs>

      {/* Dark map background */}
      <rect width="800" height="450" fill="#0a1220" />
      {/* Map grid texture */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => <line key={`h${i}`} x1="0" y1={i*50} x2="800" y2={i*50} stroke="rgba(59,130,246,0.05)" strokeWidth="1" />)}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => <line key={`v${i}`} x1={i*56} y1="0" x2={i*56} y2="450" stroke="rgba(59,130,246,0.05)" strokeWidth="1" />)}

      {/* Map streets / paths (rough grid lines, brighter) */}
      <path d="M 0,180 L 260,180 L 260,280 L 500,280 L 500,160 L 800,160" stroke="rgba(255,255,255,0.07)" strokeWidth="10" fill="none" />
      <path d="M 0,330 L 160,330 L 160,90 L 380,90 L 380,380 L 800,380" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
      <path d="M 420,0 L 420,260 L 640,260 L 640,450" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />

      {/* Vignette overlay */}
      <rect width="800" height="450" fill="url(#mask-vignette)" />

      {/* Quest route dotted line */}
      <path d="M 180,345 L 300,230 L 445,185 L 580,265 L 690,175" stroke="rgba(251,191,36,0.45)" strokeWidth="2.5" strokeDasharray="8,6" fill="none" />

      {/* Location markers */}
      {[
        { x: 180, y: 345, active: false, quest: "시작" },
        { x: 300, y: 230, active: false, quest: "퀘스트 1" },
        { x: 445, y: 185, active: true,  quest: "퀘스트 2" },
        { x: 580, y: 265, active: false, quest: "퀘스트 3" },
        { x: 690, y: 175, active: false, quest: "목적지" },
      ].map((pin, i) => (
        <g key={i}>
          {pin.active && <circle cx={pin.x} cy={pin.y} r="32" fill="rgba(251,191,36,0.08)" />}
          {pin.active && <circle cx={pin.x} cy={pin.y} r="20" fill="rgba(251,191,36,0.12)" />}
          <circle cx={pin.x} cy={pin.y} r={pin.active ? 11 : 7} fill={pin.active ? "rgba(251,191,36,0.9)" : "rgba(255,255,255,0.4)"} />
          <circle cx={pin.x} cy={pin.y - (pin.active ? 22 : 16)} r={pin.active ? 3 : 2} fill={pin.active ? "rgba(251,191,36,0.7)" : "rgba(255,255,255,0.2)"} />
          {pin.active && (
            <text x={pin.x} y={pin.y - 30} fill="rgba(251,191,36,0.85)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">{pin.quest}</text>
          )}
        </g>
      ))}

      {/* ── Left: phone frame with game UI ── */}
      <rect x="28" y="28" width="220" height="394" rx="20" fill="#0d1f35" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      {/* Phone notch */}
      <rect x="98" y="28" width="80" height="14" rx="7" fill="#0a1220" />
      {/* Game header */}
      <rect x="28" y="55" width="220" height="38" fill="rgba(0,0,0,0.5)" />
      <text x="138" y="71" fill="rgba(251,191,36,0.9)" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="5" fontFamily="system-ui, sans-serif">MASK</text>
      <text x="138" y="84" fill="rgba(255,255,255,0.25)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">ADVENTURE QUEST</text>
      {/* HP/XP bars */}
      <text x="38" y="107" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="system-ui, sans-serif">HP</text>
      <rect x="54" y="99" width="100" height="7" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="54" y="99" width="72" height="7" rx="3" fill="rgba(239,68,68,0.65)" />
      <text x="38" y="122" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="system-ui, sans-serif">XP</text>
      <rect x="54" y="114" width="100" height="7" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="54" y="114" width="88" height="7" rx="3" fill="rgba(59,130,246,0.65)" />

      {/* Quest panel */}
      <rect x="38" y="135" width="200" height="78" rx="8" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.2)" strokeWidth="1" />
      <text x="48" y="153" fill="rgba(251,191,36,0.7)" fontSize="9" fontWeight="700" letterSpacing="2" fontFamily="system-ui, sans-serif">QUEST</text>
      <text x="48" y="172" fill="rgba(255,255,255,0.75)" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">경복궁 비밀의 문을 찾아라</text>
      <text x="48" y="194" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="system-ui, sans-serif">단서 2/5 수집 완료</text>

      {/* Map mini */}
      <rect x="38" y="223" width="200" height="120" rx="8" fill="rgba(10,20,40,0.8)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="48" y="241" fill="rgba(255,255,255,0.2)" fontSize="8" letterSpacing="2" fontFamily="system-ui, sans-serif">MAP</text>
      {/* Mini map dots */}
      {[[60,260],[90,255],[130,248],[165,256],[190,248]].map(([mx, my], i) => (
        <circle key={i} cx={mx} cy={my} r={i===2?5:3} fill={i===2 ? "rgba(251,191,36,0.8)" : "rgba(255,255,255,0.15)"} />
      ))}
      <path d="M 60,260 L 90,255 L 130,248 L 165,256 L 190,248" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="4,3" fill="none" />
      <text x="48" y="315" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="system-ui, sans-serif">현재 위치: 경복궁 앞</text>
      <text x="48" y="329" fill="rgba(251,191,36,0.5)" fontSize="9" fontFamily="system-ui, sans-serif">목적지까지 230m →</text>

      {/* Action button */}
      <rect x="38" y="356" width="200" height="36" rx="8" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" strokeWidth="1" />
      <text x="138" y="379" fill="rgba(251,191,36,0.9)" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">단서 확인하기</text>

      {/* ── Right: result card ── */}
      <rect x="560" y="60" width="216" height="330" rx="14" fill="rgba(13,27,42,0.92)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="668" y="92" fill="rgba(255,255,255,0.2)" fontSize="9" fontWeight="700" textAnchor="middle" letterSpacing="3" fontFamily="system-ui, sans-serif">RESULT</text>
      <text x="668" y="148" fill="rgba(59,130,246,0.9)" fontSize="48" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">1,853</text>
      <text x="668" y="168" fill="rgba(255,255,255,0.35)" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">사전 예약자</text>
      <line x1="580" y1="185" x2="756" y2="185" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="668" y="215" fill="rgba(34,197,94,0.75)" fontSize="22" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">24%</text>
      <text x="668" y="233" fill="rgba(255,255,255,0.25)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">랜딩 전환율</text>
      <line x1="580" y1="248" x2="756" y2="248" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="668" y="278" fill="rgba(251,191,36,0.65)" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">관광공사 예비창업가 선정</text>
      <line x1="580" y1="308" x2="756" y2="308" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="668" y="338" fill="rgba(255,255,255,0.45)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">개발과 프리토타이핑을</text>
      <text x="668" y="354" fill="rgba(255,255,255,0.45)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">병행해 수요 검증</text>
      <text x="668" y="375" fill="rgba(239,68,68,0.35)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">→ 자금 고갈 · 폐업 · 인사이트</text>
    </svg>
  );
}

// ─── 10. New LMS BOWL ────────────────────────────────────────────
export function LmsBowlImage({ style }: Props) {
  const sprints = [
    { label: "Sprint 1", desc: "콘텐츠 관리", idx: 0 },
    { label: "Sprint 2", desc: "학습 기능",   idx: 1 },
    { label: "Sprint 3", desc: "진도율 관리", idx: 2 },
  ];
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block", borderRadius: "10px", ...style }}>
      <rect width="800" height="450" fill="#0d1b2a" />

        {/* Header bar */}
      <rect x="0" y="0" width="800" height="40" fill="rgba(255,255,255,0.03)" />
      <text x="32" y="26" fill="rgba(255,255,255,0.3)" fontSize="11" fontWeight="600" letterSpacing="1" fontFamily="system-ui, sans-serif">BOWL 2.0  ·  LMS REDESIGN</text>
      <circle cx="758" cy="20" r="5" fill="rgba(34,197,94,0.7)" />
      <text x="746" y="24" fill="rgba(34,197,94,0.5)" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">LIVE</text>

      {/* Left: IA hierarchy label */}
      <text x="32" y="64" fill="rgba(255,255,255,0.2)" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="system-ui, sans-serif">IA STRUCTURE</text>

      {/* Program */}
      <rect x="32" y="76" width="390" height="48" rx="8" fill="rgba(59,130,246,0.22)" stroke="rgba(59,130,246,0.45)" strokeWidth="1" />
      <text x="50" y="97" fill="rgba(255,255,255,0.88)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Program</text>
      <text x="50" y="114" fill="rgba(59,130,246,0.65)" fontSize="10" fontFamily="system-ui, sans-serif">부트캠프 · 코호트</text>

      {/* Arrow */}
      <line x1="227" y1="124" x2="227" y2="138" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
      <polygon points="221,136 227,145 233,136" fill="rgba(59,130,246,0.3)" />

      {/* Course */}
      <rect x="52" y="146" width="350" height="44" rx="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
      <text x="70" y="165" fill="rgba(255,255,255,0.8)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Course</text>
      <text x="70" y="181" fill="rgba(59,130,246,0.55)" fontSize="10" fontFamily="system-ui, sans-serif">FE / BE / DevOps</text>

      {/* Arrow */}
      <line x1="227" y1="190" x2="227" y2="204" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" />
      <polygon points="221,202 227,211 233,202" fill="rgba(59,130,246,0.22)" />

      {/* Module */}
      <rect x="72" y="212" width="310" height="44" rx="8" fill="rgba(59,130,246,0.09)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
      <text x="90" y="231" fill="rgba(255,255,255,0.72)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Module</text>
      <text x="90" y="247" fill="rgba(59,130,246,0.45)" fontSize="10" fontFamily="system-ui, sans-serif">스택 · 난이도 · 기술</text>

      {/* Arrow */}
      <line x1="227" y1="256" x2="227" y2="270" stroke="rgba(59,130,246,0.16)" strokeWidth="1.5" />
      <polygon points="221,268 227,277 233,268" fill="rgba(59,130,246,0.16)" />

      {/* Content */}
      <rect x="92" y="278" width="270" height="44" rx="8" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.14)" strokeWidth="1" />
      <text x="110" y="297" fill="rgba(255,255,255,0.6)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Content</text>
      <text x="110" y="313" fill="rgba(59,130,246,0.38)" fontSize="10" fontFamily="system-ui, sans-serif">텍스트 · 영상 · 퀴즈</text>

      {/* Flow label */}
      <text x="227" y="360" fill="rgba(255,255,255,0.1)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Program → Course → Module → Content</text>

      {/* Vertical divider */}
      <line x1="454" y1="50" x2="454" y2="420" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* Right: Sprint board label */}
      <text x="474" y="64" fill="rgba(255,255,255,0.2)" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="system-ui, sans-serif">SPRINT BOARD</text>

      {/* Sprint cards */}
      {sprints.map((s) => (
        <g key={s.idx}>
          <rect x="474" y={76 + s.idx * 74} width="294" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <text x="492" y={76 + s.idx * 74 + 23} fill="rgba(255,255,255,0.72)" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">{s.label}</text>
          <text x="492" y={76 + s.idx * 74 + 42} fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="system-ui, sans-serif">{s.desc}</text>
          <rect x="700" y={76 + s.idx * 74 + 16} width="54" height="22" rx="11" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.28)" strokeWidth="1" />
          <text x="727" y={76 + s.idx * 74 + 31} fill="rgba(34,197,94,0.8)" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">배포 완료</text>
        </g>
      ))}

      {/* PRD block */}
      <rect x="474" y="304" width="294" height="70" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.16)" strokeWidth="1" />
      <text x="492" y="328" fill="rgba(59,130,246,0.8)" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">PRD · 정책 설계 · 릴리즈 노트</text>
      <text x="492" y="348" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="system-ui, sans-serif">유저스토리 → 플로우차트 → 배포</text>
      <text x="492" y="364" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="system-ui, sans-serif">기한 내 완료 · 2023.08.18</text>

      {/* Bottom metric strip */}
      <rect x="32" y="390" width="736" height="44" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="400" y="407" fill="rgba(255,255,255,0.45)" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="1" fontFamily="system-ui, sans-serif">PO 풀사이클 리드</text>
      <text x="400" y="424" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">문제 정의  →  PRD  →  스프린트 설계  →  배포</text>
    </svg>
  );
}

// ─── Dispatcher ─────────────────────────────────────────────────
export function ProjectImage({ projectId, style }: { projectId: string; style?: React.CSSProperties }) {
  switch (projectId) {
    case "studio-optimization": return <StudioOptimizationImage style={style} />;
    case "studio-metrics": return <StudioMetricsImage style={style} />;
    case "agentic-studio-tf": return <AgenticStudioImage style={style} />;
    case "product-split": return <ProductSplitImage style={style} />;
    case "growth-flywheel": return <GrowthFlywheelImage style={style} />;
    case "creator-hub": return <CreatorHubImage style={style} />;
    case "side-project-program": return <SideProjectImage style={style} />;
    case "buildmusic": return <BuildmusicImage style={style} />;
    case "mask": return <MaskImage style={style} />;
    case "lms-bowl": return <LmsBowlImage style={style} />;
    default:
      return <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "#0d1b2a", borderRadius: "10px", ...style }} />;
  }
}
