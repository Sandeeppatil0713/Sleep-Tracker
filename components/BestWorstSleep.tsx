import getBestWorstSleep from '@/app/actions/getBestWorstSleep';

const BestWorstSleep = async () => {
  try {
    const { bestSleep, worstSleep, error } = await getBestWorstSleep();

    if (error) {
      return (
        <div className='bg-white dark:bg-[#1a1a2e] border border-red-200 dark:border-red-900 rounded-2xl p-6 shadow-sm text-center'>
          <p className='text-red-500 text-sm'>Unable to load data.</p>
        </div>
      );
    }

    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl'>
            <div className='flex items-center gap-2'>
              <span className='text-xl'>🏆</span>
              <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>Best Night</span>
            </div>
            <span className='text-lg font-extrabold text-green-600 dark:text-green-400'>
              {bestSleep !== undefined && bestSleep > 0 ? `${bestSleep}h` : '—'}
            </span>
          </div>
          <div className='flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl'>
            <div className='flex items-center gap-2'>
              <span className='text-xl'>😵</span>
              <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>Worst Night</span>
            </div>
            <span className='text-lg font-extrabold text-red-500 dark:text-red-400'>
              {worstSleep !== undefined && worstSleep > 0 ? `${worstSleep}h` : '—'}
            </span>
          </div>
        </div>
      </div>
    );
  } catch {
    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-red-200 dark:border-red-900 rounded-2xl p-6 shadow-sm text-center'>
        <p className='text-red-500 text-sm'>Unable to load data.</p>
      </div>
    );
  }
};

export default BestWorstSleep;
