# 基于 VitePress 构建的文档网站

欢迎来到我的个人技术文档仓库[HyperJetCode](https://jacksonhe04.github.io)，该网站使用 VitePress 构建。这个网站作为我的在线作品集，展示了我的工作、项目和兴趣。

## 📂 项目结构

仓库结构如下：

```
.
├── README.md           # 本文件
├── docs/               # 网站的主要内容
├── package.json        # 项目依赖和脚本
├── package-lock.json   # 依赖锁定文件
├── pnpm-lock.yaml      # pnpm 用户的锁定文件
├── node_modules/       # 安装的依赖（自动生成）
```

## 🚀 入门指南

### 前置条件

确保你的系统已安装以下软件：
- Node.js (推荐版本16或更高)
- npm 或 pnpm (首选包管理器)

### 安装

克隆仓库并安装依赖：

```bash
# 克隆仓库
git clone https://github.com/jacksonhe04/jacksonhe04.github.io.git

# 安装依赖（使用pnpm）
pnpm install
```

### 开发

要启动本地开发服务器：

```bash
pnpm run docs:dev
```

这将在 http://localhost:5173 上本地运行网站。对 `docs` 目录中的文件进行更改会自动更新网站。

### 构建

要生成用于生产的静态网站：

```bash
pnpm run docs:build
```

构建后的网站将位于 `docs/.vitepress/dist` 目录中。

### 部署

你可以使用 GitHub Pages 部署网站。

本项目使用 GitHub Actions 自动化构建和部署过程。具体配置文件位于 [deploy.yml](.github/workflows/deploy.yml)。

这意味着您无需手动执行构建步骤，只需将更改推送到 GitHub 仓库，GitHub Actions 将自动构建和部署网站。

## 🌟 特性

- 易于编辑的 Markdown 内容
- 由 VitePress 提供支持，实现快速构建和平滑导航
- 响应式和轻量级设计

## 🤝 贡献

请通过以下方式贡献：

- 为错误或建议打开问题
- 提交增强功能的拉取请求

请遵循标准的 GitHub 实践并提交文档良好的代码。

## 📄 许可证

本项目采用 MIT 许可证。

## 📬 联系方式

对于任何问题或反馈，请通过 GitHub Issues 或[电子邮件](JacksonHe04@outlook.com)联系我。