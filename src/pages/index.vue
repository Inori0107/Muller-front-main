<template>
  <!-- heroPic -->
  <v-container fluid style="padding: 0">
    <v-img src="../assets/home/heroPic.png" style="position: relative">
      <div ref="textContainer" class="title">
        <span v-for="(char, index) in textArray" :key="index">
          {{ char }}
        </span>
        <br />
        <span
          v-for="(char, index) in textArraySecondary"
          :key="'secondary-' + index"
        >
          {{ char }}
        </span>
      </div>
    </v-img>
    <div class="diagonal-section"></div>
  </v-container>

  <!-- About us -->
  <v-container fluid style="padding: 0" class="animate-block">
    <v-row>
      <v-col cols="10">
        <v-img src="../assets/home/bg.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-img src="../assets/about/conductor.png" class="conductor_img" />
      </v-col>
      <v-col cols="5" class="about">
        <h1>
          關於木樓<br />
          於1999年成立至今...
        </h1>
        <h3>
          「木樓」之名，源自於建國中學古老的木造音樂教室。藉著歌唱，在各自的生命經歷裡找到相同的感動，
          也譜出一段段令人動容的音樂記憶。這是木樓的精神根基，也是前進的動力。
        </h3>
      </v-col>
    </v-row>
  </v-container>

  <!-- Youtube -->
  <v-container fluid id="bg_1" class="animate-block">
    <CarouselYoutube />
    <h1>
      木樓合唱團YouTube頻道 歡迎訂閱
      <v-icon style="padding-bottom: 6px">mdi-arrow-right</v-icon>
    </h1>
    <v-img src="../assets/home/bg_2.png"></v-img>
  </v-container>

  <!-- Performance -->
  <v-container fluid class="animate-block">
    <h1 class="text-center my-8">近期演出</h1>
    <v-container class="my-8">
      <v-row class="my-4" v-for="session in sessions" :key="session._id">
        <v-col class="ms-4">{{ formatDate(session.date) }}</v-col>
        <v-col>{{ session.name }}</v-col>
        <v-col>{{ session.description }}</v-col>
        <v-col class="text-end me-4">
          <v-btn variant="plain" color="black" to="/shop/ticket">
            立即購票
          </v-btn>
        </v-col>
        <v-divider />
      </v-row>
      <p class="text-end me-4">
        <v-btn variant="plain" color="black" to="/shop/ticket"> more </v-btn>
      </p>
    </v-container>
  </v-container>

  <!-- review -->
  <h1 class="text-center">演出回顧</h1>
  <CarouselImage />
  <div class="mt-5 pt-5">
    <DialogComponent title="關於我們"></DialogComponent>
  </div>
  <!-- publication -->
  <v-container fluid class="publication">
    <v-row justify="center" style="transform: translateY(-25%)">
      <v-col cols="5" md="4">
        <v-row>
          <v-col cols="6">樂譜</v-col>
          <v-col cols="6" class="text-end">
            <v-btn variant="plain" color="black" to="/shop/product">
              more
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-img src="../assets/home/sheet.webp"></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5" md="4">
        <v-row>
          <v-col cols="6">專輯</v-col>
          <v-col cols="6" class="text-end">
            <v-btn variant="plain" color="black" to="/shop/product">
              more
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-img src="../assets/home/love02.png"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <!-- Footer -->
  <v-container fluid class="bg-black footer animate-block">
    <v-row dense>
      <v-col cols="12">
        <h1>MÜLLER CHAMBER CHOIR</h1>
      </v-col>
      <v-col cols="12">
        <h4>木樓合唱團</h4>
      </v-col>
      <v-col offset="6">
        <h5>
          106001臺北市大安區杭州南路二段7-1號B1F <br />
          B1F., No. 7-1, Sec. 2, Hangzhou S. Rd., Da’an Dist., Taipei City 106,
          Taiwan <br />
          TEL：+886-2-2365-8943 <br />
          FAX：+886-2-2341-2340 <br />
          Email : muller@muller.org.tw
        </h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CarouselYoutube from "@/components/carousel/carouselYoutube.vue";
import CarouselImage from "@/components/carousel/carouselImage.vue";
import { ref, onMounted } from "vue";
import { useApi } from "@/composables/axios";
import { definePage } from "vue-router/auto";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

definePage({
  meta: {
    title: "木樓合唱團",
    login: false,
    admin: false,
  },
});

const textPrimary = "MÜLLER CHAMBER CHOIR";
const textSecondary = "木樓合唱團";

const textArray = ref(textPrimary.split(""));
const textArraySecondary = ref(textSecondary.split(""));

const textContainer = ref(null);

onMounted(() => {
  // 圖片動畫
  gsap.fromTo(
    ".heroPic",
    { filter: "blur(10px)", scale: 1.1 },
    {
      filter: "blur(0px)",
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    }
  );

  // 文字動畫，延遲圖片動畫完成後開始
  gsap.fromTo(
    textContainer.value.children,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.5, // 與圖片動畫對齊，圖片動畫結束後立即開始文字動畫
    }
  );
  // 對所有主要區塊統一應用淡入和縮放的效果
  gsap.utils.toArray(".animate-block").forEach((block) => {
    gsap.fromTo(
      block,
      { opacity: 0, y: -100 }, // 向上浮動進入
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: block,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});

// 使用 useApi composable 來進行 API 請求
const { apiAuth } = useApi();

const sessions = ref([]);

// 日期格式化函數
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "／");
};

// 加載場次資料的函數
const loadSessions = async () => {
  try {
    const { data } = await apiAuth.get("/session", {
      params: {
        upcoming: true, // 假設 API 支援查詢即將到來的演出
      },
    });
    sessions.value = data.result.data;
  } catch (error) {
    console.error("Failed to load sessions:", error);
  }
};

// 在組件掛載後立即加載場次資料
onMounted(() => {
  loadSessions();
});
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";

.title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  line-height: 1.5;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* 光芒效果 */
  @include md {
    font-size: 3rem;
  }
  @include xl {
    font-size: 4rem;
  }
}

.diagonal-section {
  background-color: white;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  transform: translateY(-30%);
  height: 150px;
  @include md {
    height: 250px;
  }
}

.conductor_img {
  transform: translateY(-30%);
}
.about {
  padding: 20px;
  h1 {
    line-height: 1.2;
    margin-bottom: 10px;
    font-size: 1.5rem;
    @include md {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1rem;
    @include md {
      font-size: 1.2rem;
    }
  }
}
#bg_1 {
  background: url(../assets/home/bg_1.png) no-repeat;
  position: relative;
  padding: 0;
  padding-top: 16rem;
  h1 {
    line-height: 1.2;
    margin-left: 4rem;
    font-size: 1.2rem;
    @include md {
      font-size: 2rem;
    }
  }
}

.publication {
  padding-top: 128px;
  background: linear-gradient(white 50%, black 100%);
}

.footer {
  padding: 3rem 0;
  @include md {
    padding: 6rem 0;
  }
  h1 {
    padding: 0 32px;
    font-size: 1.5rem;
    font-weight: 500;
    @include md {
      font-size: 2.5rem;
    }
  }
  h4 {
    padding: 0 32px;
    font-size: 1rem;
    letter-spacing: 1rem;
    @include md {
      font-size: 1.5rem;
    }
  }
  h5 {
    padding: 0 32px;
    font-size: 0.6rem;
    font-weight: normal;
    @include md {
      font-size: 1rem;
    }
  }
}
</style>
