import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/clickmouse_docs/',
  head: [['link', { rel: 'icon', href: '/imgs/icons/icon.ico' }]],
  markdown: {
    emoji: {
      enabled: 'off',
    },
  },

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
                buttonAriaLabel: '搜索',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close',
                },
              },
            },
          },
        },
      },
    },
  },

  // 多语言配置
  locales: {
    en: {
      title: 'Clickmouse docs',
      description: 'Clickmouse docs powered by vitepress',
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last Updated',
        editLink: {
          pattern:
            'https://github.com/xystudiocode/clickmouse_docs/tree/main/docs/:path',
          text: 'Edit this page',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        notFound: {
          title: 'PAGE NOT FOUND',
          quote:
            "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
          linkText: 'Take me home',
        },
        // 配置主题
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        // 社交链接
        socialLinks: [
          { icon: 'github', link: '/clickmouse_docs/en/githublink.html' },
          { icon: 'gitee', link: 'https://gitee.com/xystudio889/pyclickmouse' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                {
                  text: 'Getting Started',
                  link: '/en/guide/getting-started.html',
                },
              ],
            },
          ],
          '/en/updatelog/': [
            {
              text: '发行日志',
              items: [
                {
                  text: '正式版',
                  collapsed: true,
                  items: [
                    {
                      text: 'v3.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '3.1.3.18',
                          link: '/en/updatelog/final/3/31318.html',
                        },
                        {
                          text: '3.1.2.17',
                          link: '/en/updatelog/final/3/31217.html',
                        },
                        {
                          text: '3.1.1.16',
                          link: '/en/updatelog/final/3/31116.html',
                        },
                        {
                          text: '3.1.0.15',
                          link: '/en/updatelog/final/3/31015.html',
                        },
                        {
                          text: '3.0.3.14',
                          link: '/en/updatelog/final/3/30314.html',
                        },
                        {
                          text: '3.0.2.13',
                          link: '/en/updatelog/final/3/30213.html',
                        },
                        {
                          text: '3.0.1.12',
                          link: '/en/updatelog/final/3/30112.html',
                        },
                        {
                          text: '3.0.0.11',
                          link: '/en/updatelog/final/3/30011.html',
                        },
                      ],
                    },
                    {
                      text: 'v2.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '2.2.3.10',
                          link: '/en/updatelog/final/2/22310.html',
                        },
                        {
                          text: '2.2.2.9',
                          link: '/en/updatelog/final/2/2229.html',
                        },
                        {
                          text: '2.2.1.8',
                          link: '/en/updatelog/final/2/2218.html',
                        },
                        {
                          text: '2.2.0.7',
                          link: '/en/updatelog/final/2/2207.html',
                        },
                        {
                          text: '2.1.1.6',
                          link: '/en/updatelog/final/2/2116.html',
                        },
                        {
                          text: '2.1.0.5',
                          link: '/en/updatelog/final/2/2105.html',
                        },
                        {
                          text: '2.0.0.4',
                          link: '/en/updatelog/final/2/2004.html',
                        },
                      ],
                    },
                    {
                      text: 'v1.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '1.0.2.3',
                          link: '/en/updatelog/final/1/1023.html',
                        },
                        {
                          text: '1.0.2.2',
                          link: '/en/updatelog/final/1/1022.html',
                        },
                        {
                          text: '1.0.1.1',
                          link: '/en/updatelog/final/1/1011.html',
                        },
                        {
                          text: '1.0.0.0',
                          link: '/en/updatelog/final/1/1000.html',
                        },
                      ],
                    },
                  ],
                },
                {
                  text: '预览版',
                  collapsed: true,
                  items: [
                    {
                      text: 'v3.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '3.2.0.19beta10',
                          link: '/en/updatelog/beta/3/32019b10.html',
                        },
                        {
                          text: '3.2.0.19beta9',
                          link: '/en/updatelog/beta/3/32019b9.html',
                        },
                        {
                          text: '3.2.0.18beta8',
                          link: '/en/updatelog/beta/3/32018b8.html',
                        },
                        {
                          text: '3.2.0.18beta5',
                          link: '/en/updatelog/beta/3/32018b5.html',
                        },
                        {
                          text: '3.2.0.18beta4',
                          link: '/en/updatelog/beta/3/32018b4.html',
                        },
                        {
                          text: '3.1.2.17beta3',
                          link: '/en/updatelog/beta/3/31217b3.html',
                        },
                        {
                          text: '3.1.2.17beta1',
                          link: '/en/updatelog/beta/3/31217b1.html',
                        },
                        {
                          text: '3.1.0.15beta3',
                          link: '/en/updatelog/beta/3/31015b3.html',
                        },
                        {
                          text: '3.1.0.15beta2',
                          link: '/en/updatelog/beta/3/31015b2.html',
                        },
                        {
                          text: '3.1.0.15beta1',
                          link: '/en/updatelog/beta/3/31015b1.html',
                        },
                        {
                          text: '3.1.0.15.dev0',
                          link: '/en/updatelog/beta/3/31015dev0.html',
                        },
                        {
                          text: '3.0.2.13rc1',
                          link: '/en/updatelog/beta/3/30213rc1.html',
                        },
                        {
                          text: '3.0.1.12rc1',
                          link: '/en/updatelog/beta/3/30112rc1.html',
                        },
                        {
                          text: '3.0.0.11rc1',
                          link: '/en/updatelog/beta/3/30011rc1.html',
                        },
                        {
                          text: '3.0.0.11alpha3',
                          link: '/en/updatelog/beta/3/30011a3.html',
                        },
                        {
                          text: '3.0.0.11alpha2',
                          link: '/en/updatelog/beta/3/30011a2.html',
                        },
                        {
                          text: '3.0.0.11alpha1',
                          link: '/en/updatelog/beta/3/30011a1.html',
                        },
                        {
                          text: '3.0.0.11.dev4',
                          link: '/en/updatelog/beta/3/30011dev4.html',
                        },
                        {
                          text: '3.0.0.11.dev3',
                          link: '/en/updatelog/beta/3/30011dev3.html',
                        },
                        {
                          text: '3.0.0.11.dev1',
                          link: '/en/updatelog/beta/3/30011dev1.html',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          '/en/features/': [
            {
              text: 'Features',
              items: [
                {
                  text: 'Introduction',
                  link: '/en/features/'
                },
                {
                  text: 'Extensions',
                  collapsed: true,
                  items: [
                    {text: 'Introduction', link: '/en/features/extensions'}
                  ]
                }
              ]
            }
          ]
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Features', link: '/en/features/' },
          { text: 'Update log', link: '/en/updatelog/' },
        ],
        returnToTopLabel: 'Return to top',
      },
    },
    'zh-CN': {
      label: '简体中文',
      description: '基于 vitepress 搭建的 Clickmouse 文档',
      title: 'Clickmouse 文档 | VitePress',
      link: '/zh-CN/',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: 'Clickmouse 文档',
        returnToTopLabel: '返回顶部',
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        sidebarMenuLabel: '目录',
        editLink: {
          pattern:
            'https://github.com/xystudiocode/clickmouse_docs/tree/main/docs/:path',
          text: '编辑此页',
        },
        notFound: {
          title: '页面不存在',
          quote: '只要不改变你的方向，一直寻找，最终会找到你所寻找的目标',
          linkText: '返回首页',
        },
        // 配置主题
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        darkModeSwitchLabel: '主题',
        // 社交链接
        socialLinks: [
          { icon: 'github', link: '/clickmouse_docs/zh-CN/githublink.html' },
          { icon: 'gitee', link: 'https://gitee.com/xystudio889/pyclickmouse' },
        ],
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '指南', link: '/zh-CN/guide/' },
          { text: '功能', link: '/zh-CN/features/' },
          { text: '更新日志', link: '/zh-CN/updatelog/' },
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        footer: {
          message: '本软件使用MIT协议开源',
          copyright: '© 2025-现在 xystudio版权所有',
        },
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/zh-CN/guide/' },
                { text: '开始使用', link: '/zh-CN/guide/getting-started.html' },
              ],
            },
          ],
          '/zh-CN/updatelog/': [
            {
              text: '发行日志',
              items: [
                {
                  text: '正式版',
                  collapsed: true,
                  items: [
                    {
                      text: 'v3.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '3.1.3.18',
                          link: '/zh-CN/updatelog/final/3/31318.html',
                        },
                        {
                          text: '3.1.2.17',
                          link: '/zh-CN/updatelog/final/3/31217.html',
                        },
                        {
                          text: '3.1.1.16',
                          link: '/zh-CN/updatelog/final/3/31116.html',
                        },
                        {
                          text: '3.1.0.15',
                          link: '/zh-CN/updatelog/final/3/31015.html',
                        },
                        {
                          text: '3.0.3.14',
                          link: '/zh-CN/updatelog/final/3/30314.html',
                        },
                        {
                          text: '3.0.2.13',
                          link: '/zh-CN/updatelog/final/3/30213.html',
                        },
                        {
                          text: '3.0.1.12',
                          link: '/zh-CN/updatelog/final/3/30112.html',
                        },
                        {
                          text: '3.0.0.11',
                          link: '/zh-CN/updatelog/final/3/30011.html',
                        },
                      ],
                    },
                    {
                      text: 'v2.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '2.2.3.10',
                          link: '/zh-CN/updatelog/final/2/22310.html',
                        },
                        {
                          text: '2.2.2.9',
                          link: '/zh-CN/updatelog/final/2/2229.html',
                        },
                        {
                          text: '2.2.1.8',
                          link: '/zh-CN/updatelog/final/2/2218.html',
                        },
                        {
                          text: '2.2.0.7',
                          link: '/zh-CN/updatelog/final/2/2207.html',
                        },
                        {
                          text: '2.1.1.6',
                          link: '/zh-CN/updatelog/final/2/2116.html',
                        },
                        {
                          text: '2.1.0.5',
                          link: '/zh-CN/updatelog/final/2/2105.html',
                        },
                        {
                          text: '2.0.0.4',
                          link: '/zh-CN/updatelog/final/2/2004.html',
                        },
                      ],
                    },
                    {
                      text: 'v1.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '1.0.2.3',
                          link: '/zh-CN/updatelog/final/1/1023.html',
                        },
                        {
                          text: '1.0.2.2',
                          link: '/zh-CN/updatelog/final/1/1022.html',
                        },
                        {
                          text: '1.0.1.1',
                          link: '/zh-CN/updatelog/final/1/1011.html',
                        },
                        {
                          text: '1.0.0.0',
                          link: '/zh-CN/updatelog/final/1/1000.html',
                        },
                      ],
                    },
                  ],
                },
                {
                  text: '预览版',
                  collapsed: true,
                  items: [
                    {
                      text: 'v3.x.x.x',
                      collapsed: true,
                      items: [
                        {
                          text: '3.2.0.19beta10',
                          link: '/zh-CN/updatelog/beta/3/32019b10.html',
                        },
                        {
                          text: '3.2.0.19beta9',
                          link: '/zh-CN/updatelog/beta/3/32019b9.html',
                        },
                        {
                          text: '3.2.0.18beta8',
                          link: '/zh-CN/updatelog/beta/3/32018b8.html',
                        },
                        {
                          text: '3.2.0.18beta5',
                          link: '/zh-CN/updatelog/beta/3/32018b5.html',
                        },
                        {
                          text: '3.2.0.18beta4',
                          link: '/zh-CN/updatelog/beta/3/32018b4.html',
                        },
                        {
                          text: '3.1.2.17beta3',
                          link: '/zh-CN/updatelog/beta/3/31217b3.html',
                        },
                        {
                          text: '3.1.2.17beta1',
                          link: '/zh-CN/updatelog/beta/3/31217b1.html',
                        },
                        {
                          text: '3.1.0.15beta3',
                          link: '/zh-CN/updatelog/beta/3/31015b3.html',
                        },
                        {
                          text: '3.1.0.15beta2',
                          link: '/zh-CN/updatelog/beta/3/31015b2.html',
                        },
                        {
                          text: '3.1.0.15beta1',
                          link: '/zh-CN/updatelog/beta/3/31015b1.html',
                        },
                        {
                          text: '3.1.0.15.dev0',
                          link: '/zh-CN/updatelog/beta/3/31015dev0.html',
                        },
                        {
                          text: '3.0.2.13rc1',
                          link: '/zh-CN/updatelog/beta/3/30213rc1.html',
                        },
                        {
                          text: '3.0.1.12rc1',
                          link: '/zh-CN/updatelog/beta/3/30112rc1.html',
                        },
                        {
                          text: '3.0.0.11rc1',
                          link: '/zh-CN/updatelog/beta/3/30011rc1.html',
                        },
                        {
                          text: '3.0.0.11alpha3',
                          link: '/zh-CN/updatelog/beta/3/30011a3.html',
                        },
                        {
                          text: '3.0.0.11alpha2',
                          link: '/zh-CN/updatelog/beta/3/30011a2.html',
                        },
                        {
                          text: '3.0.0.11alpha1',
                          link: '/zh-CN/updatelog/beta/3/30011a1.html',
                        },
                        {
                          text: '3.0.0.11.dev4',
                          link: '/zh-CN/updatelog/beta/3/30011dev4.html',
                        },
                        {
                          text: '3.0.0.11.dev3',
                          link: '/zh-CN/updatelog/beta/3/30011dev3.html',
                        },
                        {
                          text: '3.0.0.11.dev1',
                          link: '/zh-CN/updatelog/beta/3/30011dev1.html',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          '/zh-CN/features/': [
            {
              text: '功能',
              items: [
                {
                  text: '介绍',
                  link: '/zh-CN/features/'
                },
                {
                  text: '扩展',
                  collapsed: true,
                  items: [
                    {text: '介绍', link: '/zh-CN/features/extensions'}
                  ]
                }
              ]
            }
          ]
        },
      },
    },
  },
});
