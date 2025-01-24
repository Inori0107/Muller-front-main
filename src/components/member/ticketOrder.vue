<template>
  <v-col cols="12">
    <v-data-table :items="items" :headers="headers">
      <template #item.cart_T="{ item }">
        <ul>
          <li v-for="ticket in item.cart_T" :key="ticket._id">
            {{ ticket.t_id.name }} * {{ ticket.quantity }}
          </li>
        </ul>
      </template>
      <template #item.qrCode="{ item }">
        <img :src="item.qrCode" alt="QR Code" />
      </template>
    </v-data-table>
  </v-col>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import QRCode from "qrcode";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "購物網 | 訂單管理",
    login: true,
    admin: true,
  },
});

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const items = ref([]);
const headers = [
  { title: "編號", key: "_id" },
  {
    title: "日期",
    key: "createdAt",
    value: (item) => new Date(item.createdAt).toLocaleString(),
  },
  { title: "商品", key: "cart_T", sortable: false },
  {
    title: "金額",
    key: "price",
    value: (item) => {
      return item.cart_T.reduce((total, current) => {
        return total + current.quantity * current.t_id.price;
      }, 0);
    },
  },
  { title: "QR Code", key: "qrCode", sortable: false },
];

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get("/order/ticket");
    const orders = data.result;
    for (const order of orders) {
      const qrCodeData = await QRCode.toDataURL(
        JSON.stringify(order.cart_T.map((ticket) => ticket.t_id._id))
      );
      order.qrCode = qrCodeData;
    }
    items.value = orders;
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};

onMounted(loadItems);
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
