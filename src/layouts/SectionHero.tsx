type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const SectionHero = (props: SectionProps) => {
  return (
    <section
      id={props.id}
      className="relative h-hero mb-32 px-4 flex justify-center items-center gap-24 font-lato-black object-contain overflow-hidden"
    >
      {props.children}
    </section>
  );
};

export default SectionHero;
