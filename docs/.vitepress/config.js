import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/clickmouse_docs/',
  head: [
    ['link', { rel: 'icon', href: '/imgs/icons/icon.ico' }]
  ],

  // 主题配置
  themeConfig: {
    logo: '/imgs/icons/icon.ico',
    siteTitle: 'Clickmouse docs',
    
    // 搜索功能
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'To select',
                  navigateText: 'To switch',
                  closeText: 'To close'
                }
              }
            }
          }
        }
      }
    }
  },

  // 多语言配置
  locales: {
    en: {
      title: 'Clickmouse docs | VitePress',
      description: 'Clickmouse docs powered by vitepress',
      label: 'English',
      lang: 'en',
      themeConfig: {
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last Updated',
        editLink: {
          pattern: 'https://github.com/xystudiocode/clickmouse_docs/tree/main/docs',
          text: 'Edit this page'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        // 配置主题
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        // 社交链接
        socialLinks: [
          { icon: 'github', link: '/clickmouse_docs/en/githublink.html' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Getting Started', link: '/en/guide/getting-started.html' },
              ]
            }
          ]
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
        ],
        returnToTopLabel: 'Return to top',
      }
    },
    "zh-CN": {
      label: '简体中文',
      description: '基于 vitepress 搭建的 Clickmouse 文档',
      title: 'Clickmouse 文档 | VitePress',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: 'Clickmouse 文档',
        returnToTopLabel: '返回顶部',
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        editLink: {
          pattern: 'https://github.com/xystudiocode/clickmouse_docs/tree/main/docs',
          text: '编辑此页'
        },
        // 配置主题
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        darkModeSwitchLabel: "主题",
        // 社交链接
        socialLinks: [
          { icon: 'github', link: '/clickmouse_docs/zh-CN/githublink.html' }
        ],
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '指南', link: '/zh-CN/guide/' },
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '指南',
              collapsible: true,
              items: [
                { text: '介绍', link: '/zh-CN/guide/' },
                { text: '开始使用', link: '/zh-CN/guide/getting-started.html' },
              ]
            }
          ]
        }
      }
    },
  }
})
