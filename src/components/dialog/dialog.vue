<template>
  <v-dialog max-width="500" v-model="isActive" transition="dialog-transition">
    <template v-slot:default>
      <v-card>
        <h2 class="mt-4 text-center">木樓之友</h2>
        <v-card-text>
          <v-img src="../../assets/home/contact us.webp"></v-img>
          <v-tabs v-model="tab" fixed-tabs="false">
            <v-tab @click="toggleTab = true">登入</v-tab>
            <v-tab @click="toggleTab = false">註冊</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <div v-if="toggleTab">
                <LoginForm @login-success="handleLoginSuccess" />
              </div>
              <div v-else>
                <SignUpForm @signUp-success="SignUp" />
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "@/components/form/login.vue";
import SignUpForm from "@/components/form/signUp.vue";
import { useUserStore } from "@/stores/user";

// tab
const isActive = ref(false);
const tab = ref(0);
const toggleTab = ref(true);

const user = useUserStore();

const handleLoginSuccess = () => {
  isActive.value = false;
};
const SignUp = () => {
  toggleTab.value = true;
};

defineExpose({
  isActive,
  openDialog: () => (isActive.value = true), // 新增方法來開啟對話框
});
</script>
