'use client';

import { ReactNode, useState } from 'react';

interface AccordionProps {
  label: string;
  children: ReactNode;
}

export default function Accordion({ label, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="mt-3 flex items-start justify-between">
        <h3 className="font-semibold">{label}</h3>
        <button
          className={`h-7 w-7 rounded-full bg-cyan-800 text-xl font-semibold text-teal-200 transition-all ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          onClick={() => setIsOpen((open) => !open)}
        >
          +
        </button>
      </div>
      <div
        className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} `}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
