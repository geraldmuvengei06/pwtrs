import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Unique",
  __ssrInlineRender: true,
  props: {
    icon: { default: "pi pi-verified" },
    title: { default: "" },
    description: { default: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iusto repudiandae, nemo dolores sed adipisci magnam?" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card glass hover:shadow-md" }, _attrs))}><div class="card-body p-4"><div class="avatar"><div class="bg-primary bg-opacity-50 p-2 rounded-xl"><span class="${ssrRenderClass([_ctx.icon, "text-4xl"])}"></span></div></div><h2 class="card-title">${ssrInterpolate(_ctx.title)}</h2><p>${ssrInterpolate(_ctx.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Unique.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Unique",
  __ssrInlineRender: true,
  setup(__props) {
    let unique = [
      {
        icon: "pi pi-verified",
        title: "Original Content"
        // description: '',
      },
      {
        icon: "pi pi-verified",
        title: "Verified Writers"
        // description: '',
      },
      {
        icon: "pi pi-verified",
        title: "24/7 Support"
        // description: '',
      },
      {
        icon: "pi pi-verified",
        title: "Secure and Confidential"
        // description: '',
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiUnique = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-tr from-[#F2F8FC] via-[#FEF6F4] to-transparent" }, _attrs))}><div class="container mx-auto py-8 sm:py-16"><div class="section-header my-8 text-center max-w-lg mx-auto"><h2 class="text-2xl sm:text-4xl">How We Stand Out from the Crowd</h2><p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div><div class="max max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(unique), (un, i) => {
        _push(ssrRenderComponent(_component_UiUnique, mergeProps({ key: i }, un), null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Unique.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Unique-f1175792.mjs.map
