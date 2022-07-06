<template>
  <div
    class="
      col-lg-4 col-md-6 col-sm-12
      mb-3
      d-flex
      align-items-stretch
      justify-content-center
    "
  >
    <div class="card" width="100%">
      <b class="card-header">18 Februari</b>
      <div class="card-body">
        <p class="card-text">
          <CardItems />
          <CardItems />
          <CardItems />
        </p>
      </div>
      <div class="card-footer d-flex flex-row-reverse">
        <small>
          <b>Total <span>Rp. [Rupiah]</span></b>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import CardItems from "./CardItems.vue";
export default {
  components: { CardItems },
};
</script>

<style>
</style>