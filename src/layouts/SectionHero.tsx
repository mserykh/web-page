type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const SectionHero = (props: SectionProps) => {
  return (
    <section className="relative h-hero mx-auto mb-32 px-4 grid font-lato-black object-contain overflow-hidden">
      {props.children}
    </section>
  );
};

export default SectionHero;
