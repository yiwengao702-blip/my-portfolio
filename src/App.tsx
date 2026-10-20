// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/App.tsx
// 应用根组件：多角色演示登录（AuthProvider）包裹整站。
// 未登录时展示登录页；登录后按"首页 → 关于 → … → 专属视图 → 联系"顺序组装各区块。

import { useEffect } from 'react';

import { AuthProvider, useAuth } from './auth';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Progression from './components/Progression';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Projects from './components/Projects';
import RoleZone from './components/RoleZone';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Login from './components/Login';

function Portfolio() {
  const { isAuthed } = useAuth();

  // 带锚点直接打开（如别人分享的 http://站点/#projects）时，浏览器的原生 hash 滚动
  // 发生在 React 挂载之前——那时目标区块还不存在，滚动落空，页面停在顶部。
  //
  // 只补一次 scrollIntoView 也不够：首屏图片是懒加载的，滚动那一刻文档还没被撑开，
  // 算出来的目标位置是「图片加载前」的坐标（实测跳到 789px，而项目区实际在 4844px）。
  // 所以这里用 ResizeObserver 盯着文档高度，只要还在变化就重新校正，3 秒后停止。
  useEffect(() => {
    if (!isAuthed) return;
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!id) return;

    const fix = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const raf = requestAnimationFrame(fix);
    const observer = new ResizeObserver(fix);
    observer.observe(document.body);
    const stopAt = window.setTimeout(() => observer.disconnect(), 3000);

    window.addEventListener('load', fix);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(stopAt);
      observer.disconnect();
      window.removeEventListener('load', fix);
    };
  }, [isAuthed]);

  if (!isAuthed) return <Login />;

  return (
    <div className="min-h-screen bg-background text-ink selection:bg-primary/30">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Progression />
        <Skills />
        <Timeline />
        <Experience />
        <Projects />
        <RoleZone />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Portfolio />
    </AuthProvider>
  );
}
