'use client';

import { useEffect } from 'react';

export default function ReactScanProvider() {
  useEffect(() => {
    // Only load in development
    if (process.env.NODE_ENV === 'development') {
      import('react-scan').then(({ scan }) => {
        scan({
          enabled: true,
          log: false,
        });
      });
    }
  }, []);

  return null;
}
