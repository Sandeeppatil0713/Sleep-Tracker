import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-red-200 dark:border-red-900 rounded-2xl p-6 shadow-sm text-center'>
        <p className='text-red-500 text-sm'>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm text-center'>
        <div className='text-5xl mb-4'>🗓️</div>
        <h3 className='font-bold text-lg mb-2'>No sleep history yet</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Your logged records will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden'>
      <div className='px-6 py-5 border-b border-gray-100 dark:border-gray-800'>
        <h3 className='font-bold text-lg'>Sleep History</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>Your last {records.length} records</p>
      </div>
      <ul className='divide-y divide-gray-50 dark:divide-gray-800'>
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </ul>
    </div>
  );
};

export default RecordHistory;
