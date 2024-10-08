<template>
  <div class="category">專輯</div>
  <v-row class="my-8" justify="center">
    <v-col cols="5" md="3" v-for="product in products" :key="product._id">
      <v-card>
        <v-img :src="product.image"></v-img>
        <v-card-title class="card-title">
          {{ product.name }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :to="'/shop/products/' + product._id">查看詳情</v-btn
          ><v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: "購物網",
    login: false,
    admin: false,
  },
});

const { api } = useApi();
const createSnackbar = useSnackbar();

const products = ref([]);

const loadProducts = async () => {
  try {
    const { data } = await api.get("/product", {
      params: {
        category: "專輯",
      },
    });
    products.value.splice(0, products.value.length, ...data.result.data);
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};
loadProducts();
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
.category {
  margin: auto;
  width: 150px;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
  @include md {
    font-size: 1.5rem;
  }
}
</style>
