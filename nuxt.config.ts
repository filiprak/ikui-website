import path from 'path';
import { i18n } from './vite/plugins/i18n';
import { mdx } from './vite/plugins/mdx';
import { cssLayers } from './vite/plugins/css';
import { getPackageJson } from './app/utils/getPackageJson';

export default defineNuxtConfig({
    compatibilityDate: '2025-09-02',
    build: {
        transpile: ['@ikol/ui-kit'],
    },
    alias: {
        dayjs: path.resolve(import.meta.dirname, 'node_modules/dayjs/esm'),
        anchorme: path.resolve(import.meta.dirname, 'node_modules/anchorme/dist/browser/anchorme.min.js'),
        lodash: 'lodash-es',
    },
    modules: [
        '@nuxtjs/device',
        '@nuxt/eslint',
    ],
    app: {
        head: {
            charset: 'utf-8',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },
                { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap', as: 'style', crossorigin: '' },
                { rel: 'preload', href: 'https://fonts.gstatic.com/s/publicsans/v21/ijwRs572Xtc6ZYQws9YVwnNGfJ4.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
                { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
                { rel: 'icon', href: '/favicon.svg', sizes: 'image/svg+xml' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
            ],
        },
    },
    features: {
        inlineStyles: true,
    },
    vite: {
        plugins: [
            cssLayers(),
            i18n(),
            mdx({
                includeDefine: ['__LIB_PACKAGE__'],
            }),
        ],
        define: {
            __LIB_PACKAGE__: JSON.stringify(getPackageJson()),
        },
    },
    devtools: false,
    // hooks: {
    //     'build:manifest': (manifest) => {
    //         // find the app entry, css list
    //         const css = Object.values(manifest).find(options => options.isEntry)?.css
    //         if (css) {
    //             // start from the end of the array and go to the beginning
    //             for (let i = css.length - 1; i >= 0; i--) {
    //                 // if it starts with 'entry', remove it from the list
    //                 if (css[i]?.startsWith('entry')) {
    //                     css.splice(i, 1)
    //                 }
    //             }
    //         }
    //     },
    // },
});
