// Dependencies
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer className="flex justify-center items-center h-14 bg-green-300 px-0.5 mt-6">
      <p className="text-white text-center text-sm">Copyright © {new Date().getFullYear()} All Rights.</p>
    </footer>
  );
};

export default Footer;
