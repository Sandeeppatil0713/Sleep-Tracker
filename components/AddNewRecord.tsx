'use client';
import { useRef, useState } from 'react';
import addSleepRecord from '@/app/actions/addSleepRecord';

const QUALITY_OPTIONS = [
  { value: 'Refreshed', label: '🌞 Refreshed' },
  { value: 'Energetic', label: '⚡ Energetic' },
  { value: 'Neutral', label: '😐 Neutral' },
  { value: 'Tired', label: '😴 Tired' },
  { value: 'Exhausted', label: '😫 Exhausted' },
];

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(7);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState('');

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('text', sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Sleep record saved successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(7);
      setSleepQuality('');
    }

    setIsLoading(false);
  };

  const getAmountColor = () => {
    if (amount < 5) return 'text-red-500';
    if (amount < 7) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className='bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm'>
      <h3 className='text-xl font-bold mb-1'>Log Sleep</h3>
      <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>Record how you slept last night</p>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className='space-y-5'
      >
        {/* Quality + Date row */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='text' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5'>
              Sleep Quality
            </label>
            <select
              id='text'
              name='text'
              value={sleepQuality}
              onChange={(e) => setSleepQuality(e.target.value)}
              className='w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 transition-shadow'
              required
            >
              <option value='' disabled>Select quality…</option>
              {QUALITY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='date' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5'>
              Date
            </label>
            <input
              type='date'
              name='date'
              id='date'
              className='w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 transition-shadow'
              required
              onFocus={(e) => e.target.showPicker()}
            />
          </div>
        </div>

        {/* Hours slider */}
        <div>
          <div className='flex justify-between items-center mb-2'>
            <label htmlFor='amount' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              Hours Slept
            </label>
            <span className={`text-2xl font-extrabold tabular-nums ${getAmountColor()}`}>
              {amount}h
            </span>
          </div>
          <input
            type='range'
            name='amount'
            id='amount'
            min='0'
            max='12'
            step='0.5'
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className='w-full'
          />
          <div className='flex justify-between text-xs text-gray-400 mt-1'>
            <span>0h</span>
            <span className='text-yellow-500 font-medium'>7h recommended</span>
            <span>12h</span>
          </div>
        </div>

        {/* Submit */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 hover:opacity-90 disabled:opacity-60 text-white py-3 rounded-xl font-semibold shadow-md shadow-violet-500/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer'
        >
          {isLoading ? (
            <>
              <svg className='animate-spin h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z' />
              </svg>
              Saving…
            </>
          ) : (
            'Save Sleep Record'
          )}
        </button>
      </form>

      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-xl text-sm font-medium flex items-center gap-2 ${
            alertType === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
          }`}
        >
          <span>{alertType === 'success' ? '✓' : '✕'}</span>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default AddRecord;
