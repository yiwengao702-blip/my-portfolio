// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/vite.config.ts
// Vite 构建配置：以 React 插件驱动 TSX 编译，端口刻意避开本机已占用的 8000/8001/8100/8101/5173。

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,        // 开发服务器端口（与既有项目错峰，避免冲突）
    host: true,
  },
  preview: {
    port: 5181,        // 预览构建产物时的端口
    host: true,
  },
});
