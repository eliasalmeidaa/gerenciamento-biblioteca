# BookShelf API 📚

Sistema de gerenciamento de biblioteca pessoal com backend em **Python (FastAPI)** e frontend em **JavaScript puro**.

## 🛠️ Tecnologias

- **Python** + **FastAPI** — API REST com 4 rotas (CRUD completo)
- **JavaScript (Vanilla)** — frontend consumindo a API via `fetch`
- **HTML5** + **CSS3** — interface simples e funcional

## ⚙️ Funcionalidades

- ✅ Listar todos os livros (GET)
- ✅ Adicionar livro pelo formulário (POST)
- ✅ Renderização dinâmica dos cards via JS
- ✅ Contador de livros atualizado em tempo real
- 🚧 Marcar/desmarcar como lido (PUT — em desenvolvimento)
- 🚧 Remover livro da lista (DELETE — em desenvolvimento)

## 📁 Estrutura

```
bookshelf-api/
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

## 💡 O que pratiquei com este projeto

- API REST com FastAPI e Pydantic
- CORS — comunicação entre origens diferentes
- `fetch` com GET e POST no frontend
- Renderização dinâmica de elementos via JS (`createElement`, `appendChild`)
- Comunicação real entre frontend JS e backend Python

## 🚧 Status

Em desenvolvimento — GET e POST funcionando. Faltam: lógica de PUT (marcar como lido) e DELETE (remover) no frontend.

---

Desenvolvido por [Elias Martins de Almeida](https://github.com/eliasalmeidaa) como prática de integração entre frontend JS e backend Python.