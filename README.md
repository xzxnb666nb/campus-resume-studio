# 一页简历工作室 · 初始展示站

这是一个无依赖的静态站点，模板展示、详情弹窗和微信咨询入口已经完成。

## 本地预览

在 `C:\codex\workspace\2026-10-17\new-chat` 目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory outputs/resume-studio
```

然后打开 `http://127.0.0.1:4173/`。

## 上线前需要替换

1. 微信二维码：把二维码图片放到 `assets/wechat-qr.png`，然后在 `app.js` 里设置：

```js
const SITE_CONFIG = {
  wechatQr: "assets/wechat-qr.png",
  wechatId: "你的微信号",
};
```

2. 服务价格：目前在站点中显示的是服务类型，没有写具体金额；如需写价格，在 `index.html` 的服务卡片中补充。
3. 文案与品牌名：当前工作名为“一页简历工作室”，可以全局替换。
4. 模板与样例内容：样例中的人物、电话、学校、经历均为虚构，正式展示前可继续替换。

## 文件

- `index.html`：页面结构
- `styles.css`：布局、字体、颜色和响应式样式
- `app.js`：模板弹窗、微信咨询弹窗和配置
- `assets/templates/`：6 套中文模板预览图

站点是纯静态文件，可直接部署到 GitHub Pages、Vercel、Netlify 或任意静态服务器。
