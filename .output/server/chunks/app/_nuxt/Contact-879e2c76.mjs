import { _ as __nuxt_component_0 } from './nuxt-img-8052fd1d.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    minimal: { type: Boolean, default: false }
  },
  setup(__props) {
    const contacts = {
      whatsapp: "1-893-233-2333",
      mail: "support@test.com"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!_ctx.minimal) {
        _push(`<span><h2 class="text-2xl sm:text-4xl">Ask an Agent</h2><p>Want to contact us directly? No problem. We are always here for you.</p><div class="avatar-group -space-x-6"><div class="avatar"><div class="w-12 sm:w-16">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/writer.png"
        }, null, _parent));
        _push(`</div></div><div class="avatar"><div class="w-12 sm:w-16">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/writer.png"
        }, null, _parent));
        _push(`</div></div><div class="avatar"><div class="w-12 sm:w-16">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/writer.png"
        }, null, _parent));
        _push(`</div></div><div class="avatar"><div class="w-12 sm:w-16">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: "",
          id: "nuxt-img",
          src: "/img/writer.png"
        }, null, _parent));
        _push(`</div></div></div></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="flex items-center gap-4 my-2"><span class="pi pi-whatsapp"></span>${ssrInterpolate(contacts.whatsapp)}</p><p class="flex items-center gap-4 my-2"><span class="pi pi-envelope"></span>${ssrInterpolate(contacts.mail)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Contact-879e2c76.mjs.map
