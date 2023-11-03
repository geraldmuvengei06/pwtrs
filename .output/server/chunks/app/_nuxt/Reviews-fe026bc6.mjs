import { _ as __nuxt_component_0 } from './nuxt-img-8052fd1d.mjs';
import { useSSRContext, defineComponent, mergeProps, toRef, ref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import script from './carousel.esm-f3e46384.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RatingsTotal",
  __ssrInlineRender: true,
  props: {
    classnames: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col sm:flex-row gap-4", _ctx.classnames || "justify-between md:justify-center"]
      }, _attrs))}><div class="flex items-center justify-center border border-slate-200 bg-white hover:shadow sm:justify-start flex-row rounded-lg px-2 py-2"><div class="w-24">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/reviewsio.png"
      }, null, _parent));
      _push(`</div><p class="text-base sm:text-lg w-1/4 flex flex-row items-center"><span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span><span class="text-black">4.5</span></p></div><div class="flex items-center justify-center border border-slate-200 bg-white hover:shadow sm:justify-start flex-row rounded-lg px-2 py-2"><div class="w-24">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: "",
        id: "nuxt-img",
        src: "/img/sitejabber.png"
      }, null, _parent));
      _push(`</div><p class="text-base sm:text-lg w-1/4 flex flex-row items-center"><span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span><span class="text-black">4.7</span></p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/RatingsTotal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Review",
  __ssrInlineRender: true,
  props: {
    img: { default: "" },
    name: { default: "" },
    rating: { default: 4 },
    description: { default: "" }
  },
  setup(__props) {
    const props = __props;
    toRef(props == null ? void 0 : props.rating);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card mx-1 bg-slate-50 hover:shadow-md" }, _attrs))} data-v-bbbb6f56><div class="card-body p-4" data-v-bbbb6f56><h4 class="card-title mb-0" data-v-bbbb6f56>John Doe</h4><div class="divider py-0 my-0 border-slate-50" data-v-bbbb6f56>Essay</div><p data-v-bbbb6f56>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions" data-v-bbbb6f56><div class="rating rating-sm" data-v-bbbb6f56><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-v-bbbb6f56><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked data-v-bbbb6f56><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-v-bbbb6f56><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-v-bbbb6f56><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" data-v-bbbb6f56></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Review.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bbbb6f56"]]);
const _sfc_main = {
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = ref();
    const responsiveOptions = ref([
      // {
      //     breakpoint: '1199px',
      //     numVisible: 1,
      //     numScroll: 1
      // },
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
      const _component_UiRatingsTotal = _sfc_main$2;
      const _component_PrimeCarousel = script;
      const _component_UiReview = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-8 sm:py-16" }, _attrs))}><div class="section-header my-8 text-center max-w-lg mx-auto px-4"><h2 class="text-2xl sm:text-4xl">What Other Students Say</h2><p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>`);
      _push(ssrRenderComponent(_component_UiRatingsTotal, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrimeCarousel, {
        value: reviews.value,
        numVisible: 4,
        numScroll: 3,
        responsiveOptions: responsiveOptions.value,
        class: "mb-4"
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiReview, slotProps.data, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiReview, slotProps.data, null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_5 as _, _sfc_main$2 as a };
//# sourceMappingURL=Reviews-fe026bc6.mjs.map
