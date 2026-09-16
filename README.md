# 爪爪沐光宠物洗护

基于 Next.js App Router、React 和 TypeScript 的中文宠物洗护展示站，采用静态导出。

## 环境与安装

需要 Node.js 20.9 或以上版本，推荐 Node.js 24 LTS。依赖版本由 `package-lock.json` 锁定。

```sh
npm ci
```

## 本地开发

```sh
npm run dev
```

打开 http://localhost:3000。首页位于 `app/page.tsx`，业务区块位于 `components`，全局样式位于 `app/globals.css`，图片位于 `public/assets`。

静态内容在构建时渲染；手机导航、门店轮播和滚动动画由客户端组件增强。禁用 JavaScript 时仍可阅读页面内容。轮播支持前后切换、圆点选择、方向键和暂停；悬停、聚焦或页面隐藏时暂停自动播放，减少动态效果偏好下默认暂停。

## 检查与构建

```sh
npm run typecheck
npm run lint
npm run build
```

构建将导出 `dist/index.html`、`dist/assets` 和 `dist/_next` 等静态文件。`dist` 为自动生成的产物，不作为页面源码维护，也不提交到 Git。

浏览器回归检查（先构建，再运行）：

```sh
npx playwright install chromium
npm run test:e2e
```

测试会启动静态预览服务，覆盖三种屏幕宽度、静态资源、菜单、轮播、减少动态效果和禁用 JavaScript 的情况。也可以设置 `PLAYWRIGHT_CHANNEL=chrome` 使用已安装的 Chrome。

## 静态预览与部署

```sh
npm run build
npm run preview
```

打开 http://localhost:3000，通过 HTTP 服务预览，不要直接双击 HTML 文件。静态导出不使用 `next start`。

现有 `.openai/hosting.json` 继续指向 `dist`；发布前先完成生产构建，再将完整 `dist` 目录交给静态托管服务。工程改造不会自动发布网站。

页面保留原有锚点、电话、短信和地图导航链接。预约仍通过电话和短信完成；没有登录、数据库或预约 API。
