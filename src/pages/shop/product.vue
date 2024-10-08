<template>
  <div id="bg">
    <v-sheet>
      <v-container class="container">
        <span class="banner">PUBLICATION</span>
        <v-img src="../../assets/album/heroPic.webp" class="ma-8"></v-img>
      </v-container>
    </v-sheet>
    <!-- 專輯 -->
    <v-container class="container">
      <CarouselAlbum />
      <!-- 樂譜 -->
      <CarouselSheet />
    </v-container>
  </div>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import CarouselAlbum from "@/components/carousel/carouselAlbum.vue";
import CarouselSheet from "@/components/carousel/carouselSheet.vue";

definePage({
  meta: {
    title: "木樓合唱團 | 出版品",
    login: false,
    admin: false,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
#bg {
  background: url(../../assets/album/bg_shop.webp);
  background-size: cover;
  background-attachment: fixed;
}
.banner {
  font-weight: bold;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1.5rem;
  margin: 32px;
  @include lg {
    font-size: 2rem;
  }
}
.container {
  margin-bottom: 0px;
  padding: 64px 0;
  @include lg {
    padding: 128px 0;
  }
}
</style>
