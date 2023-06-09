import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import FadeInHeading from '../FadeInHeading';
import Separator from '../Separator';
import Section from '../Section';

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    exp: number;
  }[];
}

const getChartWidth = (value: number) => {
  switch (value) {
    case 0:
      return 'w-0';
    case 1:
      return 'w-1/5';
    case 2:
      return 'w-2/5';
    case 3:
      return 'w-3/5';
    case 4:
      return 'w-4/5';
    case 5:
      return 'w-full';
  }
};

const Skills = () => {
  const [refChart, inViewChart] = useInView({ threshold: 0.5 });
  const [showChart, setShowChart] = useState(false);
  useEffect(() => {
    inViewChart && setShowChart(true);
  }, [inViewChart, showChart]);

  const [skills, setSkills] = useState<SkillCategory[]>([]);
  useEffect(() => {
    const fetchSkills = async (): Promise<SkillCategory[]> =>
      await (await fetch('skills.json')).json();

    fetchSkills().then((skill) => setSkills([...skill]));
  }, []);

  return (
    <Section heading="Навыки">
      <div className="flex flex-col items-center gap-3 py-6 text-xl sm:text-2xl">
        <Tab.Group onChange={() => setShowChart(false)}>
          <Tab.List className="mb-3 flex flex-col gap-3 sm:flex-row">
            {skills.map((category) => (
              <Tab as={React.Fragment} key={category.category}>
                {({ selected }) => (
                  <button
                    className={[
                      'w-28 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 sm:w-40',
                      selected
                        ? 'bg-accent'
                        : 'bg-primary hover:bg-accent/30 dark:bg-darkPrimary',
                    ].join(' ')}
                  >
                    {category.category}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {skills.map((category) => (
              <Tab.Panel key={`${category.category} panel`}>
                <ul ref={refChart}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="mb-3 grid grid-cols-2 gap-6"
                    >
                      <div>{skill.name}</div>
                      <div className={`w-32 text-center sm:w-64`}>
                        <div
                          className={`h-full ${
                            showChart ? getChartWidth(skill.exp) : 'w-0'
                          } bg-accent transition-width duration-1000`}
                        >
                          {showChart && <p>{skill.exp}/5</p>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  );
};

export default Skills;
