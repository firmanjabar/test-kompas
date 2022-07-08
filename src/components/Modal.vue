<template>
  <teleport to="#modals">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tambah Entri</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form @submit="handleSendData">
            <div class="modal-body">
              <div class="mb-3">
                <label for="name" class="form-label">Nama</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Harga</label>
                <input
                  v-model="price"
                  type="number"
                  class="form-control"
                  id="price"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { formatDigit } from "../utils/formatDigit";

export default {
  setup() {
    const store = useStore();

    const name = ref("");
    const price = ref("");

    function handleSendData(e) {
      e.preventDefault();
      store.commit("setSendData", { name: name.value, price: price.value });
      store.commit("setSpentThisMonth");
      name.value = "";
      price.value = "";
    }

    return { name, price, handleSendData, formatDigit };
  },
};
</script>

<style>
</style>