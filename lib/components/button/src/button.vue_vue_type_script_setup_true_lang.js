"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const button = require("./button2.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("button", null, "hoihg8y8", -1);
const __default__ = vue.defineComponent({
  name: "LButton"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: button.buttonProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("button");
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
