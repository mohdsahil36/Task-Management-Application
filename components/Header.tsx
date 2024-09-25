import { ModeToggle } from '@/app/components/ui/mode-toggle';

export default function Header() {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
                <span className='text-xl text-black dark:text-white'>PlanIt</span>
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    );
}
