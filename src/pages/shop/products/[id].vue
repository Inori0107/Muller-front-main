<template>
  <v-sheet style="height: auto; padding-top: 84px">
    <v-container>
      <v-row justify="center" align="center">
        <!-- 圖片 -->
        <v-col cols="9" md="4" class="text-center">
          <v-img :src="product.image" class="img"></v-img>
        </v-col>
        <!-- 商品資訊 -->
        <v-col cols="9" md="5">
          <v-col>
            <h1 class="my-4">{{ product.name }}</h1>
            <p class="mx-1">NT ${{ product.price }}</p>
            <v-divider class="my-4"></v-divider>
            <p class="my-4">{{ product.description }}</p>
          </v-col>
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-row class="mx-1">
              <v-btn variant icon @click="quantity.value.value--">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <span style="line-height: 3rem">{{ quantity.value }}</span>
              <v-spacer></v-spacer>
              <v-btn variant icon @click="quantity.value.value++">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                prepend-icon="mdi-cart"
                :loading="isSubmitting"
                flat="false"
              >
                加入購物車
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <!-- 歌曲列表 -->
      <v-row justify="center" class="mt-8">
        <v-col cols="9" v-if="product.song.length > 0">
          <v-card class="cool-card">
            <v-card-title class="song-title">收錄曲目</v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  v-for="(song, index) in product.song"
                  :key="index"
                >
                  <v-card class="song-card">
                    <v-card-text>{{ song }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-overlay
        class="align-center justify-center text-center"
        :model-value="!product.sell"
        persistent
      >
        <h1 class="text-red">已下架</h1>
        <v-btn to="/shop/product">商品列表</v-btn>
      </v-overlay>
    </v-container>
  </v-sheet>
  <!-- 商品預覽 -->
  <v-container class="mt-4 mb-8">
    <div class="category">更多商品</div>
    <v-row justify="center">
      <v-col
        cols="7"
        md="3"
        v-for="item in filteredProducts"
        :key="item._id"
        class="my-8"
      >
        <v-card>
          <v-img :src="item.image"></v-img>
          <v-card-title class="card-title">
            {{ item.name }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="'/shop/products/' + item._id">查看詳情</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import { useRoute, useRouter } from "vue-router";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useUserStore } from "@/stores/user";

definePage({
  meta: {
    title: "購物網 | 商品",
    login: false,
    admin: false,
  },
});

const { api } = useApi();
const route = useRoute();
const router = useRouter();
const createSnackbar = useSnackbar();
const user = useUserStore();

const product = ref({
  _id: "",
  name: "",
  price: 0,
  description: "",
  image: "",
  sell: true,
  category: "",
  song: [],
});

const load = async () => {
  try {
    const { data } = await api.get("/product/" + route.params.id);
    Object.assign(product.value, data.result);
    document.title = "購物網 | " + product.value.name;
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: { color: "red" },
    });
  }
};
load();

const addToCart = async (product, quantity) => {
  if (!user.isLogin) {
    router.push({
      query: {
        login: true,
      },
    });
    return;
  }
  try {
    const result = await user.addCart_P(product, quantity);
    createSnackbar({
      text: result.text,
      snackbarProps: { color: result.color },
    });
  } catch (error) {
    createSnackbar({ text: "加入購物車失敗", snackbarProps: { color: "red" } });
  }
};

const schema = yup.object({
  quantity: yup
    .number()
    .typeError("數量必填")
    .required("數量必填")
    .min(1, "最少為 1"),
});

const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: { quantity: 1 },
});
const quantity = useField("quantity");

const submit = handleSubmit(async (values) => {
  addToCart(product.value._id, values.quantity);
});

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

const filteredProducts = computed(() =>
  products.value.filter((item) => item._id !== product.value._id)
);
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
.img {
  min-width: 250px;
}
.cool-card {
  background: linear-gradient(135deg, #e0e0e0, #ffffff, #e0e0e0);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.song-title {
  font-size: 1.8rem;
  text-align: center;
  color: #3f51b5;
}
.song-card {
  background: white;
  border-radius: 10px;
  margin: 0px 32px 10px 32px;
}

.category {
  margin: auto;
  max-width: 150px;
  padding: 1rem;
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
