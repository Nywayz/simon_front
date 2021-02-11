import instance from "./axios.config";
import store from "./../../store/store";

const AuthService = {
  login: async ({ username, password }) => {
    // i cant access to store or persisted  current value outside components, it force us to put it in localstorage
    const { data } = await instance.post("login", {
      email: username,
      password: password,
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("refresh_token", data.refresh_token);
  },

  refreshToken: async (callback) => {
    try {
      localStorage.removeItem("token");
      const { data } = await instance.post("token/refresh", {
        refresh_token: AuthService.getRefreshToken(),
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("refresh_token", data.refresh_token);
      return true;
    } catch (error) {
      callback();
    }
  },
  logout: () => {
    localStorage.removeItem("token");
  },
  getToken: () => localStorage.getItem("token"),
  getRefreshToken: () => localStorage.getItem("refresh_token"),
};

export default AuthService;
