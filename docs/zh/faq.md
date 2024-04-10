---
sidebar: auto

---

# 问题解答

## 为什么我在网页的主页“社交”部分找不到消息或通话选项？

Google Play商店中不允许该应用使用短信和通话权限。您可以在F-droid和GitHub的版本中访问这些功能。

## 使用HTTPS将我的手机连接到电脑时，浏览器显示警告：“您的连接不是私密的。攻击者可能尝试从x.x.x.x（例如，密码、消息或信用卡）窃取您的信息。”

这个警告是由于使用了自签名的TLS证书，没有方法可以去除它。您可以点击“继续前往x.x.x.x（不安全）”继续。尽管有警告，但移动应用和Web界面之间的数据是加密的。

## 为什么屏幕镜像不起作用？

尝试使用Chrome的最新版本。

## 为什么我无法收到桌面通知？

在Windows/Mac/Linux上授予Chrome通知权限
进入`设置 > 系统 > 通知与操作`，确保对于Chrome，通知选项已启用。

## 网页上的上下文菜单无法使用怎么办？

如果您在使用上下文菜单时遇到问题，请尝试在隐身窗口中打开页面。某些 Chrome 扩展，例如“Allow Right Click”扩展，可能会影响此功能。禁用或移除这些扩展可能会解决问题。

## 为什么我无法看到网页地址栏的 PWA 安装按钮？

由于网页使用自签名证书，您需要执行额外的步骤来安装 PWA。请查看这篇文章 https://mswjs.io/docs/recipes/using-local-https/

以下是 Chrome / Brave 的示例：
1. 打开 chrome://flags（或者如果使用 Brave 则是 brave://flags）；
2. 在列表中搜索 `unsafely-treat-insecure-origin-as-secure` 标志；
3. 选择该标志旁边的“启用”选项。
4. 将您的地址输入到字段中。比如输入https://10.11.1.128:8443

<img src="/images/chrome-pwa.png" width="600"/>
<img src="/images/chrome-pwa-address-bar.png" width="600"/>
