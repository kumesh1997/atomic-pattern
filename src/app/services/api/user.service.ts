import axios from "axios";
import globalAppConfig from "../../config/global-app-config";

class UserService {
  static async login(credentials: { email: string; password: string }) {
    try {
      const response = await axios.post(
        `${globalAppConfig.baseApiUrl}/users/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to login");
    }
  }
}

export default UserService;
