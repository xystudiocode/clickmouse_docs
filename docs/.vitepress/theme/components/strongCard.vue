<template>
    <div class="strong">
        <slot />
        <div class="roundCardRow">
            <div class="roundCard notActive">
                <svg
                    class="svg"
                    viewBox="0 -5 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                >
                    <path
                        d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
                    ></path>
                </svg>
                {{ LangPack.Assignee ?? 'Assignee' }}
            </div>
            <div class="roundCard">
                {{ LangPack.LabelDesc ?? 'Label' }}
                <svg
                    viewBox="-3 -12 16 16"
                    width="16"
                    height="20"
                    :fill="LabelColor"
                >
                    <circle cx="5" cy="0" r="5"></circle>
                </svg>
                <b>{{ LangPack.Label ?? 'None' }}</b>
            </div>
            <div class="roundCard">
                {{ LangPack.TypeDesc ?? 'Type' }}
                <svg
                    class="svg"
                    viewBox="-3 -12 16 16"
                    width="16"
                    height="20"
                    :fill="TypeColor"
                >
                    <circle cx="5" cy="0" r="5"></circle>
                </svg>
                <b>{{ LangPack.Type ?? 'None' }}</b>
            </div>
            <div class="divider"></div>
            <div class="roundCard notActive">
                <svg
                    class="svg"
                    viewBox="0 -5 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                >
                    <path
                        d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"
                    ></path>
                </svg>
                {{ LangPack.Project ?? 'Project' }}
            </div>
            <div class="roundCard notActive">
                <svg
                    class="svg"
                    viewBox="0 -5 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                >
                    <path
                        d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"
                    ></path>
                </svg>
                {{ LangPack.Milestone ?? 'Milestone' }}
            </div>
        </div>
        <div class="footer-tip">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                ></path>
            </svg>
            <span>
                {{ LangPack.Product ?? 'Remember, contributions to this repository should follow its' }}
                <a
                    href="https://github.com/xystudiocode/pyClickMouse/blob/main/CONTRIBUTING.md"
                    >{{ LangPack.Guidelines ?? 'contributing guidelines' }}</a
                >
                {{ LangPack.And ?? 'and' }}
                <a
                    href="https://github.com/xystudiocode/pyClickMouse/security/policy"
                    >{{ LangPack.Security ?? 'security policy' }}</a
                >.</span
            >
        </div>
        <footer class="button-footer">
            <div class="checkbox-line">
                <input type="checkbox" class="checkbox" />
                {{ LangPack.CreateMore ?? 'Create more' }}
            </div>
            <div class="buttons">
                <div class="button"><span class="text">{{ LangPack.Cancel ?? 'Cancel' }}</span></div>
                <div
                    class="button button-highlight"
                    :class="{ hovered: isHovered }"
                    @mouseenter="isHovered = true"
                    @mouseleave="isHovered = false"
                >
                    <span class="text text-highlight">{{ LangPack.Create ?? 'Create' }}</span>
                    <span class="fastkey" :class="{ hovered: isHovered }">
                        ^⏎
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
defineOptions({
    name: 'strongCard',
});

defineProps({
    LabelColor: {
        type: String,
    },
    TypeColor: {
        type: String,
    },
    LabelText: {
        type: String,
    },
    LangPack: {
        type: Object,
        default: {}
    }
});
</script>

<style scoped>
.strong {
    background-color: white;
    box-shadow:
        0 8px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    margin: 10px 0;
    padding-left: 5px;
    word-wrap: break-word;
    line-height: 1.5;
    font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 12px;
    initial-value: 0;
    box-sizing: border-box;
    padding: 15px 10px;
    color: #1f2328;
}

.divider {
    margin-top: 25px;
    width: 1px;
    padding: 10px 0;
    border-left: 1px solid #d1d9e0;
}

.dark .divider {
    border-left-color: #3d444d;
}

.roundCardRow {
    display: flex;
    gap: 0.5rem;
    user-select: none;
}

.roundCard {
    display: flex;
    margin-top: 1.5rem;
    border-radius: 0.375rem;
    border: 0.8px solid #d1d9e0;
    padding: 0 8px;
    line-height: 2;
    width: auto;
    gap: 0.25rem;
}

.notActive {
    gap: 0;
    border-style: dashed;
}

.dark .roundCard {
    border-color: #3d444d;
}

.notActive .svg {
    margin-right: 4px;
}

.roundCard {
    color: #59636e;
    background-color: #f6f8fa;
}

.roundCard:hover {
    background-color: #eff2f5;
}

.roundCard:active {
    background-color: #e6eaef;
}

.dark .roundCard {
    background-color: #212830;
    color: #9198a1;
}

.dark .roundCard:hover {
    background-color: #262c36;
}

.dark .roundCard:active {
    background-color: #2a313c;
}

.notActive .svg {
    fill: #59636e;
}

.dark .notActive .svg {
    fill: #9198a1;
}

.roundCard b {
    font-weight: 600;
    color: #25292e;
}

.dark .roundCard b {
    color: white;
}

.dark .strong {
    background-color: #0d1117;
    color: #f0f6fc;
}

.footer-tip {
    display: flex;
    gap: 0.25rem;
    padding-top: 8px;
    color: #9198a1;
}

.footer-tip svg {
    fill: #59636e;
}

.dark .footer-tip svg {
    fill: #9198a1;
}

.button-footer {
    display: flex;
    justify-content: end;
    margin-top: 24px;
    gap: 10px;
}

.button-footer .checkbox-line {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.button-footer .checkbox {
    height: 1rem;
    width: 1rem;
    border-radius: 5px;
}

.buttons {
    display: flex;
    gap: 10px;
}

.button {
    background-color: #f6f8fa;
    color: #25292e;
    border: 1px solid #d1d9e0;
    border-radius: 6px;
    padding: 0px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 2;
    user-select: none;
}

.text-highlight {
    margin-right: 8px;
}

.fastkey {
    background-color: #1d732e;
    font-weight: 400;
    font-size: 0.75rem;
    border-radius: 4px;
    padding: 2px 2px;
}

.dark .button {
    background-color: #212830;
    border-color: #3d444d;
    color: #f0f6fc;
}

.dark .button:hover {
    background-color: #262c36;
}

.button:hover {
    background-color: #eff2f5;
}

.dark .button:active {
    background-color: #2a313c;
}

.button:active {
    background-color: #e6eaef;
}

.button-highlight, .dark .button-highlight {
    border-color: #449854;
    background-color: #238636;
    color: #f0f6fc;
}

.button-highlight:hover, .dark .button-highlight:hover {
    background-color: #29903b;
}
.button-highlight:active, .dark .button-highlight:active {
    background-color: #2e9a40;
}

.button-highlight:hover .fastkey {
    background-color: #227b32;
}

.button-highlight:active .fastkey {
    background-color: #268336;
}
</style>
