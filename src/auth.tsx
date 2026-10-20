// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/auth.tsx
// 多角色演示登录的轻量上下文：纯前端 mock，无后端。
// 角色与会话持久化到 localStorage，刷新后保持登录态。

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { demoAccounts, type Role } from './data';

interface Session {
  role: Role;
  username: string;
}

interface AuthContextValue {
  role: Role | null;
  username: string | null;
  isAuthed: boolean;
  login: (username: string, password: string) => { ok: boolean; error?: string };
  loginAs: (role: Role) => void;
  logout: () => void;
}

const STORAGE_KEY = 'my-portfolio-auth-v1';
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as Session;
      if (parsed && demoAccounts.some((a) => a.username === parsed.username)) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    else localStorage.removeItem(STORAGE_KEY);
  }, [session]);

  const login = useCallback((username: string, password: string) => {
    const acc = demoAccounts.find((a) => a.username === username.trim().toLowerCase());
    if (!acc) return { ok: false, error: '账号不存在' };
    if (acc.password !== password) return { ok: false, error: '密码错误' };
    setSession({ role: acc.role, username: acc.username });
    return { ok: true };
  }, []);

  const loginAs = useCallback((role: Role) => {
    const acc = demoAccounts.find((a) => a.role === role);
    if (acc) setSession({ role: acc.role, username: acc.username });
  }, []);

  const logout = useCallback(() => setSession(null), []);

  const value: AuthContextValue = {
    role: session?.role ?? null,
    username: session?.username ?? null,
    isAuthed: session !== null,
    login,
    loginAs,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth 必须在 AuthProvider 内使用');
  return ctx;
}
