# 知行工坊 · 校园简历展示站

知行工坊的校园中文简历展示站，无依赖纯静态页面。包含 6 套中文模板、模板详情弹窗和微信咨询入口；微信名片二维码已接入，点击任意「微信咨询 / 扫码加微信」按钮即可打开。

## 本地预览

在 `C:\codex\workspace\2026-10-17\new-chat` 目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory outputs/resume-studio
```

然后打开 `http://127.0.0.1:4173/`。

## 公网地址

https://xzxnb666nb.github.io/campus-resume-studio/

## 日常维护

1. 微信二维码：直接替换 `assets/wechat-qr.png`，建议使用正方形、四周留白的二维码图片。
2. 服务价格：当前展示服务类型，未写具体金额；如需写价格，在 `index.html` 的服务卡片中补充。
3. 文案与品牌名：品牌已统一为「知行工坊」。
4. 模板与样例内容：样例中的人物、电话、学校、经历均为虚构，正式展示前可继续替换。

## 文件

- `index.html`：页面结构、SEO 与分享信息
- `styles.css`：布局、字体、颜色和响应式样式
- `app.js`：模板弹窗、微信咨询弹窗和二维码配置
- `assets/templates/`：6 套中文模板预览图
- `assets/wechat-qr.png`：微信名片二维码
- `assets/share-card.jpg`：微信分享链接预览图

站点是纯静态文件，可直接部署到 GitHub Pages、Vercel、Netlify 或任意静态服务器。
