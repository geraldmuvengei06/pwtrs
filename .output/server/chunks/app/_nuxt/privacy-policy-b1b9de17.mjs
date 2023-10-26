import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="bg-slate-50"><div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4"><h2 class="text-2xl sm:text-4xl">Privacy policy</h2><p>Original. Quality. On time</p></div></div><div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4"><article class="prose prose-slate max-w-3xl mx-auto"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quasi. Distinctio cum unde assumenda minima laudantium, animi nemo totam dolores excepturi temporibus molestias, omnis voluptatum officia sapiente sequi autem atque.</p></article></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-b1b9de17.mjs.map
