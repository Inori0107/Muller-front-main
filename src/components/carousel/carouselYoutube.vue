<template>
  <Swiper
    :modules="modules"
    navigation
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :breakpoints="breakpoints"
    :loop="true"
    :centeredSlides="true"
    class="pa-16 overflow-visible"
  >
    <SwiperSlide v-for="(video, index) in videos" :key="index">
      <div class="video-container">
        <iframe :src="video.src" frameborder="0"></iframe>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const modules = [Navigation];

const videos = [
  {
    src: "https://www.youtube.com/embed/t3HXDgy9itY?si=xy3h4u9P447KevWF",
  },
  {
    src: "https://www.youtube.com/embed/e1QGblhrRNM?si=BTL3G1V4Z0f-taEw",
  },
  {
    src: "https://www.youtube.com/embed/XSk4hVITaO0?si=1Lps3h2013M8bhZo",
  },
  {
    src: "https://www.youtube.com/embed/wXy125yhYsM?si=x09Tw1-e-lNeaJKt",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 80,
  },
  960: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};
</script>

<style scoped lang="scss">
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: black;
}
</style>
