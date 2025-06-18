import { useNavigate, useSearchParams } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";
import useConfirmSubscription from "../hooks/useConfirmSubscription";

const SubscribeSuccess = () => {
  const navigate = useNavigate();
  const { isLoggin, email } = useAuthContext();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id") || undefined;
  const {
    isLoading,
    error,
    isFetching,
    data: subscriptionActive,
  } = useConfirmSubscription(sessionId);

  if (!isLoggin || !email || !sessionId) navigate("/");
  if (isLoading) return <div>Verifying payment…</div>;
  if (error) return <div>Something went wrong</div>;
  // 3) While we’re polling for webhook‐driven DB writes…
  if (isFetching && !subscriptionActive) {
    return <div>Finalizing your subscription…</div>;
  }
  console.log(subscriptionActive);
  // 4) Once the backend has written subscriptionActive = true
  if (subscriptionActive) {
    return (
      <div>
        <h2>🎉 Payment successful!</h2>
        <p>Redirecting you to the dashboard…</p>
      </div>
    );
  }
};

export default SubscribeSuccess;
