"use client";

import Image from "next/image";
import {
  Phone,
  PhoneOff,
  ScanSearch,
  CloudUpload,
  ChevronRight,
  ServerOff,
  Smartphone,
  Lock,
  Trash2,
  CircleDollarSign,
  RefreshCw,
  FileText,
  Shield,
  ArrowDown,
} from "lucide-react";
import { useScrollReveal } from "./hooks/useScrollReveal";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.recsync.app";

const steps = [
  {
    num: 1,
    title: "통화녹음\n또는 음성녹음",
    desc: "평소처럼 통화하거나\n음성을 녹음하세요",
    bg: "#E3F2FD",
    numColor: "#1976D2",
    Icon: Phone,
  },
  {
    num: 2,
    title: "녹음 종료",
    desc: "통화 또는 녹음이 끝나면\n파일이 자동 저장",
    bg: "#FFF3E0",
    numColor: "#E8A317",
    Icon: PhoneOff,
  },
  {
    num: 3,
    title: "자동 감지",
    desc: "RecSync가 새 녹음을\n자동으로 감지",
    bg: "#E8F5E9",
    numColor: "#3D8A5A",
    Icon: ScanSearch,
  },
  {
    num: 4,
    title: "백업 + 텍스트 변환",
    desc: "Google Drive 백업과\n텍스트 변환을 한번에",
    bg: "#3D8A5A",
    numColor: "#FFFFFF",
    Icon: CloudUpload,
  },
];

const trustCards = [
  {
    Icon: ServerOff,
    title: "서버 저장 없음",
    desc: "녹음 파일은 우리 서버를 거치지 않습니다. 단말기에서 직접 Drive로.",
    bg: "#FBE9E7",
    iconColor: "#D84315",
  },
  {
    Icon: Smartphone,
    title: "로컬 보관",
    desc: "원본은 항상 당신의 기기에 안전하게 보관됩니다.",
    bg: "#E3F2FD",
    iconColor: "#1565C0",
  },
  {
    Icon: Lock,
    title: "당신의 Drive",
    desc: "Google Drive는 당신만 접근 가능. 우리는 볼 수 없습니다.",
    bg: "#E8F5E9",
    iconColor: "#2E7D32",
  },
  {
    Icon: Trash2,
    title: "완전 삭제",
    desc: "앱 삭제 시 모든 로컬 데이터가 완전히 제거됩니다.",
    bg: "#F3E5F5",
    iconColor: "#7B1FA2",
  },
];

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const delayClass =
    delay === 1
      ? "animate-delay-100"
      : delay === 2
        ? "animate-delay-200"
        : delay === 3
          ? "animate-delay-300"
          : delay === 4
            ? "animate-delay-400"
            : delay === 5
              ? "animate-delay-500"
              : "";

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-fade-up ${delayClass}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RecSync",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description:
    "통화가 끝나자마자 녹음 파일을 자동 감지하고, Google Drive 백업 + 음성-텍스트 변환까지 한번에.",
  url: "https://play.google.com/store/apps/details?id=com.recsync.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-20 py-4 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-black/5">
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/recsync_logo.png"
            alt="RecSync 로고"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-[var(--text-primary)]">
            RecSync
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#service"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
          >
            서비스
          </a>
          <a
            href="#security"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
          >
            보안
          </a>
          <a
            href={PLAY_STORE_URL}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
          >
            다운로드
          </a>
        </nav>
        <a
          href={PLAY_STORE_URL}
          className="hidden md:flex items-center gap-1.5 bg-[var(--accent-primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--accent-cta-hover)] transition-colors duration-200 cursor-pointer"
        >
          무료 다운로드
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </header>

      {/* Hero */}
      <section
        id="service"
        className="bg-white flex flex-col items-center text-center px-6 md:px-16 lg:px-20 pt-16 md:pt-24 pb-16 md:pb-20"
      >
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 bg-[var(--accent-light)] text-[var(--accent-primary)] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            <RefreshCw className="w-3.5 h-3.5" />
            통화 끝나면, 나머지는 RecSync가
          </span>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[var(--text-primary)] leading-[1.2] tracking-tight mb-6">
            통화녹음 끝나면
            <br />
            알아서 다 해줍니다.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            통화가 끝나자마자 녹음 파일을 자동 감지하고,
            <br className="hidden md:block" />
            Google Drive 백업 + 텍스트 변환까지 한번에. 백업은 무료.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={3} className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href={PLAY_STORE_URL}
            className="inline-flex items-center justify-center gap-2 bg-[var(--accent-primary)] text-white text-lg font-semibold px-9 py-4 rounded-full hover:bg-[var(--accent-cta-hover)] hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Google Play에서 다운로드
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#security"
            className="inline-flex items-center justify-center gap-2 bg-[var(--bg-primary)] text-[var(--text-primary)] text-lg font-semibold px-9 py-4 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            자세히 알아보기
          </a>
        </ScrollReveal>

        {/* 4 Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full max-w-4xl mb-10">
          {steps.map((step) => (
            <ScrollReveal key={step.num} delay={step.num}>
              <div className="flex flex-col items-center gap-3 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: step.bg }}
                >
                  <step.Icon
                    className="w-6 h-6"
                    style={{ color: step.numColor }}
                    strokeWidth={2}
                  />
                </div>
                <span className="inline-flex items-center gap-1 bg-[var(--accent-primary)] text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg">
                  Step {step.num}
                </span>
                <h3 className="text-sm md:text-base font-semibold text-[var(--text-primary)] text-center leading-snug whitespace-pre-line">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] text-center leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Row */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-sm text-[var(--text-muted)] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CircleDollarSign className="w-4 h-4" />
              백업 무료
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4" />
              완전 자동화
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              음성 + 텍스트 동시 저장
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* Privacy & Trust */}
      <section
        id="security"
        className="flex flex-col items-center text-center px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-[var(--bg-primary)]"
      >
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 bg-[var(--accent-light)] text-[var(--accent-primary)] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5" />
            보안
          </span>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12 max-w-xl">
            소중한 녹음, 우리는 절대 저장하지 않습니다
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl">
          {trustCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i + 1}>
              <div className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 md:p-7 text-left hover:shadow-md transition-shadow duration-200 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: card.bg }}
                >
                  <card.Icon
                    className="w-5 h-5"
                    style={{ color: card.iconColor }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-20 py-16 md:py-24 bg-[var(--accent-primary)]">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            녹음 걱정 끝내고, 소중한 음성파일을 지금부터 안전하게.
            <br />
            RecSync가 녹음, 관리, 변환까지 한번에 해결해드립니다.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <a
            href={PLAY_STORE_URL}
            className="inline-flex items-center gap-2 bg-white text-[var(--accent-primary)] text-lg font-semibold px-9 py-4 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Google Play에서 다운로드
            <ChevronRight className="w-5 h-5" />
          </a>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--text-primary)] px-6 md:px-16 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/recsync_logo.png"
              alt="RecSync 로고"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-sm font-bold text-white">RecSync</span>
          </a>
          <nav className="flex gap-6">
            <a
              href="#service"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              서비스
            </a>
            <a
              href="#security"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              보안
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              개인정보처리방침
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2026 RecSync. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
