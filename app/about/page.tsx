import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='bg-[var(--background)] text-[var(--foreground)]'>

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-rose-50 dark:from-violet-950/30 dark:via-pink-950/20 dark:to-rose-950/30 -z-10' />
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
            About{' '}
            <span className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent'>
              SleepTracker
            </span>
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Your ultimate companion for tracking sleep and improving your health.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1a2e]'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6'>Our Mission</h2>
          <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
            At SleepTracker, we aim to help individuals achieve better sleep and overall well-being
            by providing clear insights into their sleep patterns. Better sleep leads to a healthier,
            happier life — and we&apos;re here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-10'>Why Choose SleepTracker?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { icon: '📈', title: 'Comprehensive Tracking', desc: 'Monitor your sleep patterns and identify areas for improvement with daily logging.' },
              { icon: '💡', title: 'Personalized Insights', desc: 'See your averages, best nights, and worst nights — all in one dashboard.' },
              { icon: '✨', title: 'User-Friendly Design', desc: 'Intuitive, clean, and fast — works beautifully across all your devices.' },
            ].map((f) => (
              <div key={f.title} className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300'>
                <div className='text-3xl mb-4'>{f.icon}</div>
                <h3 className='font-bold text-lg mb-2'>{f.title}</h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1a2e]'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6'>Our Story</h2>
          <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
            SleepTracker was built to address a simple problem: most people have no idea how well
            they&apos;re actually sleeping. We combined clean design with actionable data to create
            a tool that makes sleep tracking effortless. Since launch, we&apos;ve helped thousands
            of users take back control of their sleep.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 rounded-3xl p-12 shadow-2xl shadow-violet-500/20'>
          <h2 className='text-3xl font-extrabold text-white mb-4'>Ready to Sleep Better?</h2>
          <p className='text-violet-100 mb-8'>Join SleepTracker today and take the first step toward better sleep.</p>
          <Link
            href='/sign-up'
            className='inline-block bg-white text-violet-600 font-bold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-colors duration-200 shadow-lg'
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
