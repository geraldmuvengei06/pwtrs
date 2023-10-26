import { _ as __nuxt_component_0 } from './BgShade-b4f14ddb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-8052fd1d.mjs';
import { _ as __nuxt_component_4 } from './Payment-363e9a5e.mjs';
import { _ as __nuxt_component_1 } from './Faq-9ac12c87.mjs';
import { _ as __nuxt_component_5 } from './Reviews-fe026bc6.mjs';
import { _ as __nuxt_component_6 } from './CTA-4d468068.mjs';
import { u as useSeoMeta } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './accordion.esm-eda2be4c.mjs';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
import './basecomponent.esm-4dea05fb.mjs';
import './accordiontab.esm-96bee9db.mjs';
import './carousel.esm-f3e46384.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let title = "FAQs";
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
      const _component_UiFaq = __nuxt_component_1;
      const _component_SectionReviews = __nuxt_component_5;
      const _component_SectionCTA = __nuxt_component_6;
      _push(`<!--[--><div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]"><div class="container mx-auto py-8"><div class="hero rounded-xl min-h-min relative">`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col sm:flex-row-reverse">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/faq-animate.svg",
        class: "md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
      }, null, _parent));
      _push(`<div class="sm:z-10"><h1 class="text-3xl sm:text-5xl font-bold"><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FAQ</span></h1><p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest delivery time</b> and fully original content. </p>`);
      _push(ssrRenderComponent(_component_UiPayment, { class: "hidden sm:inline" }, null, _parent));
      _push(`</div></div></div></div></div><div><div class="container mx-auto max-w-4xl">`);
      _push(ssrRenderComponent(_component_UiFaq, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTA, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-386504ed.mjs.map
