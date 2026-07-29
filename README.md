<div align="center">

  <br />
  <div style="background: linear-gradient(135deg, #18181b 0%, #27272a 100%); width: 88px; height: 88px; border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 16px 36px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1);">
    <h1 style="color: #a855f7; font-size: 44px; margin: 0; padding: 0; line-height: 1;">⚡</h1>
  </div>

  <h1 align="center" style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; margin-top: 16px; margin-bottom: 8px;">Hexo Theme Chirpy Classic</h1>

  <p align="center">
    <b>简约、高颜值且功能丰富的 Hexo 极简技术博客主题</b>
    <br />
    <sub><i>Zero-CLI Out-of-the-Box Architecture with 67 Awesome Design Skills Presets, Multi-Language Schema & Interactive Mermaid Scaling</i></sub>
  </p>

  <p align="center">
    <a href="https://github.com/base404/hexo-theme-chirpy/releases"><img src="https://img.shields.io/badge/version-2.2.0-7952b3.svg?style=for-the-badge&logo=git&logoColor=white" alt="Version"></a>
    <a href="https://hexo.io/"><img src="https://img.shields.io/badge/Hexo-%3E%3D%205.0.0-E0234E.svg?style=for-the-badge&logo=hexo&logoColor=white" alt="Hexo"></a>
    <a href="https://github.com/bergside/awesome-design-skills"><img src="https://img.shields.io/badge/Design%20Skills-67%20Presets-9333EA.style=for-the-badge&logo=artstation&logoColor=white" alt="Awesome Design Skills"></a>
    <a href="https://github.com/base404/hexo-cms"><img src="https://img.shields.io/badge/Hexo%20CMS-Schema%20i18n-10B981.svg?style=for-the-badge" alt="Schema i18n"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License"></a>
  </p>

  <br />

  <img src="./screenshot.png" alt="Hexo Theme Chirpy Classic Preview" width="100%" style="border-radius: 12px; box-shadow: 0 16px 40px rgba(0,0,0,0.25);" />

  <br /><br />

  <p align="center">
    <a href="#-核心特性-key-features"><b>核心特性</b></a> &nbsp;•&nbsp;
    <a href="#-快速开始-quick-start"><b>快速开始</b></a> &nbsp;•&nbsp;
    <a href="#-全量-67-种视觉预设库-design-presets"><b>67 种视觉预设</b></a> &nbsp;•&nbsp;
    <a href="#-可视化配置与多语言-schema-i18n"><b>Schema 多语言</b></a> &nbsp;•&nbsp;
    <a href="#-开源许可与致谢-credits"><b>开源致谢</b></a>
  </p>

  <br />

</div>

---

