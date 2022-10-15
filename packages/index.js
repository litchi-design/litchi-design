import LIcon from './components/icon';
import LButton from './components/button';
const components = [LIcon, LButton];
const install = function (Vue) {
    if (install.installed)
        return;
    install.installed = true;
    components.map((component) => {
        Vue.component(component.name, component);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default Object.assign({ install }, components);
//# sourceMappingURL=index.js.map