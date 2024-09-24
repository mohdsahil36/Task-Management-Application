import Logo from '../public/Logo.svg';
import { ModeToggle } from './ui/mode-toggle';

export default function Header() {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
                {/* Add conditional text color for light and dark modes */}
                {/* <Logo className='h-8 w-auto fill-black dark:fill-white' /> */}
                <span className='text-xl font-bold text-black dark:text-white'>PlanIt</span>
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    );
}
