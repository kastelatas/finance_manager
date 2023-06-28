import api from "@/axios/axiosWrapper";
import { v4 as uuidv4 } from "uuid";

class AuthService {
  async login({ email, password }) {
    try {
      const response = await api.post("/login", { email, password });
      console.log("Успешная авторизация:", response);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      return error;
    }
  }

  async register({ nickname, email, password }) {
    try {
      const user = {
        id: uuidv4(),
        fullName: nickname,
        email: email,
        userName: nickname,
        password: password,
        phone: null,
        imageId: null,
      };
      const response = await api.post("/users", user);
      console.log("Успешная регистрация:", response);
      return response;
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      return error;
    }
  }

  async signOut() {
    try {
      const response = await api.post("/signout");
      console.log("Успешный выход из аккаунта:", response.data);

      if (response.ok) {
        localStorage.removeItem("token");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Ошибка при выходе из аккаунта:", error);
    }
  }

  async authWithToken(token) {
    try {
      const response = await api.post("/auth", { token });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }
}

export default new AuthService();
