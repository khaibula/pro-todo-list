import { Link } from 'react-router-dom';
import { WithChildren } from '~/src/app/lib/react-std/utility-types.ts';
import { routerConfig } from '~/src/app/router/routerConfig.ts';

export const HomeLink = ({ children }: WithChildren) => {
  return <Link to={routerConfig.home.path}>{children}</Link>;
};

export const TasksLink = ({ children }: WithChildren) => {
  return <Link to={routerConfig.tasks.path}>{children}</Link>;
};
