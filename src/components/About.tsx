// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/About.tsx
// 关于我：左文右数两栏，玻璃卡片承载，沿用 ikun666 的版式。

import { profile } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const textRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6 lg:py-28 relative border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading step="01" eyebrow="关于我" title="了解更多关于我的背景与技能" />

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* 左：个人简介（占两列） */}
          <div ref={textRef} className="reveal tech-card rounded-3xl p-8 md:col-span-2">
            <h3 className="font-space font-semibold text-2xl text-primary-dark mb-5">个人简介</h3>
            <p className="text-ink/70 leading-relaxed text-lg">{profile.intro}</p>

            {/* 基础信息：年龄 / 学历 / 认证 / 城市 / 到岗（信息条样式） */}
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 rounded-xl border border-ink/[0.06] bg-ink/[0.03] px-4 py-3 text-sm text-ink/60">
              {['24 岁', '专科', '统招全日制', '影刀 RPA 高级认证', '郑州', '一周内到岗'].map((item, i) => (
                <span key={item} className="inline-flex items-center gap-2.5">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-ink/25" />}
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {/* 下载简历（醒目卡片） */}
            <a
              href="resume.pdf"
              download
              className="group mt-6 flex w-full items-center gap-4 rounded-2xl border border-ink/[0.08] bg-surface px-5 py-4 shadow-[0_2px_8px_rgba(20,20,40,0.04),0_18px_40px_-16px_rgba(20,20,40,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-[#0a0a14]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M8 13h8" />
                  <path d="M8 17h5" />
                </svg>
              </span>
              <span className="flex-1">
                <span className="block font-medium text-ink">下载简历</span>
                <span className="block text-xs text-ink/50">PDF 文档</span>
              </span>
              <span className="font-space text-xs tracking-[0.2em] text-ink/40 transition-colors group-hover:text-primary-dark">PDF</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 flex-shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-dark"
                aria-hidden="true"
              >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>

          {/* 在线查看简历：新标签页打开 PDF（交给浏览器内置阅读器，不下载） */}
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-ink/15 bg-surface px-5 py-3.5 text-sm font-medium text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-dark"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            在线查看简历
          </a>

            {/* 三个关键词标签 */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['全栈开发', 'AI 应用', '工程化交付'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-primary/30 text-primary-dark text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 右：数据卡 */}
          <div ref={statsRef} className="reveal tech-card rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="font-space font-semibold text-xl text-secondary mb-6">数据一览</h3>
            <div className="space-y-6">
              {profile.stats.map((s) => (
                <div key={s.label} className="flex items-end justify-between border-b border-ink/5 pb-4 last:border-0">
                  <span className="font-space font-bold text-4xl bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
                    {s.value}
                  </span>
                  <span className="text-ink/70 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
