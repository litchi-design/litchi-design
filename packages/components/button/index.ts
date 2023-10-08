import _Button from './src/button.vue';
import withInstall from '@litchi-design/utils/withInstall';

const LdButton = withInstall(_Button); // 生成带有 install 方法的组件

export default LdButton; // 导出组件
export type { ButtonProps } from './src/button'; // 导出组件 props 的类型

declare module 'vue' {
  export interface GlobalComponents {
    LDButton: typeof LdButton;
  }
}
