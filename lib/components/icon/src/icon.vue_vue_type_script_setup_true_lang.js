"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const icon = require("./icon2.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("button", null, "vv", -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "icon",
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("icon");
    defineOptions({
      name: "LIcon"
    });
    const style = vue.computed(() => {
      if (!props.color && !props.size) {
        return {};
      }
      return {
        ...props.size ? { "font-size": props.size + "px" } : {},
        ...props.color ? { color: props.color } : {}
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", {
        class: vue.normalizeClass(vue.unref(bem).b()),
        style: vue.normalizeStyle(vue.unref(style))
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        _hoisted_1
      ], 6);
    };
  }
});
module.exports = _sfc_main;
