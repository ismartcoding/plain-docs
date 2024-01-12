import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import {
    head,
  } from './configs/index.ts'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    base: '/',

    head,

    locales: {
        '/': {
            lang: 'en-US',
            title: 'PlainApp',
            description: 'PlainApp is an open-source application that allows you to manage your phone through a web browser. Access files, videos, music, contacts, sms, calls, and more from your desktop using a secure, easy to use web interface!',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '简朴',
            description: '简朴是一个开源应用，允许您通过网络浏览器管理您的手机。您可以通过安全、易于使用的网络界面从桌面访问文件、视频、音乐、联系人、短信、通话记录等等！',
        },
    },

    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'ismartcoding/plain-docs',
        docsDir: 'docs',
    
        // theme-level locales config
        locales: {
          /**
           * English locale config
           *
           * As the default locale of @vuepress/theme-default is English,
           * we don't need to set all of the locale fields
           */
          '/': {
            // navbar
            navbar: [],
            // sidebar
            sidebar: [],
            // page meta
            editLinkText: 'Edit this page on GitHub',
          },
    
          /**
           * Chinese locale config
           */
          '/zh/': {
            // navbar
            navbar: [],
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            selectLanguageAriaLabel: '选择语言',
            // sidebar
            sidebar: [],
            // page meta
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',
            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',
            // 404 page
            notFound: [
              '这里什么都没有',
              '我们怎么到这来了？',
              '这是一个 404 页面',
              '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
            // a11y
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
          },
        },
    
        themePlugins: {
          // only enable git plugin in production mode
          git: isProd,
          // use shiki plugin in production mode instead
          prismjs: !isProd,
        },
      }),
    
})