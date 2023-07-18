'use client';

import React, { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';

interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName: string;
}

const ActiveLink = ({
  children,
  activeClassName,
  className = '',
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const computedClassName = `${className} ${isActive ? activeClassName : ''}`;

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
