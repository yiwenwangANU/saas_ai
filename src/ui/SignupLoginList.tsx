import Button from "./Button";

const SignupLoginList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-serif">Log in or sign up in seconds</div>
      <div className="text-xs text-gray-800">
        Use your email or another service to continue
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <Button variant="oauth">Continue with Google</Button>
        <Button variant="oauth">Continue with Facebook</Button>
        <Button variant="signup">Continue with Email</Button>
      </div>
    </div>
  );
};

export default SignupLoginList;
