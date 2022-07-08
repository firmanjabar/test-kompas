<template>
  <b>
    Total
    <span v-for="data in totalPerDay" :key="data">
      <span v-if="data.date == date"> Rp. {{ formatDigit(data.total) }} </span>
    </span>
  </b>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { formatDigit } from "./../utils/formatDigit";

export default {
  props: ["date"],
  setup(props) {
    const store = useStore();
    const totalPerDay = computed(() => store.getters.getTotalPerDay);
    const date = props.date;

    return {
      totalPerDay,
      formatDigit,
      date,
    };
  },
};
</script>

<style>
</style>