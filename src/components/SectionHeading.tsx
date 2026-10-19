// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/SectionHeading.tsx
// 区块标题组件：步骤编号 + 小渐变副标题 + 大字标题，全站统一版式。
// step 用于强化"推进感"（01 → 07 的路径序号）。

import { useReveal } from '../hooks/useReveal';

interface Props {
  step?: string;   // 可选步骤编号，如 "01"
  eyebrow: string; // 渐变小副标题，如「关于我」
  title: string;   // 主标题
}

export default function SectionHeading({ step, eyebrow, title }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal text-center mb-16">
      {/* 眉标：两侧细线收束，中间 编号 + 圆点 + 文字，比纯文字更有版式感 */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-ink/20" />
        <div className="flex items-center gap-2.5">
          {step && (
            <span className="font-space font-semibold text-[11px] leading-none tracking-wider text-primary-dark/80">
              {step}
            </span>
          )}
          <span className="h-1 w-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <p className="font-space font-medium text-[11px] sm:text-xs tracking-[0.28em] uppercase text-primary-dark">
            {eyebrow}
          </p>
        </div>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-ink/20" />
      </div>

      <h2 className="font-space font-bold text-3xl sm:text-4xl tracking-tight text-ink leading-tight">
        {title}
      </h2>
      {/* 标题下装饰条：三段渐变 + 柔和外发光，收得更细 */}
      <div className="mx-auto mt-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_rgba(0,240,255,0.35)]" />
    </div>
  );
}
