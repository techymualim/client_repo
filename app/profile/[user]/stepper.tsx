'use client';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Stepper() {
  function Checked() {
    return (
      <button
        onClick={() => setSelectedStep(0)}
        className='grid w-6 rounded-full h-min place-content-center bg-slate-700 aspect-square'
      >
        <Check strokeWidth={4} color='#fff' size={16} />
      </button>
    );
  }

  function NotChecked() {
    return (
      <button
        onClick={() => setSelectedStep(1)}
        className='w-6 border rounded-full h-min aspect-square bg-zinc-300 border-slate-700'
      />
    );
  }
  const [selectedStep, setSelectedStep] = useState(0);
  return (
    <section>
      <br />
      <br />
      <h1 className='text-xl font-bold text-slate-700'>Mint Schedule</h1>
      <div className='relative m-8 space-y-5'>
        <div
          className={cn('w-px absolute h-20 ml-[11px] -z-10 bg-black/10', {
            'bg-slate-700': selectedStep,
          })}
        />
        {steps.map((_, idx) => (
          <div key={_.label} className='flex gap-8 text-slate-700'>
            {!idx ? <Checked /> : null}
            {idx ? selectedStep ? <Checked /> : <NotChecked /> : null}

            <div>
              <p className='text-base font-medium '>{_.label} </p>
              <p className='text-[13px] font-normal'>{_.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { label: 'Early Adopter Phase', caption: 'Ends August 21st' },
  { label: 'Public Sale', caption: 'Starts August 22nd' },
];
