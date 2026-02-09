<script>
import { onMounted } from 'vue'

onMounted(() => {
    // 获取用户首选语言
    const userLang = navigator.language || navigator.userLanguage;

    // 定义语言映射关系
    const languageMap = {
        'zh-CN': 'zh-CN',        // 简体中文
        'en': 'en',           // 英语
        'en-US': 'en',           // 英语
    };

    // 获取基础语言代码（前两位）
    const baseLang = userLang.split('-')[0].toLowerCase();

    // 确定目标语言（优先匹配完整代码，其次匹配基础语言）
    let targetLang = languageMap[userLang] || languageMap[baseLang] || '404';

    console.log(targetLang)

    // 构建目标URL（假设语言作为路径参数）
    const newPath = `/clickmouse_docs/${targetLang}`;

    // 跳转到对应语言页面
    if (targetLang !== '404') {
        window.location.href = newPath;
    }
})
</script>

# Please select a language to view the documentation.

- [English](./en/)
- [简体中文](./zh-CN/)