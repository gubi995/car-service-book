import React, { ComponentProps, ReactNode } from 'react';

interface SelectProps {
  label?: ReactNode;
  labelProps?: ComponentProps<'label'>;
  selectProps?: ComponentProps<'select'>;
  options?: ComponentProps<'option'>[];
  error?: string;
}

export default function Select({
  label,
  labelProps,
  selectProps,
  options,
  error,
}: SelectProps) {
  return (
    <label
      className="relative flex flex-col text-xs after:absolute after:right-[20px] after:top-[30px] after:text-cyan-950 after:content-['▼']"
      {...labelProps}
    >
      <span>{label}</span>
      <select
        className="cursor-pointer appearance-none border-2 border-teal-600 px-4 py-2 text-sm"
        {...selectProps}
      >
        {options?.map((optionProp) => (
          <option key={optionProp.value?.toString()} {...optionProp} />
        ))}
      </select>
      <span className="h-4 pl-2 text-red-500">{error}</span>
    </label>
  );
}
