import { useState, useEffect } from 'react';
import Project, { ProjectInterface } from './Project';
import Section from '../Section';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    const fetchProjects = async (): Promise<ProjectInterface[]> =>
      await (await fetch('projects.json')).json();

    fetchProjects().then((projects) => setProjects([...projects]));
  }, []);

  return (
    <Section heading="Проекты">
      <div className="flex h-auto w-full flex-wrap justify-center gap-6 overflow-hidden py-12 px-0 sm:px-28">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
