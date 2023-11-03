import { _ as __nuxt_component_0 } from './nuxt-img-8052fd1d.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import '../server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CTA",
  __ssrInlineRender: true,
  props: {
    title: {},
    action: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="flex flex-col items-center sm:flex-row bg-neutral text-neutral-content rounded-lg gap-4 hover:shadow-lg">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        class: "w-48 sm:w-1/3 max-w-xs m-4",
        src: "/img/creative-writing-animate.svg"
      }, null, _parent));
      _push(`<div class="px-4 py py-8"><h2 class="text-2xl sm:text-4xl"><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${ssrInterpolate(_ctx.title)}</span></h2><p class="my-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p><button class="sm:mt-9 btn btn-primary flex">${ssrInterpolate(_ctx.action || "Hire an Expert Writer")}</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CTA-9f556b25.mjs.map
