import { ComponentProps } from 'react';

export default function Button({
  className,
  ...rest
}: ComponentProps<'button'>) {
  return (
    <button
      className={`flex justify-center bg-cyan-900 p-3 text-sm text-cyan-200 ${className}`}
      {...rest}
    />
  );
}
