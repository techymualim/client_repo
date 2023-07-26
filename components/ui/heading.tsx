import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';
import { Button } from './button';

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  showAll?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, showAll, ...props }, ref) => {
    return (
      <div className='flex items-center justify-between'>
        <h1
          ref={ref}
          {...props}
          className={cn(
            'text-slate-700 mb-10 text-[25px] font-bold text-center',
            {},
            className
          )}
        />
        {showAll && <Button sm>View More</Button>}
      </div>
    );
  }
);

Heading.displayName = 'Heading';
export { Heading };
