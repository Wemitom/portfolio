import { ProjectInterface } from '../components/Projects/Project';
import { SkillCategory } from '../components/Skills';
import tableURL from '../assets/table.png';
import learningURL from '../assets/learning.png';
import todoURL from '../assets/todo.png';

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', exp: 5 },
      { name: 'CSS', exp: 4 },
      { name: 'JavaScript', exp: 4 },
      { name: 'TypeScript', exp: 4 },
      { name: 'React', exp: 5 },
      { name: 'Redux', exp: 4 },
      { name: 'Tailwind', exp: 3 },
      { name: 'Bootstrap', exp: 3 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.Js', exp: 3 },
      { name: 'Express.Js', exp: 3 },
      { name: 'C#', exp: 3 },
      { name: 'PHP', exp: 2 },
      { name: 'PostgreSQL', exp: 2 },
      { name: 'MongoDB', exp: 3 },
      { name: 'Nginx/Apache', exp: 2 },
      { name: 'Docker', exp: 1 },
    ],
  },
  {
    category: 'Другие',
    skills: [
      { name: 'C++', exp: 3 },
      { name: 'Delphi/Pascal', exp: 3 },
      { name: 'x86 assembly', exp: 2 },
      { name: 'Английский', exp: 5 },
    ],
  },
];

const projects: ProjectInterface[] = [
  {
    img: tableURL,
    title: 'Table',
    description:
      'Отвечал за разработку функционала веб-приложения для онлайн брони столика в ресторане. Мною сайт был полностью перенесен на React/Redux.',
    stack: 'Frontend: TypeScript, React/Redux; Backend: Django, PostgreSQL',
    gitURL: 'https://github.com/Wemitom/table_dev',
  },
  {
    img: learningURL,
    title: 'Дистанционное обучение',
    description:
      '1. Представление учебных материалов с помощью видео, презентаций, документов. Преподаватель может выложить учебный материал к тому или иному курсу, а студенты, записанные на соответствующий курс, могут либо просмотреть материал (для видео), либо скачать для дальнейшего самостоятельного просмотра.2. Организация текущего контроля знаний (выдача заданий, тестирование, загрузка отчётов, загрузка изображений). Преподаватель может запланировать проведение теста, лабораторной работы или задать домашнюю работу. В соответствующее запланированное время студент может пройти тестирование, либо выложить отчёт к лабораторной или домашней работе. 3. Организация общения преподавателя со студентами. У студента имеется возможность задать вопрос по лекции или другому материалу.',
    stack: 'Frontend: TypeScript, React; Backend: Node.Js, Express.Js, MongoDB',
    gitURL: 'https://github.com/Wemitom/distance-learning',
  },
  {
    img: todoURL,
    title: 'Напоминания',
    description:
      'Приложение служит для хранения напоминаний пользователя. Интерфейс сделан с учётом обеспечения максимальных доступности и удобства. Для облегчения работы пользователя с напоминаниями, было решено разбить их по категориям. После выполнения того или иного напоминания, пользователь может отметить напоминание как выполненное или удалить его. Так же для увеличения доступности веб-приложения у каждой категории имеется уникальный цветовой маркер, позволяющий определить, к какой категории относится то или иное напоминание.',
    stack:
      'Frontend: JavaScript, React/Redux; Backend: Node.Js, Express.Js, MongoDB',
    gitURL: 'https://github.com/Wemitom/react-todo-training',
  },
];

export { skills, projects };
