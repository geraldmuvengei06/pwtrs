import { _ as __nuxt_component_0 } from './nuxt-img-8052fd1d.mjs';
import script from './carousel.esm-f3e46384.mjs';
import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-body flex items-center text-center"><div class="indicator"><span class="indicator-item indicator-bottom badge badge-primary bg-white"><p class="flex flex-row items-center gap-1"><span class="pi pi-star-fill text-orange-400"></span> 4.5 </p></span><div class="avatar online"><div class="w-24 rounded-full">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    alt: "",
    id: "nuxt-img",
    src: "/img/writer.png"
  }, null, _parent));
  _push(`</div></div></div><h6>John Doe</h6><small class="underline">Nursing/Healthcare</small><p class="text-sm"><b>345</b> <span class="">Finished Papers</span></p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Expert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Experts",
  __ssrInlineRender: true,
  setup(__props) {
    let experts = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ];
    const responsiveOptions = ref([
      {
        breakpoint: "1199px",
        numVisible: 4,
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
      const _component_NuxtImg = __nuxt_component_0;
      const _component_PrimeCarousel = script;
      const _component_UiExpert = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="section-header my-8 text-center max-w-lg mx-auto"><h2 class="text-2xl sm:text-4xl">A Wide Selection of Expert Writers</h2><p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div><div class="hidden sm:grid grid-flow-row sm:grid-flow-col gap-2 mx-4 text-center"><p class="text-gray-400 text-sm sm:border-r-2 border-r-primary"> Our Writers Have Graduated from the Best Universities and Colleges </p>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/icons/harvard.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/icons/ss.svg"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrimeCarousel, {
        value: unref(experts),
        numVisible: 4,
        numScroll: 3,
        responsiveOptions: unref(responsiveOptions),
        circular: "",
        autoplayInterval: 3e3,
        class: "mb-4"
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiExpert, slotProps.data, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiExpert, slotProps.data, null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Experts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Experts-fa9cefb7.mjs.map
