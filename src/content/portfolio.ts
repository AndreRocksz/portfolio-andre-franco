import compasso from '../assets/compasso.jpg';
import diario from '../assets/diario-de-bordo.jpg';
import estante from '../assets/minha-estante.jpg';

export const navigation = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export const contact = {
  email: 'andrefr.rocha8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrefrancodarocha/',
  github: 'https://github.com/AndreRocksz',
};

type ProjectId = 'compasso' | 'diario-de-bordo' | 'minha-estante' | 'agente-whatsapp';

interface ProjectImage {
  source: string;
  alt: string;
  width: number;
  height: number;
  crop: 'compasso' | 'diario' | 'estante' | 'defaultCrop';
  caption?: string;
}

interface ProjectDetails {
  id: ProjectId;
  name: string;
  label: string;
  heading: string;
  description: string;
  decision?: string;
  technologies: readonly string[];
  demo?: string;
}

interface ConversationMessage {
  sender: 'Cliente' | 'Agente';
  text: string;
}

export type Project = ProjectDetails & (
  | { kind: 'course'; repository: string; image: ProjectImage }
  | {
    kind: 'independent';
    repository?: string;
    image?: ProjectImage;
    conversation: readonly ConversationMessage[];
  }
);

// O identificador liga as habilidades ao caso correspondente. Uma demonstração
// só recebe URL depois de ser conferida; a lista aceita novos casos sem alterar o layout.
export const projects: readonly Project[] = [
  {
    id: 'compasso',
    kind: 'course',
    name: 'Compasso',
    label: '01 / Planejamento de trabalho',
    heading: 'Decidir qual entrega vem primeiro.',
    description: 'Um organizador de demandas para autônomos de serviços digitais. Reúne clientes, prazos, prioridades e andamento em uma lista pesquisável.',
    decision: 'Separei as regras de data, filtros e ordenação da interface. Assim, pude testar cenários como uma entrega para hoje e uma entrega atrasada sem depender da tela.',
    technologies: ['Next.js', 'TypeScript', 'Jest', 'Testing Library'],
    repository: 'https://github.com/AndreRocksz/task-list',
    image: {
      source: compasso,
      alt: 'Painel do Compasso com resumo de prazos, filtros e lista de demandas',
      width: 1050,
      height: 1113,
      crop: 'compasso',
    },
  },
  {
    id: 'diario-de-bordo',
    kind: 'course',
    name: 'Diário de Bordo',
    label: '02 / Histórico profissional',
    heading: 'Recuperar o que foi feito e aprendido.',
    description: 'Um diário para registrar entregas e aprendizados e recuperar exemplos concretos na revisão da semana. O histórico pode ser filtrado por projeto e período.',
    decision: 'Separei o cache dos arquivos dos registros salvos no navegador. Depois do preparo inicial, a aplicação pode abrir offline; o histórico tem exportação e recuperação próprias.',
    technologies: ['JavaScript', 'PWA', 'Service Worker', 'Web Storage'],
    repository: 'https://github.com/AndreRocksz/diario-de-bordo',
    image: {
      source: diario,
      alt: 'Diário de Bordo com filtros do histórico e formulário para registrar uma atividade',
      width: 1050,
      height: 1709,
      crop: 'diario',
    },
  },
  {
    id: 'minha-estante',
    kind: 'course',
    name: 'Minha Estante',
    label: '03 / Biblioteca pessoal',
    heading: 'Conferir um livro antes de comprá-lo.',
    description: 'Uma biblioteca pessoal para cadastrar livros e consultar o acervo por título ou autor, com ou sem acentos.',
    decision: 'Troquei a API temporária por armazenamento no navegador. O formulário só é limpo depois que a gravação funciona, para que a pessoa não perca o que digitou em caso de erro.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    repository: 'https://github.com/AndreRocksz/CatalogoLivros',
    image: {
      source: estante,
      alt: 'Minha Estante com o resultado da busca por Brás Cubas ao lado do formulário de cadastro',
      width: 1050,
      height: 656,
      crop: 'estante',
    },
  },
  {
    id: 'agente-whatsapp',
    kind: 'independent',
    name: 'Agente de WhatsApp',
    label: '04 / Projeto independente de IA',
    heading: 'Do primeiro atendimento à reunião de alinhamento.',
    description: 'Criei um agente para uma empresa de marketing digital. Com o contexto do negócio, ele responde dúvidas sobre serviços, pacotes e opções avulsas, qualifica os interessados e combina um horário para a reunião.',
    decision: 'Usei o n8n para organizar o fluxo e a Evolution API para integrar o WhatsApp. O agente cuida do atendimento inicial e do agendamento. O responsável conduz o alinhamento, a negociação e o fechamento.',
    technologies: ['n8n', 'Evolution API', 'WhatsApp', 'Agentes de IA'],
    conversation: [
      { sender: 'Cliente', text: 'Vocês trabalham só com pacotes ou posso contratar um serviço avulso?' },
      { sender: 'Agente', text: 'Depende do serviço. O que você procura e qual é o objetivo da sua empresa?' },
      { sender: 'Cliente', text: 'Quero conversar sobre as opções. Terça de manhã funciona para mim.' },
      { sender: 'Agente', text: 'Posso agendar terça às 10h. Na reunião, o responsável vai entender seu objetivo e alinhar as opções com você.' },
    ],
  },
];

