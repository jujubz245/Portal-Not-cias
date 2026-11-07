const CHAVE_FAVORITOS = "pulsoFavoritos";

const CATEGORIAS = {
    politica: { nome: "Política", pagina: "politica.html" },
    tecnologia: { nome: "Tecnologia", pagina: "tecnologia.html" },
    economia: { nome: "Economia", pagina: "economia.html" },
    esportes: { nome: "Esportes", pagina: "esportes.html" },
    entretenimento: { nome: "Entretenimento", pagina: "entretenimento.html" }
};

const NOTICIAS = [
    {
        id: 1,
        categoria: "tecnologia",
        titulo: "Curitiba testa semáforos com inteligência artificial em 40 cruzamentos",
        subtitulo: "Projeto-piloto promete reduzir em até 20% o tempo parado no trânsito nos horários de pico.",
        resumo: "Câmeras e sensores ajustam o tempo de cada sinal conforme o fluxo real de veículos, pedestres e ônibus.",
        data: "2026-11-06",
        autor: "Julia Perch",
        tempoLeitura: 4,
        imagem: "img/noticia-01.svg",
        conteudo: [
            "A prefeitura de uma capital do Sul iniciou nesta semana o teste de um sistema de semáforos inteligentes em 40 cruzamentos de grande movimento. A tecnologia usa câmeras e sensores instalados nos postes para medir, a cada poucos segundos, quantos carros, ônibus, bicicletas e pedestres estão esperando em cada direção.",
            "Com essas informações, um software de inteligência artificial decide por quanto tempo cada sinal deve ficar verde. Em vez de seguir um tempo fixo, programado anos atrás, o semáforo passa a reagir ao trânsito real. Quando um ônibus se aproxima, por exemplo, o sistema pode prolongar o sinal verde por alguns segundos para evitar uma parada desnecessária.",
            "Segundo a equipe técnica responsável, a meta do projeto-piloto é reduzir em até 20% o tempo que os motoristas passam parados nos horários de pico. Os dados de cada cruzamento serão comparados com os registros do mesmo período do ano passado antes de qualquer decisão sobre a ampliação para o restante da cidade.",
            "Especialistas em mobilidade lembram que a tecnologia, sozinha, não resolve congestionamentos. Para eles, o maior ganho aparece quando os semáforos inteligentes são combinados com faixas exclusivas de ônibus e calçadas seguras, incentivando as pessoas a deixarem o carro em casa."
        ],
        citacao: "O semáforo deixa de ser um relógio e passa a observar a rua."
    },
    {
        id: 2,
        categoria: "economia",
        titulo: "Inflação desacelera pelo terceiro mês e alimentos ficam mais baratos",
        subtitulo: "Queda no preço de frutas, legumes e carnes ajudou a segurar o índice de outubro.",
        resumo: "O índice oficial de preços subiu menos do que o esperado, puxado pela queda nos alimentos consumidos em casa.",
        data: "2026-11-05",
        autor: "Fernanda Mara",
        tempoLeitura: 3,
        imagem: "img/noticia-02.svg",
        conteudo: [
            "O índice que mede a inflação oficial do país desacelerou pelo terceiro mês consecutivo em outubro, segundo dados fictícios divulgados nesta quinta-feira. O resultado ficou abaixo da média das projeções de analistas consultados pelo mercado financeiro.",
            "O principal alívio veio do grupo de alimentação e bebidas. Frutas, legumes e cortes de carne bovina ficaram mais baratos nos supermercados, reflexo de uma safra maior e da redução nos custos de transporte. Para as famílias, a mudança aparece principalmente na compra do mês.",
            "Por outro lado, serviços como aluguel, planos de saúde e mensalidades escolares continuaram subindo acima da média. Economistas explicam que esses preços costumam ser reajustados uma vez por ano e, por isso, demoram mais para responder às mudanças da economia.",
            "Com a inflação mais controlada, cresce a expectativa de que os juros básicos comecem a cair no início do próximo ano, o que pode baratear o crédito para consumidores e empresas."
        ],
        citacao: "A compra do mês ficou mais leve, mas os serviços ainda pesam no orçamento."
    },
    {
        id: 3,
        categoria: "esportes",
        titulo: "Clube paranaense vence clássico de virada e assume a liderança da Série B",
        subtitulo: "Gol nos acréscimos levou mais de 38 mil torcedores à loucura no estádio.",
        resumo: "Depois de sair perdendo no primeiro tempo, o time da casa virou o jogo e chegou aos 64 pontos.",
        data: "2026-11-04",
        autor: "Fernanda Mara",
        tempoLeitura: 3,
        imagem: "img/noticia-03.svg",
        conteudo: [
            "Em uma noite de emoção, o time da casa venceu o clássico regional por 2 a 1, de virada, e assumiu a liderança isolada da Série B do campeonato nacional fictício. O gol da vitória saiu aos 47 minutos do segundo tempo, em cobrança de escanteio.",
            "O adversário abriu o placar ainda no primeiro tempo, aproveitando um erro na saída de bola. Na volta do intervalo, o técnico mudou o esquema, colocou dois atacantes rápidos e passou a pressionar desde o campo de defesa rival. O empate veio aos 21 minutos.",
            "Com o resultado, a equipe chegou a 64 pontos e abriu dois de vantagem para o segundo colocado, faltando quatro rodadas para o fim da competição. Os quatro primeiros colocados garantem o acesso à Série A.",
            "O público de mais de 38 mil pessoas foi o maior da temporada no estádio. A diretoria anunciou que os ingressos para o próximo jogo em casa começam a ser vendidos na segunda-feira, com prioridade para os sócios."
        ],
        citacao: "A torcida empurrou o time até o último segundo."
    },
    {
        id: 4,
        categoria: "politica",
        titulo: "Câmara aprova projeto que amplia transparência nos gastos públicos",
        subtitulo: "Texto obriga prefeituras a publicarem contratos em linguagem simples e em formato aberto.",
        resumo: "A proposta segue para o Senado e prevê painéis on-line com gastos atualizados semanalmente.",
        data: "2026-11-06",
        autor: "Julia Perch",
        tempoLeitura: 4,
        imagem: "img/noticia-04.svg",
        conteudo: [
            "A Câmara dos Deputados aprovou nesta quarta-feira, em votação simbólica, um projeto de lei fictício que amplia as regras de transparência para prefeituras e governos estaduais. O texto agora segue para análise do Senado.",
            "A principal mudança é a obrigação de publicar todos os contratos acima de determinado valor em formato aberto, que pode ser lido por computadores, e acompanhado de um resumo em linguagem simples. A ideia é que qualquer cidadão consiga entender o que foi comprado, de quem e por quanto.",
            "O projeto também prevê a criação de painéis on-line com os gastos atualizados semanalmente. Municípios com menos de 20 mil habitantes terão prazo maior para se adaptar e poderão usar uma plataforma gratuita oferecida pelo governo federal.",
            "Organizações que acompanham as contas públicas elogiaram a proposta, mas alertam que a fiscalização dependerá da participação da sociedade. Sem gente olhando os dados, dizem, a transparência fica apenas no papel."
        ],
        citacao: "Transparência só funciona quando alguém olha os dados."
    },
    {
        id: 5,
        categoria: "entretenimento",
        titulo: "Festival de cinema de Curitiba anuncia programação gratuita em praças",
        subtitulo: "Sessões ao ar livre vão exibir 30 filmes nacionais durante dez dias.",
        resumo: "Telões serão montados em cinco praças da cidade, com sessões infantis no fim da tarde.",
        data: "2026-11-03",
        autor: "Julia Perch",
        tempoLeitura: 3,
        imagem: "img/noticia-05.svg",
        conteudo: [
            "Um festival de cinema fictício anunciou nesta terça-feira a programação da sua próxima edição, que terá sessões gratuitas ao ar livre em cinco praças da cidade. Serão exibidos 30 filmes nacionais, entre longas, curtas e documentários.",
            "As sessões infantis acontecem no fim da tarde, às 17h, enquanto os filmes para o público adulto começam às 20h. A organização recomenda que o público leve cadeiras de praia ou cangas, já que o número de assentos será limitado.",
            "Além das exibições, o festival terá oficinas de roteiro e de produção de vídeo com o celular, voltadas para estudantes do ensino médio e universitários. As inscrições são gratuitas e podem ser feitas no site do evento.",
            "Em caso de chuva, as sessões serão transferidas para teatros municipais próximos às praças, com entrada por ordem de chegada."
        ],
        citacao: "A praça vira sala de cinema e o cinema volta a ser encontro."
    },
    {
        id: 6,
        categoria: "tecnologia",
        titulo: "Estudantes criam aplicativo que traduz Libras em tempo real",
        subtitulo: "Projeto universitário usa a câmera do celular para reconhecer sinais e transformá-los em texto.",
        resumo: "A primeira versão reconhece cerca de 300 sinais e foi testada com uma associação de surdos.",
        data: "2026-11-02",
        autor: "Fernanda Mara",
        tempoLeitura: 5,
        imagem: "img/noticia-06.svg",
        conteudo: [
            "Um grupo de estudantes de tecnologia desenvolveu um aplicativo fictício capaz de reconhecer sinais da Língua Brasileira de Sinais, a Libras, e transformá-los em texto na tela do celular. O projeto nasceu como trabalho de disciplina e ganhou um prêmio de inovação universitária.",
            "O aplicativo usa a câmera frontal do aparelho para acompanhar o movimento das mãos e do rosto. Um modelo de inteligência artificial, treinado com milhares de vídeos gravados por voluntários, identifica o sinal e mostra a palavra correspondente em poucos décimos de segundo.",
            "A primeira versão reconhece cerca de 300 sinais do dia a dia, como cumprimentos, números e palavras ligadas a saúde e transporte. O grupo trabalhou em parceria com uma associação de pessoas surdas, que participou dos testes e ajudou a corrigir erros.",
            "Os estudantes pretendem disponibilizar o aplicativo gratuitamente e abrir o código para que outras universidades possam contribuir com novos sinais e variações regionais."
        ],
        citacao: "Nada sobre nós, sem nós: a comunidade surda participou de cada teste."
    },
    {
        id: 7,
        categoria: "economia",
        titulo: "Pequenos negócios lideram criação de empregos formais em outubro",
        subtitulo: "Setor de serviços respondeu por mais da metade das novas vagas com carteira assinada.",
        resumo: "Empresas com até 49 funcionários abriram sete de cada dez vagas no mês, segundo levantamento fictício.",
        data: "2026-11-01",
        autor: "Julia Perch",
        tempoLeitura: 3,
        imagem: "img/noticia-07.svg",
        conteudo: [
            "Os pequenos negócios foram responsáveis por sete de cada dez empregos formais criados em outubro, de acordo com um levantamento fictício baseado nos registros de admissões e desligamentos do mês.",
            "O setor de serviços liderou as contratações, com destaque para restaurantes, salões de beleza, oficinas mecânicas e empresas de tecnologia. O comércio também teve bom desempenho, impulsionado pela preparação para as vendas de fim de ano.",
            "Para os pesquisadores, o resultado mostra a importância de políticas de crédito e de simplificação de impostos voltadas para micro e pequenas empresas, que costumam sentir primeiro os efeitos de qualquer mudança na economia.",
            "As regiões Sul e Sudeste concentraram a maior parte das vagas, mas o Nordeste registrou o maior crescimento percentual em relação ao mesmo mês do ano anterior."
        ],
        citacao: "Quando o pequeno negócio cresce, o bairro inteiro sente."
    },
    {
        id: 8,
        categoria: "politica",
        titulo: "Eleitores poderão votar em propostas para o orçamento da cidade pelo celular",
        subtitulo: "Consulta pública digital vai definir onde serão aplicados parte dos recursos de 2027.",
        resumo: "Moradores escolhem entre obras e serviços sugeridos por cada regional do município.",
        data: "2026-10-31",
        autor: "Fernanda Mara",
        tempoLeitura: 4,
        imagem: "img/noticia-08.svg",
        conteudo: [
            "Uma prefeitura fictícia lançou nesta semana uma consulta pública digital para que os moradores escolham onde será aplicada parte do orçamento do próximo ano. A votação pode ser feita pelo celular ou em computadores disponíveis nas bibliotecas públicas.",
            "Cada regional da cidade apresentou uma lista de obras e serviços, como reforma de praças, novas linhas de ônibus, iluminação pública e ampliação de unidades de saúde. O morador pode votar em até três propostas da sua região.",
            "Para evitar fraudes, o voto é vinculado ao CPF e só pode ser registrado uma vez. Os resultados parciais serão divulgados diariamente em um painel aberto, e as propostas mais votadas entrarão no projeto de orçamento enviado à Câmara Municipal.",
            "Especialistas em participação social destacam que a consulta digital precisa ser acompanhada de pontos presenciais, para que pessoas sem acesso à internet também possam participar."
        ],
        citacao: "Participar do orçamento é decidir como será o próprio bairro."
    },
    {
        id: 9,
        categoria: "esportes",
        titulo: "Seleção feminina de vôlei garante vaga na final do torneio internacional",
        subtitulo: "Equipe venceu por 3 sets a 1 e enfrenta a atual campeã no domingo.",
        resumo: "Bloqueio eficiente e saque forçado foram decisivos na semifinal disputada no sábado.",
        data: "2026-10-30",
        autor: "Julia Perch",
        tempoLeitura: 3,
        imagem: "img/noticia-09.svg",
        conteudo: [
            "A seleção feminina de vôlei venceu a semifinal do torneio internacional fictício por 3 sets a 1 e garantiu vaga na grande decisão, marcada para domingo. Foi a quinta vitória consecutiva da equipe na competição.",
            "Depois de perder o primeiro set, o time ajustou o bloqueio e passou a forçar o saque, o que dificultou a recepção adversária. A levantadora foi eleita a melhor jogadora da partida, com distribuição precisa entre as atacantes de ponta e as centrais.",
            "Na final, a seleção enfrentará a atual campeã, que venceu a outra semifinal sem perder sets. As duas equipes já se encontraram na fase de grupos, com vitória das adversárias em uma partida equilibrada de cinco sets.",
            "A comissão técnica afirmou que a equipe terá um treino leve no sábado, focado em estratégia e recuperação física."
        ],
        citacao: "O grupo aprendeu a jogar sob pressão."
    },
    {
        id: 10,
        categoria: "entretenimento",
        titulo: "Série brasileira de ficção científica estreia com recorde de audiência",
        subtitulo: "Produção gravada no interior do Paraná foi a mais assistida da semana na plataforma.",
        resumo: "A trama acompanha uma cidade pequena que passa a receber sinais de rádio vindos do futuro.",
        data: "2026-10-29",
        autor: "Fernanda Mara",
        tempoLeitura: 3,
        imagem: "img/noticia-10.svg",
        conteudo: [
            "Uma série brasileira fictícia de ficção científica estreou como a produção mais assistida da semana em uma plataforma de streaming. Gravada em cidades do interior do Paraná, a série tem oito episódios de cerca de 45 minutos.",
            "A história acompanha os moradores de uma cidade pequena que começam a captar, em um velho rádio, mensagens enviadas do futuro. As mensagens trazem avisos sobre acontecimentos que ainda não ocorreram, e a comunidade precisa decidir se deve ou não tentar mudar o próprio destino.",
            "A crítica elogiou a fotografia, que aproveita as paisagens de campos e neblina, e a trilha sonora composta por músicos paranaenses. O elenco reúne atores veteranos e jovens revelados em grupos de teatro da região.",
            "A plataforma ainda não confirmou uma segunda temporada, mas a equipe de roteiristas afirmou em entrevista que a história foi planejada para continuar."
        ],
        citacao: "A neblina do interior virou personagem da série."
    },
    {
        id: 11,
        categoria: "tecnologia",
        titulo: "Ataques de golpe por mensagem crescem e especialistas dão dicas de proteção",
        subtitulo: "Criminosos usam nomes de lojas e bancos para pedir códigos de verificação.",
        resumo: "Ativar a verificação em duas etapas e desconfiar de pedidos urgentes estão entre as principais recomendações.",
        data: "2026-10-28",
        autor: "Julia Perch",
        tempoLeitura: 4,
        imagem: "img/noticia-11.svg",
        conteudo: [
            "As tentativas de golpe por aplicativos de mensagem cresceram nos últimos meses, segundo relatório fictício de uma empresa de segurança digital. Os criminosos se passam por lojas, bancos e até parentes para convencer as vítimas a enviar dinheiro ou códigos de verificação.",
            "O golpe mais comum começa com uma mensagem urgente: uma compra que precisa ser confirmada, uma conta que será bloqueada ou um familiar que trocou de número. A pressa é proposital, porque dificulta que a vítima pare para pensar.",
            "Especialistas recomendam ativar a verificação em duas etapas em todos os aplicativos, nunca compartilhar códigos recebidos por SMS e confirmar pedidos de dinheiro por uma ligação de voz para o número antigo da pessoa.",
            "Em caso de golpe, a orientação é registrar um boletim de ocorrência, avisar o banco imediatamente e alertar os contatos para que não caiam na mesma armadilha."
        ],
        citacao: "Se a mensagem tem pressa, você não precisa ter."
    },
    {
        id: 12,
        categoria: "economia",
        titulo: "Feira de economia criativa movimenta artesãos e pequenos produtores",
        subtitulo: "Evento reuniu 180 expositores e deve se tornar mensal a partir de 2027.",
        resumo: "Moda autoral, alimentos artesanais e ilustração estão entre os segmentos com maior procura.",
        data: "2026-10-27",
        autor: "Fernanda Mara",
        tempoLeitura: 3,
        imagem: "img/noticia-12.svg",
        conteudo: [
            "Uma feira fictícia de economia criativa reuniu 180 expositores no último fim de semana e recebeu cerca de 25 mil visitantes. O evento reuniu artesãos, designers, ilustradores e pequenos produtores de alimentos.",
            "Os segmentos de moda autoral, alimentos artesanais e ilustração foram os mais procurados. Muitos expositores relataram ter vendido todo o estoque ainda no sábado e passaram o domingo recebendo encomendas.",
            "Além das vendas, a feira ofereceu palestras gratuitas sobre precificação, uso de redes sociais e formalização como microempreendedor individual, temas que costumam ser os maiores desafios de quem está começando.",
            "Diante do resultado, a organização anunciou que pretende transformar o evento em uma feira mensal a partir do próximo ano, com espaço reservado para novos empreendedores."
        ],
        citacao: "Criatividade também é trabalho e também gera renda."
    },
    {
        id: 13,
        categoria: "politica",
        titulo: "Senado debate regras para uso de inteligência artificial em órgãos públicos",
        subtitulo: "Proposta exige que cidadãos sejam avisados quando uma decisão envolver sistemas automatizados.",
        resumo: "Audiência pública reuniu pesquisadores, empresas e entidades de defesa do consumidor.",
        data: "2026-10-26",
        autor: "Julia Perch",
        tempoLeitura: 5,
        imagem: "img/noticia-13.svg",
        conteudo: [
            "Uma comissão do Senado realizou nesta segunda-feira uma audiência pública para discutir um projeto fictício que cria regras para o uso de inteligência artificial em órgãos públicos. O debate reuniu pesquisadores, representantes de empresas e entidades de defesa do consumidor.",
            "Pelo texto, sempre que uma decisão sobre um cidadão envolver sistemas automatizados, como a análise de um benefício social, a pessoa deverá ser avisada e terá direito a pedir revisão feita por um servidor humano.",
            "Pesquisadores defenderam a criação de testes periódicos para verificar se os sistemas tratam todos os grupos da população de forma justa. Representantes do setor de tecnologia pediram regras claras, mas que não impeçam a inovação.",
            "O relator afirmou que pretende apresentar uma nova versão do texto até o fim do mês, incorporando sugestões recebidas durante a audiência."
        ],
        citacao: "Quem é afetado por uma decisão automática precisa saber disso."
    },
    {
        id: 14,
        categoria: "esportes",
        titulo: "Maratona de Curitiba bate recorde de inscritos e terá percurso pelo centro histórico",
        subtitulo: "Prova contará com distâncias de 5, 10, 21 e 42 quilômetros.",
        resumo: "Organização espera 12 mil corredores e anuncia mudanças no trânsito no dia da prova.",
        data: "2026-10-25",
        autor: "Fernanda Mara",
        tempoLeitura: 3,
        imagem: "img/noticia-14.svg",
        conteudo: [
            "Uma maratona fictícia bateu o recorde de inscritos da sua história, com 12 mil corredores confirmados. Pela primeira vez, o percurso passará pelo centro histórico da cidade, com largada e chegada em um dos parques mais conhecidos da capital.",
            "A prova terá quatro distâncias: 5, 10, 21 e 42 quilômetros. A organização preparou pontos de hidratação a cada dois quilômetros e áreas de atendimento médico ao longo de todo o trajeto.",
            "No dia da corrida, ruas do centro serão bloqueadas entre 5h e 13h. Linhas de ônibus terão desvios, e a recomendação é que quem precisar circular pela região utilize rotas alternativas.",
            "Parte do valor das inscrições será doada para projetos sociais que oferecem atividades esportivas para crianças em bairros da periferia."
        ],
        citacao: "Correr pela cidade é uma forma de conhecê-la de novo."
    },
    {
        id: 15,
        categoria: "entretenimento",
        titulo: "Banda curitibana lança álbum gravado ao vivo em teatro histórico",
        subtitulo: "Disco tem 11 faixas e participação de uma orquestra jovem da cidade.",
        resumo: "O lançamento será celebrado com show gratuito no fim do mês, com ingressos distribuídos on-line.",
        data: "2026-10-24",
        autor: "Julia Perch",
        tempoLeitura: 3,
        imagem: "img/noticia-15.svg",
        conteudo: [
            "Uma banda fictícia de rock alternativo lançou nesta sexta-feira o seu terceiro álbum, gravado ao vivo em um teatro histórico da cidade. O disco tem 11 faixas, sendo quatro inéditas, e conta com a participação de uma orquestra jovem formada por estudantes de música.",
            "Segundo os integrantes, a ideia de gravar ao vivo surgiu para registrar a energia dos shows, algo que, para eles, se perde nas gravações em estúdio. Os arranjos para orquestra foram escritos especialmente para a apresentação.",
            "O lançamento será comemorado com um show gratuito no fim do mês. Os ingressos serão distribuídos on-line, com limite de dois por pessoa, e parte das vagas ficará reservada para estudantes de escolas públicas.",
            "O álbum já está disponível nas principais plataformas de música e terá uma edição limitada em vinil."
        ],
        citacao: "O palco é o lugar onde as músicas ficam completas."
    }
];

