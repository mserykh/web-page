type SectionProps = {
  id: string;
  title?: string;
  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className="container mx-auto px-4 mb-32">
      <h2 className="mb-16 text-3xl font-bold uppercase tracking-wide">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
};

export default Section;
