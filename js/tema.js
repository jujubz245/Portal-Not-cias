const CHAVE_TEMA = "pulsoTema";

function obterTemaInicial() {
    const temaSalvo = localStorage.getItem(CHAVE_TEMA);
    if (temaSalvo === "claro" || temaSalvo === "escuro") {
        return temaSalvo;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "escuro";
    }
    return "claro";
}

function aplicarTema(tema) {
    const raiz = document.documentElement;
    raiz.setAttribute("data-tema", tema);
    raiz.setAttribute("data-bs-theme", tema === "escuro" ? "dark" : "light");

    const botao = document.getElementById("btn-tema");
    if (botao) {
        const proximoTema = tema === "escuro" ? "claro" : "escuro";
        botao.setAttribute("aria-label", "Ativar modo " + proximoTema);
        botao.setAttribute("title", "Ativar modo " + proximoTema);
        const texto = botao.querySelector(".texto-tema");
        if (texto) {
            texto.textContent = tema === "escuro" ? "Claro" : "Escuro";
        }
    }
}

function alternarTema() {
    const temaAtual = document.documentElement.getAttribute("data-tema");
    const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
    localStorage.setItem(CHAVE_TEMA, novoTema);
    aplicarTema(novoTema);
}

aplicarTema(obterTemaInicial());

document.addEventListener("DOMContentLoaded", function () {
    aplicarTema(document.documentElement.getAttribute("data-tema"));
    const botaoTema = document.getElementById("btn-tema");
    if (botaoTema) {
        botaoTema.addEventListener("click", alternarTema);
    }
});
