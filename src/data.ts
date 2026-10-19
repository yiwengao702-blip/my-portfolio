// D:/WorkBuddy/2026-10-16-10-34-45/my-portfolio/src/data.ts
// 全站文案与数据集中在此，改内容只动这一个文件即可。
// ⚠️ 占位项（联系方式、项目链接、邮箱）请替换为你自己的真实信息后再发布。

export const profile = {
  name: '高艺文',
  role: '全栈开发者 / AI 应用工程师',
  // 标语：原创一句，落到"开发者 + AI"的身份
  tagline: '让每一行代码，都离产品更近一点。',
  // 首屏简介：短、具体、只讲做过什么，细节留给「关于」区块
  heroLead:
    '不是只会跑 Demo 的工程师：知识库、问数、智能体，从第一行代码到线上值班都自己扛。我觉得 AI 该落到业务里，而不是停在 PPT 上。',
  intro:
    'AI 开发工程师，专注把业务问题做成能跑的产品。近两年主导企业级 RAG 知识库、自然语言问数（NL2SQL）与智能体搜索的落地：后端以 Python + FastAPI + LangGraph 编排工作流，前端用 React / Vue 把能力做成可用的界面。在意的不只是功能上线，还有权限、部署与可维护性。',
  stats: [
    { value: '2+', label: '年工作经验' },
    { value: '7+', label: '项目' },
    { value: '100%', label: '满意度' },
  ],
};

// 进阶之路：吸收 imoyee 的「递进」叙事（从……到……），落到开发者成长弧线
export const progression = [
  {
    index: '01',
    title: '从脚本到系统',
    desc: '早期用零散脚本解决单点问题，如今以 FastAPI + LangGraph 搭出可编排、可观测的工程化系统，把"能跑"升级为"稳跑"。',
  },
  {
    index: '02',
    title: '从规则到智能',
    desc: '把硬编码流程换成 RAG 检索增强与 NL2SQL 语义问数，让系统真正"懂业务"，从查表进化到理解意图。',
  },
  {
    index: '03',
    title: '从工具到产品',
    desc: '为内部能力套上 RBAC、可视化看板与部署流水线，把个人脚本包装成团队可用的平台（万象运营台、清衡）。',
  },
  {
    index: '04',
    title: '从单机到协作',
    desc: '用 Docker 与多服务编排，把本地项目变成可被团队共享、可持续迭代的平台，能力从此可复制。',
  },
];

// 技能：进度条百分比 + 技术标签云。
// ⚠️ 顺序与 techTags 完全一致——两处必须是同一份清单，改一处要同时改另一处。
export const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 70 },
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 82 },
  { name: 'RPA', level: 65 },
  { name: 'Claude Code', level: 80 },
  { name: 'Codex', level: 78 },
  { name: 'FastAPI', level: 85 },
  { name: 'SSE', level: 82 },
  { name: 'MCP', level: 75 },
  { name: 'MinerU', level: 72 },
  { name: 'LangChain', level: 82 },
  { name: 'LangGraph', level: 80 },
  { name: 'Multi-Agent', level: 78 },
  { name: 'Function Calling', level: 78 },
  { name: 'RAG', level: 85 },
  { name: 'Milvus', level: 75 },
  { name: 'MySQL', level: 80 },
  { name: 'Redis', level: 75 },
  { name: 'Docker', level: 70 },
  { name: 'LoRA', level: 65 },
  { name: 'vLLM', level: 65 },
];

export const techTags = [
  'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'RPA', 'Claude Code', 'Codex',
  'FastAPI', 'SSE', 'MCP', 'MinerU', 'LangChain', 'LangGraph', 'Multi-Agent',
  'Function Calling', 'RAG', 'Milvus', 'MySQL', 'Redis', 'Docker', 'LoRA', 'vLLM',
];

// 能力分层：回答"这些技术各自用在哪一层"，与技术标签云互补
export const stackLayers = [
  { layer: '智能层', detail: 'RAG · Multi-Agent · Function Calling · MCP' },
  { layer: '模型层', detail: 'vLLM · LoRA · Claude Code · Codex' },
  { layer: '服务层', detail: 'FastAPI · SSE 流式 · LangChain · LangGraph' },
  { layer: '数据层', detail: 'MySQL · Redis · Milvus 向量检索' },
  { layer: '前端层', detail: 'HTML · CSS · JavaScript · Java' },
  { layer: '交付层', detail: 'Docker · RPA · MinerU 文档解析' },
];

// 来路：技术成长里程碑时间线（从 2024 年起，逐年推进）
export const timeline = [
  {
    year: '2024',
    title: '产品化',
    desc: '以 RBAC + 可视化 + Docker 编排，把内部能力包装为可协作、可部署的平台。',
  },
  {
    year: '2025',
    title: '多模态与发布',
    desc: '接入 SiliconFlow 三模态（诊断 / 生图 / 生视频），把 AI 能力从文字对话扩展到可视内容生产。',
  },
  {
    year: '2026',
    title: '持续打磨',
    desc: '在真实业务场景里迭代万象运营台、鹏至智库与清衡，让能力在实战中闭环。',
  },
];

