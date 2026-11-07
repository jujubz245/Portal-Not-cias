const CHAVE_FONTE = "pulsoTamanhoFonte";
const TAMANHO_MINIMO = 0.95;
const TAMANHO_MAXIMO = 1.45;

function obterPaginaAtual() {
    const caminho = window.location.pathname;
    const nomeArquivo = caminho.substring(caminho.lastIndexOf("/") + 1);
    return nomeArquivo === "" ? "index.html" : nomeArquivo;
}

function marcarLinkAtivo() {
    const paginaAtual = obterPaginaAtual();
    const semBootstrap = document.body.dataset.framework === "nenhum";
    const classeAtiva = semBootstrap ? "ativo" : "active";
    const links = document.querySelectorAll(".nav-link, .dropdown-item, .menu-link, .submenu-link");

    links.forEach(function (link) {
        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add(classeAtiva);
            link.setAttribute("aria-current", "page");
            const itemPai = link.closest(".dropdown, .menu-item");
            if (itemPai) {
                const botaoPai = itemPai.querySelector(".dropdown-toggle, .submenu-botao");
                if (botaoPai) {
                    botaoPai.classList.add(classeAtiva);
                }
            }
        }
    });
}

function mostrarDataDeHoje() {
    const elementoData = document.getElementById("data-hoje");
    if (!elementoData) {
        return;
    }
    const hoje = new Date();
    const textoData = hoje.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    elementoData.textContent = textoData.charAt(0).toUpperCase() + textoData.slice(1);
}

function mostrarAnoAtual() {
    document.querySelectorAll(".ano-atual").forEach(function (elemento) {
        elemento.textContent = new Date().getFullYear();
    });
}

function iniciarMenuPuro() {
    const botaoMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("menu-principal");
    if (!botaoMenu || !menu) {
        return;
    }
    botaoMenu.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", aberto);
    });

    const botoesSubmenu = document.querySelectorAll(".submenu-botao");
    botoesSubmenu.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const item = botao.closest(".menu-item");
            const aberto = item.classList.toggle("submenu-aberto");
            botao.setAttribute("aria-expanded", aberto);
        });
    });

    document.addEventListener("click", function (evento) {
        if (!evento.target.closest(".menu-item")) {
            document.querySelectorAll(".menu-item.submenu-aberto").forEach(function (item) {
                item.classList.remove("submenu-aberto");
                item.querySelector(".submenu-botao").setAttribute("aria-expanded", "false");
            });
        }
    });
}

function iniciarFaixaEmAlta() {
    const lista = document.querySelector(".em-alta-lista");
    if (!lista) {
        return;
    }
    const itensOriginais = Array.from(lista.children);
    itensOriginais.forEach(function (item) {
        const copia = item.cloneNode(true);
        copia.setAttribute("aria-hidden", "true");
        copia.querySelector("a").setAttribute("tabindex", "-1");
        lista.appendChild(copia);
    });
}

function iniciarBotaoTopo() {
    const botaoTopo = document.getElementById("btn-topo");
    if (!botaoTopo) {
        return;
    }
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });
    botaoTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function iniciarBarraProgresso() {
    const barra = document.getElementById("barra-progresso");
    if (!barra) {
        return;
    }
    window.addEventListener("scroll", function () {
        const alturaRolavel = document.documentElement.scrollHeight - window.innerHeight;
        const porcentagem = alturaRolavel > 0 ? (window.scrollY / alturaRolavel) * 100 : 0;
        barra.style.width = porcentagem + "%";
    });
}

function aplicarTamanhoFonte(tamanho) {
    const corpo = document.getElementById("artigo-corpo");
    if (corpo) {
        corpo.style.setProperty("--tamanho-fonte-artigo", tamanho + "rem");
    }
}

function iniciarControleFonte() {
    const botaoAumentar = document.getElementById("btn-aumentar-fonte");
    const botaoDiminuir = document.getElementById("btn-diminuir-fonte");
    if (!botaoAumentar || !botaoDiminuir) {
        return;
    }
    let tamanhoAtual = Number(localStorage.getItem(CHAVE_FONTE)) || 1.1;
    aplicarTamanhoFonte(tamanhoAtual);

    function mudarFonte(passo) {
        tamanhoAtual = Math.round((tamanhoAtual + passo) * 100) / 100;
        if (tamanhoAtual > TAMANHO_MAXIMO) {
            tamanhoAtual = TAMANHO_MAXIMO;
        } else if (tamanhoAtual < TAMANHO_MINIMO) {
            tamanhoAtual = TAMANHO_MINIMO;
        }
        localStorage.setItem(CHAVE_FONTE, tamanhoAtual);
        aplicarTamanhoFonte(tamanhoAtual);
    }

    botaoAumentar.addEventListener("click", function () {
        mudarFonte(0.1);
    });
    botaoDiminuir.addEventListener("click", function () {
        mudarFonte(-0.1);
    });
}

function iniciarFaq() {
    const perguntas = document.querySelectorAll(".faq-pergunta");
    perguntas.forEach(function (pergunta) {
        pergunta.addEventListener("click", function () {
            const item = pergunta.parentElement;
            const estavaAberta = item.classList.contains("aberta");
            document.querySelectorAll(".faq-item").forEach(function (outroItem) {
                outroItem.classList.remove("aberta");
                outroItem.querySelector(".faq-pergunta").setAttribute("aria-expanded", "false");
            });
            if (!estavaAberta) {
                item.classList.add("aberta");
                pergunta.setAttribute("aria-expanded", "true");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    marcarLinkAtivo();
    mostrarDataDeHoje();
    mostrarAnoAtual();
    iniciarMenuPuro();
    iniciarFaixaEmAlta();
    iniciarBotaoTopo();
    iniciarBarraProgresso();
    iniciarControleFonte();
    iniciarFaq();
});
