type SectionProps = {
  id: string;
  title?: string;
  color?: string;
  children?: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className={`px-4 ${props.color}`}>
      <div className="container py-12 lg:py-16 lg:pb-24 mx-auto">
        <h2 className="sticky top-[106px] py-12 lg:pty-16 border-t-lime-400 border-t-4 bg-dark text-3xl lg:text-6xl font-lato-bold uppercase tracking-wide z-10">
          {props.title}
        </h2>
        <div className="mt-12 lg:mt-24">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
