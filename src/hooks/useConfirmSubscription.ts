import { useQuery } from "@tanstack/react-query";
import { confirmSubscription } from "../api/apiServices";
import { useRef } from "react";

const MAX_ATTEMPTS = 10;
const useConfirmSubscription = () => {
  const attempts = useRef(0);
  return useQuery({
    queryKey: ["subscriptionStatus"],
    queryFn: confirmSubscription,
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
