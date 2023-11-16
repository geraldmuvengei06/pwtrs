import { _ as _sfc_main$1 } from './Contact-879e2c76.mjs';
import { _ as __nuxt_component_1 } from './Faq-9ac12c87.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiContact = _sfc_main$1;
  const _component_UiFaq = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-tr from-[#F2F8FC] via-[#FEF6F4] to-transparent" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="max max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row gap-4"><div class="sm:w-1/3"><div class="card glass my-8"><div class="card-body p-2 max-w-lg mx-auto">`);
  _push(ssrRenderComponent(_component_UiContact, null, null, _parent));
  _push(`</div></div></div><div class="sm:w-2/3">`);
  _push(ssrRenderComponent(_component_UiFaq, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=Faq-5b6729d8.mjs.map
