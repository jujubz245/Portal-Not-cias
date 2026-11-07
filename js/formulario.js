const CHAVE_MENSAGENS = "pulsoMensagens";
const CHAVE_NEWSLETTER = "pulsoNewsletter";

const NOMES_ASSUNTOS = {
    sugestao: "Sugestão de pauta",
    correcao: "Correção de notícia",
    parceria: "Parceria",
    elogio: "Elogio",
    outro: "Outro assunto"
};

function obterMensagens() {
    const dadosSalvos = localStorage.getItem(CHAVE_MENSAGENS);
    if (dadosSalvos === null) {
        return [];
    }
    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        return [];
    }
}

function salvarMensagens(listaMensagens) {
    localStorage.setItem(CHAVE_MENSAGENS, JSON.stringify(listaMensagens));
}

function escaparHtml(texto) {
    const elemento = document.createElement("div");
    elemento.textContent = texto;
    return elemento.innerHTML;
}

function mostrarAlerta(container, tipo, texto) {
    container.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show d-flex align-items-center gap-2" role="alert">
            <span>${texto}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
    `;
}

function renderizarMensagens() {
    const lista = document.getElementById("lista-mensagens");
    const contador = document.getElementById("total-mensagens");
    if (!lista) {
        return;
    }
    const mensagens = obterMensagens();
    lista.innerHTML = "";

    if (contador) {
        contador.textContent = mensagens.length;
    }

    if (mensagens.length === 0) {
        lista.innerHTML = '<li class="list-group-item texto-suave text-center py-4">Nenhuma mensagem enviada por este navegador ainda.</li>';
        return;
    }

    for (let i = mensagens.length - 1; i >= 0; i--) {
        const mensagem = mensagens[i];
        const item = document.createElement("li");
        item.className = "list-group-item mensagem-salva";
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-start gap-3">
                <div>
                    <strong>${escaparHtml(mensagem.nome)}</strong>
                    <span class="badge rounded-pill text-bg-secondary ms-1">${NOMES_ASSUNTOS[mensagem.assunto] || "Outro assunto"}</span>
                    <div class="small texto-suave">${escaparHtml(mensagem.email)} · ${mensagem.data}</div>
                </div>
                <button type="button" class="btn btn-outline-danger btn-sm btn-excluir-mensagem" data-indice="${i}" aria-label="Excluir mensagem de ${escaparHtml(mensagem.nome)}">Excluir</button>
            </div>
            <p class="mb-0 mt-2">${escaparHtml(mensagem.texto)}</p>
        `;
        lista.appendChild(item);
    }
}

function iniciarFormularioContato() {
    const formulario = document.getElementById("formulario-contato");
    if (!formulario) {
        return;
    }
    const areaAlerta = document.getElementById("alerta-contato");
    const campoMensagem = document.getElementById("mensagem");
    const contadorCaracteres = document.getElementById("contador-caracteres");
    const limiteCaracteres = Number(campoMensagem.getAttribute("maxlength"));

    function atualizarContador() {
        const total = campoMensagem.value.length;
        contadorCaracteres.textContent = total + " / " + limiteCaracteres + " caracteres";
    }

    campoMensagem.addEventListener("input", atualizarContador);

    formulario.addEventListener("invalid", function () {
        formulario.classList.add("foi-enviado");
        mostrarAlerta(areaAlerta, "danger", "<strong>Ops!</strong> Confira os campos destacados em vermelho antes de enviar.");
    }, true);

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const novaMensagem = {
            nome: formulario.nome.value.trim(),
            email: formulario.email.value.trim(),
            assunto: formulario.assunto.value,
            texto: formulario.mensagem.value.trim(),
            data: new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
        };

        const mensagens = obterMensagens();
        mensagens.push(novaMensagem);
        salvarMensagens(mensagens);

        formulario.reset();
        mostrarAlerta(areaAlerta, "success", "<strong>Mensagem enviada, " + escaparHtml(novaMensagem.nome.split(" ")[0]) + "!</strong> Ela foi salva neste navegador e aparece na lista de mensagens enviadas.");
        renderizarMensagens();
    });

    formulario.addEventListener("reset", function () {
        formulario.classList.remove("foi-enviado");
        areaAlerta.innerHTML = "";
        setTimeout(atualizarContador, 0);
    });

    const lista = document.getElementById("lista-mensagens");
    lista.addEventListener("click", function (evento) {
        const botao = evento.target.closest(".btn-excluir-mensagem");
        if (!botao) {
            return;
        }
        const indice = Number(botao.dataset.indice);
        const mensagens = obterMensagens();
        mensagens.splice(indice, 1);
        salvarMensagens(mensagens);
        renderizarMensagens();
        mostrarAlerta(areaAlerta, "warning", "Mensagem excluída do armazenamento local.");
    });

    atualizarContador();
    renderizarMensagens();
}

function iniciarNewsletter() {
    const formulario = document.getElementById("formulario-newsletter");
    if (!formulario) {
        return;
    }
    const areaAlerta = document.getElementById("alerta-newsletter");
    const emailSalvo = localStorage.getItem(CHAVE_NEWSLETTER);

    function mostrarInscrito(email) {
        formulario.hidden = true;
        areaAlerta.innerHTML = `
            <div class="alert alert-success d-flex flex-wrap align-items-center justify-content-between gap-2 mb-0" role="alert">
                <span>Você já recebe a newsletter no e-mail <strong>${escaparHtml(email)}</strong>.</span>
                <button type="button" class="btn btn-sm btn-outline-success" id="btn-cancelar-newsletter">Cancelar inscrição</button>
            </div>
        `;
        document.getElementById("btn-cancelar-newsletter").addEventListener("click", function () {
            localStorage.removeItem(CHAVE_NEWSLETTER);
            formulario.hidden = false;
            formulario.reset();
            mostrarAlerta(areaAlerta, "info", "Inscrição cancelada. Você pode se inscrever de novo quando quiser.");
        });
    }

    if (emailSalvo) {
        mostrarInscrito(emailSalvo);
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const email = formulario.querySelector("#email-newsletter").value.trim();
        localStorage.setItem(CHAVE_NEWSLETTER, email);
        mostrarInscrito(email);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarFormularioContato();
    iniciarNewsletter();
});
