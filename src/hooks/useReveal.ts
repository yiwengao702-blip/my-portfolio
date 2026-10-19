// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/hooks/useReveal.ts
// 滚动揭示 Hook：用 IntersectionObserver 监测元素进入视口，
// 进入后给目标加上 .revealed 类触发 CSS 过渡（opacity + translateY）。

import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 不支持 IntersectionObserver 时直接显示，保证可用性
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // 只揭示一次，避免反复抖动
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
