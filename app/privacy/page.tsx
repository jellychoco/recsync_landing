import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "1. 수집하는 개인정보",
    content:
      "RecSync는 서비스 제공을 위해 다음 정보를 수집합니다:\n• Google 계정 이메일 (로그인용)\n• Google Drive 접근 권한 (파일 업로드용)\n• 기기 내 녹음 파일 메타데이터 (파일명, 크기, 날짜)",
  },
  {
    title: "2. 개인정보의 이용 목적",
    content:
      "수집된 정보는 다음 목적으로만 사용됩니다:\n• 사용자 인증 및 서비스 접근\n• Google Drive에 녹음 파일 백업\n• 음성-텍스트 변환 서비스 제공\n• 크레딧 관리 및 결제 처리",
  },
  {
    title: "3. 녹음 파일 처리 방침",
    content:
      "RecSync는 사용자의 녹음 파일을 자체 서버에 저장하지 않습니다.\n• 녹음 파일은 사용자 기기에서 직접 Google Drive로 업로드됩니다.\n• 음성-텍스트 변환 시, Google Drive에 저장된 파일의 링크만을 제3자 음성인식 서비스로 전달합니다. 음성 데이터 자체는 RecSync 서버에 저장되지 않습니다.\n• 변환이 완료되면 결과 텍스트만 반환되며, 음성 데이터는 제3자 서비스에서 처리 즉시 삭제됩니다.\n• 변환된 텍스트는 사용자의 Google Drive에만 저장됩니다.",
  },
  {
    title: "4. 개인정보의 보관 및 파기",
    content:
      "• 계정 정보: 서비스 이용 기간 동안 보관\n• 결제 정보: 관련 법령에 따라 5년 보관\n• 앱 삭제 시: 기기 내 모든 로컬 데이터 즉시 삭제\n• 계정 탈퇴 시: 서버 데이터 30일 이내 완전 삭제",
  },
  {
    title: "5. 개인정보의 제3자 제공",
    content:
      "RecSync는 사용자 동의 없이 개인정보를 제3자에게 제공하지 않습니다.\n단, 다음의 경우는 예외입니다:\n• 법령에 의한 요청이 있는 경우\n• 서비스 제공을 위한 필수 위탁 처리:\n  - 음성-텍스트 변환: 제3자 음성인식 서비스 (Google Drive 파일 링크만 전달, 변환 완료 즉시 삭제)\n  - Google Drive 연동: Google API (파일 업로드 및 인증)\n  - 결제 처리: 결제 서비스 제공자 (결제 정보만 전달)",
  },
  {
    title: "6. 이용자의 권리",
    content:
      "사용자는 언제든지 다음 권리를 행사할 수 있습니다:\n• 개인정보 열람, 수정, 삭제 요청\n• 서비스 탈퇴 및 데이터 삭제 요청\n• Google Drive 연동 해제\n• 마케팅 수신 거부",
  },
  {
    title: "7. 보안 조치",
    content:
      "RecSync는 개인정보 보호를 위해 다음 조치를 시행합니다:\n• SSL/TLS 암호화 통신\n• Google OAuth 2.0 인증\n• 서버 접근 제한 및 모니터링\n• 정기적 보안 점검\n\n[OAuth 토큰 처리]\nGoogle Drive 연동을 위해 OAuth 2.0 인증 토큰이 사용됩니다. 해당 토큰은 사용자 인증 및 Google Drive 파일 업로드 목적으로만 사용되며, 인증 목적 이외에는 저장 또는 제3자에게 제공되지 않습니다. 토큰은 사용자 동의 하에 암호화되어 안전하게 처리되며, 사용자가 Google Drive 연동을 해제하면 즉시 폐기됩니다.",
  },
  {
    title: "8. 문의처",
    content:
      "개인정보 관련 문의사항이 있으시면 아래로 연락해주세요.\n• 이메일: support@recsync.app\n• 본 방침은 2025년 1월 1일부터 시행됩니다.",
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
          개인정보처리방침
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">
          시행일: 2025년 1월 1일
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
            &copy; 2025 RecSync. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
