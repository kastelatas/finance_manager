import api from "../axios/axiosWrapper";

class BalancesService {
  async getBalances(userId) {
    try {
      const response = await api.get(`/balances?userId=${userId}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
  async getBalance(userId, balanceId) {
    try {
      const response = await api.get(
        `/balances?userId=${userId}&id=${balanceId}`
      );
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
  async createBalance(balance) {
    try {
      const response = await api.post(`/balances`, { ...balance });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }

  async updateBalance(balance) {
    try {
      const response = await api.patch(`/balances/${balance.id}`, {
        ...balance,
      });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }

  async removeBalance(id) {
    try {
      const response = await api.delete(`/balances/${id}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
}

export default new BalancesService();