> [!NOTE]
> **🎨 设计致谢与借鉴声明 (Credits & Inspiration)**  
> 本主题的整体版式排版、视觉美学风格与 HSL 配色方案深度借鉴汲取自 **[AirboZH / halo-theme-chirpy](https://github.com/airbozh/halo-theme-chirpy)**。在此对原作者 [AirboZH](https://www.airbozh.cn/) 为前端开源社区贡献的优秀排版设计致以诚挚的感谢！  
> 同时感谢 **[bergside / awesome-design-skills](https://github.com/bergside/awesome-design-skills)** 为本主题提供丰富全面的 67 种 Design System 预设与 Agent Skills。

---

## 🌟 核心特性 (Key Features)

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🎨 全量内置 67 种 Design System 视觉预设</h3>
      <ul>
        <li><b>涵盖全系设计风格</b>：集成了 <a href="https://github.com/bergside/awesome-design-skills">awesome-design-skills</a> 库中所有 67 种设计系统（如 <code>bento</code>, <code>brutalism</code>, <code>glassmorphism</code>, <code>matrix</code>, <code>neon</code>, <code>paper</code>, <code>shadcn</code>, <code>vintage</code> 等）。</li>
        <li><b>一键动态切换</b>：在 <code>_config.yml</code> 中配置 <code>style_preset: "bento"</code>，或在 <a href="https://github.com/base404/hexo-cms">Hexo CMS</a> 可视化面板中即时无缝预览切换。</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🤖 内置 Agentic Skills 规范 (.agents/skills/)</h3>
      <ul>
        <li><b>AI Agent 极速驱动</b>：自带 <code>.agents/skills/</code> 完整设计规范目录。AI 编程助手（如 Antigravity, Claude Code, Cursor）可直接识别并遵从规范进行二次开发。</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🔍 全站标题 JSON 搜索 (Search Scheme A)</h3>
      <ul>
        <li><b>全站跨页标题搜索</b>：通过编译期自动输出轻量 <code>search.json</code>，支持实时输入关键字快速弹出全站文章下拉搜索卡片。</li>
        <li><b>只匹配标题 & 内存级性能</b>：移除了无用的全文字符串载入，显著降低单页 HTML 体积。</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>📊 交互式 Mermaid 图表 & 全屏大图拖拽平移</h3>
      <ul>
        <li><b>滚轮缩放与鼠标拖拽 (Pan & Zoom)</b>：Mermaid 流程图全屏弹窗支持鼠标按住自由拖拽平移、滚轮 <code>0.2x ~ 5.0x</code> 无级缩放。</li>
        <li><b>悬浮工具栏</b>：提供放大、缩小、100% 重置复位与 Esc 快捷键关闭。</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🌓 智能日夜间模式 (18:00 ~ 06:00 时间段)</h3>
      <ul>
        <li><b>时间段自动判别与防闪烁</b>：Head 内联脚本在 DOM 渲染前判定 local 记录与当地时间（18 点至次日早 6 点默认夜间模式）。</li>
        <li><b>全站色彩同步</b>：评论区（Waline 暗黑模式）与文章正文彻底自动同步。</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🎛️ Hexo Theme Schema 协议与多语言 (i18n)</h3>
      <ul>
        <li><b>双语 Schema 支持</b>：提供 <code>theme-schema.yaml</code> (English) 与 <code>theme-schema_汉语.yaml</code> (汉语)，在 CMS 面板中动态切换语言。</li>
        <li><b>文章底部导航 (Prev / Next)</b>：原生静态化生成【上一篇 / 下一篇】高颜值跳转卡片。</li>
      </ul>
    </td>
  </tr>
</table>

<br />

## 🚀 快速开始 (Quick Start)

### 📋 开发与运行环境 (Prerequisites)

| 环境 / 工具 | 开发测试验证版本 | 推荐要求 |
| :--- | :--- | :--- |
| 🟢 **Node.js** | `v24.16.0` | `>= 18.0.0` (LTS) |
| 📦 **npm** | `v12.0.1` | `>= 9.0.0` |
| 💻 **操作系统 (OS)** | `Windows 11 (x64)` | Windows / macOS / Linux |
| 🔧 **Git** | `v2.55.0` | `>= 2.20.0` |
| ⚡ **Hexo** | `>= 5.0.0` | 推荐 `Hexo 7.x` |

<br />

### 1. 安装主题

进入 Hexo 博客根目录的 `themes/` 文件夹中克隆本仓库：

```bash
cd themes
git clone https://github.com/base404/hexo-theme-chirpy.git chirpy
```

### 2. 启用主题与预设

修改 Hexo 博客根目录下的 `_config.yml`：

```yaml
theme: chirpy
style_preset: "bento" # 可选: bento, matrix, brutalism, glassmorphism, paper, shadcn 等 67 种预设
```

### 3. 本地运行

启动 Hexo 服务或通过 Hexo CMS 可视化一键预览：

```bash
npx hexo s
```

> **🎉 开箱即用！** 得益于 Zero-CLI 零配置架构，无需运行额外的页面生成指令，分类、标签、关于、友链及 Mermaid 绘图直接渲染使用。

<br />

## 🎛️ 可视化配置与多语言 Schema (Schema i18n)

在 [Hexo CMS](https://github.com/base404/hexo-cms) 管理后台中：

1. 进入 **“主题市场 (Theme Market)”** 选项卡；
2. 点击 **Chirpy Classic** 主题卡片上的 **【配置】** 按钮；
3. 在弹窗右上角可下拉切换 **`[ 汉语 ]`** 或 **`[ English (Default) ]`** 对应的界面 Schema 语言；
4. 轻松完成以下配置：
   - 从 67 种预设风格中可视化选择；
   - 技能胶囊标签 (`about.skills`) 动态增删；
   - 友情链接卡片 (`friends`) 对象动态增删与编辑；
   - 评论系统参数（Waline / Giscus / Disqus）与分页条数控制。

<br />

## 📁 目录结构 (Directory Structure)

```text
hexo-theme-chirpy/
├── .agents/skills/           # 67 种 Design System 预设与 AI Skills 规则
├── layout/                   # EJS 模板 (index, post, page, archive, category, tag, _partial)
├── scripts/                  # Hexo 插件脚本
│   ├── chirpy_auto_init.js   # 零配置自动路由与全局过滤
│   ├── search_generator.js   # 全站标题 JSON 搜索索引生成器
│   └── pagination_config.js  # 动态分页配置拦截注入器
├── source/
│   ├── css/main.css          # 主排版与 67 种预设 CSS 变量系统
│   └── js/main.js            # 昼夜模式、Mermaid 拖拽平移/滚轮缩放、JSON 下拉搜索
├── theme-schema.yaml         # English 默认可视化 Schema 配置文件
├── theme-schema_汉语.yaml     # 汉语可视化 Schema 配置文件
├── _config.yml               # 主题默认配置文件 (默认全英文规范)
├── screenshot.png            # 主题全景预览截图
└── README.md                 # 项目说明
```

<br />

## 📜 开源许可与致谢 (License & Credits)

- **Layout & Design Credit**: Inspired by [halo-theme-chirpy](https://github.com/airbozh/halo-theme-chirpy) created by [AirboZH](https://github.com/airbozh).
- **Design System Skills Credit**: Integrated from [awesome-design-skills](https://github.com/bergside/awesome-design-skills) created by [bergside](https://github.com/bergside).
- **License**: Released under the [MIT License](./LICENSE).
