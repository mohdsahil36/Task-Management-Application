import { ModeToggle } from '@/app/components/ui/mode-toggle';
import Link from 'next/link';
import { Button } from './ui/button';
import { useAuth } from '@clerk/nextjs'; // Import useAuth hook
import { useUser } from '@clerk/nextjs'; // Import useUser to get user data

export default function Header() {
  const { userId } = useAuth(); // Get userId (logged-in status)
  const { user } = useUser(); // Get user data

  // Log the user data in the console whenever the user is logged in
  if (userId) {
    console.log("User data:", user);
  }

  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-black shadow-md p-4">
      <div className='flex items-center justify-between'>
        <span className='hidden md:block text-xl text-black dark:text-white uppercase font-bold'>PlanIt</span>
        <div className='flex w-full md:w-auto justify-between md:justify-start items-center'>
          {userId ? (
            // Show "Go to Dashboard" button when the user is logged in
            <Link href='/dashboard'>
              <Button className='bg-transparent text-black dark:text-white hover:bg-accent'>
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            // Show "Log in" and "Sign up" buttons when the user is not logged in
            <>
              <Link href='/sign-in'>
                <Button className='bg-transparent text-black dark:text-white hover:bg-accent'>
                  Log in
                </Button>
              </Link>
              <Link href='/sign-up'>
                <Button className='mx-3'>Get PlanIt today</Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
