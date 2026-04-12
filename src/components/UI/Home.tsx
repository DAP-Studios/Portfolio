import React from 'react';

export const HomeAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};