import { Link } from 'react-scroll';

type NavigationLinkProps = {
  onClick: () => void;
  href: string;
  title: string;
  offset: number;
};

const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <li>
      <Link
        className="p-4 text-xl font-bold uppercase cursor-pointer hover:text-lime-400 active:text-fuchsia-400"
        activeClass="text-fuchsia-500"
        to={props.href}
        offset={props.offset}
        spy={true}
        smooth={true}
        onClick={props.onClick}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavigationLink;
