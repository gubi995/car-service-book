import React, { ComponentProps, ReactNode } from 'react';

interface InputProps {
  label?: ReactNode;
  labelProps?: ComponentProps<'label'>;
  inputProps?: ComponentProps<'input'>;
  error?: string;
}

export default function Input({
  label,
  labelProps,
  inputProps,
  error,
}: InputProps) {
  return (
    <label className="flex flex-col text-xs" {...labelProps}>
      <span className="pl-2">{label}</span>
      <input
        type="text"
        className="border-2 border-teal-600 px-4 py-2 text-sm read-only:bg-gray-200"
        {...inputProps}
      />
      <span className="h-4 pl-2 text-red-500">{error}</span>
    </label>
  );
}
