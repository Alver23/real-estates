// Dependencies
import { FC, ReactElement } from 'react';

// Components
import Header from '@alversoft/components/header';
import Footer from '@alversoft/components/footer';

// Interfaces
import ILayoutProps from './interfaces';

// Styles
import './scss/index.scss';

const LayoutApp: FC<ILayoutProps> = ({ children }: ILayoutProps): ReactElement => {
  return (
    <div className="layout-container bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutApp;
