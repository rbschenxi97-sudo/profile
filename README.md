# 个人网页（股权投资经理）——快速说明

目录结构：

- `index.html`：主页框架
- `styles.css`：样式
- `scripts.js`：前端脚本，负责加载 `content/` 下的 Markdown
- `content/`：存放 `about.md`、`thoughts/`、`reports/` 等内容
- `agents/`：两个 agent 的角色说明模板

如何使用：
1. 本项目为静态站点，直接用浏览器打开 `index.html` 即可预览（可用 VS Code Live Server 插件更方便）。
2. 修改或新增内容：在 `content/` 目录新增或编辑 `.md` 文件（以 UTF-8 编写），脚本会在加载时呈现。
3. 若需更复杂的 Markdown 渲染或搜索/分页，可以使用静态站点生成器（如 Hugo、Jekyll）或加入一个小型 Node/Python 构建脚本。

代理工作流建议：
- 步骤一（内容编辑员）：将草稿粘贴或上传，内容编辑员与用户反复对话，精炼出最终文本与元数据（标题、日期、标签）。
- 步骤二（网页制作员）：将最终文本排版为网页片段并加入到 `content/`，如需可视化图表，制作员提供 SVG 或图片占位符并说明数据来源。

下一步（可选）：
- 我可以为你搭建一个更完善的更新流程（Web UI 或 Git-based 工作流），并帮助部署到 GitHub Pages 或其他静态托管服务。是否继续？

部署到 GitHub Pages （指南）

1. 在 GitHub 上创建一个新的仓库（例如 `my-personal-site`）。
2. 在本地将当前目录初始化为 Git 仓库并提交：

```bash
cd personal_site
git init
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin https://github.com/<your-username>/my-personal-site.git
git push -u origin main
```

3. 工作流文件位于 `.github/workflows/deploy.yml`，当你把代码推送到 `main`（或 `master`）分支时，Actions 会自动把 `personal_site` 目录下的静态文件发布到 GitHub Pages。部署过程首次执行可能需要几分钟。

4. 部署验证：访问仓库 Settings → Pages 页面查看发布状态，或等待 Actions 运行完在仓库的 Actions 标签页查看日志。

注意：如果你希望自定义域名或使用 HTTPS，请参考 GitHub Pages 的官方文档。

