import NavigationLink from './NavigationLink';

const Navigation = () => {
  const navigationLinks = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#factors',
      title: '12 Factors',
    },
    {
      href: '#fact',
      title: 'Fact',
    },
    {
      href: '#bonus',
      title: 'Bonus',
    },
  ];

  const linkList = navigationLinks.map((l) => (
    <NavigationLink key={l.href} href={l.href} title={l.title} />
  ));
  return (
    <nav>
      <ul className="flex justify-self-end">{linkList}</ul>
    </nav>
  );
};

export default Navigation;
