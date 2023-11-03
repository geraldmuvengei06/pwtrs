import { useSSRContext, defineComponent, toRef, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sample",
  __ssrInlineRender: true,
  props: {
    img: { default: "" },
    name: { default: "" },
    rating: { default: 4 },
    description: { default: "" }
  },
  setup(__props) {
    const props = __props;
    toRef(props == null ? void 0 : props.rating);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card mx-1 max-w-xs bg-slate-50 hover:shadow-md" }, _attrs))} data-v-95e71e44><div class="card-body p-4" data-v-95e71e44><h4 class="text-lg sm:text-xl flex sm:flex-row gap-1" data-v-95e71e44><span class="pi pi-file text-3xl sm:text-5xl" data-v-95e71e44></span><span data-v-95e71e44>The Importance and Impacts of Narratives in o</span></h4><span data-v-95e71e44><b data-v-95e71e44>Editing</b> - <small data-v-95e71e44>2 pages</small></span><div class="divider py-0 my-0 border-slate-50" data-v-95e71e44></div><div class="card-actions justify-between" data-v-95e71e44><button class="btn btn-primary" data-v-95e71e44>View</button><button class="btn btn-secondary btn-outline" data-v-95e71e44>Order Now</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Sample.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95e71e44"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Sample-9ab5af0f.mjs.map
