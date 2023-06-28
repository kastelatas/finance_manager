import api from "../axios/axiosWrapper";

class transactionsService {
  async getTransaction(userId) {
    try {
      const response = await api.get(`/transactions?userId=${userId}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
  async createTransaction(transaction) {
    try {
      const response = await api.post(`/transactions`, { ...transaction });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
}

export default new transactionsService();
