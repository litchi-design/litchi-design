import DefaultTheme from 'vitepress/theme';
import '@litchi-design/theme-chalk/src/index.scss';
import LDButton from '@litchi-design/components/button';
import LDIcon from '@litchi-design/components/icon';
import ElButton from 'element-plus/es/components/button/index';
import 'element-plus/theme-chalk/index.css';

console.log('LDButton', LDButton, ElButton);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(LDButton);
    app.use(LDIcon);
    app.use(ElButton);
  },
};
