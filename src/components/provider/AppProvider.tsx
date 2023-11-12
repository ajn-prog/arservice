import { QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '@/features/auth';
import { CartProvider } from '@/features/tenders';
import { queryClient } from '@/lib/react-query';

import { ErrorProvider } from './ErrorProvider';
import { StyleProvider } from './StyleProvider';

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ErrorProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <StyleProvider>
            <AuthProvider>
              <CartProvider>
                <HelmetProvider>{children}</HelmetProvider>
              </CartProvider>
            </AuthProvider>
          </StyleProvider>
        </Router>
      </QueryClientProvider>
    </ErrorProvider>
  );
};
