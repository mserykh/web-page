type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return <section>{props.children}</section>;
};

export default Section;
