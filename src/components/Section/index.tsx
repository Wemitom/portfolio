import { useInView } from 'react-intersection-observer';
import Separator from '../Separator';
import { useEffect, useState } from 'react';
import FadeInHeading from '../FadeInHeading';

const Section = ({
  heading,
  children,
}: {
  heading?: string;
  children: JSX.Element;
}) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    inView && setShow(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`${
        show ? 'animate-fade-in' : 'opacity-0'
      } mb-4 flex w-full flex-col items-center justify-center`}
    >
      {heading && <FadeInHeading visible={show}>{heading}</FadeInHeading>}
      {children}
      <Separator />
    </section>
  );
};

export default Section;