function formatarData(dataIso) {
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    const partes = dataIso.split("-");
    const dia = partes[2];
    const mes = meses[Number(partes[1]) - 1];
    const ano = partes[0];
    return dia + " " + mes + " " + ano;
}

function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function obterFavoritos() {
    const dadosSalvos = localStorage.getItem(CHAVE_FAVORITOS);
    if (dadosSalvos === null) {
        return [];
    }
    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        return [];
    }
}

function salvarFavoritos(listaIds) {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(listaIds));
}

function ehFavorita(id) {
    return obterFavoritos().includes(id);
}

function alternarFavorito(id) {
    const favoritos = obterFavoritos();
    const posicao = favoritos.indexOf(id);
    if (posicao === -1) {
        favoritos.push(id);
    } else {
        favoritos.splice(posicao, 1);
    }
    salvarFavoritos(favoritos);
    return posicao === -1;
}

function atualizarContadorFavoritos() {
    const total = obterFavoritos().length;
    const contadores = document.querySelectorAll(".contador-favoritos");
    contadores.forEach(function (contador) {
        contador.textContent = total;
        contador.hidden = total === 0;
    });
}

function atualizarBotaoFavorito(botao, favorita) {
    botao.textContent = favorita ? "★" : "☆";
    botao.setAttribute("aria-pressed", favorita);
    botao.setAttribute("aria-label", favorita ? "Remover dos favoritos" : "Adicionar aos favoritos");
    botao.classList.toggle("ativo", favorita);
}

