# Chatbot de Atendimento Simulado

Este é um protótipo **Fullstack (Django + React)** de um sistema de chat simples, desenvolvido como desafio técnico.
Nele, o usuário pode assumir dois perfis (“Usuário A” ou “Usuário B”), enviar mensagens e visualizar respostas mockadas, além de consultar um histórico filtrado por usuário.

---

## Tecnologias Utilizadas

### Backend (pasta `backend/`)

* Python 3+
* Django
* Django REST Framework
* SQLite (banco padrão)

### Frontend (pasta `frontend/`)

* React (Create React App)
* Context API para gerenciamento de estado

---

## 📂 Estrutura do Projeto

```
PROJETO-CHATBOT
│
├── backend
│   ├── chat
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   ├── core
│   │   ├── settings.py
│   │   ├── urls.py
│
└── frontend
    ├── src
    │   ├── App.js
    │   ├── Chat.js
    │   ├── Historico.js
    │   ├── UserContext.js
```

---

## Como Rodar o Projeto

---

### Rodando o Backend (Django)

1️⃣ Acesse a pasta `backend`

```
cd backend
```

2️⃣ (Opcional) Crie e ative o ambiente virtual

```
python -m venv venv
```

* Windows:

```
venv\Scripts\activate
```

* Linux/Mac:

```
source venv/bin/activate
```

3️⃣ Instale as dependências

```
pip install -r requirements.txt
```

4️⃣ Rode as migrações

```
python manage.py migrate
```

5️⃣ Inicie o servidor

```
python manage.py runserver
```

Backend disponível em:

```
http://localhost:8000
```

---

### Rodando o Frontend (React)

1️⃣ Vá para a pasta `frontend`

```
cd frontend
```

2️⃣ Instale as dependências

```
npm install
```

3️⃣ Inicie o servidor

```
npm start
```

Frontend disponível em:

```
http://localhost:3000
```

---

## Funcionamento do Sistema

### Login Mockado

No frontend, o usuário não faz login real.
Ele pode escolher assumir:

* Usuário A
* Usuário B

Este estado é controlado pelo `UserContext.js`.

---

### Tela de Chat (`Chat.js`)

* O usuário digita uma mensagem e envia
* O frontend envia para a API:

  * Mensagem
  * Usuário ativo (A ou B)
* O backend:

  * Salva no banco
  * Retorna uma resposta automática simulada
* O frontend exibe pergunta e resposta

---

### Tela de Histórico (`Historico.js`)

* Possui rota separada (`/historico`)
* Consulta todas as mensagens do backend
* Filtra pelo usuário atualmente ativo
* Se alternar entre A e B, os dados mudam automaticamente

---

## Arquitetura e Decisões Técnicas

### Backend

Foi criado no app `chat` o model:

```
Message
- user (A ou B)
- text (mensagem enviada pelo usuário)
- response (resposta simulada)
- created_at (timestamp)
```

A API expõe endpoints para:

* Registrar nova mensagem
* Consultar histórico filtrando por user

### Frontend

* `UserContext.js` armazena o usuário logado
* Paginas usam esse estado para:

  * Enviar mensagens com o usuário correto
  * Filtrar histórico exibido

---

## Requisitos do Desafio Atendidos

* Login mockado
* Tela de chat funcional
* Respostas diferentes para cada usuário
* Histórico filtrado
* Backend usando Django
* Frontend usando React
* Documentação presente neste README

---

## Autor

Projeto desenvolvido como solução para o desafio técnico “Chatbot de Atendimento Simulado”.
