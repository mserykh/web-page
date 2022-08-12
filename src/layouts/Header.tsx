import { useState } from 'react';
import Burger from '../components/Burger';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Header: React.FC = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 py-4 w-full h-[106px] bg-dark z-40">
      <div className="container px-4 max-w-full flex justify-between items-center">
        <Logo />
        <Navigation
          isOpen={isSideMenuOpen}
          onClick={() => setSideMenuOpen(!isSideMenuOpen)}
        />
        <Burger
          onClick={() => setSideMenuOpen(!isSideMenuOpen)}
          burgerState={isSideMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