function usaBootstrap() {
    return document.body.dataset.framework !== "nenhum";
}

function criarCardNoticia(noticia) {
    const comBootstrap = usaBootstrap();
    const categoria = CATEGORIAS[noticia.categoria];
    const favorita = ehFavorita(noticia.id);

    const card = document.createElement("article");
    card.className = comBootstrap ? "card card-noticia h-100" : "card-noticia";
    card.dataset.categoria = noticia.categoria;

    const classeImagem = comBootstrap ? "card-img-top card-noticia-imagem" : "card-noticia-imagem";
    const classeCorpo = comBootstrap ? "card-body card-noticia-corpo" : "card-noticia-corpo";
    const classeTitulo = comBootstrap ? "card-title card-noticia-titulo" : "card-noticia-titulo";
    const classeTexto = comBootstrap ? "card-text card-noticia-resumo" : "card-noticia-resumo";
    const classeBotao = comBootstrap ? "btn btn-primary btn-sm" : "botao botao-primario botao-pequeno";

    card.innerHTML = `
        <a href="noticia-destaque.html?id=${noticia.id}" class="card-noticia-link-imagem">
            <img src="${noticia.imagem}" alt="Ilustração da notícia: ${noticia.titulo}" class="${classeImagem}" loading="lazy">
        </a>
        <div class="${classeCorpo}">
            <div class="card-noticia-meta">
                <a href="${categoria.pagina}" class="etiqueta etiqueta-${noticia.categoria}">${categoria.nome}</a>
                <time datetime="${noticia.data}">${formatarData(noticia.data)}</time>
            </div>
            <h3 class="${classeTitulo}">${noticia.titulo}</h3>
            <p class="${classeTexto}">${noticia.resumo}</p>
            <div class="card-noticia-rodape">
                <a href="noticia-destaque.html?id=${noticia.id}" class="${classeBotao}">Ler notícia</a>
                <button type="button" class="botao-favorito"></button>
            </div>
        </div>
    `;

    const botaoFavorito = card.querySelector(".botao-favorito");
    botaoFavorito.dataset.id = noticia.id;
    atualizarBotaoFavorito(botaoFavorito, favorita);
    return card;
}

