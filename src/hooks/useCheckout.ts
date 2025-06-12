import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createCheckoutSession, SubscribeResponse } from "../api/apiServices";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export type ErrorResponse = {
  status?: number;
  message?: string;
  data?: string;
};

const useCheckout = () => {
  return useMutation({
    mutationFn: createCheckoutSession,
    onSuccess: async (data: SubscribeResponse) => {
      const { sessionId } = data;
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");
      await stripe.redirectToCheckout({ sessionId });
    },
    onError: (error: AxiosError) => {
      console.error("Error checking out:", error);
      // axios will wrap backend error in error.response.data
      const data = error.response?.data as ErrorResponse;
      const message = data?.message || error.message || "Error checking out";
      toast.error("Error checking out: " + message);
    },
  });
};
export default useCheckout;
