import { ModeToggle } from '@/app/components/ui/mode-toggle';
import Link from 'next/link';
import { Button } from './ui/button';
import { Spinner } from './spinner';
import { useUser } from '@clerk/nextjs';

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-black shadow-md p-4">
      <div className="flex items-center justify-between">
        <span className="hidden md:block text-xl text-black dark:text-white uppercase font-bold">
          PlanIt
        </span>
        <div className="flex w-full md:w-auto justify-between md:justify-start items-center">
          {!isLoaded ? (
            <div className="w-full flex items-center justify-center me-3">
              <Spinner/>
            </div>
          ) : (
            <>
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button className="me-3 text-sm" variant="ghost">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button className="bg-transparent text-black dark:text-white hover:bg-accent">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button className="mx-3">Get PlanIt today</Button>
                  </Link>
                </>
              )}
            </>
          )}
            <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
