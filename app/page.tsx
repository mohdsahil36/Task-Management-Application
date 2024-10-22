"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Spinner } from '@/components/spinner';
import { ArrowRight } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import {toast} from 'sonner';

export default function HomePage() {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      toast.success(`Success! Welcome to PlanIt ${user?.fullName}`,{
        duration: 2500,
        position:'bottom-center',
        invert:true
      })
    }
  }, [isSignedIn, user, toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
            Manage Your Tasks with Ease
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
            Welcome to <span className="underline underline-offset-8">Planit</span>
          </h2>
          <h2 className="text-lg sm:text-xl font-medium max-w-xl mx-auto mb-2">
            Seamlessly organize tasks, set clear goals, and track your progress—all with a sleek, intuitive interface that helps you stay focused and productive.
          </h2>
          {!isLoaded ? (
            <div className="w-full flex items-center justify-center me-3">
              <Spinner />
            </div>
          ) : (
            <>
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button>
                    Dashboard
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Link href="/sign-up">
                  <Button>Let&apos;s get started</Button>
                </Link>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
