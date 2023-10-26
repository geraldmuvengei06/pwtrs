import script from './message.esm-63076f29.mjs';
import { defineComponent, ref, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, mergeProps, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import script$1 from './menubar.esm-a24463f5.mjs';
import { k as __nuxt_component_3 } from '../server.mjs';
import { c as contentStore } from './content-dd004145.mjs';
import _sfc_main$6 from './ContentList-eea7ba8c.mjs';
import { _ as _sfc_main$7 } from './Contact-879e2c76.mjs';
import { _ as __nuxt_component_4 } from './Payment-363e9a5e.mjs';
import { _ as __nuxt_component_5 } from './Protection-b57a2d7a.mjs';
import './baseicon.esm-95b030db.mjs';
import './basecomponent.esm-4dea05fb.mjs';
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
import './index.esm-edfc390e.mjs';
import './ContentQuery-13f862c4.mjs';
import './query-b692c5cd.mjs';
import './preview-96021ab0.mjs';
import './nuxt-img-8052fd1d.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_PrimeMessage = script;
  _push(ssrRenderComponent(_component_PrimeMessage, mergeProps({
    class: "min-w-full my-0",
    severity: "warn"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Success Message Content`);
      } else {
        return [
          createTextVNode("Success Message Content")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Alert.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_3;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "rounded-lg overflow-hidden"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-primary-focus font-bold text-xl sm:text-3xl"${_scopeId}>nursingessayonline</h3>`);
      } else {
        return [
          createVNode("h3", { class: "text-primary-focus font-bold text-xl sm:text-3xl" }, "nursingessayonline")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "MobileHeader",
  __ssrInlineRender: true,
  setup(__props) {
    let { menu, services } = contentStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimeMenubar = script$1;
      const _component_UiLogo = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow z-10 min-w-full sticky top-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PrimeMenubar, {
        model: unref(menu),
        class: "min-w-full flex justify-between"
      }, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiLogo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiLogo)
            ];
          }
        }),
        item: withCtx(({ name, item, props, root, hasSubmenu }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.link) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: item.link,
                custom: "",
                class: ""
              }, {
                default: withCtx((routerProps, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a${ssrRenderAttrs(mergeProps({
                      href: routerProps.href
                    }, props.action))}${_scopeId2}><span${ssrRenderAttrs(props.icon)}${_scopeId2}></span><span${ssrRenderAttrs(props.name)}${_scopeId2}>${ssrInterpolate(item.name || item.item)}</span></a>`);
                  } else {
                    return [
                      createVNode("a", mergeProps({
                        href: routerProps.href
                      }, props.action), [
                        createVNode("span", props.icon, null, 16),
                        createVNode("span", props.name, toDisplayString(item.name || item.item), 17)
                      ], 16, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<a${ssrRenderAttrs(mergeProps({
                href: item.url,
                target: item.target
              }, props.action))}${_scopeId}><span${ssrRenderAttrs(props.icon)}${_scopeId}></span><span${ssrRenderAttrs(props.name)}${_scopeId}>${ssrInterpolate(item.name || item.item)}</span><span${ssrRenderAttrs(mergeProps({
                class: [hasSubmenu && (root ? "pi pi-fw pi-angle-down" : "pi pi-fw pi-angle-right")]
              }, props.submenuicon))}${_scopeId}></span></a>`);
            }
          } else {
            return [
              item.link ? (openBlock(), createBlock(_component_NuxtLink, {
                key: 0,
                to: item.link,
                custom: "",
                class: ""
              }, {
                default: withCtx((routerProps) => [
                  createVNode("a", mergeProps({
                    href: routerProps.href
                  }, props.action), [
                    createVNode("span", props.icon, null, 16),
                    createVNode("span", props.name, toDisplayString(item.name || item.item), 17)
                  ], 16, ["href"])
                ]),
                _: 2
              }, 1032, ["to"])) : (openBlock(), createBlock("a", mergeProps({
                key: 1,
                href: item.url,
                target: item.target
              }, props.action), [
                createVNode("span", props.icon, null, 16),
                createVNode("span", props.name, toDisplayString(item.name || item.item), 17),
                createVNode("span", mergeProps({
                  class: [hasSubmenu && (root ? "pi pi-fw pi-angle-down" : "pi pi-fw pi-angle-right")]
                }, props.submenuicon), null, 16)
              ], 16, ["href", "target"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/MobileHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let { menu, services } = contentStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiMobileHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_UiLogo = __nuxt_component_0$1;
      const _component_ContentList = _sfc_main$6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiMobileHeader, { class: "flex md:hidden" }, null, _parent));
      _push(`<div class="hidden md:flex navbar custom-nav bg-gradient-to-br from-[#F2F8FC]/80 to-[#FEF6F4]/80 border-b-2 backdrop-blur sticky top-0 z-50" data-v-63f75893><div class="navbar-start" data-v-63f75893><div class="dropdown" data-v-63f75893><label tabindex="0" class="btn btn-ghost md:hidden" data-v-63f75893><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-63f75893><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" data-v-63f75893></path></svg></label><ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-[#F5F6FC] text-neutral rounded-box" data-v-63f75893><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li data-v-63f75893>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item == null ? void 0 : item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li data-v-63f75893><div data-v-63f75893><a class="btn btn-secondary btn-outline" data-v-63f75893>Dashboard</a></div></li></ul></div>`);
      _push(ssrRenderComponent(_component_UiLogo, null, null, _parent));
      _push(`</div><div class="navbar-center hidden lg:flex" data-v-63f75893><ul class="menu menu-horizontal px-1" data-v-63f75893><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(`<li data-v-63f75893>`);
        if (!item.items) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item == null ? void 0 : item.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.icon) {
                  _push2(`<span class="${ssrRenderClass(item.icon)}" data-v-63f75893${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(item.name)}`);
              } else {
                return [
                  item.icon ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: item.icon
                  }, null, 2)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<details class="dropdown" data-v-63f75893><summary tabindex="0" data-v-63f75893>${ssrInterpolate(item.name)}</summary><ul tabindex="0" class="p-2 w-80 overflow-y-scroll shadow" data-v-63f75893>`);
          _push(ssrRenderComponent(_component_ContentList, { path: "/services" }, {
            default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(list, (service) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: service == null ? void 0 : service._path,
                    to: service == null ? void 0 : service._path,
                    class: "flex flex-col my-1"
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(service == null ? void 0 : service.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(service == null ? void 0 : service.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(list, (service) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: service == null ? void 0 : service._path,
                      to: service == null ? void 0 : service._path,
                      class: "flex flex-col my-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(service == null ? void 0 : service.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</ul></details>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="navbar-end flex gap-2" data-v-63f75893><a class="btn btn-primary" data-v-63f75893>Order Now</a><a class="btn btn-secondary btn-outline hidden sm:flex" data-v-63f75893>Dashboard</a></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-63f75893"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    let { services, menu, legal } = contentStore();
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLogo = __nuxt_component_0$1;
      const _component_UiContact = _sfc_main$7;
      const _component_ContentList = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_UiPayment = __nuxt_component_4;
      const _component_UiProtection = __nuxt_component_5;
      _push(`<!--[--><div class="bg-neutral text-neutral-content"><div class="container mx-auto"><footer class="footer px-4 py-10"><aside>`);
      _push(ssrRenderComponent(_component_UiLogo, null, null, _parent));
      _push(`<p> \xA9 ${ssrInterpolate(unref(year))} Reliable Expert Writers</p><header class="font-bold text-slate-100 mt-4">Contact Us</header>`);
      _push(ssrRenderComponent(_component_UiContact, { minimal: true }, null, _parent));
      _push(`</aside><nav><header class="font-bold text-slate-100">Services</header>`);
      _push(ssrRenderComponent(_component_ContentList, { path: "/services" }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (service) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: service == null ? void 0 : service._path,
                to: service == null ? void 0 : service._path,
                class: "flex flex-col my-1"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(service == null ? void 0 : service.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(service == null ? void 0 : service.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (service) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: service == null ? void 0 : service._path,
                  to: service == null ? void 0 : service._path,
                  class: "flex flex-col my-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(service == null ? void 0 : service.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav><header class="font-bold text-slate-100">Company</header><!--[-->`);
      ssrRenderList(unref(menu), (item, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i + "x",
          to: item == null ? void 0 : item.link,
          class: "link link-hover"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon) {
                _push2(`<span class="${ssrRenderClass([item.icon, "mr-2"])}"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                item.icon ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ["mr-2", item.icon]
                }, null, 2)) : createCommentVNode("", true),
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><nav><header class="font-bold text-slate-100">Legal</header><!--[-->`);
      ssrRenderList(unref(legal), (l, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: l.link,
          class: "link link-hover"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(l.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></footer></div></div><div class="container mx-auto"><footer class="footer px-4 py-10 border-t text-base-content border-base-300"><aside class="items-center grid-flow-row">`);
      _push(ssrRenderComponent(_component_UiPayment, null, null, _parent));
      _push(`</aside><nav class="md:place-self-center md:justify-self-end">`);
      _push(ssrRenderComponent(_component_UiProtection, null, null, _parent));
      _push(`</nav></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let notification = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAlert = __nuxt_component_0$2;
      const _component_UiHeader = __nuxt_component_1;
      const _component_UiFooter = __nuxt_component_2;
      _push(`<!--[-->`);
      if (unref(notification)) {
        _push(ssrRenderComponent(_component_UiAlert, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UiFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-00e25661.mjs.map
