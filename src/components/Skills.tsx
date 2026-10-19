// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Skills.tsx
// 技能专长：左侧进度条（渐变填充、滚动到视口时动态增长），右侧技术标签云 + 能力分层。
// 沿用 ikun666 的"技能专长"版式；右侧补第二张卡，避免标签云下方留大片空白。

import { skills, techTags, stackLayers } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6 lg:py-28 border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading step="03" eyebrow="技能专长" title="我常用的技术与工具" />

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12">
          {/* 左：技能进度条（条目与右侧标签云同源，共 23 项，故行距略收紧） */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-ink/80 text-sm font-medium">{skill.name}</span>
                  <span className="text-primary-dark text-xs font-space">{skill.level}%</span>
                </div>
                {/* 轨道 */}
                <div className="h-1.5 rounded-full bg-ink/5 overflow-hidden">
                  {/* 填充：用 data-level 控制宽度，CSS 过渡让其在揭示时增长 */}
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 右：技术标签云 + 能力分层 */}
          <div className="flex flex-col gap-6">
            <div className="tech-card rounded-3xl p-8">
              <h3 className="font-space font-semibold text-xl text-secondary mb-6">技术栈</h3>
              <div className="flex flex-wrap gap-3">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg border border-ink/10 bg-ink/5 text-ink/70 text-sm hover:border-primary/50 hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-ink/60 text-sm mt-8 leading-relaxed">
                从底层数据（MySQL / Redis）到向量检索（Milvus），再到编排（LangChain / LangGraph / Multi-Agent）
                与工程交付（Docker / SSE / MCP），我习惯把能力串成一条完整链路。
              </p>
            </div>

            <div className="tech-card rounded-3xl p-8 flex flex-1 flex-col">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-space font-semibold text-xl text-secondary">能力分层</h3>
                <span className="font-space text-[10px] tracking-[0.25em] text-ink/40">LAYERS</span>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                {stackLayers.map((s) => (
                  <div
                    key={s.layer}
                    className="flex items-baseline gap-4 border-b border-ink/[0.05] py-3 last:border-0 last:pb-0 first:pt-0"
                  >
                    <span className="w-14 shrink-0 font-space text-xs tracking-wide text-primary/60">
                      {s.layer}
                    </span>
                    <span className="text-sm leading-relaxed text-ink/70">{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
