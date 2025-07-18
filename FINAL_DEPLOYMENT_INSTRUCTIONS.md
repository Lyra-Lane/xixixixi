# 🚨 紧急修复：GitHub Pages显示README而非网站

## 问题分析
您看到README页面说明：
1. GitHub Pages配置错误，或
2. 网站文件没有正确上传到仓库根目录

## 立即解决方案

### 步骤1：检查GitHub Pages设置
1. 进入您的GitHub仓库
2. 点击 **Settings** 标签页
3. 向下滚动到 **Pages** 部分
4. 确认设置：
   - **Source**: "Deploy from a branch"
   - **Branch**: "main" 或 "master"
   - **Folder**: "/ (root)"
5. 点击 **Save**

### 步骤2：确认文件结构
您的仓库根目录必须包含：
```
/
├── index.html          ← 这个是关键！
├── 404.html
├── .nojekyll
├── ManYao_Li_Resume.pdf
└── assets/
    ├── index-CF56sCoZ.css
    ├── index-rN7p012H.js
    └── 证件照（长发）_1752817158476-BP8mR7sl.jpg
```

### 步骤3：删除README文件
如果仓库中有 `README.md` 文件，请删除它。GitHub会优先显示README而不是index.html。

### 步骤4：强制重新部署
1. 在任意文件中做小修改（比如在index.html末尾加个空格）
2. 提交更改
3. 等待3-5分钟

### 步骤5：访问正确的URL
确保访问：`https://您的用户名.github.io/仓库名`
而不是：`https://github.com/您的用户名/仓库名`

## 🎯 关键提醒
- **必须有index.html在根目录**
- **删除README.md文件**
- **确认Pages设置正确**

如果还是显示README，说明index.html文件不在正确位置或者Pages设置有误。