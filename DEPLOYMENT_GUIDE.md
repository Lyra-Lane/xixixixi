# GitHub Pages 部署指南

## 🚀 快速部署（推荐）

### 方法一：直接上传部署文件
1. **运行部署脚本**：`./deploy.sh`
2. **创建GitHub仓库**
3. **上传 `deploy-files/` 目录中的所有文件到仓库根目录**
4. **启用GitHub Pages**：Settings > Pages > Source: Deploy from a branch > main

### 方法二：使用GitHub Actions自动部署
1. **创建GitHub仓库**并上传整个项目
2. **配置GitHub Pages**：Settings > Pages > Source: GitHub Actions
3. **推送代码**到main分支，自动部署将开始

## 📁 部署文件清单

您的 `deploy-files/` 目录应包含：
- ✅ `index.html` - 主页面
- ✅ `404.html` - SPA路由支持
- ✅ `.nojekyll` - 禁用Jekyll
- ✅ `assets/` - CSS、JS、图片文件
- ✅ `ManYao_Li_Resume.pdf` - 简历文件

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