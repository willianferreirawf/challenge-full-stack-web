# Backend (Api)

## Comentários Gerais
- No backend resolvi usar typescript, creio que ajuda na manuntenção o uso da ferramenta, inclusive ajuda capturar alguns erros.
- Para ORM, usei o Knex, o que ajudou ser mais rápido na questão das operações do CRUD, junto com ele a lib mysql2, para fazer a conexão com o mysql
- Utilizei uma arquitetura de models, e controllers, tendo em vista que a view ficará la no front no VueJS
- Usando o Knex, fiz migrations para facilitar o processo de criação de tabelas, e também poder versionar essas tabelas
- Usando o Knex, fiz também seeders para pré cadastros de alguns alunos
- Utilizei eslint para padronizar o código, porém não terminei de configurar todo ele
- Nas models, só trago a tipagem de cada tabela, e na controller trago todas operações do CRUD. 
- Por falta de tempo meu, não consegui realizar os testes. 
- Também gostaria de ter feito um esquema de login, até iniciei fazendo a tabela de users, porém não foquei na feature.
- Gostaria de ter usando .env para manuseio das variáveis de ambiente
- Gostaria ainda de ter mandado a aplicação para o heroku, para uma melhor visualização

## Como rodar
- Rodar um ```npm install``` na pasta do backend
- Rodar um ```npm run dev```

# Frontend

## Comentários Gerais
- No inicio tentei usar o Vue3, porém o vuetify ainda está sem compatibilidade
- Utilizei a CLI do vue pra dar inicio no projeto
- Utilizei typescript, axios, vue-the-mask, vuetify
- Como arquitetura, eu segui a default gerada pelo CLI, e dentros das views eu iria separar por pastas, o que seria cada modulo, dentro deles cada page com sua responsabilidade. 
- Typescript novamente para facilitar futurar manuntenções e também capturar erros em tempo de desenvolvimento
- Axios para requisições http, embora como era algo simples a própria api fetch resolveria
- Vue the mask, seria para aplicar a mascara do cpf onde necessário
- Vuetify para usar o material no layout.
- Gostaria de ter terminado o layout, reorganizar e fazer todas requests em services para cada endpoint. Ex: AlunoService, AuthService...
- Gostaria de ter adicionado um controle de rotas, para que usuários não logados não pudessem acessar a aplicação
- Gostaria de ter mandado aplicação para o github pages, ou netflify.

## Como rodar
- Rodar um ```npm install``` na pasta do frontend
- Rodar um ```npm run serve```
