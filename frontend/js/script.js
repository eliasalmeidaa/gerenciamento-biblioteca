const campTitulo = document.getElementById('campo-titulo');
const campAutor= document.getElementById('campo-autor');
const campAno = document.getElementById('campo-ano');
const botaoAdd = document.getElementById('botao-adicionar');
const mensFeedback = document.getElementById('mensagem-feedback');
const contaLivros = document.getElementById('contador-livros');
const listaLivros = document.getElementById('lista-livros');

function buscarLivros() {
    fetch('http://localhost:8000/livros')
    .then(function() {

    })
} 