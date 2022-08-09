import Logo from './Logo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <div className="">
      <header>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
