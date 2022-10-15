"use strict";
const index$1 = require("./components/icon/index.js");
const index$2 = require("./components/button/index.js");
const components = [index$1, index$2];
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
module.exports = index;
