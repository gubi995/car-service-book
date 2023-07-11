import React, { ComponentProps, ReactNode } from 'react';

interface InputProps {
  label?: ReactNode;
  labelProps?: ComponentProps<'label'>;
  inputProps?: ComponentProps<'input'>;
}

export default function Input({ label, labelProps, inputProps }: InputProps) {
  return (
    <label className="flex flex-col text-xs" {...labelProps}>
      <span className="pl-2">{label}</span>
      <input
        type="text"
        className="border-2 border-teal-600 px-4 py-2 text-sm"
        {...inputProps}
      />
    </label>
  );
}
