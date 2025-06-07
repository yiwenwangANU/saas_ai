import axios from "axios";
import { axiosPublic } from "./axiosInstance";

// Signup user
type SignupData = {
  email: string;
  password: string;
  name: string;
};

export type SignupResponse = {
  message: string;
  user: { id: string; email: string; name: string };
};

export const signupUser = async (
  userData: SignupData
): Promise<SignupResponse> => {
  // send json data this time
  try {
    const response = await axiosPublic.post<SignupResponse>(
      `/auth/signup`,
      userData
    );
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

// Login user
type LoginData = {
  email: string;
  password: string;
};
type LoginResponse = {
  message: string;
  token: string;
  userId: string;
};
export const loginUser = async (userData: LoginData): Promise<string> => {
  // send json data this time
  try {
    const response = await axiosPublic.post<LoginResponse>(
      `/auth/login`,
      userData
    );
    const { token } = response.data;
    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
    }
    throw error; // Rethrow for error handling in components
  }
};

export const loginWithGoogle = async (): Promise<string> => {
  // send json data this time
  return new Promise((resolve, reject) => {
    window.open(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google`,
      "_blank",
      "width=500,height=600"
    );

    window.addEventListener("message", (event) => {
      if (event.origin !== `${import.meta.env.VITE_API_BASE_URL}`) return;
      const { token } = event.data;
      if (token) {
        resolve(token);
      } else {
        reject(new Error("No token received from OAuth flow"));
      }
    });
  });
};
