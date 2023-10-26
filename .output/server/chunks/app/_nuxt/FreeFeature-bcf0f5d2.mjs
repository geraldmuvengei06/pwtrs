import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/FreeFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FreeFeature = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FreeFeature as default };
//# sourceMappingURL=FreeFeature-bcf0f5d2.mjs.map
