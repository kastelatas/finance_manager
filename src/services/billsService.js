import api from "../axios/axiosWrapper";

class BillsService {
  async getBills(userId) {
    try {
      const response = await api.get(`/bills?userId=${userId}`);
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
  async createBill(bill) {
    try {
      const response = await api.post(`/bills`, { ...bill });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
}

export default new BillsService();
