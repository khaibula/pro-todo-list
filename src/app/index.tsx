import { StrictMode } from 'react';
import { AppRouter } from '~/src/app/router/AppRouter.tsx';
import './index.scss';

export const App = () => {
  return (
    <StrictMode>
      <AppRouter></AppRouter>
    </StrictMode>
  );
};
