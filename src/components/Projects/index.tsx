import Project from './Project';
import FadeInHeading from '../FadeInHeading';
import Separator from '../Separator';
import Section from '../Section';
import { projects } from '../../services/constants';

const Projects = () => {
  return (
    <Section heading="Проекты">
      <div className="flex h-auto w-full flex-wrap justify-center gap-6 overflow-hidden py-12 px-0 sm:px-28">
        {projects.map((project) => (
          <Project
            key={project.title}
            img={project.img}
            title={project.title}
            description={project.description}
            stack={project.stack}
            gitURL={project.gitURL}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
