'use client';

import React from 'react';
import { z } from 'zod';

import { Toaster } from '@app/components/core/toaster';
import { AppProvider } from '@app/providers/app.provider';
import QueryProvider from '@app/providers/query.provider';
import { UserProvider } from '@app/providers/user.provider';
import { getValidationMessages } from '@app/utils/validation.utils';

z.setErrorMap(getValidationMessages);

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <AppProvider>
      <UserProvider>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </UserProvider>
    </AppProvider>
  );
}
