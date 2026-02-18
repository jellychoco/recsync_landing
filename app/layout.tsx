import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecSync - 통화녹음 끝나면 알아서 다 해줍니다",
  description:
    "통화가 끝나자마자 녹음 파일을 자동 감지하고, Google Drive 백업 + 텍스트 변환까지 한번에. 백업은 무료.",
  openGraph: {
    title: "RecSync - 통화녹음 끝나면 알아서 다 해줍니다",
    description:
      "통화가 끝나자마자 녹음 파일을 자동 감지하고, Google Drive 백업 + 텍스트 변환까지 한번에.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
