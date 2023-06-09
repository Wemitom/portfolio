import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { skills } from './services/constants';

function App() {
  return (
    <>
      <main className="w-4/5">
        <Introduction />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
