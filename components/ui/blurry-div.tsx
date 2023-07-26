import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {}

export default function BlurryDiv({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & CompType) {
  return (
    <div
      {...props}
      className={cn(
        'bg-primary w-96 h-96  absolute -z-50 rounded-full blur-[18rem] animate-rocket',
        {},
        className
      )}
    />
  );
}
