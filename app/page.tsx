"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Spinner } from '@/components/spinner';
import { ArrowRight } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import Features from './(app)/dashboard/features';

export default function HomePage() {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      toast.success(`Success! Welcome to PlanIt ${user?.fullName}`, {
        duration: 2500,
        position: 'bottom-center',
        invert: true,
      });
    }
  }, [isSignedIn, user]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col justify-center px-4 py-10 sm:px-8 mx-4 md:mx-12 mt-2 border-2 rounded-2xl bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-start gap-y-4">
            <h1 className="text-4xl md:text-[3.25rem] font-semibold leading-snug uppercase">
              Begin your day with productive mindset
            </h1>
            <h2 className="text-[1.625rem]">
              Your Path to Organized and Productive Days
            </h2>
            <h3 className="text-[1.125rem]">
              Boost focus, stay on track, and accomplish what matters most. Planit helps you turn daily goals into lasting achievements
            </h3>
            {!isLoaded ? (
              <div className="w-full flex items-center justify-center">
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
          <div className="w-full md:w-1/2 flex justify-end">
            <Features/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
