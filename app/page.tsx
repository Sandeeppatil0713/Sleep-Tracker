import Guest from '../components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import AddNewRecord from '../components/AddNewRecord';
import RecordChart from '../components/RecordChart';
import AverageSleep from '../components/AverageSleep';
import BestWorstSleep from '../components/BestWorstSleep';
import RecordHistory from '../components/RecordHistory';

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  return (
    <div className='bg-[var(--background)] min-h-screen'>
      {/* Page header */}
      <div className='bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='flex items-center gap-4'>
            <img
              src={user.imageUrl}
              alt={`${user.firstName}'s profile`}
              className='w-16 h-16 rounded-2xl border-2 border-white/40 shadow-lg object-cover'
            />
            <div>
              <p className='text-violet-100 text-sm font-medium mb-0.5'>Welcome back 👋</p>
              <h1 className='text-2xl md:text-3xl font-extrabold tracking-tight'>
                {user.firstName} {user.lastName}
              </h1>
              <p className='text-violet-100 text-sm mt-0.5'>
                Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left column */}
          <div className='space-y-6'>
            <AddNewRecord />
          </div>

          {/* Right column */}
          <div className='space-y-6'>
            <RecordChart />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <AverageSleep />
              <BestWorstSleep />
            </div>
          </div>
        </div>

        {/* History — full width */}
        <div className='mt-6'>
          <RecordHistory />
        </div>
      </div>
    </div>
  );
}
