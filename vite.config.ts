import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
const { resolve } = require('path');
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    // rollup打包配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', /\.less/, '@litchi-design/utils', 'play'],
      input: ['packages/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src',
        },
        {
          format: 'umd',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: false,
          //配置打包根目录
          dir: 'umd',
          preserveModulesRoot: 'src',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
    // 库编译模式配置
    lib: {
      name: 'libs',
      entry: resolve(__dirname, 'packages/index.ts'), // 指定组件编译入口文件
      formats: ['es', 'cjs', 'umd'], // 不能省略
    },
  },
  plugins: [
    vue({
      template: {
        // 支持原生自定义元素
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ld-'),
        },
      },
    }),
    vueSetupExtend(),
    dts({
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json',
    }),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    dts({
      outputDir: 'lib',
      tsConfigFilePath: './tsconfig.json',
    }),
  ],
});
