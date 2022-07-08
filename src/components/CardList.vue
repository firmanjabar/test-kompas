<template>
  <div
    v-for="date in tanggal"
    :key="date"
    class="
      col-lg-4 col-md-6 col-sm-12
      mb-3
      d-flex
      align-items-stretch
      justify-content-center
    "
  >
    <div class="card" style="width: 100%">
      <b class="card-header">
        {{ date.split(" ")[0] }}
        {{ date.split(" ")[1] }}
      </b>
      <div class="card-body">
        <p class="card-text">
          <CardItems :date="date" />
        </p>
      </div>
      <div class="card-footer d-flex flex-row-reverse">
        <small>
          <TotalPerDay :date="date" />
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CardItems from "./CardItems.vue";
import TotalPerDay from "./TotalPerDay.vue";

export default {
  components: { CardItems, TotalPerDay },
  setup() {
    const store = useStore();
    const tanggal = computed(() => store.getters.getDates);

    return { tanggal };
  },
};
</script>

<style>
</style>