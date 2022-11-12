// packages / index.ts

// 导入单个组件
import LdIcon from './components/icon';
import LdButton from './components/button';

// 以数组的结构保存组件，便于遍历
const components = [LdIcon, LdButton];

// 定义 install 方法
const install: any = function (Vue: any) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
};
