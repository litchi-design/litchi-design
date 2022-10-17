import _ButtonGroup from './src/button-group.vue';
import withInstall from '@litchi-design/utils/withInstall';

const ButtonGroup = withInstall(_ButtonGroup); // 生成带有 install 方法的组件

export default ButtonGroup; // 导出组件
export type { ButtonGroupProps } from './src/buttonGroup'; // 导出组件 props 的类型

// 这里为了给 volar 用的，具体可以看下面的文档
declare module 'vue' {
  export interface GlobalComponents {
    LButtonGroup: typeof ButtonGroup;
  }
}
