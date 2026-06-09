import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='bg-[var(--background)] text-[var(--foreground)]'>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-rose-50 dark:from-violet-950/30 dark:via-pink-950/20 dark:to-rose-950/30 -z-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='flex-1 text-center md:text-left'>
              <div className='inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6'>
                <span className='w-2 h-2 bg-violet-500 rounded-full animate-pulse'></span>
                Sleep smarter, live better
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight'>
                Track your sleep,{' '}
                <span className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent'>
                  transform your life
                </span>
              </h1>
              <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl'>
                Wake up refreshed every day. SleepTracker helps you understand your sleep patterns and build healthier habits.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
                <SignInButton>
                  <button className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 hover:opacity-90 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all duration-200 cursor-pointer text-base'>
                    Get Started Free →
                  </button>
                </SignInButton>
                <a href='#features' className='px-8 py-3.5 rounded-xl font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-base text-center'>
                  Learn More
                </a>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-violet-400 to-pink-400 rounded-3xl blur-2xl opacity-20 dark:opacity-30' />
                <img
                  src='/sleep-tracker.png'
                  alt='SleepTracker Illustration'
                  className='relative w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className='bg-white dark:bg-[#1a1a2e] border-y border-gray-100 dark:border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='grid grid-cols-3 gap-8 text-center'>
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '95%', label: 'Sleep Improved' },
              { value: '4.9★', label: 'User Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-500 dark:text-gray-400 mt-1'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why SleepTracker?</h2>
            <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto'>Everything you need to build better sleep habits, in one clean dashboard.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { icon: '📊', title: 'Visual Charts', desc: 'See your sleep patterns over time with beautiful, color-coded bar charts.' },
              { icon: '🏆', title: 'Best & Worst Nights', desc: 'Instantly see your best and worst sleep records to identify patterns.' },
              { icon: '⚡', title: 'Quick Logging', desc: 'Log your sleep in seconds with our intuitive slider and quality picker.' },
            ].map((f) => (
              <div key={f.title} className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300'>
                <div className='text-3xl mb-4'>{f.icon}</div>
                <h3 className='text-lg font-bold mb-2'>{f.title}</h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1a2e]'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            {[
              { q: 'What is SleepTracker?', a: 'A powerful tool to monitor your sleep patterns, log daily records, and gain actionable insights to improve your overall health.' },
              { q: 'How does it work?', a: 'Log your sleep each day with our quick form. SleepTracker charts your data and surfaces your averages, best nights, and worst nights automatically.' },
              { q: 'Is SleepTracker free?', a: 'Yes, core tracking is completely free. Sign up and start tracking in under a minute.' },
            ].map((faq) => (
              <div key={faq.q} className='border border-gray-100 dark:border-gray-800 rounded-xl p-6'>
                <h3 className='font-semibold text-base mb-2'>{faq.q}</h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>What Our Users Say</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { quote: 'SleepTracker completely transformed my sleep schedule. I feel more energized every day!', name: 'Sarah L.' },
              { quote: 'The insights helped me identify and fix my sleep issues. Highly recommend it!', name: 'John D.' },
              { quote: "So easy to use and the data is accurate. It's a must-have for better sleep.", name: 'Emily R.' },
            ].map((t) => (
              <div key={t.name} className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6'>
                <div className='text-yellow-400 text-lg mb-3'>★★★★★</div>
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4'>&quot;{t.quote}&quot;</p>
                <p className='font-semibold text-violet-600 dark:text-violet-400 text-sm'>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 rounded-3xl p-12 shadow-2xl shadow-violet-500/25'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-4'>Ready to sleep better?</h2>
          <p className='text-violet-100 mb-8 text-lg'>Join thousands of users who already track their sleep with SleepTracker.</p>
          <SignInButton>
            <button className='bg-white text-violet-600 font-bold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-colors duration-200 cursor-pointer text-base shadow-lg'>
              Start Tracking — It&apos;s Free
            </button>
          </SignInButton>
        </div>
      </section>
    </div>
  );
};

export default Guest;
