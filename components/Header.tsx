import { ModeToggle } from '@/app/components/ui/mode-toggle';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-black shadow-md p-4">
      <div className='flex items-center justify-between'>
        <span className='hidden md:block text-xl text-black dark:text-white uppercase font-bold'>PlanIt</span>
        <div className='flex w-full md:w-auto justify-between md:justify-start items-center'>
          <Link href='/sign-in'>
            <Button className='bg-transparent text-black dark:text-white hover:bg-accent'>
              Log in
            </Button>
          </Link>
          <Link href='/sign-up'>
            <Button className='mx-3'>Get PlanIt today</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}