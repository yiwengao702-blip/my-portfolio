// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/App.tsx
// 应用根组件：按"首页 → 关于 → 进阶 → 技能 → 经历 → 项目 → 联系"顺序组装各区块。
// 设计融合 ikun666.asia（赛博霓虹外观）与 imoyee.cn（递进式结构）。

import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Progression from './components/Progression';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function App() {
  // 进入页面一律从顶部开始，不还原任何锚点。
  //
  // 原来的写法是「地址栏有 hash 就 scrollIntoView 到对应区块」，本意是支持别人分享
  // http://站点/#projects 这类深链。但导航用的是原生 <a href="#experience">，只要点过
  // 一次「工作」，地址栏就永久留下 #experience，之后每次打开（或刷新）都会被这段逻辑
  // 直接滚到工作区，首屏看到的不是 Hero，而是工作经历卡片。
  // 加上浏览器自身的 scrollRestoration，两条路一起把页面拽走。
  //
  // 现在的策略：进入即清掉残留 hash 并回顶部；页内点导航仍走浏览器原生锚点滚动，不受影响。
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    toTop();
    // 首屏图片懒加载会把文档二次撑开，load 之后位置可能又被推下去，补一次。
    const raf = requestAnimationFrame(toTop);
    window.addEventListener('load', toTop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', toTop);
    };
  }, []);

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
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

