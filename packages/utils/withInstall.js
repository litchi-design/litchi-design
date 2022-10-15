export default (comp) => {
    comp.install = (app) => {
        app.component(comp.name, comp);
    };
    return comp;
};
//# sourceMappingURL=withInstall.js.map