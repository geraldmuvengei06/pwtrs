import { _ as __nuxt_component_0$1 } from './BgShade-b4f14ddb.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-8052fd1d.mjs';
import { _ as __nuxt_component_2, a as _sfc_main$1$1 } from './Samples-6e8edd6d.mjs';
import { _ as __nuxt_component_4$1 } from './Payment-363e9a5e.mjs';
import { _ as __nuxt_component_5, a as _sfc_main$2$1 } from './Reviews-fe026bc6.mjs';
import { c as contentStore } from './content-dd004145.mjs';
import { mergeProps, useSSRContext, unref, ref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './Experts-fa9cefb7.mjs';
import { _ as _sfc_main$4 } from './Unique-f1175792.mjs';
import { _ as _sfc_main$5 } from './FreeFeatures-f0cede0c.mjs';
import { _ as __nuxt_component_6 } from './CTA-4d468068.mjs';
import script from './accordion.esm-eda2be4c.mjs';
import script$1 from './accordiontab.esm-96bee9db.mjs';
import { _ as __nuxt_component_4 } from './Faq-5b6729d8.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './carousel.esm-f3e46384.mjs';
import './index.esm-d6d0c21d.mjs';
import './baseicon.esm-95b030db.mjs';
import './basecomponent.esm-4dea05fb.mjs';
import './Sample-9ab5af0f.mjs';
import './Contact-879e2c76.mjs';
import './Faq-9ac12c87.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    let { key_factors } = contentStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiBgShade = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_UiOrderFormDescription = _sfc_main$1$1;
      const _component_UiPayment = __nuxt_component_4$1;
      const _component_UiRatingsTotal = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]" }, _attrs))}><div class="container mx-auto py-8"><div class="hero rounded-xl min-h-min relative">`);
      _push(ssrRenderComponent(_component_UiBgShade, null, null, _parent));
      _push(`<div class="hero-content flex-col-reverse lg:flex-row-reverse">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/typing-animate.svg",
        class: "hidden sm:inline sm:absolute lg:relative sm:right-1 sm:z-0 md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
      }, null, _parent));
      _push(`<div class="sm:z-10 sm:px-4 sm:pt-8"><h1 class="text-3xl sm:text-5xl font-bold">Let <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Writers</span> Ace your Essays!</h1><p class="py-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest delivery time</b> and fully original content. </p><div class="w-full inline sm:hidden shadow-lg my-8">`);
      _push(ssrRenderComponent(_component_UiOrderFormDescription, {
        class: "",
        type: "verticle"
      }, null, _parent));
      _push(`</div><ul class="w-full text-lg hover:bg-transparent"><!--[-->`);
      ssrRenderList(unref(key_factors), (factor, i) => {
        _push(`<li class="hover:bg-transparent"><span class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>${ssrInterpolate(factor.item)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_UiPayment, { class: "hidden sm:inline" }, null, _parent));
      _push(ssrRenderComponent(_component_UiRatingsTotal, { classnames: "justify-start mt-5" }, null, _parent));
      _push(`<div class="flex gap-4"></div></div></div></div><div class="hidden sm:block max-w-screen-xl mx-auto"></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    let active = ref(0);
    let accordion_items = [
      {
        icon: "pi pi-file-edit",
        header: "Give Us Your paper instructions",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "pi pi-users",
        header: "Hire your ideal essay writer online",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        icon: "pi pi-wallet",
        header: "Get your paper writing done",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_PrimeAccordion = script;
      const _component_PrimeAccordionTab = script$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="section-header my-8 text-center max-w-lg mx-auto"><h2 class="text-2xl sm:text-4xl">How to Order</h2><p class="">How to Hire a Professional to &quot;Do My Paper Online&quot;? </p></div><div><div class="flex flex-col sm:flex-row gap-4 px-4"><div class="hidden sm:flex sm:w-2/4">`);
      if (unref(active) === 0) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/order.png"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === 1) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/process.png"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === 2) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/download.png"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sm:w-2/4">`);
      _push(ssrRenderComponent(_component_PrimeAccordion, {
        class: "accordion-custom",
        activeIndex: unref(active),
        "onUpdate:activeIndex": ($event) => isRef(active) ? active.value = $event : active = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(accordion_items), (tab, i) => {
              _push2(ssrRenderComponent(_component_PrimeAccordionTab, { key: i }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([unref(active) == i && "animate-bounces", "avatar"])}"${_scopeId2}><div class="p-2 rounded-xl"${_scopeId2}><span class="${ssrRenderClass([tab.icon, "text-xl sm:text-4xl pt-1"])}"${_scopeId2}></span></div></div><h6 class="ml-2"${_scopeId2}>${ssrInterpolate(tab.header)}</h6>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["avatar", unref(active) == i && "animate-bounces"]
                      }, [
                        createVNode("div", { class: "p-2 rounded-xl" }, [
                          createVNode("span", {
                            class: ["text-xl sm:text-4xl pt-1", tab.icon]
                          }, null, 2)
                        ])
                      ], 2),
                      createVNode("h6", { class: "ml-2" }, toDisplayString(tab.header), 1)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>${ssrInterpolate(tab.content)}</p><div class="block sm:hidden py-4"${_scopeId2}>`);
                    if (i == 0) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/order.png"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (i == 1) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/process.png"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (i == 2) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/download.png"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(tab.content), 1),
                      createVNode("div", { class: "block sm:hidden py-4" }, [
                        i == 0 ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 0,
                          alt: "",
                          id: "nuxt-img",
                          src: "/img/order.png"
                        })) : createCommentVNode("", true),
                        i == 1 ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 1,
                          alt: "",
                          id: "nuxt-img",
                          src: "/img/process.png"
                        })) : createCommentVNode("", true),
                        i == 2 ? (openBlock(), createBlock(_component_NuxtImg, {
                          key: 2,
                          alt: "",
                          id: "nuxt-img",
                          src: "/img/download.png"
                        })) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(accordion_items), (tab, i) => {
                return openBlock(), createBlock(_component_PrimeAccordionTab, { key: i }, {
                  header: withCtx(() => [
                    createVNode("div", {
                      class: ["avatar", unref(active) == i && "animate-bounces"]
                    }, [
                      createVNode("div", { class: "p-2 rounded-xl" }, [
                        createVNode("span", {
                          class: ["text-xl sm:text-4xl pt-1", tab.icon]
                        }, null, 2)
                      ])
                    ], 2),
                    createVNode("h6", { class: "ml-2" }, toDisplayString(tab.header), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode("p", null, toDisplayString(tab.content), 1),
                    createVNode("div", { class: "block sm:hidden py-4" }, [
                      i == 0 ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 0,
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/order.png"
                      })) : createCommentVNode("", true),
                      i == 1 ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 1,
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/process.png"
                      })) : createCommentVNode("", true),
                      i == 2 ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 2,
                        alt: "",
                        id: "nuxt-img",
                        src: "/img/download.png"
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/HowItWorks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4"><article class="prose prose-slate max-w-3xl mx-auto"><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><!--[-->`);
  ssrRenderList(2, (i) => {
    _push(`<p class="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio eligendi minima ipsam eveniet amet inventore, voluptas sequi quam quibusdam impedit nulla, autem libero nemo! Voluptate atque, ut laudantium asperiores eligendi quia iste vero quos reiciendis soluta fuga quaerat veniam ratione magnam molestiae inventore! Numquam quae tempore, explicabo consequatur nemo consectetur voluptatem porro velit qui laudantium pariatur corporis deleniti. Distinctio cumque placeat voluptates modi dolorum omnis dignissimos doloribus ad delectus ex unde enim nulla in, est asperiores nostrum voluptatum perspiciatis accusamus laborum aspernatur quia totam incidunt. Fuga nam eius, enim, natus suscipit numquam accusantium voluptas eaque distinctio aut, adipisci ducimus. </p>`);
  });
  _push(`<!--]--><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><div class="flex flex-row gap-4 justify-normal"><ul class="mb-2"><li> MBA</li><li>Marketing</li><li>Economics</li><li>Social sciences</li><li>History</li><li>Philosophy</li><li>Journalism</li></ul><ul class="mb-2"><li>Nursing</li><li>Biology</li><li>Computing</li><li>Technology</li><li>Math</li><li>Accounting</li><li>Physics</li><li>Engineering.</li></ul></div><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><!--[-->`);
  ssrRenderList(1, (i) => {
    _push(`<p class="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio eligendi minima ipsam eveniet amet inventore, voluptas sequi quam quibusdam impedit nulla, autem libero nemo! Voluptate atque, ut laudantium asperiores eligendi quia iste vero quos reiciendis soluta fuga quaerat veniam ratione magnam molestiae inventore! Numquam quae tempore, explicabo consequatur nemo consectetur voluptatem porro velit qui laudantium pariatur corporis deleniti. Distinctio cumque placeat voluptates modi dolorum omnis dignissimos doloribus ad delectus ex unde enim nulla in, est asperiores nostrum voluptatum perspiciatis accusamus laborum aspernatur quia totam incidunt. Fuga nam eius, enim, natus suscipit numquam accusantium voluptas eaque distinctio aut, adipisci ducimus. </p>`);
  });
  _push(`<!--]--><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><ul class="mb-2"><li>500+ MA/Ph.D. degree-holders</li><li>English-speaking prowess</li><li>40+ disciplines covered</li><li>Nifty adjunct services</li><li>Strong money-back policy</li><li>Comfy interface</li><li>Valid guard, data encoding</li><li>Manifold emolument methods.</li></ul><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><!--[-->`);
  ssrRenderList(1, (i) => {
    _push(`<p class="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio eligendi minima ipsam eveniet amet inventore, voluptas sequi quam quibusdam impedit nulla, autem libero nemo! Voluptate atque, ut laudantium asperiores eligendi quia iste vero quos reiciendis soluta fuga quaerat veniam ratione magnam molestiae inventore! Numquam quae tempore, explicabo consequatur nemo consectetur voluptatem porro velit qui laudantium pariatur corporis deleniti. Distinctio cumque placeat voluptates modi dolorum omnis dignissimos doloribus ad delectus ex unde enim nulla in, est asperiores nostrum voluptatum perspiciatis accusamus laborum aspernatur quia totam incidunt. Fuga nam eius, enim, natus suscipit numquam accusantium voluptas eaque distinctio aut, adipisci ducimus. </p>`);
  });
  _push(`<!--]--><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><ul class="mb-2"><li>500+ MA/Ph.D. degree-holders</li><li>English-speaking prowess</li><li>40+ disciplines covered</li><li>Nifty adjunct services</li><li>Strong money-back policy</li><li>Comfy interface</li><li>Valid guard, data encoding</li><li>Manifold emolument methods.</li></ul><h2 class="text-xl sm:text-3xl mb-5 mt-4">Write My Paper! \u2013 No Problem!</h2><ol class="list-decimal ml-4"><li>Stipulate prerequisites. Our office will cross-examine provisions. Ensure that notions are accurate. If benchmarks are concise, deputies take projects.</li><li>After accepting, they do thorough research. Glimpse sound references, write down key targets. If you can\u2019t access certain periodicals, our database might stockpile them.</li><li>Scribblers prepare clear outlines, including important tidings. Organize thoughts logically. Insure style correctness, catalog, ingenuity, syntax.</li><li>Subsequent stage is writing tracts, integrating instructed provenance, and cited publications. Get in touch with authoresses, validating improvement.</li><li>When done, editors check and refine mistakes. Confirm that the treatise aligns with aspirations. Are ancillaries wanted? Notify us, we\u2019ll obey the novel addendum.</li></ol></article></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Seo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let title = "Essay Writing Service";
    useSeoMeta({
      title,
      ogTitle: title,
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: "",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHero = __nuxt_component_0;
      const _component_SectionSamples = __nuxt_component_2;
      const _component_SectionReviews = __nuxt_component_5;
      const _component_SectionExperts = __nuxt_component_3;
      const _component_SectionUnique = _sfc_main$4;
      const _component_SectionFreeFeatures = _sfc_main$5;
      const _component_SectionCTA = __nuxt_component_6;
      const _component_SectionHowItWorks = __nuxt_component_7;
      const _component_SectionFaq = __nuxt_component_4;
      const _component_SectionSeo = __nuxt_component_9;
      const _component_SectionCTAMale = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionSamples, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionExperts, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionUnique, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionFreeFeatures, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTA, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionHowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionFaq, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionSeo, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCTAMale, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cc0894bc.mjs.map
