import { _ as __nuxt_component_0 } from './BgShade-b4f14ddb.mjs';
import { a as _sfc_main$1$1, _ as __nuxt_component_2 } from './Samples-6e8edd6d.mjs';
import { a as _sfc_main$2, _ as __nuxt_component_5$1 } from './Reviews-fe026bc6.mjs';
import _sfc_main$3 from './ContentDoc-c75da1b9.mjs';
import { useSSRContext, withAsyncContext, unref, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as useRoute, u as useSeoMeta, _ as _imports_0 } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_6 } from './CTA-4d468068.mjs';
import { c as contentStore } from './content-dd004145.mjs';
import { u as useAsyncData, q as queryContent } from './query-b692c5cd.mjs';
import './carousel.esm-f3e46384.mjs';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
import './basecomponent.esm-4dea05fb.mjs';
import './Sample-9ab5af0f.mjs';
import './nuxt-img-8052fd1d.mjs';
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
import './ContentRenderer-6b0894f7.mjs';
import './ContentRendererMarkdown-65285412.mjs';
import 'property-information';
import './preview-96021ab0.mjs';
import './ContentQuery-13f862c4.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="px-4 border border-primary border-t-0 border-b-0 flex flex-col-reverse sm:flex-row justify-around items-center"><div><div class="flex flex-row items-center gap-4"><h4 class="text-2xl">Service Not Found</h4></div></div><img id="nuxt-img" class="p-2 w-full sm:w-1/3"${ssrRenderAttr("src", _imports_0)}></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/ContentNotFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[\u2026slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { key_factors } = contentStore();
    const { path } = useRoute();
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: data == null ? void 0 : data.title,
      ogTitle: data == null ? void 0 : data.title,
      description: data == null ? void 0 : data.description,
      ogDescription: data == null ? void 0 : data.description,
      ogImage: data == null ? void 0 : data.cover,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UiBgShade = __nuxt_component_0;
      const _component_UiOrderFormDescription = _sfc_main$1$1;
      const _component_UiRatingsTotal = _sfc_main$2;
      const _component_SectionSamples = __nuxt_component_2;
      const _component_ContentDoc = _sfc_main$3;
      const _component_UiContentNotFound = __nuxt_component_5;
      const _component_SectionReviews = __nuxt_component_5$1;
      const _component_SectionCTA = __nuxt_component_6;
      _push(`<!--[--><div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]" data-v-2f9290de><div class="mx-auto py-8" data-v-2f9290de><div class="hero rounded-xl min-h-min relative" data-v-2f9290de>`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col sm:flex-row-reverse" data-v-2f9290de><div class="w-full md:max-w-lg lg:max-w-xl sm:w-80 md:w-4/12" data-v-2f9290de>`);
      _push(ssrRenderComponent(_component_UiOrderFormDescription, { type: "verticle" }, null, _parent));
      _push(`</div><div class="sm:w-2/3" data-v-2f9290de><h1 class="text-3xl sm:text-5xl font-bold" data-v-2f9290de><span class="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent" data-v-2f9290de>${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.title)}</span></h1><p class="pt-6 text-lg sm:max-w-xs lg:max-w-max" data-v-2f9290de>${ssrInterpolate((_b = unref(data)) == null ? void 0 : _b.subtitle)}</p><ul class="w-full text-lg hover:bg-transparent py-4" data-v-2f9290de><!--[-->`);
      ssrRenderList(unref(key_factors), (factor, i) => {
        _push(`<li class="hover:bg-transparent" data-v-2f9290de><span class="px-0" data-v-2f9290de><i class="pi pi-check text-xl mr-2 text-primary" data-v-2f9290de></i>${ssrInterpolate(factor.item)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_UiRatingsTotal, { classnames: "ustify-start md:justify-start" }, null, _parent));
      _push(`</div></div></div></div></div><div data-v-2f9290de>`);
      _push(ssrRenderComponent(_component_SectionSamples, null, null, _parent));
      _push(`<div class="container mx-auto max-w-4xl py-12 px-4" data-v-2f9290de><article class="prose prose-slate max-w-3xl mx-auto" data-v-2f9290de>`);
      _push(ssrRenderComponent(_component_ContentDoc, null, {
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiContentNotFound, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiContentNotFound)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></div>`);
      _push(ssrRenderComponent(_component_SectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTA, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[\u2026slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f9290de"]]);

export { __slug_ as default };
//# sourceMappingURL=_…slug_-0c9135a8.mjs.map
