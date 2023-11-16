import { _ as __nuxt_component_0 } from './BgShade-b4f14ddb.mjs';
import { _ as _sfc_main$1 } from './Contact-879e2c76.mjs';
import { _ as __nuxt_component_5 } from './Protection-b57a2d7a.mjs';
import { _ as __nuxt_component_3 } from './Experts-fa9cefb7.mjs';
import { _ as _sfc_main$2 } from './Unique-f1175792.mjs';
import { _ as __nuxt_component_6 } from './CTA-4d468068.mjs';
import { u as useSeoMeta } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './carousel.esm-f3e46384.mjs';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
import './basecomponent.esm-4dea05fb.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let title = "Contact Us";
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
      const _component_UiContact = _sfc_main$1;
      const _component_UiProtection = __nuxt_component_5;
      const _component_SectionExperts = __nuxt_component_3;
      const _component_SectionUnique = _sfc_main$2;
      const _component_SectionCTA = __nuxt_component_6;
      _push(`<!--[--><div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]"><div class="container mx-auto py-8"><div class="hero rounded-xl min-h-min relative">`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col sm:flex-row-reverse"><div class="md:flex max-w-xs sm:max-w-sm md:max-w-md w-full sm:w-2/5"><div class=""><div class="card glass my-8"><div class="card-body p-4">`);
      _push(ssrRenderComponent(_component_UiContact, null, null, _parent));
      _push(`</div></div></div></div><div class="sm:z-10"><h1 class="text-3xl sm:text-5xl font-bold"><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact Us</span></h1><p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest delivery time</b> and fully original content. </p>`);
      _push(ssrRenderComponent(_component_UiProtection, { class: "hidden sm:inline" }, null, _parent));
      _push(`</div></div></div></div></div><div class="container mx-auto">`);
      _push(ssrRenderComponent(_component_SectionExperts, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionUnique, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTA, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-68d341fa.mjs.map
