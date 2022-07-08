<template>
  <div class="container mb-5">
    <div class="row">
      <CardList />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import CardList from "./CardList.vue";

export default {
  components: { CardList },
  setup() {
    const store = useStore();
    // store.dispatch("fetchDetails");
  },
};
</script>

<style>
</style>