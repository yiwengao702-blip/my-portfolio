// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Experience.tsx
// 工作经历：简化版——去掉时间轴光点与渐变主线，改为单张干净卡片，
// 岗位 / 公司 / 时间段一行排布，下方一句职责与低调技术标签。

import { experience } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:py-28 border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <SectionHeading step="05" eyebrow="工作经历" title="我的职业履历" />

        <div className="space-y-4">
          {experience.map((job, i) => (
            <Reveal key={job.period} from="up" delay={i * 80}>
              <div className="rounded-2xl border border-ink/[0.08] bg-ink/[0.06] p-6 md:p-7 transition-colors duration-500 hover:border-ink/20">
                {/* 岗位 + 公司（左）／时间段（右） */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                    <span className="text-sm text-ink/65">{job.company}</span>
                  </div>
                  <span className="font-space text-xs tracking-wider text-ink/55">{job.period}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink/65">{job.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-ink/10 bg-ink/[0.06] px-2 py-0.5 text-[11px] text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
