// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/ScrollProgress.tsx
// 顶部滚动进度条：随页面滚动从 0% 填充到 100%，最直接的「推进感」来源。

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
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
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-ink/5 print:hidden">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_rgba(0,240,255,0.6)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
