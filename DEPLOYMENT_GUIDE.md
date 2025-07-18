# GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建GitHub仓库
1. 在GitHub上创建新仓库（建议命名为 `portfolio` 或 `username.github.io`）
2. 将此项目代码上传到仓库

### 2. 配置GitHub Pages
1. 进入仓库的 **Settings** > **Pages**
2. 在 **Source** 部分选择 **"GitHub Actions"**
3. 保存设置

### 3. 自动部署
- 代码推送到 `main` 分支时会自动触发部署
- GitHub Actions 会自动构建并部署到 GitHub Pages
- 部署完成后，网站将在 `https://username.github.io/repo-name` 可访问

## 🔧 已准备的文件

✅ **构建文件** (`dist/public/`)
- 所有静态资源已优化
- 包含SPA路由支持
- 移动端和桌面端适配

✅ **GitHub Actions** (`.github/workflows/deploy.yml`)
- 自动构建和部署流程
- Node.js 20环境
- 错误处理和清理

✅ **SPA支持**
- `.nojekyll` 文件（禁用Jekyll）
- `404.html` 处理客户端路由
- 路径重定向脚本

## 🌐 访问地址

部署成功后，您的网站将在以下地址可访问：
- `https://username.github.io/repo-name`
- 如果仓库名为 `username.github.io`，则为 `https://username.github.io`

## 📱 功能确认

部署后请检查：
- ✅ 主页正常显示
- ✅ 中英文切换功能
- ✅ 聊天机器人页面（`/chatbot`）
- ✅ 响应式设计
- ✅ 浮动聊天按钮
- ✅ 所有动画效果

## 🔍 故障排查

如果部署失败：
1. 检查 GitHub Actions 日志
2. 确认 `main` 分支有最新代码
3. 验证 Pages 设置为 "GitHub Actions"
4. 确保仓库是公开的（私有仓库需要付费计划）

## 📞 联系信息

如有部署问题，请联系：
- Email: manyaoli@berkeley.edu
- 检查 GitHub Actions 运行状态