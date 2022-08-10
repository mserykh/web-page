import { useState } from 'react';
import Burger from './Burger';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

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
      <ul className="hidden lg:flex justify-self-end">{linkList}</ul>
      <Burger
        onClick={() => setSideMenuOpen(!isSideMenuOpen)}
        burgerState={isSideMenuOpen}
      />
    </nav>
  );
};

export default Navigation;
