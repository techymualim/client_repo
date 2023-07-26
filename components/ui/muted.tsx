import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

interface CompType {}

export default function Muted({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement> & CompType) {
  return (
    <p
      {...props}
      className={cn(
        'text-[12px] font-medium text-muted-foreground',
        {},
        className
      )}
    />
  );
}
