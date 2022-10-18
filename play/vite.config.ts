import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // 添加以下内容
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ld-'),
        },
      },
    }),
  ],
});
