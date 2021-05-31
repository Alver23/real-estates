// Dependencies
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';

// Components
import Navbar from '@alversoft/components/navbar';
import NotificationBar from '@alversoft/components/notification-bar';

// Assets
import logoDesktop from '@alversoft/assets/images/logo-desktop.svg';
import logoMobile from '@alversoft/assets/images/logo-mobile.svg';

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="flex flex-row justify-between items-center md:px-20 w-full h-14 | border-b border-green-100">
      <div className="flex flex-row items-end">
        <button type="button" className="relative md:hidden px-4" onClick={() => setIsOpen(!isOpen)}>
          <VscMenu className="text-green-400" size={30} />
          <div className="absolute top-0 right-2">
            <NotificationBar />
          </div>
        </button>
        <Link to="/" className="block">
          <img className="hidden md:block text-green-800" src={logoDesktop} alt="La Haus" title="La Haus Logo" />
          <img className="md:hidden text-green-800" src={logoMobile} alt="La Haus" title="La Haus Logo" />
        </Link>
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden absolute w-full top-14">{isOpen && <Navbar />}</div>
    </header>
  );
};

export default Header;
