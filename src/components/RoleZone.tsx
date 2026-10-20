// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/components/RoleZone.tsx
// 角色专属视图：根据当前登录角色渲染不同内容，演示 RBAC 能力。
// - admin：内部运营视图（在线服务、部署、维护备注）
// - recruiter：招聘方专属（求职意向、到岗、薪资期望、可提供的材料）
// - visitor：公开浏览，提供一键切换为其它角色

import { useAuth } from '../auth';
import { contact, profile } from '../data';
import SectionHeading from './SectionHeading';

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="tech-card rounded-2xl p-5 text-center">
      <div className="font-space text-2xl font-bold text-ink">{value}</div>
      <div className="text-ink-soft text-sm mt-1">{label}</div>
    </div>
  );
}

export default function RoleZone() {
  const { role, loginAs, logout } = useAuth();

  // 管理员：内部运营视图
  if (role === 'admin') {
    return (
      <section id="role-zone" className="py-24 bg-tech-grid">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading step="08" eyebrow="Admin View" title="内部运营视图" />
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark font-medium">
              仅管理员可见
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <Stat label="在线演示服务" value="5" />
            <Stat label="累计部署" value="12" />
            <Stat label="监控项目" value="7+" />
          </div>

          <div className="tech-card rounded-2xl p-6">
            <h3 className="font-space font-semibold text-lg mb-3">项目维护备注</h3>
            <ul className="space-y-2 text-ink/80">
              <li className="flex gap-2">
                <span className="text-secondary">●</span>
                观澜 / 万象 / 契衡 / 鹏至智库 / 清衡 均通过自建服务器对外提供演示（IP: 124.70.67.23）。
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">●</span>
                本作品集由 GitHub Actions 自动构建并部署到 Pages，主分支 master，提交即上线。
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">●</span>
                演示环境账号与密码统一托管，访问需白名单；对外仅开放只读演示。
              </li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={logout}
              className="text-sm text-ink-soft hover:text-accent transition underline-offset-4 hover:underline"
            >
              退出登录
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 招聘方：专属视图
  if (role === 'recruiter') {
    const rows: [string, string][] = [
      ['求职意向', 'AI 应用开发工程师 / FDE（前端 + AI 落地）'],
      ['期望城市', '上海 / 可接受远程'],
      ['到岗时间', '可协商（通常 2 周内）'],
      ['薪资期望', '面议（参考 20–99 人财税公司 AI 岗）'],
      ['当前状态', '开放机会中'],
    ];
    return (
      <section id="role-zone" className="py-24 bg-tech-grid">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading step="08" eyebrow="Recruiter View" title="招聘方专属视图" />
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-medium">
              仅招聘方可见
            </span>
          </div>

          <div className="tech-card rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {rows.map(([k, v]) => (
                <div key={k} className="flex flex-col border-b border-ink/5 pb-3">
                  <span className="text-ink-soft text-sm">{k}</span>
                  <span className="text-ink font-medium mt-0.5">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-space font-semibold text-lg mb-2">可立即提供的材料</h3>
              <div className="flex flex-wrap gap-2">
                {['简历 PDF', '项目演示', '代码仓库', '作品集'].map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full bg-ink/5 text-ink/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
              <span>联系方式优先级：</span>
              <span className="text-ink font-medium">邮箱</span>
              <span>›</span>
              <span className="text-ink font-medium">微信</span>
              <span className="ml-2 text-ink/60">{contact.email}</span>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={logout}
              className="text-sm text-ink-soft hover:text-accent transition underline-offset-4 hover:underline"
            >
              退出登录
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 访客：公开浏览，提供角色切换
  return (
    <section id="role-zone" className="py-24 bg-tech-grid">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading step="08" eyebrow="Visitor View" title="访客视图" />
        <div className="tech-card rounded-2xl p-8 text-center">
          <p className="text-ink/80">
            你正在以 <span className="font-medium text-ink">访客</span> 身份浏览公开作品集。
          </p>
          <p className="text-ink-soft text-sm mt-2">
            切换为其它角色，可查看内部运营或招聘专属内容。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => loginAs('admin')}
              className="rounded-xl border border-secondary/40 bg-secondary/5 text-secondary-dark font-medium px-5 py-2.5 transition hover:bg-secondary/10"
            >
              以管理员体验
            </button>
            <button
              onClick={() => loginAs('recruiter')}
              className="rounded-xl border border-primary/40 bg-primary/5 text-primary-dark font-medium px-5 py-2.5 transition hover:bg-primary/10"
            >
              以招聘方体验
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={logout}
              className="text-sm text-ink-soft hover:text-accent transition underline-offset-4 hover:underline"
            >
              退出登录（返回登录页）
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
