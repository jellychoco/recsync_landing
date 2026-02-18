import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정 삭제 - RecSync",
  description: "RecSync 계정 삭제 요청 안내",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-20 py-5 bg-[var(--bg-primary)]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/recsync_logo.png"
            alt="RecSync"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-[var(--text-primary)]">
            RecSync
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          계정 삭제 요청
        </h1>
        <p className="text-[var(--text-secondary)] mb-10">
          RecSync 계정 및 관련 데이터의 삭제를 요청할 수 있습니다.
        </p>

        {/* What gets deleted */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            삭제되는 데이터
          </h2>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">&#10005;</span>
              계정 정보 (이메일, 인증 데이터)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">&#10005;</span>
              크레딧 잔액 및 사용 내역
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">&#10005;</span>
              동기화 기록 및 앱 설정
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">&#10005;</span>
              FCM 푸시 알림 토큰
            </li>
          </ul>
        </section>

        {/* What stays */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            삭제되지 않는 데이터
          </h2>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] mt-0.5">&#10003;</span>
              Google Drive에 업로드된 파일 (사용자 소유)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-primary)] mt-0.5">&#10003;</span>
              기기에 저장된 녹음 파일 (로컬 데이터)
            </li>
          </ul>
          <p className="text-sm text-[var(--text-muted)] mt-3">
            Google Drive의 파일은 사용자가 직접 관리합니다. RecSync는 해당 파일에 대한 접근 권한이 없습니다.
          </p>
        </section>

        {/* How to request */}
        <section className="bg-white rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            삭제 요청 방법
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                방법 1: 앱 내 삭제
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                설정 &gt; 로그아웃 후 앱을 삭제하면 기기 내 모든 로컬 데이터가 자동으로 제거됩니다.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                방법 2: 이메일 요청
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                아래 이메일로 가입 시 사용한 Google 계정 이메일을 보내주시면, 서버에 저장된 모든 데이터를 30일 이내에 완전히 삭제합니다.
              </p>
              <a
                href="mailto:support@recsync.app?subject=RecSync 계정 삭제 요청"
                className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--accent-cta-hover)] transition-colors duration-200 cursor-pointer"
              >
                support@recsync.app 으로 요청하기
              </a>
            </div>
          </div>
        </section>

        {/* Processing time */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            처리 기간
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            계정 삭제 요청은 접수일로부터 <strong>30일 이내</strong>에 처리됩니다.
            삭제가 완료되면 이메일로 안내드립니다.
            삭제된 데이터는 복구할 수 없습니다.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--text-primary)] px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/recsync_logo.png"
              alt="RecSync"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-sm font-bold text-white">RecSync</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
              홈
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition">
              개인정보처리방침
            </Link>
          </nav>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 RecSync. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
