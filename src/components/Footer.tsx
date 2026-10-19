// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Footer.tsx
// 页脚：品牌 + 版权 + 社交/联系图标 + 回到顶部 + 构建信息。

import { profile, contact } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const iconBtn =
    'flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors duration-300 hover:border-primary/50 hover:text-primary-dark';

  return (
    <footer className="border-t border-ink/10 bg-surface/40 py-10 px-6 print:hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* 左：品牌 + 版权 */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-[#0a0a14]">
              {/* 与首屏名片头像保持一致的四角星 */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3 13.9 9.1 20 11 13.9 12.9 12 19 10.1 12.9 4 11 10.1 9.1z" />
              </svg>
            </span>
            <span className="text-sm text-ink/60">© {year} {profile.name} · 保留所有权利</span>
          </div>

          {/* 右：社交/联系图标 + 回到顶部 */}
          <div className="flex items-center gap-2">
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="邮箱" className={iconBtn}>
              <MailIcon className="h-4 w-4" />
            </a>
            <a href={`tel:${contact.phone}`} aria-label="电话" className={iconBtn}>
              <PhoneIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(contact.wechat)}
              title={`微信号：${contact.wechat}（点击复制）`}
              aria-label="微信"
              className={iconBtn}
            >
              <WechatIcon className="h-4 w-4" />
            </button>
            <button onClick={scrollTop} aria-label="回到顶部" className={iconBtn}>
              <ArrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ink/5 pt-6 sm:flex-row">
          <span className="font-space text-sm bg-gradient-to-r from-primary-dark via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {profile.tagline}
          </span>
          <span className="text-xs text-ink/40">基于 React · Vite · Tailwind CSS 构建</span>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowUpIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function WechatIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.7 3C4.98 3 2 5.58 2 8.79c0 1.79.99 3.38 2.54 4.43-.12.74-.46 1.74-.96 2.52-.13.18.03.42.23.36 1.04-.27 2.23-.78 2.99-1.27.5.12 1.04.19 1.6.19 3.72 0 6.7-2.58 6.7-5.77C15.1 5.58 12.12 3 8.7 3Zm-2.3 4.05c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Zm4.6 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Z" />
      <path d="M22 13.05c0-2.62-2.5-4.74-5.6-4.74-3.1 0-5.6 2.12-5.6 4.74 0 2.63 2.5 4.75 5.6 4.75.66 0 1.3-.09 1.89-.26.66.36 1.42.7 2.14.92.16.06.33-.08.25-.26-.3-.62-.58-1.4-.68-2.04.95-.74 1.6-1.78 1.6-2.99Zm-7.4-1.06c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Zm3.9 0c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z" />
    </svg>
  );
}