function renderizarNoticias(lista, container, mensagemVazia) {
    container.innerHTML = "";
    if (lista.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "mensagem-vazia";
        aviso.textContent = mensagemVazia;
        container.appendChild(aviso);
        return;
    }
    for (let i = 0; i < lista.length; i++) {
        container.appendChild(criarCardNoticia(lista[i]));
    }
}

function filtrarNoticias(categoria, termo) {
    const termoNormalizado = normalizarTexto(termo);
    const resultado = [];
    NOTICIAS.forEach(function (noticia) {
        const mesmaCategoria = categoria === "todas" || noticia.categoria === categoria;
        const textoNoticia = normalizarTexto(noticia.titulo + " " + noticia.resumo);
        if (mesmaCategoria && textoNoticia.includes(termoNormalizado)) {
            resultado.push(noticia);
        }
    });
    return resultado;
}

function ordenarPorData(lista) {
    return lista.slice().sort(function (a, b) {
        return b.data.localeCompare(a.data);
    });
}

function iniciarListaNoticias() {
    const container = document.getElementById("lista-noticias");
    if (!container) {
        return;
    }
    const campoBusca = document.getElementById("campo-busca");
    const botoesFiltro = document.querySelectorAll(".filtro-categoria");
    const contador = document.getElementById("contador-resultados");
    let categoriaAtual = document.body.dataset.categoria || "todas";

    const parametros = new URLSearchParams(window.location.search);
    if (campoBusca && parametros.has("busca")) {
        campoBusca.value = parametros.get("busca");
    }

    function atualizarLista() {
        const termo = campoBusca ? campoBusca.value.trim() : "";
        const lista = ordenarPorData(filtrarNoticias(categoriaAtual, termo));
        renderizarNoticias(lista, container, "Nenhuma notícia encontrada. Tente outra palavra ou categoria.");
        if (contador) {
            contador.textContent = lista.length === 1 ? "1 notícia encontrada" : lista.length + " notícias encontradas";
        }
    }

    botoesFiltro.forEach(function (botao) {
        botao.addEventListener("click", function () {
            categoriaAtual = botao.dataset.categoria;
            botoesFiltro.forEach(function (outroBotao) {
                outroBotao.classList.remove("active");
                outroBotao.setAttribute("aria-pressed", "false");
            });
            botao.classList.add("active");
            botao.setAttribute("aria-pressed", "true");
            atualizarLista();
        });
    });

    if (campoBusca) {
        campoBusca.addEventListener("input", atualizarLista);
    }

    atualizarLista();
}

