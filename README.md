# Lista de Tarefas
Este projeto é uma aplicação em React para gerenciar uma lista de tarefas. Ele permite criar, visualizar, atualizar e excluir tarefas. A aplicação utiliza uma API para armazenar e recuperar as tarefas.

## Funcionalidades

- Adicionar uma nova tarefa
- Visualizar todas as tarefas
- Excluir uma tarefa

## Tecnologias Utilizadas
- React
- Axios (para requisições HTTP)
- React Router (para navegação)
- CSS Modules (para estilização)

## Estrutura do Projeto
``` 
node_modules/
public/
  favicon.ico
  index.html
  logo192.png
  logo512.png
  manifest.json
  robots.txt
src/
  components/
    AddTask.css
    AddTask.jsx
    Button.css
    Button.jsx
    Header.jsx
    Task.css
    Task.jsx
    TaskDetails.css
    TaskDetails.jsx
    Tasks.jsx
  App.css
  App.jsx
  index.css
  index.js
.gitignore
package-lock.json
package.json
README.md
```

## Instalação
1. Clone o repositório:

        git clone https://github.com/seu-usuario/lista-de-tarefas.git

2. Navegue até o diretório do projeto:

        cd lista-de-tarefas
3. Instale as dependências:

        npm install
4. Inicie o servidor de desenvolvimento:

        npm start

## Como Usar
1. Adicionar uma Tarefa:
   - Utilize o formulário na página inicial para adicionar uma nova tarefa.
   - Digite o título da tarefa e clique em "Adicionar".
2. Visualizar Tarefas:

   - As tarefas adicionadas serão exibidas na lista abaixo do formulário.
   - Cada tarefa mostra o título e possui botões para editar ou excluir.

3. Excluir uma Tarefa:

   - Clique no botão "X" ao lado da tarefa que deseja remover.

## Contribuindo
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/fooBar`)
3. Faça commit das suas alterações (`git commit -am 'Add some fooBar'`)
4. Faça push para a branch (`git push origin feature/fooBar`)
5. Crie um novo Pull Request