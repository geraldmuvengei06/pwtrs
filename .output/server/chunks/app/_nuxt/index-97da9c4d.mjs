import { _ as __nuxt_component_0 } from './BgShade-b4f14ddb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-8052fd1d.mjs';
import { _ as __nuxt_component_4 } from './Payment-363e9a5e.mjs';
import script from './timeline.esm-6c1d120e.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_5 } from './Reviews-fe026bc6.mjs';
import { _ as _sfc_main$2 } from './Unique-f1175792.mjs';
import { _ as __nuxt_component_10 } from './CTAMale-aa423154.mjs';
import { u as useSeoMeta } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import './basecomponent.esm-4dea05fb.mjs';
import './carousel.esm-f3e46384.mjs';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "HowItWorksTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const events = ref([
      { status: "Give Us Your paper instructions", date: "", icon: "pi pi-file-edit", image: "order.png" },
      { status: "Hire your ideal essay writer online", date: "", icon: "pi pi-users", image: "process.png" },
      { status: "Get your paper writing done", date: "", icon: "pi pi-wallet", image: "download.png" },
      { status: "Download", date: "", icon: "pi pi-download" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimeTimeline = script;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 sm:py-16" }, _attrs))} data-v-fc3f52c8><div class="section-header my-8 text-center max-w-lg mx-auto" data-v-fc3f52c8><h2 class="text-2xl sm:text-4xl" data-v-fc3f52c8>How to Order</h2><p class="" data-v-fc3f52c8>How to Hire a Professional to &quot;Do My Paper Online&quot;? </p></div><div data-v-fc3f52c8>`);
      _push(ssrRenderComponent(_component_PrimeTimeline, {
        value: events.value,
        align: "alternate",
        class: "customized-timeline max-w-5xl mx-auto"
      }, {
        marker: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-1 shadow-1 bg-primary" data-v-fc3f52c8${_scopeId}><i class="${ssrRenderClass(slotProps.item.icon)}" data-v-fc3f52c8${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("span", { class: "flex w-8 h-8 items-center justify-center text-white rounded-full z-1 shadow-1 bg-primary" }, [
                createVNode("i", {
                  class: slotProps.item.icon
                }, null, 2)
              ])
            ];
          }
        }),
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card shadow-lg" data-v-fc3f52c8${_scopeId}><div class="card-body p-4" data-v-fc3f52c8${_scopeId}><div class="card-subtitle" data-v-fc3f52c8${_scopeId}><strong class="text-xl sm:text-2xl" data-v-fc3f52c8${_scopeId}>${ssrInterpolate(slotProps.item.status)}</strong> <br data-v-fc3f52c8${_scopeId}> ${ssrInterpolate(slotProps.item.date)}</div>`);
            if (slotProps.item.image) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                alt: "",
                src: `/img/${slotProps.item.image}`,
                class: "shadow-1"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p data-v-fc3f52c8${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card shadow-lg" }, [
                createVNode("div", { class: "card-body p-4" }, [
                  createVNode("div", { class: "card-subtitle" }, [
                    createVNode("strong", { class: "text-xl sm:text-2xl" }, toDisplayString(slotProps.item.status), 1),
                    createTextVNode(),
                    createVNode("br"),
                    createTextVNode(" " + toDisplayString(slotProps.item.date), 1)
                  ]),
                  slotProps.item.image ? (openBlock(), createBlock(_component_NuxtImg, {
                    key: 0,
                    alt: "",
                    src: `/img/${slotProps.item.image}`,
                    class: "shadow-1"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                  createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/HowItWorksTimeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fc3f52c8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let title = "How it Works";
    useSeoMeta({
      title,
      ogTitle: title,
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: "",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiBgShade = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_UiPayment = __nuxt_component_4;
      const _component_SectionHowItWorksTimeline = __nuxt_component_3;
      const _component_SectionReviews = __nuxt_component_5;
      const _component_SectionUnique = _sfc_main$2;
      const _component_SectionCTAMale = __nuxt_component_10;
      _push(`<!--[--><div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]"><div class="container mx-auto py-8"><div class="hero rounded-xl min-h-min relative">`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col sm:flex-row-reverse">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/learning-animate.svg",
        class: "md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
      }, null, _parent));
      _push(`<div class="sm:z-10"><h1 class="text-3xl sm:text-5xl font-bold"><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">How it Works</span></h1><p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest delivery time</b> and fully original content. </p>`);
      _push(ssrRenderComponent(_component_UiPayment, { class: "hidden sm:inline" }, null, _parent));
      _push(`</div></div></div></div></div><div class="">`);
      _push(ssrRenderComponent(_component_SectionHowItWorksTimeline, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionUnique, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTAMale, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/how-it-works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-97da9c4d.mjs.map
