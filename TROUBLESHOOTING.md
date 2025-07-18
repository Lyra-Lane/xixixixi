# 🔧 GitHub Pages 部署故障排查

## 常见错误及解决方案

### 错误 1: Git exit code 128
**错误信息**: `The process '/usr/bin/git' failed with exit code 128`

**解决方案**:
1. 确保GitHub Pages设置正确：
   - Settings > Pages > Source: "GitHub Actions"
2. 检查仓库权限：
   - Settings > Actions > General
   - "Workflow permissions" 选择 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"
3. 重新推送代码触发部署

### 错误 2: 404 Page Not Found
**可能原因**: 仓库是私有的或者Pages未启用

**解决方案**:
1. 确保仓库是公开的（Public）
2. 启用GitHub Pages：Settings > Pages
3. 等待几分钟让设置生效

### 错误 3: 样式丢失或路径错误
**症状**: 网站显示但样式缺失

**解决方案**:
1. 检查是否所有文件都已上传，特别是：
   - `assets/` 文件夹
   - `.nojekyll` 文件
2. 确认路径设置正确

### 错误 4: 聊天机器人页面无法访问
**症状**: `/chatbot` 路径返回404

**解决方案**:
1. 确保 `404.html` 文件已上传
2. 检查 `.nojekyll` 文件存在
3. 等待几分钟让更改生效

## 🎯 推荐部署方式

如果GitHub Actions持续出现问题，建议使用**手动上传方式**：

1. 使用 `deploy-files/` 目录中的文件
2. 直接上传到GitHub仓库
3. 设置Pages为 "Deploy from a branch" > "main"

这种方式更可靠，避免了Actions权限问题。

## 📞 获取帮助

1. 检查GitHub Actions日志（仓库 > Actions 标签页）
2. 验证所有设置步骤
3. 尝试重新推送代码
4. 如果问题持续，使用手动部署方式