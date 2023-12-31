import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full  antialiased">
    {props.meta}

    <main className="text-xl">{props.children}</main>
  </div>
);

export { Main };
