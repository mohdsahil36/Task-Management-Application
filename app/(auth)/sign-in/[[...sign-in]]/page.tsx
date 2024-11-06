import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-6/12 bg-black dark:bg-white text-white dark:text-black flex items-center p-8 md:p-12 order-1 md:order-2 sticky top-0">
        <div className="space-y-4">
          <h1 className="text-xl md:text-4xl font-bold">
            Welcome back! Let&apos;s dive back into your tasks and get things done
          </h1>
          <h2 className="text-md md:text-xl mt-4 font-light">
            Log in to pick up right where you left off and stay on top of your day
          </h2>
        </div>
      </div>
      <div className="md:w-6/12 flex items-center justify-center p-4 md:p-8 order-2 md:order-1">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
