<template>
  <ul
    v-for="detail in details.filter((detail) => detail.tanggal === date)"
    :key="detail.id"
    class="list-group list-group-horizontal d-flex"
  >
    <li class="list-group-item">
      <small>{{ detail.jam }}</small>
    </li>
    <li class="list-group-item">
      <small class="text-start">{{ detail.nama }}</small>
    </li>
    <li class="list-group-item ms-auto">
      <small class="text-end">Rp. {{ formatDigit(detail.pengeluaraan) }}</small>
    </li>
  </ul>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { formatDigit } from "./../utils/formatDigit";

export default {
  props: ["date"],
  setup(props) {
    const store = useStore();
    const details = computed(() => store.getters.getAllDetails);
    const date = props.date;

    return {
      details,
      date,
      formatDigit,
    };
  },
};
</script>

<style>
</style>