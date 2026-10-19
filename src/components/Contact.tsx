// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Contact.tsx
// 联系我：三组联系方式卡（邮箱 / 手机号 / GitHub）+ 回复提示。
// 联系方式统一从 src/data.ts 的 contact 读取。

import { useState } from 'react';
import { contact } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(contact.wechat);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const cards = [
    { title: '邮箱', value: contact.email, href: `mailto:${contact.email}`, copy: false },
    { title: '手机号', value: contact.phone, href: `tel:${contact.phone}`, copy: false },
    { title: 'GitHub', value: contact.github, href: contact.githubUrl, copy: false },
    { title: '微信', value: contact.wechat, href: '', copy: true },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:py-28 relative border-t border-ink/5">
      {/* 底部柔光 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading step="07" eyebrow="联系我" title="期待与您的合作与交流" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((c, i) => (
            <Reveal key={c.title} from="up" delay={i * 100} className="h-full">
              {c.copy ? (
                <button
                  type="button"
                  onClick={copyWechat}
                  className="group tech-card rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center w-full"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                    <WechatIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-space font-semibold text-lg text-ink mb-2">{c.title}</h3>
                  <p className="text-ink/70 text-sm break-all group-hover:text-primary transition-colors duration-300">
                    {c.value}
                  </p>
                  <span className="mt-2 text-xs text-ink/40">{copied ? '已复制到剪贴板' : '点击复制微信号'}</span>
                </button>
              ) : (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group tech-card rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                    <span className="font-space font-bold text-primary">{c.title[0]}</span>
                  </div>
                  <h3 className="font-space font-semibold text-lg text-ink mb-2">{c.title}</h3>
                  <p className="text-ink/70 text-sm break-all group-hover:text-primary transition-colors duration-300">
                    {c.value}
                  </p>
                </a>
              )}
            </Reveal>
          ))}
        </div>

        <p className="text-center text-ink/70 text-sm">{contact.note}</p>
      </div>
    </section>
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
