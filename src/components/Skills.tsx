import { aiStudies, projects, skills } from '../content/portfolio';
import styles from '../styles/Portfolio.module.css';

function AiSkills() {
  return (
    <section className={styles.aiSpotlight} aria-labelledby="habilidades-ia">
      <div className={styles.sectionHead}>
        <p className={styles.label}>Formação complementar e prática</p>
        <h3 id="habilidades-ia">IA aplicada e automação</h3>
        <p>Aplicações de IA com Python, criação de agentes conversacionais e automação de fluxos com n8n.</p>
        <p>No projeto de WhatsApp, usei n8n para organizar a triagem de leads e o agendamento de reuniões.</p>
        <a className={styles.aiProjectLink} href="#agente-whatsapp">
          Ver agente de WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className={styles.aiStudies} aria-label="Formações e cursos de IA">
        {aiStudies.map(({ title, provider }) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{provider}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Skills() {
  return (
    <section
      className={`${styles.section} ${styles.wrap}`}
      id="habilidades"
      aria-labelledby="habilidades-titulo"
    >
      <div className={styles.sectionHead}>
        <p className={styles.label}>Repertório técnico</p>
        <h2 id="habilidades-titulo">Habilidades</h2>
        <p>Tecnologias e práticas de front-end, IA e automação, com exemplos dos projetos em que as apliquei.</p>
      </div>
      <AiSkills />
      <div className={styles.skillGrid}>
        {skills.map(({ title, tools, evidence, projectId }) => {
          const project = projects.find(({ id }) => id === projectId);
          return (
            <article className={styles.skill} key={title}>
              <h3>{title}</h3>
              <p>{tools}</p>
              <p className={styles.skillEvidence}>{evidence}</p>
              {project && (
                <a href={`#${project.id}`}>
                  Ver no projeto {project.name} <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
