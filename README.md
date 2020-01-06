# Bosca Voos

Teste do processo seletivo para vaga de Font-End na MaxMilhas

Repositorio (https://github.com/moniqueaz/busca-voos)

Infelismente até o momento da entrega a requisição a api fornecida ainda estava restornando 401, executei o projeto com um mock obtido no propio site da MaxMilhas.
Eu havia tentado uma solução com uma ferramenta chamada json-server (https://github.com/typicode/json-server), ela simularia a requisição e eu poderia dar andamento no teste praticamente da mesma forma, porem tive um problema de CORS com ele e optei por deixar a chamda lá, porem o mock retorna no callback de erro da requisição.

Esse README foi criado depois da data da entrega, porem achei importante envialo mesmo assim.

## Getting Started

### Prerequisites

O que você precisa para instalar o projeto

```
- NodeJs (v10.17.0)
- NPM (v6.11.3)
- Yarn ou NPM
- NVM (para melhor controle de versão do Node)
```

### Technologies used in the project

```
- React
- Redux.js
- Next.jss
- Style Components
- Axios
- Storybook
```

### Installing

Faça clone do repositorio (https://github.com/moniqueaz/busca-voos) e execute os seguintes comandos

- Para instalar o projeto em sua maquina, faça:

Pelo terminal, vá até a raiz do projeto e executem o comando `yarn install` ou `npm i`.

- Para executar o projeto localemnte, faça:

Pelo terminal, vá até a raiz do projeto e executem o comando `yarn devNext` ou `npm run devNext`.

==============================

Caso queiram observar o resultado json-server

1 - Instale o json-server globalmente `npm install -g json-server`.

2 - Pelo termina, na raiz do projeto vá até a pasta `services` e executem o comando `json-server --no-cors server.json --routes routes.json -p 3333 -w`

Ele ira exibir a seguinte mensagem com as rotas disponiveis

```
    \{^_^}/ hi!

  Loading server.json
  Loading routes.json
  Done

  Resources
  http://localhost:3333/searchTimes
  http://localhost:3333/gol
  http://localhost:3333/latam
  http://localhost:3333/azul

  Other routes
  /search?time=:dateNow -> /searchTimes
  /search/:id/flights?airline=:airline -> /:airline

  Home
  http://localhost:3333

  Type s + enter at any time to create a snapshot of the database
  Watching...

```

As Other routes estavam configuradas para representar a rota fornecida por vocês e elas executariam a rota que estava com o json equivalente.
Como eu obtive o problema de CORS eu não dei andamento, porem tomei a liberdade de finalizar os detalhes para vocês poderem vializar melhor.

### Technologies used for testing

```
- Jest
- Enzyme
```

## Running the tests

Existe o comando de teste, porem não chegue a executar nenhum

```
Para rodar o teste, execute o comando `yarn test` ou `npm run teste`.
```

## Authors

- **Monique Azevedo** - [MoniqueAz](https://github.com/moniqueaz)

## License

Este projeto está licenciado sob a licença MIT - consulte o arquivo
[LICENSE.md](LICENSE.md) para obter detalhes

## Acknowledgments

- Agradecer ao Higor(https://www.linkedin.com/in/higor-neves-marques-33676390/) pela confiança e apoio neste projeto;
- Agradecer a MaxMilhas pela oportunidade de participar deste processo e a evolução pessoal e proficional que isso me proporcionou.
