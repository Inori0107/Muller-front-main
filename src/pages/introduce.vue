<template>
  <!-- heroPic -->
  <v-container fluid style="padding: 0">
    <v-img src="../assets/about/heroPic.png" style="position: relative">
      <h1 class="title">關於木樓</h1>
      <div class="diagonal-section"></div>
    </v-img>
    <v-row justify="center" class="content">
      <v-col md="6" class="text-center" v-if="!isMobile">
        <h1 @click="scrollToNav(navs.history)" style="cursor: pointer">
          歷史...
        </h1>
        <h1 @click="scrollToNav(navs.people)" style="cursor: pointer">
          人物...
        </h1>
      </v-col>
      <v-col cols="5" md="6">
        <span>
          木樓合唱團為室內男聲合唱團，<br />
          1999年成立至今秉持「男聲合唱藝術精緻化」的理念，<br />
          透過追求完美的演唱，呈現深度藝術性的音樂內涵；<br />
          透過歌者與聽眾間心靈感受的對話，傳達出音樂精緻的美感
        </span>
      </v-col>
    </v-row>
  </v-container>

  <!-- history -->
  <v-container fluid style="padding: 0" id="history">
    <!-- nav -->
    <div class="nav-bar">
      <div class="nav-item" style="background: #000"><p>歷史</p></div>
      <div
        v-for="(nav, index) in navItems"
        :key="index"
        :class="['nav-item', { 'nav-selected': selectedIndex === index }]"
        @click="scrollToSection(index)"
      >
        <p>{{ nav }}</p>
      </div>
    </div>
    <!-- 1999 -->
    <div class="year">
      <v-row>
        <v-col style="border-right: 2px solid #b2b2b2">
          <h2>
            1996年 <br />
            木樓合唱團正式成立
          </h2>
          <v-img src="../assets/about/choir.png"></v-img>
        </v-col>
        <v-col align-self="end">
          <v-row class="pb-8">
            <v-col cols="4" class="text-center"><h3>2007年</h3></v-col>
            <v-col cols="7">
              <p>
                赴日參加《第23屆寶塚國際室內合唱比賽》，獲民謠組金牌、浪漫組銀牌、綜合成績第二名。
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!-- 2010 -->
    <div class="year">
      <h1 class="years_title">2010年</h1>
      <v-row>
        <v-col style="border-right: 2px solid #b2b2b2">
          <div class="pt-8">
            <div v-for="(data, index) in history_2010_2015" :key="index">
              <v-row class="pb-8">
                <v-col cols="4" class="text-center">
                  <h3>{{ data.year }}</h3>
                </v-col>
                <v-col cols="7">
                  <p>{{ data.content }}</p>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-img src="../assets/about/champion.png" class="pb-8"></v-img>
          <v-row class="pb-8">
            <v-col cols="4" class="text-center">
              <h3>2019年</h3>
            </v-col>
            <v-col cols="7">
              <p>
                2月接受美國合唱指揮協會ACDA邀請，赴堪薩斯於《60周年全美雙年總會》演出；
              </p>
            </v-col>
            <span>
              同時受邀於舊金山史丹佛大學紀念教堂與洛杉磯巡演。成立首支附屬團隊「木樓松柏合唱團」，推廣並經營精緻純男聲合唱。
            </span>
          </v-row>
        </v-col>
        <v-col>
          <v-img src="../assets/about/conductor.png"></v-img>
          <div class="conductor">
            <v-row class="pt-8 pb-4">
              <v-col cols="4" class="text-center">
                <h3>2013年</h3>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="10">
                <p>
                  彭孟賢老師接任藝術總監暨指揮，並首度於國家音樂廳舉辦專場音樂會。
                </p>
              </v-col>
            </v-row>
          </div>
          <div v-for="(data, index) in history_2016_2018" :key="index">
            <v-row class="pb-8">
              <v-col cols="4" class="text-center">
                <h3>{{ data.year }}</h3>
              </v-col>
              <v-col cols="7">
                <p>{{ data.content }}</p>
              </v-col>
              <span>{{ data.text }}</span>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- 2020 -->
    <div class="year">
      <h1 class="years_title">2020年</h1>
      <v-row>
        <v-col style="border-right: 2px solid #b2b2b2">
          <div class="pt-8">
            <div v-for="(data, index) in history_2020_2021" :key="index">
              <v-row class="pb-8">
                <v-col cols="4" class="text-center">
                  <h3>{{ data.year }}</h3>
                </v-col>
                <v-col cols="7">
                  <p>{{ data.content }}</p>
                </v-col>
                <span>{{ data.text }}</span>
              </v-row>
            </div>
          </div>
        </v-col>
        <v-col align-self="end">
          <v-img src="../assets/about/singer.jpg"></v-img>
        </v-col>
      </v-row>
    </div>
    <h3 class="text-center py-4" style="color: black">⋯</h3>
    <h3 class="text-center" style="color: black">
      在未來，木樓將飛往更多國家與土地，傳遞更多精緻樂音；<br />
      在臺灣，以溫暖的歌聲讚頌寶島的美，延續良善，讓愛扎根。
    </h3>
  </v-container>

  <!-- people -->
  <v-container fluid class="people">
    <div class="hash-bar">
      <div class="hash"><p>人物</p></div>
      <div class="hash"><p>1999</p></div>
      <div class="hash"><p>2010</p></div>
      <div class="hash"><p>2020</p></div>
    </div>
    <!-- conductor -->
    <v-row>
      <v-col>
        <h1 class="hash_title">
          藝術總監暨指揮 <br />
          彭孟賢
        </h1>
        <p class="hash_content">
          2013年起擔任木樓合唱團藝術總監暨常任指揮至今，帶領團隊於國際賽中連續獲得首獎殊榮；
          <br />
          2015年彭孟賢帶領木樓合唱團榮獲《第九屆布拉姆斯國際合唱大賽暨音樂節》大賽總冠軍；<br />
          2016年再度帶領木樓榮獲《第九屆世界合唱大賽冠軍賽》男聲室內合唱世界金牌總冠軍；<br />
          自2016年至2020年3月於室內合唱團項目連續四年蟬聯冠軍寶座。
        </p>
      </v-col>
      <v-col>
        <v-img src="../assets/about/conductor.jpg" />
      </v-col>
    </v-row>
    <h2 class="hash_text">
      彭孟賢於藝術性、音樂能力、樂曲呈現整體性等方面獲得極高評價， <br />
      國際評審曾讚譽：「瘋狂而驚人的指揮、令人崇敬的成就、迷人而撼動人心的音樂」。
    </h2>
    <v-row style="padding: 128px 0">
      <v-col>
        <v-img src="../assets/about/pianist.jpg" />
      </v-col>
      <v-col>
        <h1 class="hash_title">鋼琴　王乃加</h1>
        <p class="hash_content">
          自3歲開始學習鋼琴。師事謝秋月、林得恩、徐頌仁、諸大明教授。<br />
          曾受鋼琴家史蘭倩絲卡讚譽「擁有驚人的視譜能力，是位不可多得的伴奏家」。<br />
          美國新英格蘭音樂院教授派翠希亞．桑德讚賞「其演奏令人深刻，是位有潛力、天賦異稟的鋼琴家」。<br />
          現任教於多所音樂班，以及擔任台北愛樂歌劇坊、台北室內合唱團、木樓合唱團鋼琴合作。亦擁有個人專屬頻道，定期發表編創作品。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { useDisplay } from "vuetify";
