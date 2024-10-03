import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-white dark:bg-black shadow-md p-4">
      <div className='flex items-center justify-between md:justify-center'>
        <Button variant='ghost'>
          Privacy Policy
        </Button>
        <Button variant='ghost'>
          Terms and Conditions
        </Button>
      </div>
    </footer>
  );
}
