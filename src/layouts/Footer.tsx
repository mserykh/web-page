const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="container mx-auto px-10 py-6">
      <div className="flex justify-between items-center">
        <span>{`© ${year}`}</span>
        <span>Made by Maria Serykh</span>
        <a
          href="https://github.com/mserykh"
          target="_blank"
          rel="noreferrer"
          className="hover:text-lime-400 active:text-fuchsia-500"
          aria-label="Go to the github account of the developer"
        >
          github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
