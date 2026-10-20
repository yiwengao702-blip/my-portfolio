// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/Login.tsx
// 多角色演示登录页：纯前端 mock。
// 提供三种演示账号一键体验，也支持手动输入账号密码登录。

import { useState, type FormEvent } from 'react';
import { demoAccounts } from '../data';
import { useAuth } from '../auth';

const accentRing: Record<string, string> = {
  primary: 'group-hover:border-primary/50',
  secondary: 'group-hover:border-secondary/50',
  accent: 'group-hover:border-accent/50',
};

const accentDot: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
};

export default function Login() {
  const { login, loginAs } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const res = login(username, password);
    if (!res.ok) setError(res.error || '登录失败');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background bg-tech-grid px-6 py-16">
      <div className="w-full max-w-3xl">
        {/* 品牌区 */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_28px_rgba(0,240,255,0.45)] mb-4">
            <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
              <path
                d="M32 8 37.1 24.3 53.3 29.3 37.1 34.4 32 50.7 26.9 34.4 10.7 29.3 26.9 24.3Z"
                fill="#0a0a14"
              />
            </svg>
          </div>
          <h1 className="font-space text-3xl sm:text-4xl font-bold glow-text">
            高艺文 · 作品集
          </h1>
          <p className="text-ink-soft mt-2 text-sm sm:text-base">
            多角色演示登录 · 选择一个演示账号体验不同视图
          </p>
        </div>

        {/* 角色卡片：一键体验 */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {demoAccounts.map((acc) => (
            <button
              key={acc.username}
              type="button"
              onClick={() => loginAs(acc.role)}
              className={`tech-card rounded-2xl p-5 text-left transition group ${accentRing[acc.accent]}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-space font-semibold text-lg">{acc.roleLabel}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-ink/5 text-ink-soft">
                  {acc.username}
                </span>
              </div>
              <p className="text-ink-soft text-sm mt-1">{acc.tagline}</p>
              <ul className="mt-3 space-y-1.5">
                {acc.perks.map((p) => (
                  <li key={p} className="text-sm text-ink/80 flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${accentDot[acc.accent]}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-medium text-primary-dark group-hover:translate-x-1 transition">
                一键体验 →
              </div>
            </button>
          ))}
        </div>

        {/* 手动登录表单 */}
        <form onSubmit={submit} className="tech-card rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="4" y="10" width="16" height="11" rx="2.5" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <h2 className="font-space font-semibold text-lg">使用账号登录</h2>
          </div>

          <label className="block text-sm text-ink-soft mb-1" htmlFor="login-user">
            账号
          </label>
          <input
            id="login-user"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            placeholder="如 admin"
            autoComplete="username"
            className="w-full rounded-xl border border-ink/15 bg-surface px-4 py-2.5 text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          <label className="block text-sm text-ink-soft mt-4 mb-1" htmlFor="login-pass">
            密码
          </label>
          <input
            id="login-pass"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="如 admin123"
            autoComplete="current-password"
            className="w-full rounded-xl border border-ink/15 bg-surface px-4 py-2.5 text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          {error && <p className="text-accent text-sm mt-3">{error}</p>}

          <button
            type="submit"
            className="w-full mt-5 rounded-xl bg-gradient-to-r from-primary-dark to-secondary text-white font-medium py-2.5 transition hover:brightness-110 active:scale-[0.99]"
          >
            登录
          </button>

          <p className="text-center text-xs text-ink-soft mt-4 leading-relaxed">
            演示账号：admin / admin123 · recruiter / recruit123 · guest / guest123
          </p>
        </form>
      </div>
    </div>
  );
}
