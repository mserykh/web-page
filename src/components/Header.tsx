import Logo from './Logo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-10 w-full h-[154px] bg-violet-600 z-40">
      <div className="container px-4 max-w-full flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
