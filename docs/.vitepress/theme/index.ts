import DefaultTheme from 'vitepress/theme';
import '@litchi-design/theme-chalk/src/index.scss';
import ZIcon from '@litchi-design/components/icon';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon); // 注册组件
  },
};
