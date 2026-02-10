import DefaultTheme from 'vitepress/theme';
import { h, onMounted, ref } from 'vue';
import './custom.css'

// 多语言404页面内容
const NotFoundContent = {
  'zh-CN': {
    title: '页面不存在',
    message: '只要不改变你的方向，一直寻找，最终将会找到你所寻找的目标。',
    backToHome: '返回主页',
    skipToContent: '前往内容',
  },
  'en': {
    title: 'PAGE NOT FOUND',
    message: "But if you don't change your direction, and if you keep looking, you will end up where you are heading.",
    backToHome: 'Take me home',
    skipToContent: 'Skip to content',
  },
};

const path = ref('')
onMounted(() => {
  path.value = window?.location?.pathname || '/';
})

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 覆盖404插槽
      'not-found': () => {
        let lang = 'en';
        const start = '/clickmouse_docs/';

        // 从URL路径判断语言
        if (path.value.startsWith(start + 'zh-CN/')) lang = 'zh-CN';
        else if (path.value.startsWith(start + 'en/')) lang = 'en';
        else lang = 'en';

        const content = NotFoundContent[lang] || NotFoundContent['en'];

        console.log(lang)
        return h('div', [
          h(
            'style',
            `
html {
  line-height: 1.4;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

html.dark {
  color-scheme: dark;
}

body {
  margin: 0;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  line-height: 24px;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  font-weight: 400;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  font-synthesis: style;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.VPSkipLink {
  top: 8px;
  left: 8px;
  padding: 8px 16px;
  z-index: 999;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: var(#3451b2);
  box-shadow: var(--vp-shadow-3);
  background-color: var(--vp-c-bg);
}

.VPSkipLink:focus {
  height: auto;
  width: auto;
  clip: auto;
  clip-path: none;
}

@media (min-width: 1280px) {
  .VPSkipLink {
    top: 14px;
    left: 16px;
  }
}

.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.VPContent {
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0px auto 0;
  width: 100%;
}

.VPContent.is-home {
  width: 100%;
  max-width: 100%;
}

.VPContent.has-sidebar {
  margin: 0;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: 64px;
  }

  .VPContent.has-sidebar {
    margin: 64px 0 0;
    padding-left: 64px;
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-right: calc((100vw - 1440px) / 2);
    padding-left: calc((100vw - 1440px) / 2 + var(272px));
  }
}

.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title_notFound {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider_notFound {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link_notFound {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link_notFound:hover {
  border: 1px solid var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}`,
          ),
          h('div', { class: 'Layout' }, [
            h('div', { class: 'VPContent' }, [
              h('span', {
                tabindex: '-1',
              }),
              h(
                'a',
                {
                  href: '#VPContent',
                  class: 'VPSkipLink visually-hidden',
                },
                'Skip to content',
              ),
              h(
                'div',
                {
                  class: 'NotFound',
                },
                [
                  h(
                    'p',
                    {
                      class: 'code',
                    },
                    '404',
                  ),
                  h(
                    'h1',
                    {
                      class: 'title_notFound'
                    },
                    content.title,
                  ),
                  h('div', {
                    class: 'divider_notFound',
                  }),
                  h(
                    'blockquote',
                    {
                      class: 'quote',
                    },
                    content.message,
                  ),
                  h('div', { class: 'action' }, [
                    h(
                      'a',
                      {
                        'aria-label': 'go to home',
                        href: `/clickmouse_docs/${lang}/`,
                        class: 'link_notFound',
                      },
                      content.backToHome,
                    ),
                  ]),
                ],
              ),
            ]),
          ]),
        ]);
      },
    });
  },
};
