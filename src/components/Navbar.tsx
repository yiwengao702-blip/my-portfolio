// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Navbar.tsx
// 顶部导航：固定定位 + 毛玻璃 + 滚动后加深，移动端折叠为汉堡菜单。

import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#home'); // 当前高亮的导航项（scrollspy）

  // 监听滚动，给导航栏切换"已滚"状态（加深背景与边框）
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy：根据各区块在视口中的位置，点亮对应导航项，强化"推进感"
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-ink/[0.08] shadow-[0_8px_30px_-18px_rgba(20,20,40,0.22)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo：渐变文字 + 发光 */}
        <a href="#home" className="font-space font-bold text-lg flex items-center gap-2 group transition">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_10px_rgba(0,240,255,0.55)] animate-pulse-glow group-hover:scale-125 transition-transform duration-300" />
          <span className="bg-gradient-to-r from-primary-dark via-secondary to-accent bg-clip-text text-transparent glow-text group-hover:brightness-110 transition">
            {profile.name}
          </span>
          <span className="text-ink/70 font-normal text-sm hidden sm:inline">.dev</span>
        </a>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {/* 当前项下方指示线：细胶囊 + 柔和光晕 */}
                  <span
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_rgba(0,240,255,0.45)] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="切换菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* 移动端展开菜单 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-b border-ink/10 bg-background/95 backdrop-blur-lg' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors text-base font-medium block ${
                    isActive ? 'text-ink' : 'text-ink/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
