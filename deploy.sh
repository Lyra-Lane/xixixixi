#!/bin/bash

# GitHub Pages 部署脚本
echo "🚀 准备 GitHub Pages 部署文件..."

# 构建项目
echo "📦 构建项目..."
npm run build

# 创建部署目录
echo "📁 创建部署目录..."
rm -rf deploy-files
mkdir -p deploy-files

# 复制构建文件
echo "📋 复制文件到部署目录..."
cp -r dist/public/* deploy-files/

# 创建 CNAME 文件（如果需要自定义域名）
# echo "yourdomain.com" > deploy-files/CNAME

echo "✅ 部署文件准备完成！"
echo ""
echo "📍 部署文件位置: ./deploy-files/"
echo "📂 文件列表:"
ls -la deploy-files/
echo ""
echo "🌐 接下来的步骤:"
echo "1. 将 deploy-files/ 目录中的所有文件上传到 GitHub 仓库"
echo "2. 在 GitHub 仓库设置中启用 Pages (Settings > Pages > Source: Deploy from a branch)"
echo "3. 选择 main 分支作为源"
echo ""
echo "🔗 部署后的访问地址:"
echo "https://username.github.io/repository-name"