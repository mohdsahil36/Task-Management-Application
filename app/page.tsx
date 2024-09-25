import Header from '@/components/Header';
import Image from 'next/image';
import Banner from '../public/Banner.jpg'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="relative flex-1">
        <div className="relative h-96 w-full max-w-screen-2xl mx-auto overflow-hidden rounded-none md:rounded-lg">
          <Image 
            src={Banner} 
            alt="Banner Image"
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-8">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Organize Your Tasks, Elevate Your Productivity
              </h1>
              <h2 className="text-lg sm:text-xl font-medium max-w-xl mx-auto">
                Seamlessly organize tasks, set clear goals, and track your progress—all with a sleek, intuitive interface that helps you stay focused and productive.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
