import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0e17] transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <h2 className='text-lg font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent'>
              💤 SleepTracker
            </h2>
            <p className='text-gray-500 dark:text-gray-400 text-sm mt-1'>
              Track your sleep, improve your health.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex gap-6'>
            <Link href='/' className='text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm font-medium transition-colors duration-200'>
              Home
            </Link>
            <Link href='/about' className='text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm font-medium transition-colors duration-200'>
              About
            </Link>
            <Link href='/contact' className='text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm font-medium transition-colors duration-200'>
              Contact
            </Link>
          </div>
        </div>

        <div className='mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-gray-400 dark:text-gray-600 text-sm'>
          © {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
