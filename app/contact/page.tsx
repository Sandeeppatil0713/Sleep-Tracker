'use client';

const ContactPage = () => {
  return (
    <div className='bg-[var(--background)] text-[var(--foreground)]'>

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-rose-50 dark:from-violet-950/30 dark:via-pink-950/20 dark:to-rose-950/30 -z-10' />
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
            Get in{' '}
            <span className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent'>
              Touch
            </span>
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Have questions or need help? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>

          {/* Contact Form */}
          <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm'>
            <h2 className='text-2xl font-bold mb-6'>Send a Message</h2>
            <form
              className='space-y-5'
              onSubmit={(e) => {
                e.preventDefault();
                const name = (document.getElementById('name') as HTMLInputElement)?.value;
                const email = (document.getElementById('email') as HTMLInputElement)?.value;
                const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
                const mailtoLink = `mailto:rocksandeep0713@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
                window.location.href = mailtoLink;
              }}
            >
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow'
                  placeholder='John Doe'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow'
                  placeholder='john@example.com'
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  className='w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow resize-none'
                  placeholder='How can we help you?'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-md shadow-violet-500/20 transition-opacity duration-200 cursor-pointer'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
              <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>
                Reach out via the form or use the contact details below. We typically respond within 24 hours.
              </p>
            </div>
            {[
              { icon: '📧', label: 'Email', value: 'rocksandeep@gmail.com' },
              { icon: '📞', label: 'Phone', value: '+91 0011001100' },
              { icon: '📍', label: 'Address', value: 'Belagavi, Karnataka, India 590001' },
            ].map((info) => (
              <div key={info.label} className='flex items-start gap-4 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-5'>
                <span className='text-2xl'>{info.icon}</span>
                <div>
                  <p className='text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5'>{info.label}</p>
                  <p className='text-sm font-medium text-gray-700 dark:text-gray-200'>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
