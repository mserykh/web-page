type SectionProps = {
  id?: string;
  title?: string;
  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
