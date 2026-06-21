'use client';
import { useState } from 'react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';

const QUALITY_EMOJI: { [key: string]: string } = {
  Refreshed: '🌞',
  Energetic: '⚡',
  Neutral: '😐',
  Tired: '😴',
  Exhausted: '😫',
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  const isGoodSleep = record?.amount >= 7;
  const emoji = QUALITY_EMOJI[record?.text] ?? '💤';

  return (
    <li className='flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors duration-150'>
      <div className='flex items-center gap-4'>
        {/* Colored indicator */}
        <div className={`w-1 h-10 rounded-full flex-shrink-0 ${isGoodSleep ? 'bg-green-500' : 'bg-red-400'}`} />

        {/* Info */}
        <div>
          <div className='flex items-center gap-2'>
            <span className='font-bold text-base'>
              {record?.amount}h
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              isGoodSleep
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
            }`}>
              {isGoodSleep ? 'Good' : 'Low'}
            </span>
          </div>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
            {emoji} {record?.text} &middot; {new Date(record?.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        disabled={isLoading}
        className='w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-40 transition-all duration-200 cursor-pointer'
        aria-label='Delete record'
      >
        {isLoading ? (
          <svg className='animate-spin h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z' />
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4'>
            <path fillRule='evenodd' d='M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z' clipRule='evenodd' />
          </svg>
        )}
      </button>
    </li>
  );
};

export default RecordItem;
