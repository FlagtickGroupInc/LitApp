import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/build', 
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