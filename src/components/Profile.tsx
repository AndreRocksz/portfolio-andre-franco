import portrait from '../assets/andre-franco.jpg';
import styles from '../styles/Portfolio.module.css';

export function Introduction() {
  return (
    <section className={`${styles.dark} ${styles.heroShell}`} id="inicio" aria-labelledby="nome">
      <div className={styles.wrap}>
        <div className={styles.hero}>
          <div>
            <p className={styles.label}>Portfólio · Desenvolvimento front-end</p>
            <h1 id="nome">André Franco</h1>
            <p className={styles.lead}>Interfaces para problemas reais.</p>
            <p className={styles.intro}>
              Crio aplicações web com React, TypeScript e Next.js e também desenvolvo agentes de IA.
              Parto de necessidades práticas, da organização de entregas à interação pelo WhatsApp.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#projetos">
                Explorar projetos <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.link} href="#contato">Entrar em contato</a>
            </div>
          </div>
          <div className={styles.portraitFrame}>
            <img
              className={styles.portrait}
              src={portrait}
              alt="Retrato de André Franco"
              width={440}
              height={440}
              fetchPriority="high"
            />
          </div>
        </div>
        <div className={styles.heroFoot}>
          <span>Front-End concluído · EBAC</span>
          <span>Em busca da primeira oportunidade em desenvolvimento</span>
        </div>
      </div>
    </section>
  );
}

const background = [
  { label: 'Formação concluída', detail: 'Front-End · EBAC' },
  { label: 'Etapa a concluir', detail: 'Back-End · Formação Full Stack' },
  { label: 'Formação complementar', detail: 'Python + IA e agentes com n8n · Hashtag' },
  { label: 'Experiência anterior', detail: 'Docência em História' },
];

export function About() {
  return (
    <section className={`${styles.about} ${styles.section}`} id="sobre" aria-labelledby="sobre-titulo">
      <div className={`${styles.wrap} ${styles.aboutGrid}`}>
        <div className={styles.sectionHead}>
          <p className={styles.label}>Trajetória</p>
          <h2 id="sobre-titulo">Sobre mim</h2>
          <p>
            Sou André Franco. Atuei como professor de História antes de migrar para o
            desenvolvimento web. Da sala de aula, levo a prática de organizar informações,
            explicar ideias com clareza e ajustar a abordagem quando algo não funciona.
          </p>
          <p>
            Concluí a etapa de Front-End da formação Full Stack na EBAC e ainda tenho a etapa
            de Back-End a concluir. Busco minha primeira oportunidade em desenvolvimento,
            com foco em interfaces responsivas e acessíveis.
          </p>
          <p>
            Começo pelo que a pessoa precisa fazer e acompanho o fluxo até o resultado.
            Nos meus projetos, isso aparece no cuidado com formulários, dados salvos,
            mensagens de erro, testes e documentação para outra pessoa rodar a aplicação.
          </p>
          <p>
            Também fiz duas formações na Hashtag: Python + IA e construção de agentes de IA com
            n8n. Usei esse repertório em um projeto de atendimento pelo WhatsApp para uma
            empresa de marketing digital. Minha formação complementar inclui um curso sobre
            agentes de IA.
          </p>
        </div>
        <aside className={styles.training} aria-labelledby="formacao">
          <h3 id="formacao">Formação e trajetória</h3>
          <ul>
            {background.map(({ label, detail }) => (
              <li key={label}><span>{label}</span><strong>{detail}</strong></li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
