// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Projects.tsx
// 项目展示：前 3 个为大幅案例卡（左文右图），其余为双列竖向卡片（图在下、标签在左、按钮在右）。
// 两种卡片共用同一套 data，按钮按 demo 是否存在自动切换主次。

import { projects } from '../data';
import type { Project } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const FEATURED_COUNT = 3;

export default function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="py-24 px-6 lg:py-28 border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading step="06" eyebrow="项目展示" title="我的个人项目与作品" />

        {/* 精选：大幅案例卡 */}
        <div className="flex flex-col gap-8">
          {featured.map((p) => (
            <Reveal key={p.name} from="up">
              <FeatureCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* 其余：双列竖向卡片 */}
        {rest.length > 0 && (
          <>
            <div className="mt-14 mb-6 flex items-center gap-4">
              <span className="font-space text-xs tracking-[0.3em] text-ink/50">更多项目</span>
              <span className="h-px flex-1 bg-ink/[0.06]" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.name} from={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 90}>
                  <GridCard p={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ───────────── 大幅案例卡 ───────────── */
function FeatureCard({ p }: { p: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-ink/[0.08] bg-surface shadow-[0_2px_8px_rgba(20,20,40,0.04),0_24px_50px_-16px_rgba(20,20,40,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        {/* 左：信息 */}
        <div className="relative z-10 flex flex-col p-7 md:p-10 lg:p-12">
          <div className="mb-7 flex items-center gap-3">
            <span className="font-space text-xs tracking-[0.25em] text-ink/50">{p.index}</span>
            <span className="h-3 w-px bg-ink/15" />
            <StatusPill status={p.status} />
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-space text-4xl font-bold leading-none tracking-tight text-ink md:text-5xl lg:text-[56px]">
              {p.name}
            </h3>
            <span className="font-space text-xs tracking-[0.3em] text-ink/45 md:text-sm">
              {p.latin}
            </span>
          </div>

          <p className="mt-3 text-sm text-ink/65">{p.subtitle}</p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">{p.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-xs text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid max-w-sm grid-cols-3 gap-4">
            {[
              { value: p.year, label: '年份' },
              { value: `${p.tags.length} 项`, label: '技术栈' },
              { value: '全栈', label: '角色' },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-space text-xl text-ink">{m.value}</div>
                <div className="mt-1 text-[11px] text-ink/55">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButtons p={p} size="lg" />
          </div>

          <div className="mt-auto pt-10 font-space text-[10px] uppercase tracking-[0.28em] text-ink/35">
            Build {p.year} · {p.latin} · {p.tags[0]}
          </div>
        </div>

        {/* 右：产品预览 */}
        <div className="relative p-6 pt-0 md:p-8 md:pt-0 lg:p-8 lg:pl-0">
          <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-[#eef0f6] lg:min-h-[430px]">
            <WindowBar p={p} />
            <div className="relative flex-1 overflow-hidden">
              <Preview p={p} large />
            </div>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-ink/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />
    </article>
  );
}

/* ───────────── 双列竖向卡片 ───────────── */
function GridCard({ p }: { p: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface p-6 shadow-[0_2px_8px_rgba(20,20,40,0.04),0_24px_50px_-16px_rgba(20,20,40,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 md:p-7">
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="mb-4 flex items-center gap-2.5">
        <span className="font-space text-[11px] tracking-[0.2em] text-ink/50">{p.index}</span>
        <span className="h-3 w-px bg-ink/15" />
        <StatusPill status={p.status} small />
      </div>

      <div className="flex flex-wrap items-baseline gap-x-3">
        <h3 className="font-space text-2xl font-bold leading-none tracking-tight text-ink">
          {p.name}
        </h3>
        <span className="font-space text-[10px] tracking-[0.28em] text-ink/45">{p.latin}</span>
      </div>
      <p className="mt-2 text-xs text-ink/60">{p.subtitle}</p>
      {/* 固定三行高度，保证同排卡片截图起点对齐 */}
      <p className="mt-3 line-clamp-3 min-h-[4.2rem] text-sm leading-relaxed text-ink/65">
        {p.desc}
      </p>

      {/* 产品截图 */}
      <div className="mt-5 overflow-hidden rounded-xl border border-ink/10 bg-[#eef0f6]">
        <WindowBar p={p} compact />
        <div className="relative aspect-[16/10] overflow-hidden">
          <Preview p={p} />
        </div>
      </div>

      {/* 底部：标签在左、按钮在右 */}
      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/[0.08] bg-ink/[0.03] px-2.5 py-0.5 text-[11px] text-ink/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <ActionButtons p={p} size="sm" />
        </div>
      </div>

      <div className="mt-4 font-space text-[10px] uppercase tracking-[0.2em] text-ink/40">
        {p.year} · {p.tags.length} 技术栈 · 全栈
      </div>
    </article>
  );
}

/* ───────────── 复用零件 ───────────── */

function StatusPill({ status, small }: { status: string; small?: boolean }) {
  const online = status === '已上线';
  return (
    <span
      className={`rounded-full border px-3 ${small ? 'py-0.5 text-[10px]' : 'py-1 text-[11px]'} ${
        online
          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
          : 'border-primary/30 bg-primary/10 text-primary'
      }`}
    >
      {status}
    </span>
  );
}

function WindowBar({ p, compact }: { p: Project; compact?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 border-b border-ink/[0.06] bg-ink/[0.03] ${
        compact ? 'px-3 py-1.5' : 'px-4 py-2.5'
      }`}
    >
      <span className={`rounded-full bg-[#ff5f57]/70 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
      <span className={`rounded-full bg-[#febc2e]/70 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
      <span className={`rounded-full bg-[#28c840]/70 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
      <span
        className={`ml-2 font-space tracking-widest text-ink/45 ${
          compact ? 'text-[9px]' : 'text-[10px]'
        }`}
      >
        {p.latin.toLowerCase()}.app
      </span>
    </div>
  );
}

function Preview({ p, large }: { p: Project; large?: boolean }) {
  if (p.image) {
    return (
      <img
        src={p.image}
        alt={`${p.name} ${p.subtitle}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,240,255,0.10),transparent_65%)]" />
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      <span
        className={`absolute bottom-1 right-4 font-space font-bold leading-none text-ink/[0.04] ${
          large ? 'text-[92px]' : 'text-6xl'
        }`}
      >
        {p.latin}
      </span>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          className={`flex items-center justify-center rounded-2xl border border-ink/10 bg-ink/[0.03] ${
            large ? 'h-16 w-16 text-3xl' : 'h-12 w-12 text-xl'
          }`}
        >
          {p.icon}
        </span>
        <span className="font-space text-[10px] tracking-[0.3em] text-ink/45">PREVIEW</span>
      </div>
    </>
  );
}

function ActionButtons({ p, size }: { p: Project; size: 'lg' | 'sm' }) {
  const base =
    size === 'lg'
      ? 'rounded-xl px-6 py-3.5 text-sm'
      : 'rounded-lg px-3.5 py-2 text-xs';
  const primary = `${base} group/btn inline-flex items-center gap-2 bg-primary font-semibold text-[#04070c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_rgba(0,240,255,0.6)]`;
  const secondary = `${base} inline-flex items-center gap-2 border border-ink/15 text-ink/80 transition-all duration-300 hover:border-ink/30 hover:text-ink`;

  return (
    <>
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={primary}>
          进入演示
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      )}
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className={p.demo ? secondary : primary}
      >
        <GithubIcon className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        开源代码
      </a>
    </>
  );
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

// GitHub 图标（内联 SVG，避免引入图标库）
function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
