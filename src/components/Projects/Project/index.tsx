import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from '../../Modal';

export interface ProjectInterface {
  img: string;
  title: string;
  description: string;
  stack: string;
  gitURL: string;
}

const Project = ({
  img,
  title,
  description,
  stack,
  gitURL,
}: ProjectInterface) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [showCard, setShowCard] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    inView && setShowCard(true);
  }, [inView]);

  return (
    <>
      <article
        ref={ref}
        aria-hidden={!showCard}
        className={`${
          showCard ? 'animate-fade-in-bottom' : 'opacity-0'
        } block h-64 w-64 cursor-pointer rounded-md border bg-100% shadow-sm transition-bgSize hover:bg-150%`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          aria-hidden={!showCard}
          tabIndex={showCard ? 0 : undefined}
          className="tab flex h-full items-center justify-center rounded-md text-center text-secondary/0 transition hover:bg-accent hover:bg-opacity-80 hover:text-secondary dark:hover:text-darkSecondary"
          onClick={() => setOpen(true)}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') setOpen(true);
          }}
        >
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </article>
      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        description={description}
        stack={stack}
        gitURL={gitURL}
      />
    </>
  );
};

export default Project;
