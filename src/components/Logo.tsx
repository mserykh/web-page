import logo from '../assets/icons/logo.png';

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img src={logo} alt="logo" />
      <h1 className="uppercase font-black ml-2">12 factor apps</h1>
    </a>
  );
};

export default Logo;
