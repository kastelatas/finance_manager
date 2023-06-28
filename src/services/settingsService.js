import api from "../axios/axiosWrapper";

class SettingsService {
  async updateProfile(profile) {
    try {
      const response = await api.patch(`/users/${profile.id}`, { ...profile });
      return response;
    } catch (error) {
      console.error("Ошибка авторизации по токену:", error);
    }
  }
}

export default new SettingsService();
