import { contact } from '../content/portfolio';
import styles from '../styles/Portfolio.module.css';

export default function Contact() {
  return (
    <footer className={`${styles.dark} ${styles.footer}`} id="contato" aria-labelledby="contato-titulo">
      <div className={`${styles.wrap} ${styles.footerGrid}`}>
        <div className={styles.sectionHead}>
          <p className={styles.label}>Contato</p>
          <h2 id="contato-titulo">Vamos conversar?</h2>
          <p>Estou em busca da minha primeira oportunidade em desenvolvimento front-end.</p>
        </div>
        <div className={styles.contacts}>
          <a className={styles.primary} href={`mailto:${contact.email}`}>{contact.email}</a>
          <div className={styles.actions}>
            <a className={styles.link} href={contact.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a className={styles.link} href={contact.github}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
