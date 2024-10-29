import Link from 'next/link';
import { Button } from './ui/button';
import { Spinner } from './spinner';
import { useUser } from '@clerk/nextjs';
import UserItem from '@/app/(app)/dashboard/user-item';

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-[#1F1F1F] p-4">
      <div className="flex items-center justify-end md:me-8">
        <div className="flex w-full justify-between md:w-auto justify-center items-center gap-x-3">
          {!isLoaded ? (
            <div className="w-full flex items-center justify-center me-3">
              <Spinner />
            </div>
          ) : (
            <>
              {isSignedIn ? (
                <>
                  <Link href="/dashboard">
                    <Button className="me-3 text-sm" variant="ghost">
                      Dashboard
                    </Button>
                  </Link>
                  <UserItem />
                </>
              ) : (
                <>
                  <Link href="/sign-up">
                    <Button variant="outline">Sign up</Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button>Log in</Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
