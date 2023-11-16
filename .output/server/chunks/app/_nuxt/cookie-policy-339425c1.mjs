import { useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
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
import 'vue/server-renderer';

const _sfc_main = {
  __name: "cookie-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-slate-50"><div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4"><h2 class="text-2xl sm:text-4xl">Cookie Policy</h2><p>Original. Quality. On time</p></div></div><div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4"><article class="prose prose-slate max-w-3xl mx-auto"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quasi. Distinctio cum unde assumenda minima laudantium, animi nemo totam dolores excepturi temporibus molestias, omnis voluptatum officia sapiente sequi autem atque.</p></article></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/cookie-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cookie-policy-339425c1.mjs.map
