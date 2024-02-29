'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#f76616"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

