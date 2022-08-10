type SectionProps = {
  id?: string;
  title?: string;
  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className="container mx-auto px-4 mb-10">
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
