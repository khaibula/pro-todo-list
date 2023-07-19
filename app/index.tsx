import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppRouter } from '~/app/router/AppRouter.tsx';

const root = document.body as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
