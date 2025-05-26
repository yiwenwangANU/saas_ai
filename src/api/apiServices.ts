import axios from "axios";
import { axiosPublic } from "./axiosPublic";

// Login user
type LoginData = {
  email: string;
  password: string;
};
type LoginResponse = {
  token: string;
  userId: string;
};
export const loginUser = async (
  userData: LoginData
): Promise<LoginResponse> => {
  // send json data this time
  try {
    const response = await axiosPublic.post<LoginResponse>(
      `/auth/login`,
      userData
    );
    // store jwt in local browser
    const { token, userId } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
    }
    throw error; // Rethrow for error handling in components
  }
};
