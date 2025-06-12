import { CheckIcon } from "@heroicons/react/16/solid";
import Button from "./Button";
import { FC } from "react";
import useCheckout from "../hooks/useCheckout";
import { useAuthContext } from "../contexts/AuthContext";
import { useModalContext } from "../contexts/ModalContext";
import SignupLoginList from "./SignupLoginList";

type SubscriptionPlanPops = {
  interval: string;
  priceId: string;
  amount: number;
  label: string;
  description: string;
  services: string[];
};
export const SubscriptionPlan: FC<SubscriptionPlanPops> = ({
  interval,
  priceId,
  amount,
  label,
  description,
  services,
}) => {
  const { mutate, isPending } = useCheckout();
  const { isLoggin, email } = useAuthContext();
  const { handleOpenModal } = useModalContext();
  const handleSubscribe = (priceId: string) => {
    if (!isLoggin || !email) {
      handleOpenModal(<SignupLoginList />);
    } else mutate({ priceId, email });
  };
  return (
    <div className="relative border-2 border-gray-200 rounded-3xl shadow-xl flex flex-col gap-10 px-14 pt-7 pb-10 hover:scale-[1.02] duration-100">
      {interval == "month" && (
        <div className="absolute -top-4 bg-emerald-500 text-white rounded-2xl w-fit px-7 py-1 capitalize font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-2xl font-bold capitalize">{label}</div>
      <div>
        <span className="text-7xl font-bold">${amount}</span>
        <span className="font-bold text-lg">/{interval}</span>
      </div>
      <div className="text-xl">{description}</div>
      <ul className="flex flex-col gap-3 text-xl">
        {services.map((service) => (
          <li className="flex items-center gap-2">
            <CheckIcon className="w-7 text-emerald-600" />
            {service}
          </li>
        ))}
      </ul>
      <Button
        variant={interval == "month" ? "subscribeMonthly" : "subscribe"}
        onClick={() => handleSubscribe(priceId)}
        disabled={isPending}
      >
        {isPending ? "Processing" : `Subscribe ${label}`}
      </Button>
    </div>
  );
};