function iniciarUltimasNoticias() {
    const container = document.getElementById("ultimas-noticias");
    if (!container) {
        return;
    }
    const limite = Number(container.dataset.limite) || 6;
    const recentes = ordenarPorData(NOTICIAS).slice(0, limite);
    renderizarNoticias(recentes, container, "Nenhuma notícia disponível no momento.");
}

function iniciarFavoritos() {
    const container = document.getElementById("lista-favoritos");
    if (!container) {
        return;
    }
    const idsFavoritos = obterFavoritos();
    const listaFavoritas = NOTICIAS.filter(function (noticia) {
        return idsFavoritos.includes(noticia.id);
    });
    renderizarNoticias(listaFavoritas, container, "Você ainda não salvou nenhuma notícia. Toque na estrela ☆ de um card para favoritar.");

    const resumo = document.getElementById("resumo-favoritos");
    if (resumo) {
        resumo.textContent = listaFavoritas.length === 1 ? "1 notícia salva neste navegador" : listaFavoritas.length + " notícias salvas neste navegador";
    }

    const botaoLimpar = document.getElementById("btn-limpar-favoritos");
    if (botaoLimpar) {
        botaoLimpar.disabled = listaFavoritas.length === 0;
    }
}

function iniciarLimparFavoritos() {
    const botaoLimpar = document.getElementById("btn-limpar-favoritos");
    if (!botaoLimpar) {
        return;
    }
    botaoLimpar.addEventListener("click", function () {
        const confirmou = window.confirm("Deseja remover todas as notícias favoritas?");
        if (confirmou) {
            localStorage.removeItem(CHAVE_FAVORITOS);
            iniciarFavoritos();
            atualizarContadorFavoritos();
            mostrarAviso("Lista de favoritos esvaziada.");
        }
    });
}

