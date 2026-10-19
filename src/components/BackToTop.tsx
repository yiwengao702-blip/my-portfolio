// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/BackToTop.tsx
// 回到顶部：滚动超过一屏后出现，点击平滑回到顶部，强化"可往回、可向前"的掌控感。

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label="回到顶部"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-surface/80 backdrop-blur border border-primary/40 text-primary glow-border print:hidden
        flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-[#0a0a14]
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
