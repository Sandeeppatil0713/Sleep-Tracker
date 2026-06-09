import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { checkUser } from '@/lib/checkUser';
import ThemeToggle from './ThemeToggle';

export default async function Navbar() {
  await checkUser();
  const { userId } = await auth();

  return (
    <nav className='sticky top-0 z-50 bg-white/80 dark:bg-[#0f0e17]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 flex-shrink-0'>
            <span className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-tight'>
              💤 SleepTracker
            </span>
          </Link>

          {/* Nav Links + Actions */}
          <div className='flex items-center gap-1 sm:gap-2'>
            <Link
              href='/'
              className='hidden sm:block text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='hidden sm:block text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='hidden sm:block text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
            >
              Contact
            </Link>

            <ThemeToggle />

            {!userId && (
              <SignInButton>
                <button className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-opacity duration-200 cursor-pointer'>
                  Sign In
                </button>
              </SignInButton>
            )}

            {userId && <UserButton />}
          </div>
        </div>
      </div>
    </nav>
  );
}
