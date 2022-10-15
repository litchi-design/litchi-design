import type { App, Plugin } from 'vue';

export type withInstallSFC<T> = T & Plugin;

// 给传入的组件添加一个 install 方法
export default <T>(comp: T) => {
  (comp as withInstallSFC<T>).install = (app: App) => {
    app.component((comp as any).name, comp as withInstallSFC<T>);
  };
  return comp as withInstallSFC<T>;
};
