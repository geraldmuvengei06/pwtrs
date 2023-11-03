import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_strike = resolveComponent("strike");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-90 text-base-content shadow-lg" }, _attrs))}><div class="card-body px-4"><!--[-->`);
  ssrRenderList(7, (i) => {
    _push(`<div class="py-1 flex flex-row gap-1 justify-between items-center"><span>Cover Page</span><span class="flex flex-row items-center gap-1">`);
    _push(ssrRenderComponent(_component_strike, { class: "font-bold" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`$5.00`);
        } else {
          return [
            createTextVNode("$5.00")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="badge badge-primary">Off!</div></span></div>`);
  });
  _push(`<!--]--><div class="divider font-bold">Saved `);
  _push(ssrRenderComponent(_component_strike, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`$5.00`);
      } else {
        return [
          createTextVNode("$5.00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h6 class="text-center">Get All These Features</h6><button class="sm:mt-4 btn btn-primary flex">Order Now</button></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/FreeFeature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FreeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFreeFeature = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-neutral text-neutral-content" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="flex flex-col items-center sm:flex-row gap-4 px-4"><div class="sm:w-3/5"><div class="section-header my-8"><h2 class="text-2xl sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Why Us</h2></div><ul class="my-4"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<li class="${ssrRenderClass([i < 5 && "border-b border-b-slate-500", "py-3 sm:pb-4"])}"><div class="flex items-center"><div class="flex-shrink-0"><span class="text-3xl text-gray-500 dark:text-gray-400 pi pi-user"></span></div><div class="flex-1 min-w-0 ml-4"><p class="text-sm font-medium text-slate-300"> 12+ Years helping students in their studies </p><p class="text-sm text-gray-500 dark:text-gray-400"> We have extensive experience in writing papers on all types and subjects. </p></div></div></li>`);
      });
      _push(`<!--]--></ul></div><div class="py-8 w-full sm:px-8 sm:w-2/5">`);
      _push(ssrRenderComponent(_component_UiFreeFeature, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/FreeFeatures.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FreeFeatures-f0cede0c.mjs.map
