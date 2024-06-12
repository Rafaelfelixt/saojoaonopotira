function coletarDadosFormulario() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var comidas = obterValoresSelecionados('comida');
    var bebidas = obterValoresSelecionados('bebida');

    if (!nome || !telefone || comidas.length === 0 || bebidas.length === 0) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    var dados = {
        "nome": nome,
        "telefone": telefone,
        "comidas": comidas,
        "bebidas": bebidas
    };

    salvarDadosUsuario(dados);
    exibirMensagemConfirmacao();
}

function obterValoresSelecionados(nomeCheckbox) {
    var valoresSelecionados = [];
    document.querySelectorAll('input[name="' + nomeCheckbox + '"]:checked').forEach(function(checkbox) {
        valoresSelecionados.push(checkbox.value);
    });
    return valoresSelecionados;
}

function salvarDadosUsuario(dados) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(dados);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function exibirMensagemConfirmacao() {
    alert('O formulário foi enviado com sucesso!');
}

function verLista() {
    window.location.href = 'lista.html';
}

window.onload = function() {
    var form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        coletarDadosFormulario();
    });
};
