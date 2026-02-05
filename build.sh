#!/bin/bash
npm run build
# 移动目录
mv docs/.vitepress/dist/ ./

# 要复制的源项
cp -r dist/assets dist/en/assets
cp -r dist/assets dist/zh-CN/assets
cp dist/vp-icons.css dist/zh-CN/vp-icons.css
cp dist/vp-icons.css dist/en/vp-icons.css

echo "所有操作完成！"