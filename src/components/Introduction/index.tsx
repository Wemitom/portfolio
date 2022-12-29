import Section from '../Section';

const Introduction = () => {
  return (
    <Section>
      <>
        <h1 className="my-10 text-6xl font-bold text-accent">
          Привет, меня зовут Влад!
        </h1>
        <p className="mb-3 text-xl sm:w-3/6">
          Я занимаюсь разработкой уже около 4 лет. Сейчас в основом разрабатываю
          сайты. В данный момент ищу работу на позицию Junior/Intern Frontend
          разработчика! Если мое портофолио тебя заинтересует, мои
          контакты/резюме находятся в конце страницы!
        </p>
      </>
    </Section>
  );
};

export default Introduction;
