import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '~/app/router/root';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root>123</Root>,
  },
]);

export const AppRouter = () => <RouterProvider router={appRouter} />;
