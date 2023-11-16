import script from './carousel.esm-f3e46384.mjs';
import { _ as __nuxt_component_1 } from './Sample-9ab5af0f.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
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
import './basecomponent.esm-4dea05fb.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "Samples",
  __ssrInlineRender: true,
  setup(__props) {
    const samples = ref();
    const responsiveOptions = ref([
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimeCarousel = script;
      const _component_UiSample = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 sm:py-16" }, _attrs))}><div class="section-header my-8 text-center max-w-lg mx-auto px-4"><h2 class="text-2xl sm:text-4xl">Check Out Our Samples</h2><p>Original. Quality. On time</p></div>`);
      _push(ssrRenderComponent(_component_PrimeCarousel, {
        value: samples.value,
        numVisible: 4,
        numScroll: 3,
        responsiveOptions: responsiveOptions.value,
        circular: "",
        autoplayInterval: 3e3,
        class: "mb-4"
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSample, slotProps.data, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSample, slotProps.data, null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Samples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Samples-f6299b13.mjs.map