export const aiStudies = [
  { title: 'Python + IA', provider: 'Hashtag · Formação' },
  { title: 'Construção de agentes de IA com n8n', provider: 'Hashtag · Formação' },
  { title: 'Agentes de IA', provider: 'Curso complementar' },
];

interface Skill {
  title: string;
  tools: string;
  evidence: string;
  projectId: ProjectId;
}

export const skills: readonly Skill[] = [
  {
    title: 'Interfaces e CSS',
    tools: 'HTML semântico, CSS responsivo, Flexbox, Grid e CSS Modules. Também pratiquei Sass, Bootstrap, Tailwind CSS e Styled Components.',
    evidence: 'Na Minha Estante, adaptei a disposição da busca e do formulário para telas estreitas.',
    projectId: 'minha-estante',
  },
  {
    title: 'React e Next.js',
    tools: 'Componentes, props, hooks, estado e formulários tipados com TypeScript. App Router e rotas dinâmicas em projetos da formação.',
    evidence: 'No Compasso, a página usa renderização de servidor e o estado interativo fica em componentes cliente.',
    projectId: 'compasso',
  },
  {
    title: 'Dados e integração',
    tools: 'Consumo de APIs com Fetch e Axios, validação de entrada e persistência com Web Storage.',
    evidence: 'Na Minha Estante, tratei falhas de gravação para preservar tanto os dados existentes quanto os campos preenchidos.',
    projectId: 'minha-estante',
  },
  {
    title: 'PWA e arquitetura',
    tools: 'Manifesto, Service Worker, cache e atualização offline. Em outro projeto do curso, integrei micro front-ends com Module Federation.',
    evidence: 'No Diário de Bordo, separei os arquivos em cache dos registros do usuário.',
    projectId: 'diario-de-bordo',
  },
  {
    title: 'Testes e acessibilidade',
    tools: 'Jest, Testing Library e testes nativos do Node.js. Revisão de formulários, foco e uso por teclado; Lighthouse como ferramenta de diagnóstico.',
    evidence: 'No Compasso, testei regras de prazo, filtros e fluxos da interface.',
    projectId: 'compasso',
  },
  {
    title: 'Ferramentas e entrega',
    tools: 'Git, GitHub, npm, Vite, ESLint e Prettier. Preparação de builds e documentação de execução.',
    evidence: 'No Compasso, configurei um fluxo no GitHub Actions para executar lint, testes e build.',
    projectId: 'compasso',
  },
];
