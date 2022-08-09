import Logo from './Logo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 py-10 bg-violet-600 z-40">
      <header className="flex justify-between items-center">
        <Logo />
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
