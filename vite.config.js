import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        {
            name: 'remove-html-comments',
            transformIndexHtml(html) {
                return html.replace(/<!--[\s\S]*?-->/g, '');
            },
        },
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "resources/scss/_variables";`,
            },
        },
    },
    build: {
        outDir: 'public/author',
        assetsDir: '',
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name][extname]';
                    }
                    return '[ext]/[name]-[hash][extname]';
                },
            },
        },
    },
});
