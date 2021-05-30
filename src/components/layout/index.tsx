// Dependencies
import { FC, ReactElement } from 'react';

// Components
import Header from '@alversoft/components/header';
import Footer from '@alversoft/components/footer';

// Interfaces
import ILayoutProps from './interfaces';

const LayoutApp: FC<ILayoutProps> = ({ children }: ILayoutProps): ReactElement => {
  return (
    <div className="bg-white">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutApp;
