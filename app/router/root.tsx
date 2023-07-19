import { WithChildren } from '~/app/lib/react-std/utility-types.ts';

export const Root = ({ children }: WithChildren) => {
  return <main>{children}</main>;
};