function mostrarAviso(texto) {
    let aviso = document.getElementById("aviso-flutuante");
    if (!aviso) {
        aviso = document.createElement("div");
        aviso.id = "aviso-flutuante";
        aviso.className = "aviso-flutuante";
        aviso.setAttribute("role", "status");
        document.body.appendChild(aviso);
    }
    aviso.textContent = texto;
    aviso.classList.add("visivel");
    clearTimeout(aviso.temporizador);
    aviso.temporizador = setTimeout(function () {
        aviso.classList.remove("visivel");
    }, 2500);
}

function iniciarCliqueFavoritos() {
    document.addEventListener("click", function (evento) {
        const botao = evento.target.closest(".botao-favorito");
        if (!botao) {
            return;
        }
        const id = Number(botao.dataset.id);
        const agoraFavorita = alternarFavorito(id);

        document.querySelectorAll('.botao-favorito[data-id="' + id + '"]').forEach(function (outroBotao) {
            atualizarBotaoFavorito(outroBotao, agoraFavorita);
        });
        atualizarContadorFavoritos();
        mostrarAviso(agoraFavorita ? "Notícia salva nos favoritos ★" : "Notícia removida dos favoritos");

        if (document.getElementById("lista-favoritos") && !agoraFavorita) {
            iniciarFavoritos();
        }
    });
}

