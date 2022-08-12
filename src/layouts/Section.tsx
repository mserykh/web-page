type SectionProps = {
  id: string;
  title?: string;
  color?: string;
  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className={`px-4 mb-24 ${props.color}`}>
      <div className="container mx-auto py-12">
        <h2 className="mb-8 lg:mb-24 text-3xl lg:text-6xl font-lato-bold uppercase tracking-wide">
          {props.title}
        </h2>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
