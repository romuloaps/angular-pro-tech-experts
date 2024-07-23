# Ecommerce

Aplicação do curso Angular Pro da TechExperts

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Este workspace foi gerado por [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Setup do projeto

```
git clone https://github.com/romuloaps/agular-pro-tech-experts.git
cd angular-pro-tech-experts
npm install
```

## Servir o projeto localmente

```
npm start
```

ou

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test ecommerce
npx nx lint modules-layout
```

OBS.: O nome do projeto está definido no arquivo `nx.json` na propriedade `defaultProject`. Ou seja, ao executar o comando `npx nx test ecommerce`, está executando o teste em todos os módulos do projeto.

## Visualizar Dependency Graph

```
npx nx graph
```

## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

O Nx "mapeia" os módulos que foram afetados por alguma modificação a partir do grafo de dependências.