function preencherArtigo(noticia) {
    const categoria = CATEGORIAS[noticia.categoria];
    document.title = noticia.titulo + " | Pulso News";

    const etiqueta = document.getElementById("artigo-categoria");
    etiqueta.textContent = categoria.nome;
    etiqueta.href = categoria.pagina;
    etiqueta.className = "etiqueta etiqueta-" + noticia.categoria;

    document.getElementById("artigo-titulo").textContent = noticia.titulo;
    document.getElementById("artigo-subtitulo").textContent = noticia.subtitulo;
    document.getElementById("artigo-autor").textContent = noticia.autor;
    document.getElementById("artigo-tempo").textContent = noticia.tempoLeitura + " min de leitura";

    const data = document.getElementById("artigo-data");
    data.textContent = formatarData(noticia.data);
    data.setAttribute("datetime", noticia.data);

    const imagem = document.getElementById("artigo-imagem");
    imagem.src = noticia.imagem;
    imagem.alt = "Ilustração da notícia: " + noticia.titulo;

    const corpo = document.getElementById("artigo-corpo");
    corpo.innerHTML = "";
    noticia.conteudo.forEach(function (paragrafo, indice) {
        const p = document.createElement("p");
        p.textContent = paragrafo;
        corpo.appendChild(p);
        if (indice === 1 && noticia.citacao) {
            const citacao = document.createElement("blockquote");
            citacao.className = "citacao";
            citacao.textContent = noticia.citacao;
            corpo.appendChild(citacao);
        }
    });

    const botaoFavorito = document.getElementById("btn-favoritar-artigo");
    botaoFavorito.dataset.id = noticia.id;
    atualizarBotaoFavorito(botaoFavorito, ehFavorita(noticia.id));
}

