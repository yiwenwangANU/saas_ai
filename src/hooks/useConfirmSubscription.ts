import { useQuery } from "@tanstack/react-query";
import { confirmSubscription } from "../api/apiServices";
import { useRef } from "react";

const MAX_ATTEMPTS = 20;
const useConfirmSubscription = (sessionId: string | undefined) => {
  const attempts = useRef(0);
  return useQuery({
    queryKey: ["subscriptionStatus", sessionId],
    queryFn: confirmSubscription,
    staleTime: 0,
    refetchInterval: (subscriptionActive) => {
      if (subscriptionActive) return false;
      if (attempts.current >= MAX_ATTEMPTS) return false;
      else {
        attempts.current += 1;
        return 500;
      }
    },
  });
};
export default useConfirmSubscription;
