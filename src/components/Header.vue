<template>
  <div class="container text-center">
    <div class="m-4">
      <h1>Diari Jajan {{ thisMonth }} {{ thisYear }}</h1>
      <p>Pengeluaran Bulan Ini Rp. {{ formatDigit(spentThisMonth) }}</p>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <font-awesome-icon icon="fa-regular fa-pen-to-square" /> Tambah Item
      </button>
    </div>
  </div>
  <Modal />
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Modal from "./Modal.vue";
import { formatDigit } from "./../utils/formatDigit";

export default {
  components: { Modal },
  setup() {
    const store = useStore();
    const thisMonth = computed(() => store.getters.getThisMonth);
    const thisYear = computed(() => store.getters.getThisYear);
    const spentThisMonth = computed(() => store.getters.getSpentThisMonth);

    return {
      thisMonth,
      thisYear,
      spentThisMonth,
      formatDigit,
    };
  },
};
</script>

<style>
</style>