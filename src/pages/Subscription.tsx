import { CheckIcon } from "@heroicons/react/16/solid";
import Button from "../ui/Button";

const Subscription = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center mx-20 rounded-xl py-10 my-10">
        <div className="text-6xl font-bold">Price</div>
        <div className="text-2xl pb-20 font">
          Get started on our weekly plan or upgrade to monthly or yearly when
          you're ready.
        </div>
        <div className="flex flex-row gap-10 items-center px-10">
          <div className="border-2 border-gray-200 rounded-3xl shadow-xl flex flex-col gap-10 px-14 pt-7 pb-10 hover:scale-[1.02] duration-100">
            <div className="text-2xl font-bold">Weekly Plan</div>
            <div>
              <span className="text-7xl font-bold">$9.99</span>
              <span className="font-bold text-lg">/week</span>
            </div>
            <div className="text-xl">
              Great if you want to try service before committing longer.
            </div>
            <ul className="flex flex-col gap-3 text-xl">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Ultimated AI meal plans
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                AI nutrition insights
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Cancel anytime
              </li>
            </ul>
            <Button variant="subscribe">Subscribe Weekly Plan</Button>
          </div>
          <div className="relative border-2 border-gray-200 rounded-3xl shadow-xl flex flex-col gap-10 px-14 pt-7 pb-10 hover:scale-[1.02] duration-100">
            <div className="absolute -top-4 bg-emerald-500 text-white rounded-2xl w-fit px-7 py-1 capitalize font-semibold">
              Most Popular
            </div>
            <div className="text-2xl font-bold">Monthly Plan</div>
            <div>
              <span className="text-7xl font-bold">$39.99</span>
              <span className="font-bold text-lg">/week</span>
            </div>
            <div className="text-xl">
              Prefer for ongoing, month-to-month meal planning and features.
            </div>
            <ul className="flex flex-col gap-3 text-xl">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Ultimated AI meal plans
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Priority AI support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Cancel anytime
              </li>
            </ul>
            <Button variant="subscribeMonthly">Subscribe Monthly Plan</Button>
          </div>
          <div className="border-2 border-gray-200 rounded-3xl shadow-xl flex flex-col gap-10 px-14 pt-7 pb-10 hover:scale-[1.02] duration-100">
            <div className="text-2xl font-bold">Yearly Plan</div>
            <div>
              <span className="text-7xl font-bold">$299.99</span>
              <span className="font-bold text-lg">/week</span>
            </div>
            <div className="text-xl">
              Best value for those committed to imporving their diet long term.
            </div>
            <ul className="flex flex-col gap-3 text-xl">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Ultimated AI meal plans
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                All premium features
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-7 text-emerald-600" />
                Cancel anytime
              </li>
            </ul>
            <Button variant="subscribe">Subscribe Yearly Plan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
