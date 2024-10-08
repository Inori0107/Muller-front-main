<template>
  <v-main>
    <v-sheet class="heroPic">
      <v-container class="mt-8 bg">
        <h1 class="text-center">購物車</h1>
        <v-tabs class="mt-8" v-model="tab" fixed-tabs="false">
          <v-tab @click="toggleTab = true">產品</v-tab>
          <v-tab @click="toggleTab = false">票券</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div v-if="toggleTab">
              <CartProduct />
            </div>
            <div v-else>
              <CartTicket />
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";
import CartProduct from "@/components/cart/cartProduct.vue";
import CartTicket from "@/components/cart/cartTicket.vue";

const tab = ref(0);
const toggleTab = ref(true);

definePage({
  meta: {
    title: "木樓合唱團 | 購物車",
    login: true,
    admin: false,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
.heroPic {
  padding: 84px;
  @include md {
    padding-top: 112px;
  }
}
.v-tab {
  font-size: 18px;
}

.bg {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
}
</style>
