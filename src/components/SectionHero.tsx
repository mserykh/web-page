type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const SectionHero = (props: SectionProps) => {
  return (
    <section className="h-screen mx-auto px-4 mb-10">{props.children}</section>
  );
};

export default SectionHero;
