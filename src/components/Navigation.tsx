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
        } bg-dark fixed top-0 left-0 w-full h-menu mt-[106px] mx-auto lg:mt-auto lg:translate-x-0 lg:static flex flex-col lg:flex-row items-center lg:justify-self-end justify-center gap-y-10 duration-500 delay-250 ease-menu-out`}
      >
        {linkList}
      </ul>
    </nav>
  );
};

export default Navigation;
