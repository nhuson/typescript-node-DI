# typescript-node-DI
The repo use Nestjs with plugin Fastify , architect by Dependency Injection.

## Requiment
- Node version: >= 8
- hygen: >= 5.* 
- docker
- docker-compose

## Installation

```bash
$ npm install && docker-compose up -d && npm i -g hygen
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Generate code
- To make controller: hygen controller new [name controller]
```bash
$ hygen controller new Test
```
- To make service: hygen service new [name service]
```bash
$ hygen service new Test
```
- To make interface: hygen interface new [name interface]
```bash
$ hygen interface new Test
```
- To make repository: hygen repository new [name repository]
```bash
$ hygen repository new Test
```
- To make all resource: hygen repository new [name resource]
```bash
$ hygen resource new Test
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License
  MIT
