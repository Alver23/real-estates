// Dependencies
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Components
import NotificationBar from '@alversoft/components/notification-bar';

import menuItems from './menu-config';

const Navbar = (): ReactElement => {
  return (
    <nav className="md:top-0 z-20 | w-full md:w-auto | bg-green-300 md:bg-white">
      <ul className="flex md:flex flex-col md:flex-row | md:space-x-6 text-white md:text-primary">
        {menuItems.map(({ id, name, url }) => (
          <li key={id} className="px-4 py-2 md:p-0 | border-b md:border-0">
            <Link to={url}>{name}</Link>
          </li>
        ))}
        <li className="px-4 py-2 md:p-0">
          <Link to="/" className="flex flex-row items-center relative">
            <span className="pr-2">Perfil</span>
            <MdKeyboardArrowDown className="hidden md:block" size={24} />
            <div className="absolute hidden md:block top-0.5 right-0">
              <NotificationBar />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
