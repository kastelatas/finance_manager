import $config from "@/config/config";
import axios from "axios";

class AxiosWrapper {
  constructor() {
    this.api = axios.create({
      baseURL: $config.api.host,
    });
  }

  async get(url, config) {
    try {
      const response = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async post(url, data, config) {
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async put(url, data, config) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async patch(url, data, config) {
    try {
      const response = await this.api.patch(url, data, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async delete(url, config) {
    try {
      const response = await this.api.delete(url, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }
}

const api = new AxiosWrapper();

export default api;
