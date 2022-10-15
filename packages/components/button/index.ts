import _Button from './src/button.vue';
import withInstall from '@litchi-design/utils/withInstall';

const Button = withInstall(_Button); // 生成带有 install 方法的组件

export default Button; // 导出组件
export type { ButtonProps } from './src/button'; // 导出组件 props 的类型

// 这里为了给 volar 用的，具体可以看下面的文档
declare module 'vue' {
  export interface GlobalComponents {
    LButton: typeof Button;
  }
}
