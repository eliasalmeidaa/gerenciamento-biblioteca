from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#Biblioteca integrada ao FastApi que sua princiapl função é validar os dados de forma automatica
#Garante que chegue os dados no formato correto
from pydantic import BaseModel
import dados

#base model tem como finalidade definir as estruturas desses dados.
class LivroEntrada(BaseModel):
    titulo:str
    autor:str
    ano:int

app = FastAPI()

#Tem como função melhorar as rotas do front e backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],# libera todos os endereços para requisição
    allow_methods=['*'],# libera todos os metodos como GET, POST, DELETE e PUT
    allow_headers=['*'],# Define todos os cabeçalhos HTTP  que são aceitos ( informações extras que o navegador manda junto a requisição)
)
#Verificando se a API do servidor está funcionando
@app.get('/')
def home():
    return {'mesnagem': 'API funcionando'}
#Serve para verificart a rota livros e retornar la do arquivo dados a lista livros.
@app.get('/livros')
def livros():
    return dados.livros

@app.post('/livros')
def adcionar_livro(livro: LivroEntrada):
    novos_livros = {
        'titulo': livro.titulo,
        'autor': livro.autor,
        'ano': livro.ano,
        'id': dados.proximo_id, #usa o valor atual do id
        'lido': False,
    }
    dados.livros.append(novos_livros)
    dados.proximo_id += 1
    return novos_livros # Nesses casos sem o return o JS recebe NULL

@app.put('/livros/{id}')
def marcar_lido(id: int):
    for livro in dados.livros:
        if livro ['id'] == id:
            livro ['lido'] = not livro['lido']
            return livro

@app.delete('/livros/{id}')
def remover_livros(id: int):
    for livro in dados.livros:
        if livro ['id'] == id:
            dados.livros.remove(livro)
            return {'mensagem': 'Livro removido da lista'}
