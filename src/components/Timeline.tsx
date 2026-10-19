// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Timeline.tsx
// 来路 / 经历：吸收 imoyee.cn 的逐年递进时间线，改造成赛博霓虹时间轴。
// 增强：竖向霓虹主线随滚动"生长"（scaleY 跟随区块进度），节点从左错位滑入。

import { useEffect, useRef, useState } from 'react';
import { timeline } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [lineProgress, setLineProgress] = useState(0); // 0~1：主线生长进度

  // 主线随滚动生长：区块顶部进入视口 85% 处起，到整段滚过为止
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const total = rect.height || 1;
      const p = Math.min(Math.max((start - rect.top) / total, 0), 1);
      setLineProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="timeline" className="py-24 px-6 lg:py-28 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading step="04" eyebrow="来路" title="我的技术成长里程碑" />

        <div ref={containerRef} className="relative pl-8 sm:pl-12">
          {/* 轨道（暗） */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-ink/10" />
          {/* 主线（亮，随滚动生长） */}
          <div
            className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent origin-top transition-transform duration-150 ease-out"
            style={{ transform: `scaleY(${lineProgress})` }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.year} from="left" delay={i * 90}>
                <div className="relative">
                  {/* 节点光点 */}
                  <div
                    className={`absolute -left-8 sm:-left-12 top-1 w-3 h-3 rounded-full bg-primary glow-border transition-transform duration-300 ${
                      lineProgress > i / timeline.length ? 'scale-100' : 'scale-50'
                    }`}
                  />
                  {/* 年份徽标 */}
                  <div className="font-space font-bold text-xl bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent mb-2">
                    {item.year}
                  </div>
                  {/* 内容卡 */}
                  <div className="tech-card rounded-2xl p-6">
                    <h3 className="font-space font-semibold text-lg text-ink mb-2">{item.title}</h3>
                    <p className="text-ink/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
