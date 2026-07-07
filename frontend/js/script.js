const campTitulo = document.getElementById('campo-titulo');
const campAutor = document.getElementById('campo-autor');
const campAno = document.getElementById('campo-ano');
const botaoAdd = document.getElementById('botao-adicionar');
const mensFeedback = document.getElementById('mensagem-feedback');
const contaLivros = document.getElementById('contador-livros');
const listaLivros = document.getElementById('lista-livros');
// URL base da API Python do FastAPI
const URL = 'http://localhost:8000/livros'

// GET → busca todos os livros do servidor e renderiza na tela
function buscarLivros() {
    fetch(URL)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            renderizar(dados);
        })
}

// POST → envia um livro novo pro servidor Python
function addLivros(cTitulo, cAutor, cAno) {
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: cTitulo, autor: cAutor, ano: parseInt(cAno) })
    })
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            buscarLivros();
        })
}

function marcarLido(id){
    fetch(URL + '/' + id, {
        method: 'PUT'
    })

    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        buscarLivros();
    })
}

function removeLivro(id){

    fetch(URL + '/' + id, {
        method: 'DELETE'
    })

    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        buscarLivros();
    })
}

// Quando a página terminar de carregar, busca os livros automaticamente
document.addEventListener('DOMContentLoaded', function() {
    buscarLivros();
})

// Renderiza os cards na tela a partir do array de livros
function renderizar(dados) {
    listaLivros.innerHTML = '';

    dados.forEach(function(livro) {

        const card = document.createElement('div');
        card.classList.add('card-livro');

        if(livro.lido){
            card.classList.add('lido');
        }

        const info = document.createElement('div');
        info.classList.add('info-livro');
        card.appendChild(info);

        const titulo = document.createElement('p');
        titulo.classList.add('titulo-livro');
        titulo.textContent = livro.titulo;
        info.appendChild(titulo);

        const autor = document.createElement('p');
        autor.classList.add('autor-livro');
        autor.textContent = livro.autor;
        info.appendChild(autor);

        const ano = document.createElement('p');
        ano.classList.add('ano-livro');
        ano.textContent = livro.ano;
        info.appendChild(ano);

        const botoesLivro = document.createElement('div');
        botoesLivro.classList.add('acoes-livro');
        card.appendChild(botoesLivro);

        const botaoLido = document.createElement('button');
        botaoLido.classList.add('botao-lido');
        botaoLido.textContent = 'Marcar como lido';
        botaoLido.addEventListener('click', function() {
           
           marcarLido(livro.id);

        })
        botoesLivro.appendChild(botaoLido);

        const botaoRemove = document.createElement('button');
        botaoRemove.classList.add('botao-remover');
        botaoRemove.textContent = 'Remover';
        botaoRemove.addEventListener('click', function() {
            removeLivro(livro.id);
        });
        botoesLivro.appendChild(botaoRemove);

        listaLivros.appendChild(card);
    });

    contaLivros.textContent = `${dados.length} livros`;
};

// Evento de clique no botão Adicionar
botaoAdd.addEventListener('click', function() {

    const cTitulo = campTitulo.value;
    const cAutor = campAutor.value;
    const cAno = campAno.value;

    if(cTitulo === '' || cAutor === '' || cAno === '') {

        alert('Erro, digite em todas seções!');

    } else {

        addLivros(cTitulo, cAutor, cAno);
        campTitulo.value = '';
        campAutor.value = '';
        campAno.value = '';

    }
});