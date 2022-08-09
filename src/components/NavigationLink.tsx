type NavigationLinkProps = {
  href: string;
  title: string;
};

const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <li>
      <a className="p-4" href={props.href}>
        {props.title}
      </a>
    </li>
  );
};

export default NavigationLink;
