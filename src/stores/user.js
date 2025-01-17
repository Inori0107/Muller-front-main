// Utilities
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import UserRole from "@/enums/UserRole.js";
import { useApi } from "@/composables/axios";

export const useUserStore = defineStore(
  "user",
  () => {
    const { api, apiAuth } = useApi();

    const token = ref("");
    const account = ref("");
    const role = ref(UserRole.USER);
    const cart_P = ref(0);
    const cart_T = ref(0);

    const isLogin = computed(() => {
      return token.value.length > 0;
    });
    const isAdmin = computed(() => {
      return role.value === UserRole.ADMIN;
    });

    const login = async (values) => {
      try {
        const { data } = await api.post("/user/login", values);
        token.value = data.result.token;
        account.value = data.result.account;
        role.value = data.result.role;
        cart_P.value = data.result.cart_P;
        cart_T.value = data.result.cart_T;
        return "登入成功";
      } catch (error) {
        console.log(error);
        return error?.response?.data?.message || "發生錯誤，請稍後再試";
      }
    };

    const profile = async () => {
      if (!isLogin.value) return;

      try {
        const { data } = await apiAuth.get("/user/profile");
        account.value = data.result.account;
        role.value = data.result.role;
        cart_P.value = data.result.cart_P;
        cart_T.value = data.result.cart_T;
      } catch (error) {
        token.value = "";
        account.value = "";
        role.value = UserRole.USER;
        cart_P.value = 0;
        cart_T.value = 0;
      }
    };

    const logout = async () => {
      try {
        await apiAuth.delete("/user/logout");
      } catch (error) {
        console.log(error);
      }
      token.value = "";
      account.value = "";
      role.value = UserRole.USER;
      cart_P.value = 0;
      cart_T.value = 0;
    };

    const addCart_P = async (product, quantity) => {
      try {
        const { data } = await apiAuth.patch("/user/cart_P", {
          product,
          quantity,
        });
        cart_P.value = data.result;
        return {
          color: "green",
          text: "成功",
        };
      } catch (error) {
        return {
          color: "red",
          text: error?.response?.data?.message || "發生錯誤，請稍後再試",
        };
      }
    };

    const checkout_P = async () => {
      try {
        await apiAuth.post("/order/product");
        cart_P.value = 0;
        return {
          color: "green",
          text: "成功",
        };
      } catch (error) {
        return {
          color: "red",
          text: error?.response?.data?.message || "發生錯誤，請稍後再試",
        };
      }
    };

    const addCart_T = async (ticket, quantity, seat_info) => {
      try {
        const { data } = await apiAuth.patch("/user/cart_T", {
          ticket,
          quantity,
          seat_info,
        });
        cart_T.value = data.result;
        return {
          color: "green",
          text: "成功",
        };
      } catch (error) {
        return {
          color: "red",
          text: error?.response?.data?.message || "發生錯誤，請稍後再試",
        };
      }
    };

    const checkout_T = async () => {
      try {
        await apiAuth.post("/order/ticket");
        cart_T.value = 0;
        return {
          color: "green",
          text: "成功",
        };
      } catch (error) {
        return {
          color: "red",
          text: error?.response?.data?.message || "發生錯誤，請稍後再試",
        };
      }
    };

    return {
      token,
      account,
      role,
      cart_P,
      cart_T,
      isLogin,
      isAdmin,
      login,
      profile,
      logout,
      addCart_P,
      checkout_P,
      addCart_T,
      checkout_T,
    };
  },
  {
    persist: {
      key: "shop",
      paths: ["token"],
    },
  }
);