// 项目：大幅案例卡（左侧信息 + 右侧产品预览），按编号递进排列。
// name 为中文主张名，latin 为拉丁副名（卡面大字旁的小字），subtitle 为一句话定位。
// image 可选：有真实截图则渲染右侧预览，否则回退 emoji + 巨号水印。
export interface Project {
  index: string;
  name: string;
  latin: string;
  subtitle: string;
  year: string;
  status: string;
  icon: string;
  image?: string;
  desc: string;
  tags: string[];
  link: string;
  // 线上演示地址（可选）。填了就会显示「进入演示」主按钮；留空则只显示「开源代码」，不会出现死链。
  demo?: string;
}

export const projects: Project[] = [
  {
    index: '01',
    name: '观澜',
    latin: 'GUANLAN',
    subtitle: '深度智能体搜索',
    year: '2026',
    status: '核心项目',
    icon: '🌊',
    image: '/projects/guanlan.jpg',
    demo: 'http://124.70.67.23:8008',
    desc: '把复杂问题交给会思考的智能体：联网检索、数据库查询、知识库问答、文档生成，一条指令自动编排。深空蓝配金色强调，克制而有层次。',
    tags: ['Vue 3', 'Vite', '多智能体', '联网检索', '文档生成'],
    link: 'https://github.com/yiwengao702-blip/deep_agent_search',
  },
  {
    index: '02',
    name: '万象',
    latin: 'WANXIANG',
    subtitle: '万象运营工作台',
    year: '2026',
    status: '核心项目',
    icon: '🛍️',
    image: '/projects/wanxiang.jpg',
    demo: 'http://124.70.67.23:3100/',
    desc: '把店铺、商品、库存与投放收拢到一张桌面，店铺视图 / 导入中心 / Agent 中心 / 模型配置一屏切换；内建三模态能力（诊断、生图、生视频）。',
    tags: ['Next.js', 'FastAPI', 'Celery', 'PostgreSQL', '三模态'],
    link: 'https://github.com/yiwengao702-blip/ecommerce-operation-assistant',
  },
  {
    index: '03',
    name: '契衡',
    latin: 'QIHENG',
    subtitle: '合同审批审查系统',
    year: '2026',
    status: '已上线',
    icon: '📑',
    image: '/projects/qiheng.jpg?v=20261019',
    demo: 'http://124.70.67.23:18090',
    desc: '合同审查大盘：上传即解析，自动识别风险等级与业务类型，按状态筛选归档；支持拍照识别合同、CSV 导出与逐条审查留痕。',
    tags: ['FastAPI', 'JavaScript', 'RBAC', '文档解析', '风险审查'],
    link: 'https://github.com/yiwengao702-blip/contract-review',
  },
  {
    index: '04',
    name: '鹏至智库',
    latin: 'PENGZHI',
    subtitle: '企业级检索增强知识库',
    year: '2026',
    status: '核心项目',
    icon: '📚',
    image: '/projects/pengzhi.jpg',
    desc: 'LangGraph 双工作流 + FastAPI + SSE 流式；Milvus / Qdrant 向量检索，BGE-M3 嵌入；支持 PDF / Markdown 导入，CPU 亦可运行。',
    demo: 'http://124.70.67.23:8100',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Milvus', 'BGE-M3'],
    link: 'https://github.com/yiwengao702-blip/pengzhi-zhiku',
  },
  {
    index: '05',
    name: '清衡',
    latin: 'QINGHENG',
    subtitle: '企业舆情分析平台',
    year: '2026',
    status: '已上线',
    icon: '📡',
    image: '/projects/qingheng.jpg',
    desc: '面向品牌与公共事件的舆情监测流：支持按主题 / 时间 / 情感 / 风险等级多维筛选，A / B / C 风险分级与情感判定；三角色 RBAC + Token 鉴权，破坏性操作二次确认。',
    demo: 'http://124.70.67.23:8000/',
    tags: ['FastAPI', 'JavaScript', 'RBAC', '可视化'],
    link: 'https://github.com/yiwengao702-blip/qingheng-yuqing',
  },
];

// 联系方式：已填入真实账号；如需更换手机号或改回占位，直接改这里即可。
export const contact = {
  email: 'yiwengao702@gmail.com',
  phone: '15713895583',
  wechat: '请替换为你的微信号', // ← 换成你的真实微信号
  github: 'github.com/yiwengao702-blip',
  githubUrl: 'https://github.com/yiwengao702-blip',
  note: '我通常在 24 小时内回复消息。如有紧急事项，请直接电话或邮件联系。',
};

// 工作经历：真实履历，只保留一段；period 为时间段。
export const experience = [
  {
    period: '2024.10 — 2026.09',
    role: 'AI 开发工程师',
    company: '樱之翼（上海）智能科技有限公司',
    desc: '负责企业级 AI 应用研发：RAG 知识库、NL2SQL 数据问数、智能体检索与电商运营平台；以 Python + FastAPI + LangGraph 搭建服务端与工作流，配合 React / Vue 完成前端界面与可视化。',
    tags: ['Python', 'FastAPI', 'LangGraph', 'RAG', 'React'],
  },
];
// 导航锚点（与各 section 的 id 对应）
export const navLinks = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '进阶', href: '#progression' },
  { label: '技能', href: '#skills' },
  { label: '经历', href: '#timeline' },
  { label: '工作', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];
