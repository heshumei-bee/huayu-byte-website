# 华誉字节科技官网 — 项目说明与规则

北京华誉字节科技有限公司官网。中医风格、暖黄色主色调，介绍三大业务：公司（华誉字节科技）、医生 IP 平台（医生界面）、北京劲松中西医结合医院。自适应电脑与手机。

- 公网地址：https://heshumei-bee.github.io/huayu-byte-website/
- GitHub 仓库：https://github.com/heshumei-bee/huayu-byte-website
- 原始基础资料在项目根目录（`新建 DOC 文档.doc`、两个 mp4、门店 jpg），已被 `.gitignore` 排除，不随网站发布

## 文件结构

```
index.html      # 单页官网（首页/公司简介/医生平台/劲松医院/品牌影像/联系我们）
css/style.css   # 设计系统：暖黄鎏金 #C88A2D、米黄背景 #FBF5E8、朱砂红印章 #A63D2F、深棕文字 #4A3421
js/main.js      # 移动菜单、导航高亮、医生卡片横滚、渐入动画、视频懒加载
assets/
  img/          # 门店实景、5 位医生界面截图、医院公众号/挂号界面截图、视频海报
  video/        # interview.mp4（创始人访谈）、brand.mp4（品牌宣传片）
```

## 设计规则（必须遵守）

1. 整体风格：中医风格，暖黄色为主色调（鎏金、米黄、深棕），朱砂红仅作印章/强调点缀
2. 标题用宋体系（STZhongsong/华文中宋/SimSun 本地字体优先，不依赖外网字体 CDN）
3. 所有页面必须自适应电脑和手机（断点 1024px / 768px / 420px），改版后检查横向溢出
4. 新增内容信息必须来自根目录原始资料，不得虚构业务数据

## 部署规则（必须遵守）

1. **本机网络限制**：github.com 网页/HTTPS 推送被封锁；`api.github.com`、SSH（22 端口）、`*.github.io` 可用。不要尝试从 github.com 直接下载文件（会超时）
2. **推送命令**（用仓库级部署密钥，仅限本仓库）：
   ```bash
   GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_huayu -o StrictHostKeyChecking=accept-new" git push
   ```
3. 推送后约 1 分钟 Pages 自动更新，验证：`curl -o /dev/null -w "%{http_code}" https://heshumei-bee.github.io/huayu-byte-website/`
4. 修改前先 `git status` 确认工作区状态；原始资料文件不要提交
