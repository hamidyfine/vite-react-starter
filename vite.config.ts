import { defineConfig } from 'vite';
import path from 'path';
import { exec } from 'child_process';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import chokidar from 'chokidar';
import chalk from 'chalk';

const watchTranslations = () => ({
    name: 'watch-translations',
    configureServer() {
        console.log();
        const watcher = chokidar.watch('src/locales/**/*.json');
        watcher.on('change', (filePath) => {
            console.log(chalk.yellow(`Locale file changed: ${filePath}`));
            console.log(chalk.blue('Generating new locales...'));

            exec('npm run translation', (err, stdout, stderr) => {
                if (err) {
                    console.error(err);

                    return;
                }
                if (stdout) {
                    console.log(stdout);
                    console.log(chalk.green('Locales generated successfully!'));
                }
                if (stderr) {
                    console.error(stderr);
                }
                console.log();
            });
        });
    },
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            fix: true,
        }),
        watchTranslations(),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@scss': path.resolve(__dirname, './src/scss'),
            '@stores': path.resolve(__dirname, './src/stores'),
        },
    },
});
