import { _ as __nuxt_component_0 } from './BgShade-b4f14ddb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-8052fd1d.mjs';
import { _ as __nuxt_component_5 } from './Protection-b57a2d7a.mjs';
import { _ as __nuxt_component_3 } from './Experts-fa9cefb7.mjs';
import { _ as _sfc_main$1 } from './FreeFeatures-f0cede0c.mjs';
import { _ as _sfc_main$2 } from './Unique-f1175792.mjs';
import { _ as __nuxt_component_10 } from './CTAMale-aa423154.mjs';
import { c as contentStore } from './content-dd004145.mjs';
import { u as useSeoMeta } from '../server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    let { key_factors } = contentStore();
    let title = "About Us";
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
      const _component_UiProtection = __nuxt_component_5;
      const _component_SectionExperts = __nuxt_component_3;
      const _component_SectionFreeFeatures = _sfc_main$1;
      const _component_SectionUnique = _sfc_main$2;
      const _component_SectionCTAMale = __nuxt_component_10;
      _push(`<!--[--><div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]"><div class="container mx-auto py-8"><div class="hero rounded-xl min-h-min relative">`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col sm:flex-row-reverse">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/about-us-page-animate.svg",
        class: "md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
      }, null, _parent));
      _push(`<div class="sm:z-10"><h1 class="text-3xl sm:text-5xl font-bold"><span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Us</span></h1><p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest delivery time</b> and fully original content. </p><ul class="w-full text-lg hover:bg-transparent py-4"><!--[-->`);
      ssrRenderList(unref(key_factors), (factor, i) => {
        _push(`<li class="hover:bg-transparent"><span class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>${ssrInterpolate(factor.item)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_UiProtection, { class: "hidden sm:inline" }, null, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_SectionExperts, null, null, _parent));
      _push(`<div class="container mx-auto max-w-4xl py-12 px-4"><article class="prose prose-slate max-w-3xl mx-auto"><p>Most of the time, research papers constitute students&#39; final and most demanding requirements. Thus, the majority of students are intimidated when it comes to producing a high-quality paper that can suffice, if not exceed, their teachers&#39; expectations. If you want a well-researched paper with less time and effort required, try nursingessayonline&#39;s writing help services today!</p><h2>Write My Research Paper: Our Experts Will Help</h2><p>Academic papers involve in-depth analysis and comprehensive discussion of a research topic. Thus, they are commonly given by professors as the final requirement for students in their courses. They use these papers to evaluate their understanding of the course and apply higher-order thinking skills. It can take weeks for an amateur writer to come up with a defendable topic. You also need to<span></span>consider many factors<span></span>when you\u2019re deciding.</p><p>These factors increase the difficulty of research paper writing, especially for novice writers who are yet to develop a niche or field of specialization. Students often feel lost and confused in the middle of creating their academic papers or lab report.</p><p>Fortunately, our research paper writing service, nursingessayonline, boasts a team of seasoned writers ready to assist everyone from high school students to Ph.D. candidates.</p><h3>Diverse Expertise Available</h3><p>Behind our <a>custom research paper writing service</a> are talented and highly skilled experts who graduated from prestigious universities, including those in the Ivy League. They have extensive knowledge and experience when it comes to academic papers. Besides, all of them have gone through nursingessayonline testing for the best result guarantee. Our authors are ready to share their expertise with you through our platform!</p></article></div>`);
      _push(ssrRenderComponent(_component_SectionFreeFeatures, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionUnique, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTAMale, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-248c9ce5.mjs.map
