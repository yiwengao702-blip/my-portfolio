// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/main.tsx
// 应用入口：挂载 React 根组件并引入全局样式。

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
