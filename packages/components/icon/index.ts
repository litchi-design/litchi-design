import _Icon from './src/icon.vue';
import withInstall from '@litchi-design/utils/withInstall';

const LdIcon = withInstall(_Icon); // 生成带有 install 方法的组件
console.log('_Icon:', _Icon);

export default LdIcon; // 导出组件
export type { IconProps } from './src/icon'; // 导出组件 props 的类型

// 这里为了给 volar 用的，具体可以看下面的文档
declare module 'vue' {
  export interface GlobalComponents {
    LdIcon: typeof LdIcon;
  }
}
