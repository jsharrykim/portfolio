import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김정수 — Product Manager / Product Lead",
  description: "9년간 게임·교육·핀테크 도메인에서 문제를 정의하고, 팀을 움직여 비즈니스 성과로 연결해온 PM입니다.",
  keywords: ["PM", "PO", "Product Manager", "Product Lead", "김정수", "포트폴리오"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
