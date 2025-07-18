# 📁 文件上传指南

## 方式1：GitHub网页上传（推荐）

### 步骤：
1. **访问仓库**：https://github.com/lyra-lane/chatbot
2. **清空仓库**：删除所有现有文件
3. **批量上传**：
   - 点击 "Add file" > "Upload files"
   - 拖拽所有文件到上传区域
   - 提交更改

### 需要上传的文件结构：
```
仓库根目录/
├── index.html
├── 404.html
├── .nojekyll
├── ManYao_Li_Resume.pdf
└── assets/
    ├── index-CF56sCoZ.css
    ├── index-rN7p012H.js
    └── 证件照（长发）_1752817158476-BP8mR7sl.jpg
```

## 方式2：使用GitHub Desktop

1. 下载 GitHub Desktop
2. Clone 仓库到本地
3. 复制 deploy-files 中的所有文件
4. Commit 并 Push

## 重要提醒

### 隐藏文件 .nojekyll
如果无法上传 `.nojekyll`，请：
1. 在仓库中点击 "Add file" > "Create new file"
2. 文件名输入：`.nojekyll`
3. 内容留空，直接提交

### 上传顺序建议
1. 先上传 `index.html`、`404.html`、`.nojekyll`
2. 然后上传 `assets` 文件夹中的文件
3. 最后上传 `ManYao_Li_Resume.pdf`

### 验证部署
上传完成后：
1. 等待 3-5 分钟
2. 访问：https://lyra-lane.github.io/chatbot/
3. 检查网站是否正常显示

## 如果需要帮助
告诉我您选择哪种方式，我可以提供更详细的指导。