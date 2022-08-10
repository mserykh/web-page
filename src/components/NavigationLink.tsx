import { Link } from 'react-scroll';

type NavigationLinkProps = {
  href: string;
  title: string;
};

const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <li>
      <Link
        className="p-4 text-xl font-bold uppercase"
        activeClass="font-black"
        to={props.href}
        offset={-70}
        spy={true}
        smooth={true}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavigationLink;
