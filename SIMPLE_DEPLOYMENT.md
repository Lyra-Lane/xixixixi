# 🚀 最简单的部署方法

GitHub Actions出现问题时，使用这个最简单的方法：

## 方法：直接上传静态文件

### 1. 下载部署文件
将以下文件从服务器下载到本地：
- `deploy-files/index.html`
- `deploy-files/404.html` 
- `deploy-files/ManYao_Li_Resume.pdf`
- `deploy-files/assets/` 目录下的所有文件

### 2. 创建新的GitHub仓库
1. 访问 GitHub.com
2. 点击 "New repository"
3. 仓库名：`portfolio`
4. 设为 **Public**
5. **不要**添加README、.gitignore或license
6. 创建仓库

### 3. 禁用GitHub Actions
1. 进入仓库 Settings
2. 找到 Actions > General
3. 选择 "Disable actions"
4. 保存设置

### 4. 上传文件
使用GitHub网页界面：
1. 点击 "uploading an existing file"
2. 拖拽所有下载的文件
3. 提交更改

### 5. 启用GitHub Pages
1. Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: "main"
4. Folder: "/ (root)"
5. 保存

### 6. 手动创建.nojekyll文件
1. 在仓库主页点击 "Add file" > "Create new file"
2. 文件名输入：`.nojekyll`
3. 内容留空
4. 提交

等待5分钟，访问：`https://username.github.io/portfolio`

这种方法完全避开了GitHub Actions的问题。