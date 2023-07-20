import { Outlet } from 'react-router';

export const Root = () => {
  return (
    <main className="h-screen bg-gray-200">
      <Outlet />
    </main>
  );
};
