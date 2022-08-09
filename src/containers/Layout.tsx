import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
