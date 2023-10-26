import { defineComponent, mergeProps, useSSRContext, ref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import script from './carousel.esm-f3e46384.mjs';
import { _ as __nuxt_component_1 } from './Sample-9ab5af0f.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderFormDescription",
  __ssrInlineRender: true,
  props: {
    type: { default: "horizontal" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card glass shadow-lg flat" }, _attrs))}><div class="${ssrRenderClass([_ctx.type == "verticle" ? "flex-column" : "flex-column md:flex-row", "card-body p-4 flex"])}"><div class="form-control"><textarea class="textarea textarea-bordered textarea-primary h-36" placeholder="Briefly describe your requirements."></textarea></div><button class="${ssrRenderClass([_ctx.type == "verticle" ? "" : "sm:mt-9", "btn btn-primary"])}">Find An Expert <span class="animate-pulse">\u{1F525}</span></button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/OrderFormDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Samples.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _, _sfc_main$1 as a };
//# sourceMappingURL=Samples-6e8edd6d.mjs.map
