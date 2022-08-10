import { navigationLinks } from '../helpers/constants';
import NavigationLink from './NavigationLink';

type NavigationProps = {
  onClick: () => void;
  isOpen: boolean;
};

const Navigation = (props: NavigationProps) => {
  const linkList = navigationLinks.map((l) => (
    <NavigationLink
      key={l.href}
      href={l.href}
      title={l.title}
      offset={l.offset}
      onClick={props.onClick}
    />
  ));

  return (
    <nav>
      <ul
        className={`${
          props.isOpen ? 'translate-x-0' : 'translate-x-[100%]'
        } bg-violet-600 fixed top-0 left-0 w-full h-full mt-[154px] mx-auto items-center lg:mt-auto lg:translate-x-0 lg:static flex flex-col lg:flex-row lg:justify-self-end transition duration-1000 delay-250 ease`}
      >
        {linkList}
      </ul>
    </nav>
  );
};

export default Navigation;
