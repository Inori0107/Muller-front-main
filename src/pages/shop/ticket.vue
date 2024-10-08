<template>
  <v-container class="container">
    <span class="banner">TICKET</span>
    <v-img src="../../assets/ticket/ticket_bg.webp" class="ma-8"></v-img>
    <v-row class="my-8" justify="center">
      <v-col cols="8" md="4" v-for="session in sessions" :key="session._id">
        <v-card class="ticket-card" @click="openTicketManagement(session._id)">
          <v-card-title>
            <b>{{ session.name }}</b>
          </v-card-title>
          <v-card-subtitle class="ticket-subtitle">
            {{ session.location }} {{ formatDate(session.date) }}
          </v-card-subtitle>
          <v-card-text>{{ session.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Ticket
    :sessionId="selectedSessionId"
    :isActive="isDialogActive"
    @update:isActive="updateDialogActive"
  />
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import Ticket from "@/components/ticket/tickets.vue";

definePage({
  meta: {
    title: "木樓合唱團 | 訂票系統",
    login: true,
    admin: false,
  },
});

const { api } = useApi();
const createSnackbar = useSnackbar();

const sessions = ref([]);

const formatDate = (dateString) => {
  return new Date(dateString).toISOString().split("T")[0];
};

const loadSessions = async () => {
  try {
    const { data } = await api.get("/session");
    sessions.value = data.result.data;
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const selectedSessionId = ref(null);
const isDialogActive = ref(false);

// 點擊回傳 session id
const openTicketManagement = (sessionId) => {
  selectedSessionId.value = sessionId;
  isDialogActive.value = true;
};

// 更新 dialog 狀態
const updateDialogActive = (newVal) => {
  isDialogActive.value = newVal;
};

loadSessions();
</script>

<style scoped lang="scss">
@import "@/styles/settings.scss";
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
.ticket-card {
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.ticket-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 4px;
}
</style>
