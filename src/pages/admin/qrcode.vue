<template>
  <v-container>
    <v-col cols="12">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </v-col>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const onDecode = async (t_id) => {
  try {
    const { data } = await apiAuth.post("/order/ticket/validate", { t_id });
    createSnackbar({
      text: data.message,
      snackbarProps: {
        color: data.success ? "green" : "red",
      },
    });
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

const onInit = (promise) => {
  promise.catch((error) => {
    createSnackbar({
      text: "無法初始化相機",
      snackbarProps: {
        color: "red",
      },
    });
  });
};
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
