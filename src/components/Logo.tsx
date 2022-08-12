import logo from '../assets/icons/logo.png';

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img src={logo} alt="logo" />
      <h1 className="ml-2 text-3xl font-black uppercase">12-factor apps</h1>
    </a>
  );
};

export default Logo;
