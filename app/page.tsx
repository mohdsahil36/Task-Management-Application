import Header from '@/components/Header';
import Image from 'next/image';
import Banner from '../public/Banner.jpg'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className='h-full pt-40'>
        <div className='min-h-full flex flex-col'>
          <div className='introductions flex flex-col items-center justify-center md:justify-start text-center gap-y-4 flex-1 px-6 pb-10'>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Organize Your Tasks, Elevate Your Productivity.
              Welcome to <span className='underline'>Planit</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-medium max-w-xl mx-auto">
              Seamlessly organize tasks, set clear goals, and track your progress—all with a sleek, intuitive interface that helps you stay focused and productive.
            </h2>
            <Button>Let's get started</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
