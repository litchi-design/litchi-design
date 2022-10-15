import Icon from "./components/icon/index.js";
import Button from "./components/button/index.js";
const components = [Icon, Button];
const install = function(Vue) {
  if (install.installed)
    return;
  install.installed = true;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const index = {
  install,
  ...components
};
export {
  index as default
};
