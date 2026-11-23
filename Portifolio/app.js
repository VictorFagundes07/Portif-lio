const subjects = [
  {name:'Interação Humano-Computador',category:'Design e gestão',mark:'◎',description:'Estuda como as pessoas interagem com sistemas digitais. Aborda usabilidade, acessibilidade e criação de interfaces para tornar a experiência mais intuitiva e adequada às necessidades do usuário.',topics:['Usabilidade','Interfaces','Acessibilidade']},
  {name:'Gestão Ágil de Projetos de Software',category:'Design e gestão',mark:'⟳',description:'Apresenta formas de planejar, acompanhar e adaptar projetos de software em ciclos curtos. Trabalha colaboração, priorização de entregas e melhoria contínua com práticas ágeis.',topics:['Agilidade','Planejamento','Colaboração']},
  {name:'Inteligência Corporativa e Modelos de Negócios na Era Digital',category:'Design e gestão',mark:'◇',description:'Relaciona tecnologia, informação e estratégia de negócios. Explora como analisar oportunidades, criar propostas de valor e compreender modelos de negócios no ambiente digital.',topics:['Estratégia','Inovação','Proposta de valor']},
  {name:'Matemática Discreta',category:'Dados e fundamentos',mark:'∀',description:'Desenvolve o raciocínio matemático que sustenta a computação. Explora lógica, conjuntos, relações e estruturas discretas para compreender problemas e formular soluções.',topics:['Lógica','Conjuntos','Raciocínio']},
  {name:'Técnicas Avançadas de Banco de Dados Relacional e Não Relacional',category:'Dados e fundamentos',mark:'≡',description:'Aprofunda a organização e a manipulação de dados em diferentes modelos. Aborda consultas, relacionamentos e abordagens não relacionais, considerando as necessidades de cada aplicação.',topics:['SQL','Modelagem','NoSQL']},
  {name:'Projeto Integrador I',category:'Desenvolvimento',mark:'{ }',description:'Conecta os conhecimentos de diferentes disciplinas em um projeto prático. Envolve compreender um problema, definir uma solução e trabalhar em equipe para desenvolver e apresentar o resultado.',topics:['Projeto prático','Integração','Trabalho em equipe']},
  {name:'Organização de Computadores e Sistemas Operacionais',category:'Dados e fundamentos',mark:'⌘',description:'Apresenta a estrutura do computador e a atuação do sistema operacional. Explora processador, memória, processos e gerenciamento de recursos para entender como o software é executado.',topics:['Hardware','Memória','Sistemas operacionais']},
  {name:'Engenharia de Software',category:'Desenvolvimento',mark:'⌬',description:'Estuda como desenvolver software de maneira organizada. Abrange levantamento de requisitos, modelagem, etapas do desenvolvimento e qualidade para construir soluções que atendam ao problema proposto.',topics:['Requisitos','Modelagem','Qualidade']},
  {name:'Técnicas Avançadas de Programação Web e Mobile',category:'Desenvolvimento',mark:'</>',description:'Explora o desenvolvimento de aplicações para navegadores e dispositivos móveis. Trabalha interfaces, navegação, interação com dados e organização do código para diferentes telas.',topics:['Web','Mobile','Interfaces']},
  {name:'Técnicas Avançadas de Programação',category:'Desenvolvimento',mark:'ƒ',description:'Aprofunda a construção de soluções com código. Desenvolve a organização do raciocínio, a aplicação de estruturas de dados e a escolha de algoritmos para resolver problemas de programação.',topics:['Algoritmos','Estruturas de dados','Lógica']},
  {name:'Estrutura de Dados',category:'Dados e fundamentos',mark:'[ ]',description:'Estuda formas de organizar e manipular dados na memória. Aborda listas, pilhas, filas e árvores, além de operações de inserção, busca e remoção para resolver problemas com algoritmos.',topics:['Listas, pilhas e filas','Árvores','Algoritmos']}
];
const subjectDetails = [
  {
    "slug": "interacao-humano-computador",
    "subtitle": "Projetar a experiência de quem usa",
    "overview": "Interação Humano-Computador conecta tecnologia e comportamento humano. A disciplina ajuda a compreender o contexto de uso de um sistema, as dificuldades das pessoas e as decisões de interface que podem facilitar suas tarefas. O trabalho começa antes de escolher cores: é preciso entender quem vai utilizar o produto e o que essa pessoa precisa realizar.",
    "concepts": [
      {
        "title": "Usabilidade e feedback",
        "text": "Uma interface deve deixar claro o que pode ser feito e o resultado de cada ação. Mensagens de confirmação, instruções nos campos e avisos de erro ajudam a pessoa a entender o sistema."
      },
      {
        "title": "Acessibilidade",
        "text": "Contraste, tamanho de texto, navegação por teclado e rótulos adequados ampliam o acesso. Essas escolhas devem fazer parte do projeto desde o início."
      },
      {
        "title": "Protótipos e avaliação",
        "text": "Esboços e protótipos permitem explorar fluxos antes da implementação. Observar alguém realizando uma tarefa ajuda a identificar problemas e melhorar a solução."
      }
    ],
    "exampleTitle": "Um cadastro mais fácil de preencher",
    "example": "Em um formulário de cadastro, agrupar os campos, indicar quais são obrigatórios e explicar como corrigir um e-mail inválido reduz dúvidas. Um protótipo pode ser avaliado pedindo que uma pessoa conclua o cadastro e observando em quais etapas ela encontra dificuldade.",
    "application": "Esses conceitos orientam a criação de telas web e mobile, especialmente formulários, menus e fluxos de navegação. A disciplina se conecta à Engenharia de Software ao transformar necessidades dos usuários em requisitos de interface."
  },
  {
    "slug": "gestao-agil-de-projetos",
    "subtitle": "Organizar entregas e aprender com o processo",
    "overview": "A gestão ágil organiza o desenvolvimento em entregas menores, com acompanhamento frequente e espaço para adaptação. Em vez de tentar prever todos os detalhes de uma vez, a equipe define prioridades, entrega algo útil, recebe feedback e ajusta o próximo passo. Isso exige comunicação e clareza sobre o objetivo do produto.",
    "concepts": [
      {
        "title": "Priorização e backlog",
        "text": "O backlog reúne necessidades e melhorias do produto. Ordenar esses itens por valor, dependências e esforço ajuda a escolher o que deve ser desenvolvido primeiro."
      },
      {
        "title": "Scrum e Kanban",
        "text": "Scrum organiza o trabalho em ciclos com objetivos, momentos de inspeção e responsabilidades. Kanban torna o fluxo visível e limita o trabalho em andamento para reduzir acúmulos."
      },
      {
        "title": "Feedback e melhoria contínua",
        "text": "Revisar as entregas e a forma de trabalhar ajuda a encontrar impedimentos. A equipe pode ajustar seu planejamento com base no que aprendeu em cada etapa."
      }
    ],
    "exampleTitle": "Planejamento de uma primeira versão",
    "example": "Em um sistema de biblioteca, a equipe pode priorizar o cadastro de livros e a consulta do acervo antes de criar relatórios. Cada tarefa passa por etapas como “A fazer”, “Em andamento” e “Concluído”, com critérios claros para considerar a entrega pronta.",
    "application": "No Projeto Integrador, essas práticas ajudam a dividir responsabilidades, acompanhar prazos e organizar entregas. Também se relacionam à Engenharia de Software ao dar visibilidade aos requisitos e ao andamento do desenvolvimento."
  },
  {
    "slug": "inteligencia-corporativa",
    "subtitle": "Relacionar tecnologia, informação e valor",
    "overview": "Essa disciplina aproxima as decisões de tecnologia das necessidades de um negócio. Analisa como uma organização cria valor, atende seu público e utiliza informações para tomar decisões. Uma solução digital precisa resolver um problema relevante e fazer sentido para as pessoas e para a operação que a sustenta.",
    "concepts": [
      {
        "title": "Proposta de valor e público",
        "text": "Definir quem será atendido, qual problema existe e por que a solução é útil ajuda a evitar funcionalidades sem propósito. A proposta de valor comunica esse benefício."
      },
      {
        "title": "Modelos de negócios",
        "text": "Recursos, parceiros, canais, custos e fontes de receita se conectam no funcionamento do negócio. Ferramentas como o Canvas ajudam a visualizar essas relações."
      },
      {
        "title": "Dados para decisão",
        "text": "Indicadores podem apoiar a análise de resultados e oportunidades. Para isso, os dados precisam ser confiáveis e interpretados dentro do contexto do negócio."
      }
    ],
    "exampleTitle": "Da ideia ao modelo de negócio",
    "example": "Em uma plataforma de serviços, é possível definir o público, o problema que a plataforma resolve, os canais para atrair usuários e os custos de operação. Uma hipótese de receita, como uma taxa por contratação, precisa ser avaliada junto ao benefício oferecido.",
    "application": "O conteúdo ajuda a justificar as escolhas de um projeto, identificar diferenciais e definir indicadores. Bancos de dados e desenvolvimento entram como meios para implementar a solução e acompanhar seus resultados."
  },
  {
    "slug": "matematica-discreta",
    "subtitle": "Construir raciocínio para resolver problemas",
    "overview": "A Matemática Discreta trabalha com elementos que podem ser tratados de forma separada, como valores lógicos, conjuntos e vértices de um grafo. Ela oferece uma base para compreender condições, relações e estruturas utilizadas em algoritmos e sistemas. O foco é desenvolver argumentos e soluções consistentes.",
    "concepts": [
      {
        "title": "Lógica e proposições",
        "text": "Operadores como E, OU e NÃO permitem combinar condições. Tabelas-verdade ajudam a verificar em quais situações uma expressão lógica é verdadeira ou falsa."
      },
      {
        "title": "Conjuntos, relações e funções",
        "text": "Conjuntos agrupam elementos; relações e funções descrevem associações entre eles. Esses conceitos ajudam a compreender regras, classificações e vínculos entre dados."
      },
      {
        "title": "Combinatória e grafos",
        "text": "A contagem de possibilidades apoia a análise de problemas. Grafos representam conexões entre elementos e podem modelar rotas, dependências e redes."
      }
    ],
    "exampleTitle": "Traduzir uma regra em condição",
    "example": "Para permitir um empréstimo, um sistema pode exigir que o usuário esteja ativo E que o livro esteja disponível. A expressão só será verdadeira quando as duas condições forem atendidas, o que ajuda a verificar a regra antes de escrevê-la no código.",
    "application": "A disciplina fortalece o raciocínio usado em programação, consultas de banco de dados e Estrutura de Dados. Também ajuda a explicar por que uma solução funciona, em vez de apenas observar seu resultado."
  },
  {
    "slug": "bancos-de-dados",
    "subtitle": "Modelar, consultar e proteger informações",
    "overview": "O estudo de bancos de dados aprofunda a forma como informações são organizadas, relacionadas e recuperadas. Modelos relacionais utilizam tabelas e restrições; modelos não relacionais oferecem outras formas de representar dados. A escolha depende das consultas, das regras e das necessidades de cada aplicação.",
    "concepts": [
      {
        "title": "Modelagem e integridade",
        "text": "Chaves primárias identificam registros, e chaves estrangeiras conectam tabelas. Restrições e normalização ajudam a manter consistência e reduzir redundâncias desnecessárias."
      },
      {
        "title": "Consultas, índices e transações",
        "text": "SQL permite filtrar, combinar e resumir dados. Índices podem acelerar consultas, enquanto transações agrupam operações que precisam ser concluídas de forma consistente."
      },
      {
        "title": "Modelos não relacionais",
        "text": "Documentos, pares chave-valor e grafos organizam informações de formas diferentes. Cada abordagem apresenta vantagens e limitações conforme o acesso e a estrutura dos dados."
      }
    ],
    "exampleTitle": "Registrar um empréstimo com consistência",
    "example": "Em uma biblioteca, livros, leitores e empréstimos podem ficar em tabelas relacionadas. Uma transação pode registrar o empréstimo e atualizar a disponibilidade do exemplar em conjunto, evitando uma alteração parcial caso alguma operação falhe.",
    "application": "Esse conhecimento sustenta a criação de APIs e sistemas que persistem informações. Ele se conecta à Engenharia de Software pelas regras de negócio e à programação pela implementação de consultas e validações."
  },
  {
    "slug": "projeto-integrador-1",
    "subtitle": "Transformar conhecimentos em uma solução",
    "overview": "O Projeto Integrador I reúne conteúdos de diferentes disciplinas em torno de um problema concreto. O processo envolve compreender o contexto, propor uma solução viável e organizar o trabalho para desenvolvê-la. A documentação registra as decisões e permite apresentar o projeto de maneira clara.",
    "concepts": [
      {
        "title": "Problema, público e escopo",
        "text": "Delimitar o problema e identificar quem será atendido ajuda a estabelecer um objetivo realista. O escopo define o que a versão proposta precisa entregar."
      },
      {
        "title": "Integração entre áreas",
        "text": "Requisitos, protótipos, modelagem de dados e implementação precisam se conectar. Uma decisão de interface pode afetar tanto o banco quanto as regras da aplicação."
      },
      {
        "title": "Trabalho em equipe e apresentação",
        "text": "Dividir tarefas, acompanhar entregas e registrar resultados facilita a colaboração. Apresentar a solução exige explicar o problema, as escolhas e as limitações do projeto."
      }
    ],
    "exampleTitle": "Planejar uma versão inicial",
    "example": "Uma equipe pode começar identificando o principal fluxo do usuário, desenhar as telas, modelar os dados necessários e implementar uma primeira versão funcional. O resultado é avaliado em relação ao problema definido no início.",
    "application": "É o espaço para aplicar, em conjunto, conhecimentos de programação, banco de dados, negócios, interfaces e gestão ágil. O aprendizado está tanto na solução entregue quanto nas decisões tomadas durante o desenvolvimento."
  },
  {
    "slug": "organizacao-computadores-sistemas-operacionais",
    "subtitle": "Entender o que acontece durante a execução",
    "overview": "A organização de computadores explica como processador, memória e dispositivos trabalham juntos. Sistemas Operacionais mostra como o software básico administra esses recursos e oferece serviços para as aplicações. As duas áreas ajudam a compreender o caminho entre uma instrução de programa e sua execução no computador.",
    "concepts": [
      {
        "title": "Processador e memória",
        "text": "A CPU executa instruções usando componentes como registradores e unidade lógica e aritmética. Cache, memória principal e armazenamento possuem funções e características diferentes."
      },
      {
        "title": "Processos e escalonamento",
        "text": "Um programa em execução utiliza recursos e pode compartilhar o processador com outros. O escalonamento define como o tempo de CPU é distribuído entre processos ou threads."
      },
      {
        "title": "Gerenciamento de recursos",
        "text": "O sistema operacional administra memória, arquivos, dispositivos e permissões. Também oferece mecanismos para coordenar acessos e manter a execução das aplicações."
      }
    ],
    "exampleTitle": "Abrir vários programas ao mesmo tempo",
    "example": "Ao alternar entre um navegador e um editor de código, o sistema operacional distribui tempo de processamento e gerencia a memória utilizada por cada processo. O uso simultâneo de recursos ajuda a explicar lentidão e disputas de acesso.",
    "application": "Esses fundamentos apoiam a compreensão de desempenho, concorrência e uso de memória. Eles também ajudam a interpretar o custo de algoritmos e a investigar o comportamento de uma aplicação."
  },
  {
    "slug": "engenharia-de-software",
    "subtitle": "Desenvolver com requisitos e qualidade",
    "overview": "A Engenharia de Software estuda formas de construir e manter sistemas de maneira organizada. Vai além da escrita do código: envolve entender necessidades, definir requisitos, modelar a solução, verificar resultados e lidar com mudanças. O objetivo é produzir software que resolva o problema proposto e possa evoluir.",
    "concepts": [
      {
        "title": "Requisitos e regras de negócio",
        "text": "Requisitos funcionais descrevem o que o sistema deve fazer. Requisitos não funcionais tratam de características como desempenho, segurança e usabilidade; regras de negócio expressam condições do domínio."
      },
      {
        "title": "Modelagem e arquitetura",
        "text": "Diagramas e modelos ajudam a representar entidades, comportamentos e responsabilidades. Separar componentes reduz dependências desnecessárias e facilita manutenção."
      },
      {
        "title": "Verificação e evolução",
        "text": "Revisões e testes verificam se o comportamento atende aos critérios definidos. Versionamento e documentação ajudam a acompanhar alterações e seus impactos."
      }
    ],
    "exampleTitle": "Especificar um empréstimo de livro",
    "example": "Antes de implementar, é possível registrar quem pode solicitar um empréstimo, quais condições precisam ser atendidas e como o sistema deve reagir se o exemplar estiver indisponível. Esses critérios orientam o código e os testes.",
    "application": "A disciplina conecta planejamento, implementação e avaliação. Seus conceitos ajudam a organizar projetos web, mobile e desktop, com responsabilidades claras e decisões documentadas."
  },
  {
    "slug": "programacao-web-mobile",
    "subtitle": "Criar experiências para diferentes telas",
    "overview": "O desenvolvimento web e mobile trata de aplicações utilizadas em navegadores e dispositivos móveis. Envolve construir interfaces, organizar navegação, controlar estado e comunicar-se com serviços. Também exige considerar tamanhos de tela, formas de interação e o comportamento da aplicação durante carregamentos e falhas.",
    "concepts": [
      {
        "title": "Componentes, estado e navegação",
        "text": "Componentes dividem a interface em partes reutilizáveis. O estado representa informações que mudam, enquanto a navegação organiza o acesso às telas e aos fluxos."
      },
      {
        "title": "Consumo de APIs",
        "text": "Requisições HTTP conectam a interface ao servidor. A aplicação precisa tratar respostas, erros, validação dos dados e momentos de espera para manter o usuário informado."
      },
      {
        "title": "Adaptação e persistência",
        "text": "Layouts responsivos acomodam diferentes telas. O armazenamento local pode preservar informações simples, enquanto dados compartilhados normalmente dependem de um serviço no servidor."
      }
    ],
    "exampleTitle": "Consultar o acervo pelo celular",
    "example": "Uma tela pode solicitar os livros a uma API, mostrar um indicador durante o carregamento e apresentar os resultados em uma lista. Se a conexão falhar, uma mensagem pode explicar o ocorrido e oferecer uma nova tentativa.",
    "application": "Esses conceitos aparecem em interfaces com React e React Native, por exemplo. A disciplina se conecta a IHC pela experiência de uso e aos bancos de dados por meio das informações oferecidas pelas APIs."
  },
  {
    "slug": "tecnicas-avancadas-programacao",
    "subtitle": "Organizar código e escolher soluções",
    "overview": "Essa disciplina aprofunda a construção de programas e a organização de soluções. Trabalha a decomposição de problemas, a separação de responsabilidades e a escolha de algoritmos adequados. O código precisa produzir o resultado esperado e ser compreensível para quem vai utilizá-lo e mantê-lo.",
    "concepts": [
      {
        "title": "Decomposição e modularização",
        "text": "Dividir um problema em funções, classes ou módulos facilita o raciocínio. Responsabilidades bem definidas permitem compreender e alterar partes da solução com mais segurança."
      },
      {
        "title": "Abstração e organização",
        "text": "Tipos, estruturas e conceitos de orientação a objetos ajudam a representar o domínio. A organização deve tornar explícita a relação entre os dados e as operações realizadas."
      },
      {
        "title": "Algoritmos e tratamento de erros",
        "text": "Escolher uma estratégia exige considerar o resultado e o custo da execução. Validações e tratamento de falhas ajudam a lidar com entradas e situações inesperadas."
      }
    ],
    "exampleTitle": "Separar responsabilidades de um cadastro",
    "example": "Em um cadastro de usuário, uma parte do programa pode validar os dados, outra aplicar regras e outra acessar o banco. Essa organização facilita localizar uma regra e modificar a persistência sem concentrar toda a lógica na interface.",
    "application": "O conteúdo reforça práticas utilizadas em C#, JavaScript e TypeScript, conforme o projeto. A relação com Estrutura de Dados está na escolha de como armazenar informações e quais operações usar para manipulá-las."
  },
  {
    "slug": "estrutura-de-dados",
    "subtitle": "Organizar informações para operar sobre elas",
    "overview": "Estrutura de Dados estuda maneiras de organizar informações na memória e os algoritmos que operam sobre elas. A estrutura escolhida influencia como inserir, buscar, percorrer e remover elementos. Não existe uma opção ideal para todos os casos: a escolha depende das operações mais importantes para o problema.",
    "concepts": [
      {
        "title": "Listas, pilhas e filas",
        "text": "Listas organizam sequências de elementos. Pilhas seguem LIFO: o último a entrar é o primeiro a sair. Filas seguem FIFO: o primeiro a entrar é o primeiro a sair."
      },
      {
        "title": "Árvores e balanceamento",
        "text": "Árvores representam relações hierárquicas. Em uma árvore binária de busca, a ordem das chaves orienta a procura; árvores AVL usam rotações para manter o balanceamento após alterações."
      },
      {
        "title": "Percursos e complexidade",
        "text": "Percursos em pré-ordem, em ordem e pós-ordem visitam os nós em sequências diferentes. A análise de complexidade ajuda a comparar tempo de execução e uso de memória conforme a entrada cresce."
      }
    ],
    "exampleTitle": "Escolher a estrutura conforme a tarefa",
    "example": "Um recurso de desfazer pode usar uma pilha para recuperar a ação mais recente. Uma fila de impressão atende documentos pela ordem de chegada. Uma árvore de busca balanceada pode organizar chaves para facilitar consultas, inserções e remoções.",
    "application": "A disciplina se conecta à Matemática Discreta e à programação. Implementar essas estruturas em C, por exemplo, também exige atenção a ponteiros, alocação de memória e atualização das ligações entre os elementos."
  }
];
subjects.forEach((subject, index) => Object.assign(subject, subjectDetails[index]));
const skills = [
  {name:'C#',symbol:'C#',category:'Linguagens',type:'Programação',color:'#bc9af7',description:'Lógica de programação, orientação a objetos e construção de aplicações.'},
  {name:'SQL',symbol:'SQL',category:'Linguagens',type:'Consulta de dados',color:'#7cb7ee',description:'Criação de consultas e manipulação de informações em bancos relacionais.'},
  {name:'JavaScript',symbol:'JS',category:'Linguagens',type:'Programação',color:'#e8d573',description:'Interatividade, eventos e desenvolvimento de aplicações web e mobile.'},
  {name:'HTML',symbol:'<>',category:'Linguagens',type:'Marcação',color:'#eea17e',description:'Estruturação semântica do conteúdo de páginas e interfaces web.'},
  {name:'TypeScript',symbol:'TS',category:'Linguagens',type:'Programação',color:'#7baff0',description:'Desenvolvimento em JavaScript com tipagem para organizar melhor o código.'},
  {name:'Python',symbol:'Py',category:'Linguagens',type:'Programação',color:'#d9ce8c',description:'Prática de lógica, algoritmos e resolução de problemas com código.'},
  {name:'Astah',symbol:'A',category:'Ferramentas',type:'Modelagem de sistemas',color:'#a7c6ee',description:'Representação de sistemas e organização de ideias com diagramas UML.'},
  {name:'PostgreSQL',symbol:'Pg',category:'Ferramentas',type:'Banco de dados',color:'#8eb9d8',description:'Criação e gerenciamento de bancos de dados relacionais e execução de SQL.'},
  {name:'Figma',symbol:'Fi',category:'Ferramentas',type:'Design de interfaces',color:'#d4a7ed',description:'Prototipação de telas e planejamento visual da experiência do usuário.'},
  {name:'Git',symbol:'git',category:'Ferramentas',type:'Controle de versão',color:'#eda28a',description:'Acompanhamento de alterações e organização do histórico do código.'},
  {name:'GitHub',symbol:'GH',category:'Ferramentas',type:'Repositórios e colaboração',color:'#ccd4c5',description:'Armazenamento de projetos, compartilhamento de código e colaboração.'}
];
const skillLogos = {'C#':'csharp','SQL':'sql','JavaScript':'javascript','HTML':'html','TypeScript':'typescript','Python':'python','PostgreSQL':'postgresql','Figma':'figma','Git':'git','GitHub':'github'};
const subjectList = document.querySelector('#subjects');
const skillList = document.querySelector('#skills');
function renderSubjects(filter = 'Todas') {
  const filtered = subjects.filter(subject => filter === 'Todas' || subject.category === filter);
  subjectList.innerHTML = filtered.map(subject => `<a class="subject subject-link" href="#materia/${subject.slug}"><div class="subject-header"><span class="subject-category">${subject.category}</span><span class="subject-mark" aria-hidden="true">${subject.mark.replaceAll('<','&lt;')}</span></div><h2>${subject.name}</h2><p>${subject.description}</p><div class="subject-topics">${subject.topics.map(topic=>`<span>${topic}</span>`).join('')}</div><span class="subject-more">Explorar disciplina <span aria-hidden="true">↗</span></span></a>`).join('');
  document.querySelector('#subject-count').textContent = `${filtered.length} disciplinas`;
}
function renderSkills(filter = 'Todas') {
  const filtered = skills.filter(skill => filter === 'Todas' || skill.category === filter);
  skillList.innerHTML = filtered.map(skill => `<article class="skill" style="--skill-color:${skill.color}"><div class="skill-top"><span class="skill-logo">${skillLogos[skill.name] ? `<img src="assets/logos/${skillLogos[skill.name]}.svg" alt="${skill.name === 'SQL' ? 'Ícone de banco de dados SQL' : `Logo de ${skill.name}`}" width="32" height="32">` : skill.symbol.replaceAll('<','&lt;')}</span><div><h2>${skill.name}</h2><small>${skill.type}</small></div></div><p>${skill.description}</p></article>`).join('');
  document.querySelector('#skill-count').textContent = `${filtered.length} tecnologias`;
}
function bindFilters(attribute, renderer) {
  const buttons = document.querySelectorAll(`[${attribute}]`);
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => {item.classList.toggle('active', item === button);item.setAttribute('aria-pressed', String(item === button));});
    renderer(button.getAttribute(attribute));
  }));
}
const pages = [...document.querySelectorAll('.page')];
const navigation = document.querySelector('#navigation');
const menuButton = document.querySelector('.menu-button');
const titles = {inicio:'Portfólio',sobre:'Sobre mim',formacao:'Formação',habilidades:'Habilidades'};
function renderSubject(subject) {
  const index = subjects.indexOf(subject);
  const previous = subjects[index - 1];
  const next = subjects[index + 1];
  document.querySelector('#subject-detail-content').innerHTML = `
    <div class="subject-detail-top"><a class="text-link" href="#formacao"><span aria-hidden="true">←</span> Voltar para Formação</a><span class="result-count">Disciplina ${index + 1} de ${subjects.length}</span></div>
    <div class="page-heading detail-heading"><p class="eyebrow"><span class="small-line"></span> ${subject.category}</p><h1 id="subject-detail-title">${subject.name}</h1><p class="detail-subtitle">${subject.subtitle}</p><div class="subject-topics">${subject.topics.map(topic => `<span>${topic}</span>`).join('')}</div></div>
    <div class="subject-detail-layout"><div class="subject-detail-main"><section class="detail-section"><p class="eyebrow">01 / VISÃO GERAL</p><h2>O que essa matéria estuda</h2><p>${subject.overview}</p></section><section class="detail-section"><p class="eyebrow">02 / CONCEITOS</p><h2>Principais temas</h2><div class="concept-list">${subject.concepts.map((concept,i) => `<div class="concept"><span class="concept-number" aria-hidden="true">0${i+1}</span><div><h3>${concept.title}</h3><p>${concept.text}</p></div></div>`).join('')}</div></section></div>
    <aside class="subject-detail-aside"><section class="detail-example"><p class="eyebrow">NA PRÁTICA</p><h2>${subject.exampleTitle}</h2><p>${subject.example}</p></section><section class="detail-connection"><h2>Conexão com o desenvolvimento</h2><p>${subject.application}</p></section></aside></div>
    <nav class="subject-pagination" aria-label="Navegar entre disciplinas">${previous ? `<a href="#materia/${previous.slug}"><small>← Anterior</small><span>${previous.name}</span></a>` : '<a href="#formacao"><small>← Formação</small><span>Ver todas as disciplinas</span></a>'}${next ? `<a href="#materia/${next.slug}"><small>Próxima →</small><span>${next.name}</span></a>` : '<a href="#formacao"><small>Formação →</small><span>Ver todas as disciplinas</span></a>'}</nav>`;
}
function route(focus = false) {
  let current = location.hash.slice(1) || 'inicio';
  if(current === 'conteudo') return;
  let selectedSubject;
  if(current.startsWith('materia/')) {
    selectedSubject = subjects.find(subject => subject.slug === current.slice(8));
    current = selectedSubject ? 'materia' : 'formacao';
    if(selectedSubject) renderSubject(selectedSubject);
  }
  if(!pages.some(page => page.id === current)) current = 'inicio';
  pages.forEach(page => page.hidden = page.id !== current);
  document.querySelectorAll('[data-page]').forEach(link => {
    if(link.dataset.page === (current === 'materia' ? 'formacao' : current)) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${selectedSubject ? selectedSubject.name : titles[current]} - Victor Fagundes`;
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Abrir menu');
  if(focus) {document.querySelector('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
});
document.addEventListener('keydown', event => {if(event.key === 'Escape'){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}});
const photo = document.querySelector('#profile-photo');
photo.addEventListener('load', () => {photo.hidden=false;document.querySelector('#photo-placeholder').hidden=true;});
photo.addEventListener('error', () => {photo.hidden=true;});
if(photo.complete && photo.naturalWidth > 0){photo.hidden=false;document.querySelector('#photo-placeholder').hidden=true;}
bindFilters('data-study-filter',renderSubjects);
bindFilters('data-skill-filter',renderSkills);
renderSubjects();renderSkills();route();
window.addEventListener('hashchange', () => route(true));
