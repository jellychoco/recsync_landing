import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://recsync-landing.vercel.app";
const SITE_NAME = "RecSync";
const TITLE = "RecSync - 통화녹음 자동 백업 & 텍스트 변환";
const DESCRIPTION =
  "통화가 끝나자마자 녹음 파일을 자동 감지하고, Google Drive 백업 + 음성-텍스트 변환까지 한번에. 백업은 무료. Android 통화녹음 앱.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "통화녹음",
    "녹음 백업",
    "Google Drive 백업",
    "음성 텍스트 변환",
    "STT",
    "통화녹음 앱",
    "녹음 자동 백업",
    "RecSync",
    "안드로이드 녹음",
    "음성인식",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RecSync - 통화녹음 자동 백업 & 텍스트 변환",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
