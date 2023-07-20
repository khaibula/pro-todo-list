import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '~/src/app/router/pages/root.tsx';
import HomePage from '~/src/app/router/pages/home.tsx';
import { routerConfig } from '~/src/app/router/routerConfig.ts';
import TasksPage from '~/src/app/router/pages/tasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: routerConfig.home.path,
        element: <HomePage />,
      },
      {
        path: routerConfig.tasks.path,
        element: <TasksPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
