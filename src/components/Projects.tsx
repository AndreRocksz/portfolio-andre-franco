import { useState } from 'react';
import { projects } from '../content/portfolio';
import type { Project } from '../content/portfolio';
import styles from '../styles/Portfolio.module.css';

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const { image } = project;
  const titleId = `titulo-${project.id}`;
  const imageId = `captura-${project.id}`;
  const action = expanded ? 'Reduzir captura' : 'Ampliar captura';

  return (
    <article
      className={expanded ? `${styles.case} ${styles.expanded}` : styles.case}
      id={project.id}
      aria-labelledby={titleId}
    >
      <div className={styles.caseCopy}>
        <p className={styles.label}>{project.label}</p>
        <h3 id={titleId}>{project.name}</h3>
        <p className={styles.caseLine}>{project.heading}</p>
        <p>{project.description}</p>
        {project.decision && (
          <div className={styles.note}>
            <strong>Decisão técnica</strong>
            <p>{project.decision}</p>
          </div>
        )}
        <p className={styles.stack}>{project.technologies.join(' · ')}</p>
        {(project.repository || project.demo) && (
          <div className={styles.projectLinks}>
            {project.repository && (
              <a href={project.repository} aria-label={`Ver código de ${project.name} no GitHub`}>
                Ver código <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} aria-label={`Abrir demonstração de ${project.name}`}>
                Abrir demonstração <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* A mesma imagem serve à prévia e à vista ampliada, sem baixar duas cópias. */}
      {image ? (
        <button
          className={styles.preview}
          type="button"
          aria-label={`${action}: ${project.name}`}
          aria-controls={imageId}
          aria-expanded={expanded}
          onClick={() => setExpanded((wasExpanded) => !wasExpanded)}
        >
          <span className={styles.previewLabel}>
            <span>{image.caption ?? 'Interface · Desktop'}</span>
            <span className={styles.zoom}>{action} <span aria-hidden="true">↗</span></span>
          </span>
          <span id={imageId} className={`${styles.capture} ${styles[image.crop]}`}>
            <img
              src={image.source}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </span>
        </button>
      ) : project.kind === 'independent' && (
        <figure className={styles.conversationPreview}>
          <figcaption className={styles.previewLabel}>
            <span>WhatsApp · Exemplo de atendimento</span>
            <span>Conversa ilustrativa</span>
          </figcaption>
          <ol className={styles.conversationMessages}>
            {project.conversation.map(({ sender, text }) => (
              <li
                key={text}
                className={sender === 'Cliente' ? styles.customerMessage : styles.agentMessage}
              >
                <strong>{sender}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </figure>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className={`${styles.section} ${styles.wrap}`} id="projetos" aria-labelledby="projetos-titulo">
      <div className={styles.sectionHead}>
        <p className={styles.label}>Trabalhos selecionados</p>
        <h2 id="projetos-titulo">Projetos em destaque</h2>
        <p>
          Três projetos de front-end da formação na EBAC e um projeto independente de IA:
          um agente de atendimento e agendamento para uma empresa de marketing digital.
        </p>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
