<template>
  <div class="container">
    <div class="row">
      <!-- Card -->
      <CardList />
      <CardList />
      <CardList />
      <!-- End Card -->
    </div>
  </div>
</template>

<script>
import CardList from "./CardList.vue";
export default {
  components: { CardList },
};
</script>

<style>
</style>