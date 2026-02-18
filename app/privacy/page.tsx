import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "1. 수집하는 개인정보",
    content:
      "RecSync는 서비스 제공을 위해 다음 정보를 수집 및 처리합니다.\n\n① 계정 정보\n• Google 계정 이메일 (로그인 및 사용자 식별 목적)\n\n② 파일 및 콘텐츠 정보\n• 사용자가 Google Drive에 업로드한 오디오 파일\n• 음성-텍스트 변환을 위해 사용자가 선택한 오디오 파일(음성 데이터)\n• 파일 메타데이터 (파일명, 크기, 생성일 등)\n\n③ 결제 관련 정보\n• 크레딧 구매 및 결제 처리에 필요한 거래 정보\n(※ 실제 카드번호 등 민감 결제 정보는 결제 서비스 제공자가 처리하며, RecSync는 저장하지 않습니다.)",
  },
  {
    title: "2. 개인정보의 이용 목적",
    content:
      "수집된 정보는 다음 목적에 한하여 사용됩니다.\n\n• 사용자 인증 및 서비스 접근 제공\n• Google Drive에 오디오 파일 백업\n• 음성-텍스트 변환 기능 제공\n• 결제 및 크레딧 관리\n• 서비스 안정성 유지 및 보안 관리",
  },
  {
    title: "3. 오디오 파일 및 음성 데이터 처리 방침",
    content:
      "RecSync는 사용자의 오디오 파일을 자체 서버에 저장하지 않습니다.\n\n① Google Drive 업로드\n• 사용자가 선택한 오디오 파일은 사용자의 기기에서 Google Drive API를 통해 직접 Google Drive 계정으로 업로드됩니다.\n• 해당 파일은 RecSync 서버를 거치지 않습니다.\n\n② 음성-텍스트 변환 처리\n• 사용자가 텍스트 변환을 요청하는 경우, Google Drive에 저장된 오디오 파일이 Naver Cloud Platform의 CLOVA Speech Recognition API로 전송되어 처리됩니다.\n• 이 과정에서 오디오 데이터는 HTTPS 암호화 통신을 통해 전송됩니다.\n• RecSync 서버는 오디오 파일을 저장하지 않습니다.\n\n③ 텍스트 결과 처리\n• 음성 인식 결과 텍스트는 서비스 제공을 위해 RecSync 서버에 일시적으로 저장될 수 있습니다.\n• 해당 텍스트는 사용자 기기와 동기화 완료 후 즉시 삭제됩니다.\n• 텍스트 데이터는 장기 저장되지 않습니다.",
  },
  {
    title: "4. 개인정보의 보관 및 파기",
    content:
      "• 계정 정보: 서비스 이용 기간 동안 보관\n• 결제 기록: 관련 법령에 따라 최대 5년 보관\n• 오디오 파일: RecSync 서버에 저장되지 않음\n• 계정 탈퇴 시: 서버에 보관된 개인정보는 30일 이내 완전 삭제\n• 앱 삭제 시: 기기 내 로컬 데이터는 즉시 삭제",
  },
  {
    title: "5. 개인정보의 제3자 제공 및 위탁",
    content:
      "RecSync는 사용자 동의 없이 개인정보를 제3자에게 판매하거나 제공하지 않습니다.\n\n다만, 서비스 제공을 위한 필수 처리 과정에서 아래와 같은 위탁이 이루어질 수 있습니다.\n\n① 음성-텍스트 변환\n• 제공업체: Naver Cloud Platform (CLOVA Speech Recognition API)\n• 처리 데이터: 사용자가 선택한 오디오 파일\n• 처리 목적: 음성-텍스트 변환\n• 보관 여부: 처리 후 즉시 삭제\n\n② Google Drive 연동\n• 제공업체: Google LLC (Google Drive API, OAuth 2.0)\n• 처리 목적: 파일 업로드 및 사용자 인증\n\n③ 결제 처리\n• 제공업체: Google Play 결제 시스템 또는 기타 결제 서비스 제공자\n• 처리 목적: 결제 및 거래 관리",
  },
  {
    title: "6. 데이터 국외 이전 여부",
    content:
      "음성 데이터는 대한민국 내 Naver Cloud Platform 서버에서 처리됩니다.\nGoogle Drive 및 Google OAuth 관련 데이터는 Google의 글로벌 서버 인프라에서 처리될 수 있습니다.",
  },
  {
    title: "7. 이용자의 권리",
    content:
      "사용자는 언제든지 다음 권리를 행사할 수 있습니다.\n\n• 개인정보 열람, 수정, 삭제 요청\n• 계정 탈퇴 및 데이터 삭제 요청\n• Google Drive 연동 해제\n• 크레딧 사용 내역 확인\n\n요청은 아래 문의처를 통해 가능합니다.",
  },
  {
    title: "8. 보안 조치",
    content:
      "RecSync는 개인정보 보호를 위해 다음 조치를 시행합니다.\n\n• HTTPS 기반 SSL/TLS 암호화 통신\n• Google OAuth 2.0 인증 사용\n• 서버 접근 제한 및 로그 모니터링\n• 최소한의 데이터 처리 원칙 준수",
  },
  {
    title: "9. 문의처",
    content:
      "개인정보 관련 문의는 아래로 연락해 주시기 바랍니다.\n\n• 이메일: ma88082@gmail.com",
  },
];

export default function PrivacyPage() {
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
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
          RecSync 개인정보처리방침
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          시행일: 2026년 2월 17일
        </p>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-12">
          RecSync(이하 &ldquo;회사&rdquo;)는 이용자의 개인정보를 중요하게
          생각하며, 관련 법령 및 Google Play 사용자 데이터 정책을 준수합니다.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {section.title}
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
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
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              홈
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              개인정보처리방침
            </Link>
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
