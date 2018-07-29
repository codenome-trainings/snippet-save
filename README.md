# snippet-save
Snippets para lembrar trechos que código para o seu projeto.

É simples o processo de instalação da aplicação.

É preciso ter alguns requisitos para rodar a aplicação.
- NodeJS
- Banco de dados MySql

0. Clone o projeto e execute o comando através do terminal: <code>npm install</code>

1. Crie o Banco de dados no mysql, o que também pode ser mudado. 
Por padrão, defini como snippet. Mas caso deseje trocar o nome, vá em **config -> database**, e no padrâmetro database, basta trocar o nome do banco.

2. Execute a aplicação com **npm start**. Por padrão, a aplicaçõ esta sendo executada na porta 3000. O que também pode ser modificado na linha 33 do index.js na raíz.

<code>
  app.listen(3000, () => {
    console.log('Server executing in port 3000');
  });
</code>
<br>
3. O sequelize vai cuidar da criação das tabelas, configurações e relacionamentos. Mas, é preciso executar o comando de migrate do sequelize.
<code>node_modules/.bin/ db:migrate</code><br>

Agora, o software esta pronto para ser usado. Para acessa-lo: http://localhost:3000
