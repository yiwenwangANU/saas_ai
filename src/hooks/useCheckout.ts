import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createCheckoutSession, SubscribeData } from "../api/apiServices";
import { stripePromise } from "../utils/stripeClient";
import { toast } from "react-toastify";

export type ErrorResponse = {
  status?: number;
  message?: string;
  data?: string;
};

const useCheckout = () => {
  return useMutation({
    mutationFn: async ({ priceId, email }: SubscribeData) => {
      const { sessionId } = await createCheckoutSession({ priceId, email });
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;
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
