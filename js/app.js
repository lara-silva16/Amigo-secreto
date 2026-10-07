const amigos = [];

function adicionar() {
    const campo = document.getElementById("nome-amigo");
    const nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome.");
        return;
    }

    amigos.push(nome);

    const lista = document.getElementById("lista-amigos");
    lista.textContent = amigos.join(", ");

    campo.value = "";
    campo.focus();
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos[indice];

    const resultado = document.getElementById("lista-sorteio");
    resultado.textContent = escolhido;
}

function reiniciar(evento) {
    // TODO impedir a navegação e restaurar o estado
}