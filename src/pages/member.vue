<template>
  <v-main>
    <v-sheet class="heroPic">
      <v-container>
        <v-row justify="center">
          <v-col cols="5" style="position: relative">
            <h2 class="text">票券清單</h2>
            <v-img src="../assets/other/ticket.png" />
            <v-btn variant="plain" @click="showContent('tickets')"
              >顯示更多</v-btn
            >
          </v-col>
          <v-col cols="5" style="position: relative">
            <h2>商品清單</h2>
            <v-img src="../assets/other/product.png" />
            <v-btn variant="plain" @click="showContent('orders')"
              >顯示更多</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- 動態顯示的內容 -->
    <v-container class="order" v-if="activeContentComponent">
      <component :is="activeContentComponent" />
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { definePage } from "vue-router/auto";

const ProductOrder = defineAsyncComponent(() =>
  import("@/components/member/productOrder.vue")
);
const TicketOrder = defineAsyncComponent(() =>
  import("@/components/member/ticketOrder.vue")
);

definePage({
  meta: {
    title: "木樓合唱團 | 會員",
    login: true,
    admin: false,
  },
});

const activeContent = ref("");

const contents = {
  orders: ProductOrder,
  tickets: TicketOrder,
};

const showContent = (content) => {
  activeContent.value = content;
};

const activeContentComponent = computed(() => {
  return contents[activeContent.value] || null;
});
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
.heroPic {
  padding-top: 64px;
  @include md {
    padding-top: 84px;
  }
}
.title {
  text-align: center;
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

h2 {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
  z-index: 5;
  @include md {
    font-size: 2.5rem;
  }
}

.v-btn {
  height: 60px;
  width: 200px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  font-size: 1.2rem;
  font-weight: 600;
  @include md {
    font-size: 1.5rem;
  }
}

.order {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 80px;
  transition: 0.5s;
}
</style>
