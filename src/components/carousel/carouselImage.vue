<template>
  <Swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :loop="true"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :centeredSlides="true"
    :breakpoints="breakpoints"
    @slideChange="updateActiveIndex"
    class="py-16"
  >
    <SwiperSlide
      v-for="(item, index) in items"
      :key="index"
      class="carousel-slide"
    >
      <v-img :src="item.image" class="carousel-image"></v-img>
    </SwiperSlide>
  </Swiper>
  <v-container>
    <v-card class="carousel-card">
      <v-card-title>{{ activeItem.title }}</v-card-title>
      <v-card-text
        class="text-start"
        v-html="activeItem.description"
      ></v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
const modules = [Autoplay];

import review01 from "../../assets/review/01review.webp";
import review02 from "../../assets/review/02review.webp";
import review03 from "../../assets/review/03review.webp";
import review04 from "../../assets/review/04review.webp";
import review05 from "../../assets/review/05review.webp";
import review06 from "../../assets/review/06review.webp";
import review08 from "../../assets/review/08review.webp";
import review09 from "../../assets/review/09review.webp";

const items = [
  {
    image: review01,
    title: "2016年度 新聲New Voice《祈願》",
    description: `如果現在讓您許一個願，您會許怎麼樣的願？<br /> <br />
    面對雜亂紛沓、災難頻仍的世界，木樓延續創作能量，世界委創系列首部曲-「祈願．東方」，以「祈願」為經，「宗教」為緯，給予人類心靈的安慰，減低人類對現實的不滿。<br />
    《祈願》- 願心靈歸於寧靜、祈福世界和平。希望透過每一願，療癒所有受傷的心靈。`,
  },
  {
    image: review02,
    title: "2017年度 《當代男聲：微音樂起》",
    description: `精緻、真實、本質的音響，堆疊出當代音樂多層次元素的輪廓，
    2017上半年，木樓將帶來當代男聲作品，期待呈現合唱作品的真實型態，演繹人類極具深度的精神層面。<br /><br />
    希望多元的演出形式與唱法，呈遞當代世界不同的樣貌予聽眾，反思追尋生命力量的核心源頭。`,
  },
  {
    image: review03,
    title: "2017年度 新聲New Voice《祈願Ⅱ》",
    description: `延續 2016 年底的《祈願》，木樓持續相信，音樂是最真實的呈現，足以平息不安的靈動。
    精緻多元的音響，撼動心神的樂音，經文與樂曲的再次激盪，讓語言不再成為藩籬。<br /><br />
    《祈願Ⅱ》- 願音樂撫育人心，願祈福世界和平。面對雜亂渾沌、災難摧殘的世界，透過飽滿音符，療癒受傷的心靈。`,
  },
  {
    image: review04,
    title: "2018年度 《微音樂起-斐燦當代》",
    description: `此場製作係延續木樓合唱團2017年起始之《男聲當代系列》計畫，
    木樓將以合唱表達信仰的虔誠，以樂音描繪出壯闊的海洋與綺麗的景緻；
    有回歸本心的音樂修練，更有屬於台灣自己的樂曲思考。<br /><br />
    希望透過當代音樂的多元，帶給所有聽眾一場絕佳的音樂饗宴。`,
  },
  {
    image: review05,
    title: "2018年度 新聲New Voice《世界祈願・黎明東昇》",
    description: `延續2016年《祈願》、2017年《祈願Ⅱ》，以宗教為其內涵，
    藉由精緻、真實、多層次元素音響，演唱與演繹人類極具深度的精神層面，以音樂與作曲元素進行意念的直接傳達，
    讓語言不再成為藩籬，並藉由樂音傳播，讓表演者與觀看者都能夠獲得心靈的滋潤。<br /><br />
    本場製作以祈願為主題，表達來自西方基督教世界的祈禱聲響，以跨時的概念，
    將文藝復興時期與現代音樂並列，展現不同時期的曲式風格與聲響要求，
    希望能夠將音符呈現的表象打破，讓觀眾體會到不同時期作品的相同本質，
    更邀請臺灣作曲家錢善華、任真慧、石青如與美國作曲家Z. Randall Stroope譜曲，從不同思維與文化為世界祈禱。
    邀請您來聆聽木樓合唱團《世界祈願・黎明東昇》音樂會，與我們一起為臺灣與世界祈福。`,
  },
  {
    image: review06,
    title: "2019年度 《樂綺當代・璀璨二十》",
    description: `2019年，是木樓合唱團成立第二十週年，換作人的生命歷程，已然成年；
    放眼這二十個年頭，歷經篳路藍縷的草創，精彩而活力的成長茁壯，
    出國比賽為國爭光的榮耀與挑戰，我們始終堅持精緻男聲合唱，鍥而不捨為臺灣留下屬於土地的樂音。<br /><br />
    《樂綺當代‧璀璨二十》將為您演唱從經典雋永的浪漫時期到燦爛華麗的當代作品，更從流行音樂演唱到 Barbershop，
    展現木樓成熟而多元的風格，透過聽眾熟悉的旋律呈現男聲合唱極致的藝術性。`,
  },
  {
    image: review08,
    title: "2020年度 《人民與土地People and the Land》",
    description: `【合唱音樂 × 土地情感】<br/>
    木樓以精緻純粹之聲，獻予所踏之地，擁抱人民與土地的連結，歌詠自然的情感堆疊，凝聚對土地的意識覺醒，省思與環境的平衡和諧。
    透過男聲細膩演唱當代多元合唱音樂，涵蓋屬於臺灣的樂曲創作，展現民族的獨有樣貌與文化，在歌頌愛與和平的樂章裡點綴記憶土地的美，聲聲不息地迴盪飄揚。<br /><br />
    在巡迴演出結束後，木樓將帶著音樂會內屬於國人的合唱作品與創作，前往紐西蘭參加第十二屆世界合唱大會（12th World Symposium Choral Music），
    代表臺灣與來自世界的合唱團齊聚歌唱，繼續在際樂壇推廣臺灣的合唱音樂藝術。`,
  },
  {
    image: review09,
    title: "2020年度 Golden Voice 金典男聲《光之境—月光·秘境·傳說》",
    description: `《光之境─月光‧秘境‧傳說》透過人聲融合交織與歌詞邂逅，優美的樂音與古老的歌謠不僅在山林間傳誦，更在都市裡迴盪。這些作品或是簡約，或是豐富織度勾勒而成，但都不約而同地展現對人性的關懷，讓我們彷彿可以穿越時空，看著聽著吟唱詩人，就著月亮的光影變化，在秘境中聽著一個又一個的傳說。<br /><br />
    ​此音樂會將以多首歐美當代合唱作品作為序章，突破傳統和聲的限制與想像，創造出一種近似光影的聲響效果，引領聽眾一探北國的風貌。下半場將延續木樓自2011年推動的《我們的土地‧我們的歌》本土男聲唱委託創作計劃，發表數首國人作曲家新創作品，為這片我們所鍾愛的土地留下印記。`,
  },
];

const activeIndex = ref(0); // 定義活躍的幻燈片索引
const activeItem = computed(() => items[activeIndex.value]);

const breakpoints = {
  0: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  960: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};

const updateActiveIndex = (swiper) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
.carousel-card,
.carousel-image {
  transition: transform 0.3s ease-in-out;
}
.carousel-card {
  background: linear-gradient(135deg, #875f593b 0%, #fff 50%, #875f593b 100%);
  margin: auto;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  padding: 16px;
}

.carousel-card .v-card-title {
  font-weight: bold;
  font-size: 1.2em;
  color: #333; /* 深灰色文字 */
  @include md {
    font-size: 1.5rem;
  }
}

.carousel-card .v-card-text {
  color: #666; /* 淺灰色文字 */
  font-weight: 600;
  padding: 8px;
  font-size: 0.6rem;
  @include md {
    font-size: 1rem;
  }
}
.swiper-slide-active .carousel-card,
.swiper-slide-active .carousel-image {
  transform: scale(1.2); /* 調整中間圖片的放大比例 */
}
</style>
