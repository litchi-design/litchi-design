import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createElementVNode } from "vue";
import { createNamespace } from "../../../utils/create.js";
import { iconProps } from "./icon2.js";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "vv", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("icon");
    defineOptions({
      name: "LIcon"
    });
    const style = computed(() => {
      if (!props.color && !props.size) {
        return {};
      }
      return {
        ...props.size ? { "font-size": props.size + "px" } : {},
        ...props.color ? { color: props.color } : {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(unref(bem).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default"),
        _hoisted_1
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
