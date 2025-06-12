import useCheckout from "../hooks/useCheckout";
import { SubscriptionPlan } from "../ui/SubscriptionPlan";

const SUBSCRIPTION_PLANS = [
  {
    interval: "week",
    priceId: import.meta.env.VITE_STRIPE_PRICE_ID_WEEKLY,
    amount: 9.99,
    label: "Weekly Plan",
    description: "Great if you want to try service before committing longer.",
    services: [
      "Ultimated AI meal plans",
      "AI nutrition insights",
      "Cancel anytime",
    ],
  },
  {
    interval: "month",
    priceId: import.meta.env.VITE_STRIPE_PRICE_ID_MONTHLY,
    amount: 39.99,
    label: "Monthly Plan",
    description:
      "Prefer for ongoing, month-to-month meal planning and features.",
    services: [
      "Ultimated AI meal plans",
      "Priority AI support",
      "Cancel anytime",
    ],
  },
  {
    interval: "year",
    priceId: import.meta.env.VITE_STRIPE_PRICE_ID_YEARLY,
    amount: 279.99,
    label: "Yearly Plan",
    description:
      "Best value for those committed to imporving their diet long term.",
    services: [
      "Ultimated AI meal plans",
      "All premium features",
      "Cancel anytime",
    ],
  },
];

const Subscription = () => {
  const { mutate: checkout, isPending, isError, error } = useCheckout();
  return (
    <div>
      <div className="flex flex-col gap-5 items-center mx-20 rounded-xl py-10 my-10">
        <div className="text-6xl font-bold">Price</div>
        <div className="text-2xl pb-20 font">
          Get started on our weekly plan or upgrade to monthly or yearly when
          you're ready.
        </div>
        <div className="flex flex-row gap-10 items-center px-10">
          {SUBSCRIPTION_PLANS.map(
            ({ interval, priceId, amount, label, description, services }) => (
              <SubscriptionPlan
                key={priceId}
                interval={interval}
                priceId={priceId}
                amount={amount}
                label={label}
                description={description}
                services={services}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
