import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TechDocs',
  description: '多语言技术文档',
  base: '/clickmouse_docs/',
  head: [
    ['link', { rel: 'icon', href: './logo.svg' }]
  ],

  // 主题配置
  themeConfig: {
    logo: './logo.svg',
    siteTitle: 'TechDocs',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo' }
    ],
    
    // 搜索功能
    search: {
      provider: 'local'
    }
  },

  // 多语言配置
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: getNav('en'),
        sidebar: getSidebar('en'),
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last Updated',
        editLink: {
          pattern: 'https://github.com/your-repo/edit/main/docs/en/:path',
          text: 'Edit this page'
        }
      }
    },
    "zh-CN": {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: getNav('zh-CN'),
        sidebar: getSidebar('zh-CN'),
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        editLink: {
          pattern: 'https://github.com/your-repo/edit/main/docs/zh-CN/:path',
          text: '编辑此页'
        }
      }
    },
  }
})

// 导航栏配置
function getNav(lang) {
  const navs = {
    en: [
      { text: 'Guide', link: '/en/guide/getting-started' },
    ],
    "zh-CN": [
      { text: '指南', link: '/zh-CN/guide/getting-started' },
    ],
  }
  return navs[lang]
}

// 侧边栏配置
function getSidebar(lang) {
  const sidebars = {
    en: {
      '/en/guide/': [
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/en/guide/getting-started' }
          ]
        }
      ]
    },
    "zh-CN": {
      '/zh-CN/guide/': [
        {
          text: '快速开始',
          collapsible: true,
          items: [
            { text: '介绍', link: '/zh-CN/guide/getting-started' }
          ]
        }
      ],
    }
  }
  return sidebars[lang]
}