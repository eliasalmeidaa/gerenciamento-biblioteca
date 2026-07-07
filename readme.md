# GERENCIAMENTO DE BIBLIOTECA 📚

Sistema de gerenciamento de biblioteca pessoal com backend em **Python (FastAPI)** e frontend em **JavaScript puro**.

## 🛠️ Tecnologias

- **Python** + **FastAPI** — API REST com CRUD completo
- **JavaScript (Vanilla)** — frontend consumindo a API via `fetch`
- **HTML5** + **CSS3** — interface simples e funcional

## ⚙️ Funcionalidades

- ✅ Listar todos os livros (GET)
- ✅ Adicionar livro pelo formulário (POST)
- ✅ Marcar/desmarcar como lido — risca o título (PUT)
- ✅ Remover livro da lista (DELETE)
- ✅ Renderização dinâmica dos cards via JS
- ✅ Contador de livros atualizado em tempo real

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
python3 -m uvicorn app:app --reload
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

- API REST com FastAPI e Pydantic (validação automática de dados)
- CORS — comunicação entre origens diferentes
- `fetch` com GET, POST, PUT e DELETE no frontend
- Renderização dinâmica de elementos via JS (`createElement`, `appendChild`)
- Comunicação real entre frontend JS e backend Python
- Separação de responsabilidades: `dados.py` (armazenamento) e `app.py` (rotas)

---

Desenvolvido por [Elias Martins de Almeida](https://github.com/eliasalmeidaa) como prática de integração entre frontend JS e backend Python.