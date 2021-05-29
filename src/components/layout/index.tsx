// Dependencies
import { FC, ReactElement } from 'react';

// Components
import Footer from '@alversoft/components/footer';

// Interfaces
import ILayoutAppProps from './interfaces';

const LayoutApp: FC<ILayoutAppProps> = ({ children }: ILayoutAppProps): ReactElement => {
  return (
    <div className="bg-white">
      <div>
        <p>menu</p>
      </div>
      <div className="h-full min-h-88">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutApp;
