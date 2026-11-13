import Contact from './components/Contact';
import Header from './components/Header';
import { About, Introduction } from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import styles from './styles/Portfolio.module.css';

export default function App() {
  return (
    <div className={styles.portfolio}>
      <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Introduction />
        <Projects />
        <About />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
