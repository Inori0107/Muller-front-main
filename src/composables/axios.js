import axios from "axios";
import { useUserStore } from "@/stores/user";

// 建立實例
const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});
const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API,
});

// 在每個請求中自動加上 JWT Token
apiAuth.interceptors.request.use((config) => {
  const user = useUserStore();
  config.headers.Authorization = "Bearer " + user.token;
  return config;
});

// 處理回應錯誤，特別是處理登入過期的情況
apiAuth.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (error.response) {
      if (
        error.response.data.message === "登入過期" &&
        error.config.url !== "/user/extend"
      ) {
        const user = useUserStore();
        try {
          const { data } = await apiAuth.patch("/user/extend");
          user.token = data.result;
          error.config.headers.Authorization = "Bearer " + user.token;
          return axios(error.config);
        } catch (_) {
          user.logout();
        }
      }
    }
    return Promise.reject(error);
  }
);

// 新增 pingServer 函式以防止後端進入休眠狀態
function pingServer() {
  api
    .get("/ping")
    .then(() => {
      console.log("Ping success");
    })
    .catch((error) => {
      console.error("Ping failed:", error);
    });
}

// 每 5 分鐘 (300000 毫秒) ping 一次伺服器
setInterval(pingServer, 300000);

export const useApi = () => {
  return { api, apiAuth };
};
