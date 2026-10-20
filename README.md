# 高艺文 · 个人作品集（my-portfolio）

一个深色赛博霓虹风格的个人作品集网站。外观设计参考 [ikun666.asia](https://www.ikun666.asia/)，
内容结构吸收了 [imoyee.cn](https://imoyee.cn/) 的「递进」叙事（进阶之路、来路时间线、编号项目）。

## 技术栈

- **React 18** + **TypeScript**
- **Vite 5**（开发 / 构建）
- **Tailwind CSS 3**（自定义霓虹主题）
- 纯组件实现，无额外运行时依赖

## 目录结构

```
my-portfolio/
├── index.html
├── package.json
├── vite.config.ts            # 端口 5180(dev) / 5181(preview)，与既有项目错峰
├── tailwind.config.js        # 霓虹三色 + 字体令牌
├── postcss.config.js
├── tsconfig*.json
└── src/
    ├── main.tsx              # 入口
    ├── App.tsx               # 组装各区块
    ├── index.css             # 全局样式 + 自定义类（科技网格/发光/滚动揭示）
    ├── data.ts               # ⭐ 全站文案与数据，改内容只改这里
    ├── hooks/
    │   └── useReveal.ts       # 滚动揭示动效
    └── components/
        ├── Navbar.tsx        # 固定导航 + 移动端菜单 + 滚动高亮(scrollspy)
        ├── Hero.tsx          # 首屏
        ├── About.tsx         # 关于我（步骤 01）
        ├── Progression.tsx   # 进阶之路（递进，步骤 02）
        ├── Skills.tsx        # 技能进度条 + 标签云（步骤 03）
        ├── Timeline.tsx      # 来路 · 技术成长时间线（递进，步骤 04）
        ├── Experience.tsx    # 工作经历 · 职业履历（步骤 05）
        ├── Projects.tsx      # 项目展示（01–05 编号 + emoji 图标，步骤 06）
        ├── Contact.tsx       # 联系我（步骤 06）
        ├── Login.tsx         # 多角色演示登录页（admin / recruiter / visitor）
        ├── RoleZone.tsx      # 角色专属视图（按登录角色渲染不同内容，演示 RBAC）
        ├── Footer.tsx        # 页脚
        ├── ScrollProgress.tsx# 顶部滚动进度条（强化"推进感"）
        ├── BackToTop.tsx     # 回到顶部悬浮按钮
        ├── Reveal.tsx        # 可复用错位揭示组件（方向 + 延迟）
        └── SectionHeading.tsx# 共享区块标题（含步骤编号）
```

## 本地运行

```bash
npm install      # 安装依赖
npm run dev      # 开发预览，默认 http://localhost:5180
npm run build    # 生产构建，产物在 dist/
npm run preview  # 预览构建产物，默认 http://localhost:5181
```

## 部署

`npm run build` 后，把 `dist/` 目录整体上传到任意静态托管（GitHub Pages /
Vercel / Netlify / 对象存储 + CDN）即可。本仓库的「发布为应用」能力也可一键上线。

## ⚠️ 发布前请替换的占位内容

所有文案集中在 `src/data.ts`：

| 字段 | 位置 | 说明 |
|------|------|------|
| `profile.name` | data.ts | 姓名（当前为「高艺文」） |
| `profile.role` / `tagline` / `intro` | data.ts | 头衔、标语、简介 |
| `profile.stats` | data.ts | 顶部数据指标（当前 2+ 年工作经验 / 7+ 项目 / 100% 满意度） |
| `progression` | data.ts | 进阶之路四阶段文案 |
| `skills` / `techTags` | data.ts | 技能百分比与标签 |
| `timeline` | data.ts | 来路时间线（可换成真实履历年份） |
| `experience` | data.ts | 工作经历（已填真实履历：樱之翼（上海）智能科技有限公司 · AI 开发工程师 · 2024.10—2026.09） |
| `projects[].link` | data.ts | 项目 GitHub 仓库（已接入真实仓库） |
| `projects[].demo` | data.ts | 线上演示地址（**留空则不显示「进入演示」，避免死链**） |
| `contact.email` / `phone` / `github` | data.ts | 联系方式（已填真实账号） |

## 项目展示与截图

项目区为两种卡片：

- **精选（前 3 个）**：左侧信息 + 右侧产品预览的大幅案例卡。
- **更多（其余）**：双列竖向卡片，截图在下，底部「标签在左 / 按钮在右」。

卡片按钮按数据自动切换：填了 `demo` → 主按钮为「进入演示 ↗」+ 次按钮「开源代码」；
未填 → 只显示「开源代码」并在视觉上作为主按钮，不会出现点开 404 的情况。

项目卡支持可选 `image` 字段：有图渲染真实截图（hover 微缩放），无图回退 emoji + 拉丁水印。
把截图放进 `public/projects/`，在 `data.ts` 里写 `/projects/<文件名>.jpg` 即可
（建议宽 1400px、JPEG q84，单张 100KB 左右）。

当前已接入：`guanlan.jpg`、`wanxiang.jpg`、`qiheng.jpg`、`pengzhi.jpg`、`qingheng.jpg`（观澜 / 万象 / 契衡 / 鹏至智库 / 清衡五张预览截图）。

## 设计说明

- **配色**：白色主题——页面底色 `#f5f6fa`（浅灰白），卡片/面板 `#ffffff`（纯白）；主文字 `#1c1c2e`（深蓝近黑）；霓虹三色保留作点缀：青 `#00f0ff` / 紫 `#7000ff` / 品红 `#ff00aa`（用于渐变标题、按钮、描边）。
- **字体**：标题 Space Grotesk，正文 DM Sans（Google Fonts，断网自动回退系统字体）。
- **动效**：浮动光斑、滚动揭示（IntersectionObserver）、进度条进入视口增长、卡片悬停上浮发光。
- **推进感**：顶部滚动进度条、导航滚动高亮（scrollspy，当前区块带霓虹指示线）、区块步骤编号 01→06、回到顶部按钮；来路时间线随滚动"生长"主线、卡片错位滑入（左右交替 + 错峰延迟）。
- **响应式**：移动端导航折叠为汉堡菜单，栅格自动降列。
- **精致细节**：背景柔光晕染 + 极淡颗粒质感、卡片顶部高光、按钮悬停微抬升/点击回弹、进度条霓虹辉光、区块细分隔线、统一键盘聚焦描边。
- **贵气动效**：大标题与页脚署名渐变流动（animate-gradient）、项目卡 hover 斜向扫光（sheen）。

## 多角色演示登录

作品集内置一个纯前端（无后端）的多角色演示登录，用于展示 RBAC 能力：

- 打开站点先进入登录页，提供三种演示账号**一键体验**，也支持手动输入账号密码登录。
- 登录态持久化到 `localStorage`，刷新后保持。

| 角色 | 账号 | 密码 | 专属内容 |
|------|------|------|----------|
| 管理员 | `admin` | `admin123` | 内部运营视图：在线服务、部署次数、项目维护备注 |
| 招聘方 | `recruiter` | `recruit123` | 招聘方专属：求职意向、期望城市、到岗时间、薪资期望、可提供的材料 |
| 访客 | `guest` | `guest123` | 公开浏览，可一键切换为管理员 / 招聘方 |

演示账号与角色定义在 `src/data.ts`（`demoAccounts` / `roleLabels`），登录逻辑在 `src/auth.tsx`，
登录页 `src/components/Login.tsx`，角色专属内容 `src/components/RoleZone.tsx`。
