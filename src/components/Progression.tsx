// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Progression.tsx
// 进阶之路：吸收 imoyee.cn 的「递进」叙事（从……到……）。
// 桌面端以横向四阶段 + 霓虹连接线表现"一步步进阶"；移动端纵向堆叠。

import { progression } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Progression() {
  return (
    <section id="progression" className="py-24 px-6 lg:py-28 relative bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading step="02" eyebrow="进阶之路" title="我如何一步步把想法做成系统" />

        <div className="relative">
          {/* 桌面端：贯穿四阶段的霓虹连接线 */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-40" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {progression.map((step, i) => (
              <Reveal key={step.index} from="left" delay={i * 120} className="h-full">
                <div className="relative tech-card rounded-2xl p-6 group h-full">
                  {/* 大号编号：渐变描边水印感 */}
                  <div
                    className="font-space font-bold text-5xl mb-4 bg-gradient-to-br from-primary-dark to-secondary bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300"
                  >
                    {step.index}
                  </div>
                  <h3 className="font-space font-semibold text-lg text-ink mb-3">{step.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{step.desc}</p>

                  {/* 阶段之间的箭头（仅相邻卡片之间、桌面端显示） */}
                  {i < progression.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-10 text-primary-dark/50 text-2xl">
                      →
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="text-center text-ink/60 text-sm mt-10">
          从一个能跑的脚本，到一套团队可用的系统 —— 这是我的成长弧线。
        </p>
      </div>
    </section>
  );
}
