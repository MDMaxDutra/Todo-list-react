# Todo React Avançado 🚀

Aplicação de lista de tarefas desenvolvida com React utilizando recursos avançados.

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- Context API
- Hooks
- useMemo
- React.memo

## Funcionalidades

- Adicionar tarefas
- Remover tarefas
- Marcar como concluída
- Filtrar tarefas
- Persistência com localStorage

## Como executar o projeto

```bash
npm install
npm run dev

## Estrutura do projeto

src/
├── components/
├── context/
├── hooks/

## Autor

Maxwelton Dutra

## 💡 Boas Práticas Aplicadas

Durante o desenvolvimento da aplicação foram utilizadas algumas boas práticas recomendadas para projetos React:

### ✔ Planejamento de Componentes
A aplicação foi dividida em componentes reutilizáveis para facilitar manutenção e organização do código:

- `TodoProvider`
- `TodoList`
- `TodoFilters`

Além da separação de:
- Context API
- Hooks customizados
- Componentes de interface

---

### ✔ React Developer Tools
A aplicação pode ser analisada utilizando a extensão React Developer Tools para inspeção de:

- Hooks
- Context API
- Estados globais
- Renderizações dos componentes

---

### ✔ Testes de Performance
Foram aplicadas técnicas de otimização utilizando:

- `useMemo`
- `React.memo`

com o objetivo de evitar renderizações desnecessárias e melhorar a performance da aplicação.

---

### ✔ Mobile First e Tailwind CSS
A interface foi construída utilizando Tailwind CSS, mantendo um layout simples, moderno e responsivo.
