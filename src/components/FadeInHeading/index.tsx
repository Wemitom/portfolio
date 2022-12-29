import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInHeading = ({
  visible,
  children,
}: {
  visible: boolean;
  children: JSX.Element | string;
}) => {
  const [ref, inView] = useInView({ threshold: 1 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    inView && visible && setShow(true);
  }, [inView, visible]);

  return (
    <h2
      ref={ref}
      aria-hidden={!show}
      className={`${
        show ? 'animate-fade-in-left' : 'opacity-0'
      } text-center text-5xl font-medium underline`}
    >
      {children}
    </h2>
  );
};

export default FadeInHeading;
