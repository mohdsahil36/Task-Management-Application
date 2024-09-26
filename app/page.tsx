import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
            Organize Your Tasks, Elevate Your Productivity.
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
            Welcome to <span className='underline'>Planit</span>
          </h2>
          <h2 className="text-lg sm:text-xl font-medium max-w-xl mx-auto mb-2">
            Seamlessly organize tasks, set clear goals, and track your progress—all with a sleek, intuitive interface that helps you stay focused and productive.
          </h2>
          <Button>Let's get started</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