import { ref, onMounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

definePage({
  meta: {
    title: "木樓合唱團 | 關於我們",
    login: false,
    admin: false,
  },
});

// 使用 useDisplay 來偵測螢幕尺寸
const { mobile } = useDisplay();
const isMobile = ref(false);

watch(
  mobile,
  (newVal) => {
    isMobile.value = newVal;
  },
  { immediate: true }
);

const navItems = ref(["1999", "2010", "2020"]);
const selectedIndex = ref(0);
const sections = ref([]);

const navs = {
  history: "#history",
  people: ".people",
};

const scrollToNav = (nav, index) => {
  const target = document.querySelector(nav);
  if (target) {
    gsap.to(window, { scrollTo: target, duration: 1 });
  }
};
const scrollToSection = (index) => {
  gsap.to(window, { scrollTo: sections.value[index], duration: 1 });
};

// 更新選中的導航項目
const updateNav = (index) => {
  if (selectedIndex.value !== index) {
    selectedIndex.value = index;
  }
};
onMounted(() => {
  sections.value = document.querySelectorAll(".year");
  sections.value.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top",
      end: "bottom",
      invalidateOnRefresh: true,
      onEnter: () => updateNav(index), // 滾動進入區域時觸發
      onEnterBack: () => updateNav(index), // 滾動返回區域時觸發
    });
  });
});

