<script setup lang="ts">
interface Props {
  type: "horizontal" | "verticle";
}

const props = withDefaults(defineProps<Props>(), {
  type: "horizontal",
});
import axios from "axios";
const title = "Cost of your order";
const total = ref("$0.0");
const calculating = ref(false);
const loading = ref(true);

interface DefaultType {
  key: any;
}

interface Setups {
  defaults?: Array<DefaultType>;
}

const setups = ref<Setups>({});

interface PriceForm {
  academic_level?: string;
  subject_area?: string;
  urgency?: string;
  document_type?: string;
  spacing?: string;
  pages?: number;
  charts?: number;
  slides?: number;
}

const calcPriceForm = ref<PriceForm>({
  academic_level: "",
  subject_area: "",
  urgency: "",
  document_type: "",
  spacing: "",
  pages: 1,
  charts: 0,
  slides: 0,
});

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const runtimeConfig = useRuntimeConfig();
const api_url = runtimeConfig?.public.apiUrl;

let http = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: api_url,
  headers: headers,
});

async function getSetups() {
  loading.value = true;
  try {
    const res = await http.get("/Setups/Get/");

    setups.value = res?.data?.Data;
    calcPriceForm.value.subject_area =
      setups.value.defaults[0].def_subject_area;
    calcPriceForm.value.urgency = setups.value.defaults[0].def_urgency;
    calcPriceForm.value.document_type = setups.value.defaults[0].def_doc_type;
    calcPriceForm.value.academic_level =
      setups.value.defaults[0].def_academic_level;
    calcPriceForm.value.language_style = setups.value.language_styles[0].id;
    calcPriceForm.value.spacing = setups.value.defaults[0].def_spacing;
    calcPriceForm.value.writer_level =
      setups.value.defaults[0].def_writer_level;
    calcPriceForm.value.style = setups.value.defaults[0].def_style;

    await calculatePrice();
  } catch (error) {
    console.log("error", error);
    throw error;
  } finally {
    loading.value = false;
  }
}

async function calculatePrice() {
  try {
    calculating.value = true;
    const res = await http.post("/Orders/CalculatePrice/", calcPriceForm.value);

    let totals = res?.data?.Data?.totals;
    console.log("total", totals);
    total.value = "$" + totals[totals.length - 1].value;
  } catch (error) {
    console.log("error", error);
    throw error;
  } finally {
    calculating.value = false;
  }
}
async function pages(state: boolean) {
  if (state) {
    calcPriceForm.value.pages++;
  } else {
    calcPriceForm.value.pages > 1 ? calcPriceForm.value.pages-- : 1;
  }
  await calculatePrice();
}

let { order_url, goTo } = contentStore();

function submitOrder() {
  const query = calcPriceForm.value;
  goTo(`${order_url}`, {}, query);
}

onMounted(async () => {
  await getSetups();
});
</script>

<template>
  <div
    :class="[
      'card bg-white/70',
      type == 'verticle' ? 'min-w-[320px] sm:max-w-xs' : '',
    ]"
  >
    <div class="card-body p-4 sm:p-4">
      <div
        v-if="loading"
        :class="[
          'flex gap-3 items-center animate-pulse',
          type == 'horizontal'
            ? 'flex-col md:flex-row'
            : 'flex-col md:flex-col',
        ]"
      >
        <div
          v-for="i in 5"
          :key="i"
          :class="[
            'h-12  bg-slate-200 rounded',
            type == 'horizontal' ? 'w-full md:w-1/5' : 'w-full md:w-full',
          ]"
        ></div>
      </div>
      <form
        v-else
        @submit.prevent="calculatePrice"
        :class="[
          'flex gap-2 sm:gap-3 md:gap-4',
          type == 'horizontal'
            ? 'flex-col md:flex-row md:items-center'
            : 'flex-col md:flex-col',
        ]"
      >
        <div class="p-inputgroup flex-1">
          <PrimeDropdown
            optionLabel="desc"
            optionValue="id"
            class="shadow bg-white border-primary-content"
            v-model="calcPriceForm.academic_level"
            @change="calculatePrice"
            :options="setups.academic_levels"
            placeholder="Academic Level"
          />
        </div>
        <div class="p-inputgroup flex-1">
          <PrimeDropdown
            :filter="true"
            optionLabel="desc"
            optionValue="id"
            class="shadow bg-white border-primary-content"
            placehoder="Select type of paper"
            v-model="calcPriceForm.document_type"
            @change="calculatePrice"
            :options="setups.document_types"
          />
        </div>
        <div class="p-inputgroup flex-1">
          <PrimeDropdown
            :filter="true"
            optionLabel="desc"
            optionValue="id"
            class="shadow bg-white border-primary-content"
            placehoder="Select urgency"
            v-model="calcPriceForm.urgency"
            @change="calculatePrice"
            :options="setups.urgency"
          />
        </div>
        <div
          class="p-inputgroup bg-white border-primary-content flex-1 px-0 rounded-lg"
        >
          <span
            class="p-inputgroup-addon cursor-pointer text-primary bg-slate-100 border-primary-content hover:bg-primary-content"
            @click="pages(false)"
            >-</span
          >
          <PrimeInputNumber
            class="text-center"
            :min="1"
            placeholder="No of pages"
            @change="calculatePrice"
            v-model="calcPriceForm.pages"
          />
          <span
            class="p-inputgroup-addon cursor-pointer text-primary bg-slate-100 border-primary-content hover:bg-primary-content"
            @click="pages(true)"
            >+</span
          >
        </div>
        <div class="flex flex-row flex-1 items-center justify-between">
          <div class="mx-2">
            <b>{{ total || "" }}</b>
          </div>
          <button type="button" @click="submitOrder" class="btn btn-primary">
            Order Now
            <span class="animate-pulse text-2xl">🔥</span>
          </button>
        </div>

        <UiRatingsTotal
          classnames="justify-between sm:justify-start"
          v-if="type == 'verticle'"
        />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-calc-price {
  /*width: 320px;*/
}
</style>
