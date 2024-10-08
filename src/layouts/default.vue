<template>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    transition="fade-transition"
    width="2000"
    class="custom-drawer"
  >
    <template v-if="!isMobile">
      <v-btn variant="plain" icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-row justify="center" align="center" class="mt-10 pt-10">
        <!-- 左側圖片部分 -->
        <v-col cols="3">
          <img src="../assets/home/review.png" />
        </v-col>
        <!-- 右側選單部分 -->
        <v-col cols="5" offset="1">
          <v-row>
            <!-- 關於我們 -->
            <v-col>
              <v-list>
                <v-list-item
                  v-for="item in menuItems[0].items"
                  :key="item.text"
                  :to="item.to"
                  link
                  class="my-8"
                  :active="false"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <!-- 瞭解更多-->
            <v-col>
              <v-list>
                <v-list-item
                  v-for="item in menuItems[1].items"
                  :key="item.text"
                  :to="item.to"
                  link
                  class="my-8"
                  :active="false"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <!-- icon -->
          <v-row align="center">
            <v-col>
              <img src="../assets/LOGO/logo01.webp" />
            </v-col>
            <v-col>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-youtube</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <!-- 在小於 md 尺寸時顯示 v-list-group -->
    <template v-else>
      <v-btn variant="plain" icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list class="mt-10">
        <v-list-item
          v-for="item in menuItems.flatMap((group) => group.items)"
          :key="item.text"
          :to="item.to"
          link
          class="mt-6"
          :active="false"
        >
          <v-list-item-content>
            <v-list-item-title class="text-center">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>

  <!-- Main content -->
  <template v-if="!isMobile">
    <v-app-bar flat :class="{ 'app-bar-hidden': isAppBarHidden }">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <span>MENU</span>
      <v-spacer></v-spacer>
      <div class="logo_btn">
        <img src="../assets/LOGO/logo.gif" @click="$router.push('/')" />
      </div>
    </v-app-bar>
  </template>
  <template v-else>
    <v-btn icon variant="plain" @click="drawer = !drawer" class="drawer-btn">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </template>

  <!-- fab -->
  <div class="fab-button">
    <MemberDialog ref="MemberDialogRef" />
  </div>
  <v-btn icon @click="toggleFab" class="fab-button" v-show="user.isLogin">
    <v-icon>{{ isFabOpen ? "mdi-close" : "mdi-plus" }}</v-icon>
  </v-btn>
  <!-- FAB 展開的按鈕 -->
  <div v-if="isFabOpen" class="fab-actions">
    <v-btn
      v-for="(button, index) in buttons"
      :key="index"
      icon
      @click="handleClick(button.route)"
      v-show="button.showCondition"
    >
      <v-icon>{{ button.icon }}</v-icon>
      <component :is="button.component" v-if="button.component"></component>
    </v-btn>
  </div>

  <!-- Router content -->
  <v-main style="padding: 0">
    <router-view :key="$route.fullPath" />
  </v-main>

  <!-- footer -->
  <v-footer>
    <v-icon>mdi-copyright</v-icon>
    <a href="https://www.muller.org.tw/about">木樓合唱團</a>
    <p>Müller Chamber Choir</p>
  </v-footer>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import MemberDialog from "@/components/dialog/dialogMember.vue";
import { useDisplay } from "vuetify";

// 控制抽屜開關的狀態
const drawer = ref(false);
const isAppBarHidden = ref(false);
const lastScrollTop = ref(0);

// 處理滾動事件
const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  // 判斷滾動方向並隱藏或顯示 v-app-bar
  if (scrollPosition > lastScrollTop.value && scrollPosition > windowHeight) {
    isAppBarHidden.value = true;
  } else {
    isAppBarHidden.value = false;
  }

  lastScrollTop.value = scrollPosition <= 0 ? 0 : scrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isFabOpen = ref(false);
const toggleFab = () => {
  isFabOpen.value = !isFabOpen.value;
};

const user = useUserStore();
const router = useRouter();
const route = useRoute();
const createSnackbar = useSnackbar();
const MemberDialogRef = ref(null);

// 導航選單項目
const menuItems = ref([
  {
    name: "關於我們",
    items: [
      { text: "TOP", to: "/" },
      { text: "CHOIR", to: "/introduce" },
      { text: "CONDUCTOR", to: "/introduce" },
      { text: "PIANIST", to: "/introduce" },
    ],
  },
  {
    name: "了解更多",
    items: [
      { text: "PRODUCT", to: "/shop/product" },
      { text: "TICKET", to: "/shop/ticket", requiresAuth: true },
      { text: "MEMBER", to: "/member", requiresAuth: true },
    ],
  },
]);

// 按鈕資料
const buttons = computed(() => [
  { icon: "mdi-account-cog", route: "/admin", showCondition: user.isAdmin },
  { icon: "mdi-cart", route: "/shop/cart", showCondition: user.isLogin },
  { icon: "mdi-clipboard", route: "/member", showCondition: user.isLogin },
  {
    icon: "mdi-account-arrow-right",
    route: "/logout",
    showCondition: user.isLogin,
  },
]);

// 功能按鈕點擊處理
const handleClick = (route) => {
  if (route === "/logout") {
    logout();
  } else {
    router.push(route);
  }
};

// 登出處理
const logout = async () => {
  await user.logout();
  createSnackbar({
    text: "登出成功",
    snackbarProps: { color: "green" },
  });
};

watch(
  () => route.query.login,
  (login) => {
    if (login) {
      MemberDialogRef.value.isActive = true;
      router.replace({ query: {} });
    }
  }
);

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
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";

.custom-drawer {
  transition: 0.5s;
  .close-btn {
    font-size: 24px;
    position: absolute;
    right: 24px;
    top: 24px;
  }
  .v-list-item-title {
    font-size: 1.5rem;
  }
}

.v-app-bar {
  background: rgba(255, 255, 255, 0.42);
  backdrop-filter: blur(6.5px);
  padding: 16px;
  font-size: 1.5rem;
  transition: 0.3s; /* 添加平滑過渡效果 */
  z-index: 500 !important;
  &.app-bar-hidden {
    top: -100px !important; /* 隱藏 v-app-bar */
  }

  .logo_btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.drawer-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  background: #000;
  color: white;
  z-index: 10;
}

.fab-button {
  position: fixed;
  bottom: 64px;
  left: 24px;
  z-index: 100;
}

.fab-actions {
  position: fixed;
  bottom: 120px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 100;
}

.v-footer {
  background: lighten($third-color, 5%);
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
}
</style>
