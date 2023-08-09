import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  sm?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, outline, sm, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          'px-3 md:px-6 py-3 text-sm font-medium text-white transition-all rounded-lg hover:shadow-lg',
          'bg-gradient-to-r from-primary to-secondary',
          {
            ' border  text-primary from-transparent to-transparent hover:shadow-none hover:bg-primary/5':
              outline,
            'py-0 px-4 bg-secondary to-secondary h-8 text-[11px]': sm,
          },
          className
        )}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };
