<div align="center">

# 🚀 Hexo Theme Chirpy Classic `v2.0`

> 简约、高颜值且功能丰富的 Hexo 极简技术博客主题。采用 **Zero-CLI 零配置开箱即用架构**，内置 **Hexo Theme Schema 协议**，支持 Hexo CMS 可视化配置、暗黑模式切换、4 种磨砂玻璃与赛博霓虹视觉预设、Mermaid 架构绘图、TOC 目录及无损全卡片交互。

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?style=flat-square)](https://github.com/base404/hexo-theme-chirpy/releases/tag/v2.0)
[![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%205.0.0-ff007f.svg?style=flat-square)](https://hexo.io/)
[![Zero-CLI](https://img.shields.io/badge/Zero--CLI-Zero%20Config-emerald.svg?style=flat-square)](#-zero-cli-零配置开箱即用)
[![License](https://img.shields.io/badge/license-MIT-purple.svg?style=flat-square)](./LICENSE)

<br />

![Hexo Theme Chirpy Classic Preview](./screenshot.png)

</div>

---

> [!NOTE]
> **🎨 设计致谢与借鉴声明 (Credits & Inspiration)**  
> 本主题的整体版式排版、视觉美学风格与 HSL 配色方案深度借鉴汲取自 **[AirboZH / halo-theme-chirpy](https://github.com/airbozh/halo-theme-chirpy)**。在此对原作者 [AirboZH](https://www.airbozh.cn/) 为前端开源社区贡献的优秀排版设计致以诚挚的感谢！

---

## 🌟 核心特性 (Features)

- ⚡ **Zero-CLI 零配置开箱即用 (`v2.0`)**
  - **自动 Mermaid 排除**：无需修改根目录 `_config.yml`，主题自动处理代码高亮转义；
  - **自动虚拟路由生成**：无需运行 `hexo new page` 手动新建 Markdown 页面，`/categories/`, `/tags/`, `/about/`, `/links/` 开箱即用。
- 🎛️ **Hexo Theme Schema 标准驱动**
  - 无缝兼容 [Hexo CMS](https://github.com/base404/hexo-cms) 可视化编辑器；
  - 动态可视化配置个人资料、技能胶囊标签（Tag Pills）与友情链接卡片。
- 🎨 **4 种现代视觉配色预设 (Presets)**
  - `chirpy` — **Chirpy Classic**（经典暗极灰 + 紫禁青）
  - `nordic` — **Nordic Minimal**（北欧极简极地蓝）
  - `cyberpunk` — **Cyberpunk Neon**（赛博霓虹暗黑风）
  - `glassmorphism` — **Glassmorphism**（磨砂玻璃质感与极光动感）
- 🌓 **全站暗黑 / 明亮模式 (Dark / Light Mode)**
  - 支持跟随系统配色偏好，支持平滑过渡动画与本地状态持久化。
- 📊 **Mermaid.js 架构绘图增强**
  - 内置流程图、时序图、甘特图等动态渲染，支持放大、缩小、复位与全屏全屏浏览。
- 📖 **极致阅读沉浸体验**
  - 右侧悬浮层次化 TOC 目录（随滚动实时高亮当前标题）；
  - 顶栏动态阅读进度条与代码块一键快捷复制；
  - 首页无损全卡片点击区域跳转；
  - 支持 Waline / Giscus / Disqus 无缝嵌入。

---

## 🚀 快速开始 (Quick Start)

### 1. 下载主题

进入 Hexo 博客根目录的 `themes/` 文件夹中克隆本仓库：

```bash
cd themes
git clone https://github.com/base404/hexo-theme-chirpy.git chirpy
```

### 2. 启用主题

修改 Hexo 博客根目录下的 `_config.yml`：

```yaml
theme: chirpy
```

### 3. 运行体验

启动 Hexo 本地服务或通过 Hexo CMS 一键开启预览：

```bash
npx hexo s
```

> **🎉 完成！** 得益于 v2.0 的 Zero-CLI 机制，无需进行任何其他手动设置，所有页面与绘图均可直接访问呈现。

---

## 🎛️ 可视化配置与 Schema (Configuration)

在 [Hexo CMS](https://github.com/base404/hexo-cms) 后台中：
1. 打开 **“主题市场 (Theme Market)”** 页面；
2. 在 **Chirpy Classic** 主题卡片上点击 **【配置 Schema】** 按钮；
3. 您可以在可视化面板中进行如下实时配置：
   - 个人头像 URL 与关于页介绍；
   - 技能胶囊标签 (`about.skills`) 增删；
   - 友情链接卡片 (`friends`) 增删与编辑；
   - 选择外观预设与评论区开关。

所有修改将自动持久化保存至 `_config.chirpy.yml`。

---

## 📜 开源许可与致谢 (License & Credits)

- **Layout & Design Credit**: Inspired by [halo-theme-chirpy](https://github.com/airbozh/halo-theme-chirpy) created by [AirboZH](https://github.com/airbozh).
- **License**: Released under the [MIT License](./LICENSE).