function preencherNavegacaoArtigo(noticia) {
    const posicao = NOTICIAS.indexOf(noticia);
    const anterior = NOTICIAS[posicao - 1];
    const proxima = NOTICIAS[posicao + 1];
    const linkAnterior = document.getElementById("link-anterior");
    const linkProxima = document.getElementById("link-proxima");

    if (anterior) {
        linkAnterior.href = "noticia-destaque.html?id=" + anterior.id;
        linkAnterior.querySelector("span").textContent = anterior.titulo;
    } else {
        linkAnterior.hidden = true;
    }
    if (proxima) {
        linkProxima.href = "noticia-destaque.html?id=" + proxima.id;
        linkProxima.querySelector("span").textContent = proxima.titulo;
    } else {
        linkProxima.hidden = true;
    }
}

function iniciarArtigo() {
    const artigo = document.getElementById("artigo-completo");
    if (!artigo) {
        return;
    }
    const parametros = new URLSearchParams(window.location.search);
    const idPedido = Number(parametros.get("id")) || 1;
    const noticia = NOTICIAS.find(function (item) {
        return item.id === idPedido;
    });

    if (!noticia) {
        artigo.innerHTML = '<p class="mensagem-vazia">Notícia não encontrada. <a href="noticias.html">Ver todas as notícias</a>.</p>';
        return;
    }

    preencherArtigo(noticia);
    preencherNavegacaoArtigo(noticia);

    const relacionadas = NOTICIAS.filter(function (item) {
        return item.categoria === noticia.categoria && item.id !== noticia.id;
    });
    const containerRelacionadas = document.getElementById("noticias-relacionadas");
    renderizarNoticias(relacionadas.slice(0, 2), containerRelacionadas, "Sem outras notícias nesta categoria.");
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarArtigo();
    iniciarListaNoticias();
    iniciarUltimasNoticias();
    iniciarFavoritos();
    iniciarLimparFavoritos();
    iniciarCliqueFavoritos();
    atualizarContadorFavoritos();
});
