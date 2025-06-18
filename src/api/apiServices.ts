import axios from "axios";
import { axiosPrivate } from "./axiosInstance";

// Subscribe user
export type SubscribeData = {
  email: string;
  priceId: string;
};

export type SubscribeResponse = {
  sessionId: string;
};

export const createCheckoutSession = async (
  subscribeData: SubscribeData
): Promise<SubscribeResponse> => {
  // send json data this time
  try {
    const response = await axiosPrivate.post<SubscribeResponse>(
      `/api/stripe/create-checkout-session`,
      subscribeData
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

export const confirmSubscription = async (): Promise<boolean> => {
  try {
    const response = await axiosPrivate.get(`/api/stripe/confirm-subscription`);
    return response.data.subscriptionActive;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else if (error instanceof Error) {
      console.error("Error:", error.message);
    }
    throw error; // Rethrow for error handling in components
  }
};
