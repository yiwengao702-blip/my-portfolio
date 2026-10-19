// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Hero.tsx
// 首屏 Hero：左侧文案 + 右侧个人名片卡（补齐右侧留白，形成视觉锚点）。
// 保留浮动光斑与科技网格，白底霓虹作为点缀。

import { profile } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-tech-grid"
    >
      {/* 浮动光斑：青 / 紫 / 品红三色，模糊 + 缓动，营造空间纵深 */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-10 w-80 h-80 bg-secondary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* 左：文案 */}
          <div>
            {/* 小标签：胶囊徽章 */}
            <span className="inline-block mb-5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-space text-xs tracking-widest text-primary-dark">
              {profile.role}
            </span>

            {/* 主标题：渐变发光 + 流动 */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-ink">你好，我是 </span>
              <span className="whitespace-nowrap bg-gradient-to-r from-primary-dark via-secondary to-accent bg-clip-text text-transparent glow-text bg-[length:200%_auto] animate-gradient">
                {profile.name}
              </span>
            </h1>

            {/* 标语 */}
            <p className="font-space text-xl sm:text-2xl text-ink/80 mb-6">
              {profile.tagline}
            </p>

            {/* 简介 */}
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl mb-10">
              {profile.heroLead}
            </p>

            {/* 行动按钮 */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-[#0a0a14] font-medium font-space shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-ink/15 text-ink/80 hover:border-primary/50 hover:text-primary-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
              >
                联系我
              </a>
            </div>
          </div>

          {/* 右：个人名片卡（视觉锚点） */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="tech-card relative overflow-hidden rounded-[32px] p-8">
              {/* 卡内柔光 */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />

              <div className="relative">
                {/* 头像与姓名 */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-[#0a0a14] shadow-lg shadow-primary/20">
                    {/* 头像位图标：四角星 sparkle，呼应「AI × 全栈」 */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3 13.9 9.1 20 11 13.9 12.9 12 19 10.1 12.9 4 11 10.1 9.1z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-space text-xl font-bold text-ink">{profile.name}</div>
                    <div className="text-sm text-ink/60">{profile.role}</div>
                  </div>
                </div>

                {/* 数据速览 */}
                <div className="mt-7 grid grid-cols-3 gap-3 border-y border-ink/5 py-5">
                  {profile.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-space text-2xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[11px] text-ink/55">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* 能力关键词 */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['全栈开发', 'AI 应用', '工程化交付', 'Prompt 工程', 'RAG 落地'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs text-primary-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 悬浮小徽章 */}
            <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-xl border border-ink/10 bg-surface px-3 py-2 shadow-lg sm:block">
              <span className="font-space text-[11px] tracking-widest text-primary-dark">AI × 全栈</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部滚动提示 */}
      <a
        href="#about"
        aria-label="向下滚动"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/60 hover:text-primary transition-colors animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
