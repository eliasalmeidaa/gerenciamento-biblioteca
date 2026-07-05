# Gerenciamento de biblioteca 📚

Sistema de gerenciamento de biblioteca pessoal com backend em **Python (FastAPI)** e frontend em **JavaScript puro**.

## 🛠️ Tecnologias

- **Python** + **FastAPI** — API REST com 4 rotas (CRUD completo)
- **JavaScript (Vanilla)** — frontend consumindo a API via `fetch`
- **HTML5** + **CSS3** — interface simples e funcional 

## ⚙️ Funcionalidades

- Adicionar livro (título, autor, ano)
- Listar todos os livros
- Marcar/desmarcar como lido
- Remover livro da lista

## 📁 Estrutura

```
gerenciamento-biblioteca/
├── backend/
│   ├── app.py      # FastAPI: rotas GET, POST, PUT, DELETE
│   └── dados.py    # lista de livros em memória
└── frontend/
    ├── index.html
    ├── css/style.css
    └── js/script.js
```

## 🚀 Como rodar

**Backend:**
```bash
cd backend
python -m uvicorn app:app --reload
```

**Frontend:**
Abra `frontend/index.html` no navegador.

**Documentação automática (Swagger):**
```
http://localhost:8000/docs
```

## 📡 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/livros` | Lista todos os livros |
| POST | `/livros` | Adiciona livro novo |
| PUT | `/livros/{id}` | Alterna status de lido |
| DELETE | `/livros/{id}` | Remove um livro |

---

Desenvolvido por [Elias Martins de Almeida](https://github.com/eliasalmeidaa) como prática de integração entre frontend JS e backend Python.