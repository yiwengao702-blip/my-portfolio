// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/tailwind.config.js
// Tailwind 主题配置：把 ikun666.asia 的霓虹三色抽象成设计令牌（design tokens）。
// 同时注册 Space Grotesk（标题）/ DM Sans（正文）两套字体。

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f5f6fa', // 全站底色：浅灰白（白色主题）
        surface: '#ffffff',    // 卡片/面板：纯白
        ink: '#1c1c2e',        // 主文字：深蓝近黑（白底可读）
        'ink-soft': '#5a5a72', // 次要文字：灰
        primary: '#00f0ff',    // 主霓虹：青（白底作点缀/按钮）
        'primary-dark': '#0090a8',
        secondary: '#7000ff',  // 次霓虹：紫
        'secondary-dark': '#4a00aa',
        accent: '#ff00aa',     // 点缀霓虹：品红
      },
      fontFamily: {
        // font-space 用于标题，font-sans（DM Sans）用于正文
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #00f0ff4d' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px #00f0ff99' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        gradient: 'gradientShift 6s ease infinite',
      },
    },
  },
  plugins: [],
};
