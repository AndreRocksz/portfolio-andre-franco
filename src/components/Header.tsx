import { navigation } from '../content/portfolio';
import styles from '../styles/Portfolio.module.css';

export default function Header() {
  return (
    <div className={styles.dark}>
      <header className={`${styles.wrap} ${styles.header}`}>
        <a className={styles.brand} href="#inicio">
          <span aria-hidden="true">AF</span> André Franco
        </a>
        <nav aria-label="Seções do portfólio">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </header>
    </div>
  );
}
