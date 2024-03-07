# desafiofox

É necessário ter alguma versão do nodejs instalada.
implementado utilizando a versão `18.13.0`

## Contextualização
Entrar na pasta padrão do projeto. Estar no diretório `desafiofox` que é o diretório raiz da aplicação. 
Se houver dúvidas, verifique onde estão os arquivos `package.json` esse é a diretório raiz da aplicação.

Este projeto não possui dependências para execução. Ele utiliza apenas as funções fornecidas pela biblioteca padrão do nodejs.
São eles, `path`, `fs`, `readline`.

## Instruções para rodar aplicação:

Supondo que está no diretório raiz, basta simplesmente executar o comando:

`node bin/www`

o resultado esperado após rodar este comando é o seguinte:

    1 3 N
    5 1 E

Para rodar a aplicação não é necessário instalar nenhuma biblioteca.


## Instruções para execução dos testes

Para executar os testes é necessário instalar as dependências, supondo que está no diretório raiz da aplicação, executar o comando:

    npm install

após instalar com sucesso, basta executar o comando:

    npm t

Você deverá ver os testes em execução, no total foram 22 testes;

Também é possível ver uma análise da cobertura de código, apenas rode o comando:

    npm run coverage


## Explicação da arquitetura

O projeto está organizado da seguinte forma (neste diagrama não está incluso os diretórios `test` e `node_modules` nem os arquivos `package.json` e `package-lock.json`):

    .
    ├── _bin
    │   └── www
    ├── data.txt
    ├── rover.js
    └── index.js


- ***index.js*** lógica para processamento de linhas de um arquivo, deve ser passado como parâmetro o diretório (_path_) para o arquivo.
- ***rover.js*** possui a classe `Rover` e os métodos para interagir com objetos desta classe.
- ***data.txt*** possui a entrada inicial (_input_) fornecido com o desafio
- ***bin/www*** é apenas um arquivo para a execução da aplicação

Se deseja trocar qual arquivo de entrada deve ser lido, pode fazer a mudança no arquivo `bin/www`, basta passar o novo caminho para o arquivo.

Existem ainda algumas explicações breves dentro do código fonte.