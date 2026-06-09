import getUserRecord from '@/app/actions/getUserRecord';

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageSleep = validRecord / validDays;
    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    const isGood = averageSleep >= 7;

    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm text-center'>
        <div className='text-3xl mb-2'>😴</div>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'>Daily Average</p>
        <p className={`text-2xl font-extrabold ${isGood ? 'text-green-500' : 'text-yellow-500'}`}>
          {hours}h {minutes}m
        </p>
        <p className='text-xs text-gray-400 dark:text-gray-500 mt-2'>
          Based on {validDays} night{validDays !== 1 ? 's' : ''}
        </p>
      </div>
    );
  } catch {
    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-red-200 dark:border-red-900 rounded-2xl p-6 shadow-sm text-center'>
        <p className='text-red-500 text-sm'>Unable to load average.</p>
      </div>
    );
  }
};

export default AverageSleep;
