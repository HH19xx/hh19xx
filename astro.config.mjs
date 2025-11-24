// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    // GitHub Pages 上でのサイトの「絶対 URL」
    // site: 'https://haruh19xx.github.io',
    // プロジェクトページ用に、リポジトリ名を base に付ける
    // base: '/astro-haruh19xx',
});
