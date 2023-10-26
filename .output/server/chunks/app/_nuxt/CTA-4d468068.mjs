import { _ as __nuxt_component_0 } from './nuxt-img-8052fd1d.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="container mx-auto py-8 sm:py-16 px-4"><div class="flex flex-col items-center sm:flex-row bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4] rounded-lg gap-4 hover:shadow-lg">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    alt: "",
    id: "nuxt-img",
    class: "w-48 sm:w-1/3 max-w-xs m-4",
    src: "/img/creative-writing-animate.svg"
  }, null, _parent));
  _push(`<div class="px-4 py py-8"><h2 class="text-2xl sm:text-4xl">Talk to an <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Writer</span> Now</h2><p class="my-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, debitis error? Atque dolorum voluptatem voluptate eum assumenda officiis inventore, et libero nesciunt quam dolorem, expedita provident explicabo enim rerum. Voluptate? </p><button class="sm:mt-9 btn btn-primary flex">Hire an Expert Writer</button></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/CTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=CTA-4d468068.mjs.map
