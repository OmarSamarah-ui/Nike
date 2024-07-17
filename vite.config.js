// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    base: './', // Set the base path to relative './' (current directory)
    plugins: [reactRefresh()],
    build: {
        outDir: 'build', // Specify the output directory for production builds
        assetsDir: 'assets', // Specify the assets directory within the outDir
        // You can add more build configuration as needed
    },
});
