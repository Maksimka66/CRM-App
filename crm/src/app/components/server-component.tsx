import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('server');

  return (
    <div>
      <span>Server component</span>
      {children}
    </div>
  );
}
