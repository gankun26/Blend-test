
# ![logo](https://github.com/user-attachments/assets/24c26e6e-fae9-4c89-aea0-6be2fc9740cb)        Aplicativo de Lista de Tarefas utilizando React  

Um aplicativo de lista de tarefas desenvolvido em React, que permite aos usuários adicionar, excluir e marcar tarefas como concluídas. O aplicativo busca dados iniciais da API JSONPlaceholder e oferece funcionalidades de pesquisa, filtragem e ordenação.

## Funcionalidades

- **Busca de Tarefas**: Filtra as tarefas com base em uma palavra-chave.
- **Filtragem**: Permite visualizar tarefas por status (`All`, `Completed`, `Incomplete`).
- **Ordenação**: Organiza as tarefas em ordem crescente ou decrescente com base no texto.
- **Adicionar Tarefas**: Permite ao usuário adicionar novas tarefas.
- **Excluir Tarefas**: Remove tarefas da lista.
- **Marcar Tarefas como Concluídas**: Alterna o status de conclusão de uma tarefa.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir a interface do usuário.
- **CSS**: Estilização do aplicativo.
- **JSONPlaceholder**: API para fornecer dados de exemplo de tarefas.

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/gankun26/Blend-test.git
   cd todo-test
   ```

2. **Instale as Dependências**

   Certifique-se de que você tenha o [Node.js](https://nodejs.org/) instalado. Em seguida, execute:

   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**

   ```bash
   npm run dev
   ```

   O aplicativo será iniciado e estará disponível em `http://localhost:3000`.


## Uso

- **Adicionar uma Tarefa**: Preencha o formulário no componente `TodoForm`, selecione a categoria e clique em "Criar Tarefa".
- **Excluir uma Tarefa**: Clique no botão `deletar tarefa`.
- **Marcar como Concluída**: Clique no botão `completar tarefa`.
- **Pesquisar**: Use o campo de pesquisa para filtrar as tarefas.
- **Filtrar e Ordenar**: Utilize os controles de filtragem e ordenação para ajustar a visualização das tarefas.


---