const history_2010_2015 = [
  {
    year: 2010,
    content:
      "發行專輯《Wandering in a Song 流＋轉》：2010年《大鳴大放》音樂會實況錄音，入圍第22屆金曲獎傳統暨藝術音樂類『最佳演唱獎』。",
  },
  {
    year: 2012,
    content: "受邀於新加坡、馬來西亞新山、泰國曼谷等地舉辦四場巡演音樂會。",
  },
  {
    year: 2014,
    content: "啟動《吹動島嶼的風》委託創作計畫，並於臺北中山堂正式發表。",
  },
  {
    year: 2015,
    content:
      "赴德參加《第九屆德國布拉姆斯國際合唱大賽》獲得宗教組、民謠組、男聲室內合唱組等三面金牌，並榮獲大賽總冠軍。",
  },
];
const history_2016_2018 = [
  {
    year: 2016,
    content:
      "赴俄羅斯參加《第九屆世界合唱大賽：冠軍賽》獲得無伴奏宗教音樂組、男聲室內合唱組、現代音樂組等三面金牌。",
    text: "打破大會紀錄之高分贏得男聲室內合唱世界金牌冠軍！因代表臺灣參賽，表現優異、為國爭光，回國後接受蔡英文總統與文化部鄭麗君部長接見表揚。",
  },
  {
    year: 2017,
    content: "首度受邀赴美，於西雅圖、達拉斯、舊金山等三城舉辦巡迴音樂會。",
    text: "再度接受中國福建省藝術教育協會邀請，赴中國廈門市擔任《第二屆海峽兩岸合唱教育大會》示範團隊，演出兩場專場音樂會。",
  },
  {
    year: 2018,
    content: "首度受邀赴美，於西雅圖、達拉斯、舊金山等三城舉辦巡迴音樂會。",
    text: "再度接受中國福建省藝術教育協會邀請，赴中國廈門市擔任《第二屆海峽兩岸合唱教育大會》示範團隊，演出兩場專場音樂會。",
  },
];
const history_2020_2021 = [
  {
    year: 2020,
    content:
      "接受國際合唱聯盟IFCM邀請，赴紐西蘭奧克蘭市於每三年舉辦一次的合唱盛事：",
    text: "《世界合唱大會WSCM》演出兩場專場音樂會（因COVID-19疫情最終未能成行）。",
  },
  {
    year: 2021,
    content:
      "發行專輯《木色Ⅲ愛的禮讚》，獲110年度財團法人國家文化藝術基金會及臺北市政府文化局補助出版。",
    text: "成立「木色歌手」，培養追求頂尖卓越並具備豐富音樂素養、優秀演唱能力的歌手，持續琢磨打造木樓作為精緻男聲合唱的品牌。",
  },
];
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";
// heroPic
.title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  position: absolute;
  top: 70%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* 光芒效果 */
  @include md {
    font-size: 3rem;
  }
}
.diagonal-section {
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 0;
  background-color: white;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  transform: translateY(1px);
  @include md {
    height: 200px;
  }
}
.content {
  transform: translateY(-25%);
  @include md {
    transform: translateY(-100%);
  }
  span {
    font-size: 0.8rem;
    @include md {
      font-size: 1rem;
      line-height: 2;
    }
  }
}

// history
.nav-bar {
  display: flex;
  transform: scale(1.05);
  border-bottom: 2px solid #b2b2b2;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.nav-item {
  height: 50px;
  width: 200px;
  text-align: center;
  font-size: 1rem;
  line-height: 3;
  font-weight: 500;
  transform: skew(-20deg);
  border-right: 2px solid #b2b2b2;
  color: #b2b2b2;
  cursor: pointer;
  @include md {
    font-size: 1.5rem;
    height: 75px;
  }
  p {
    transform: skew(20deg);
  }
  &:first-child {
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    line-height: 2;
    letter-spacing: 16px;
    padding-left: 16px;
    @include md {
      font-size: 2rem;
      padding-left: 32px;
      letter-spacing: 24px;
    }
  }
}
.nav-selected {
  background: #b2b2b2;
  color: #fff;
}

.v-row {
  margin: 0 !important;
}
.v-col {
  padding: 0 !important;
}

.year {
  h1 {
    font-size: 2rem;
    background: #b2b2b2;
    padding: 16px 32px;
    color: white;
    @include md {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    padding: 32px;
    @include md {
      font-size: 2rem;
      padding-left: 48px;
    }
  }
  h3 {
    font-size: 1rem;
    color: #b2b2b2;
    @include md {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 0.6rem;
    @include md {
      font-size: 1rem;
    }
  }
  span {
    font-size: 0.6rem;
    padding: 0 32px;
    @include md {
      font-size: 1rem;
      padding: 0 48px;
    }
  }
  .conductor {
    padding-bottom: 4rem;
    @include md {
      padding-bottom: 6rem;
    }
    h3 {
      color: black;
    }
    p {
      font-size: 0.8rem;
      @include md {
        font-size: 1.2rem;
      }
    }
  }
}

// people
.people {
  margin-top: 4rem;
  background: #b2b2b2;
  padding: 0;
  @include md {
    margin-top: 6rem;
  }
  .hash-bar {
    display: flex;
    transform: scale(1.05);
    border-bottom: 2px solid #b2b2b2;
  }
  .hash {
    height: 50px;
    width: 200px;
    text-align: center;
    transform: skew(-20deg);
    color: #b2b2b2;
    margin-bottom: 3rem;
    @include md {
      height: 75px;
    }
    p {
      transform: skew(20deg);
    }
    &:first-child {
      color: #000;
      font-size: 1.5rem;
      font-weight: bolder;
      line-height: 2;
      letter-spacing: 16px;
      padding-left: 16px;
      background: #fff;
      @include md {
        font-size: 2rem;
        padding-left: 32px;
        letter-spacing: 24px;
      }
    }
  }
  .hash_title {
    font-size: 1.5rem;
    background: #b2b2b2;
    padding: 16px 32px;
    @include md {
      font-size: 2rem;
      padding: 16px 64px;
    }
  }
  .hash_text {
    font-size: 1.2rem;
    padding: 16px 32px;
    text-align: right;
    color: #fff;
    @include md {
      font-size: 1.5rem;
      padding: 32px 64px;
    }
  }
  .hash_content {
    font-size: 0.8rem;
    padding: 16px 32px;
    @include md {
      font-size: 1.2rem;
      padding: 16px 64px;
    }
  }
}
</style>
