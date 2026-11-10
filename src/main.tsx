// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/main.tsx
// 应用入口：挂载 React 根组件并引入全局样式。

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 关掉浏览器的滚动位置恢复。
// 否则「上次滚到工作经历 → 关掉 → 再打开」会被浏览器直接拽回上次的位置，
// 首屏根本看不到 Hero，观感就是"页面自己跳到了工作区"。
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
