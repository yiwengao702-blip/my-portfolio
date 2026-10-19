// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Reveal.tsx
// 可复用的揭示包装组件：进入视口时淡入 + 位移，支持错位（delay）与方向（from）。
// 用于让网格卡片"依次登场"，强化页面的推进节奏感。

import { useReveal } from '../hooks/useReveal';
import type { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;          // 错位延迟（毫秒），让相邻卡片先后出现
  from?: 'up' | 'left' | 'right'; // 入场方向
}

export default function Reveal({ children, className = '', delay, from = 'up' }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const dir = from === 'left' ? 'from-left' : from === 'right' ? 'from-right' : '';
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`reveal ${dir} ${className}`} style={style}>
      {children}
    </div>
  );
}
