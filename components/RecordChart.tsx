import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart';

const RecordChart = async () => {
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
        <div className='text-5xl mb-4'>📊</div>
        <h3 className='font-bold text-lg mb-2'>No records yet</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Log your first sleep entry to see your chart here.
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm'>
      <h3 className='font-bold text-lg mb-1'>Sleep History Chart</h3>
      <p className='text-sm text-gray-500 dark:text-gray-400 mb-5'>Last 10 records</p>
      <BarChart
        records={records.map((record) => ({
          ...record,
          date: String(record.date),
        }))}
      />
    </div>
  );
};

export default RecordChart;
