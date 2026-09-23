Pokédex TypeScript Lite

Mini-Projeto Avaliativo – Módulo 01 – Semana 09
Desenvolvedor(a) Back End Node

Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação executada pelo terminal, desenvolvida com Node.js e TypeScript. O sistema consulta a PokeAPI, transforma a resposta em um objeto simplificado e mantém um catálogo local de Pokémon durante a execução.

O projeto foi estruturado em camadas para separar integração com a API, catálogo, modelos, controlador e funções utilitárias.

Objetivos
Consultar uma API externa usando fetch.
Trabalhar com JSON, Promises e async/await.
Aplicar interfaces e tipagem forte com TypeScript.
Mapear uma resposta complexa para um objeto simplificado.
Criar um catálogo local em memória.
Impedir registros duplicados.
Listar e remover Pokémon por ID.
Aplicar métodos de array.
Demonstrar classes, atributos, métodos e modificadores de acesso.
Executar tudo pelo terminal.
Tecnologias
Node.js
TypeScript
TSX
PokeAPI
Git
GitHub
Pré-requisitos
Node.js 18 ou superior.
npm.
Git.
Instalação
npm install
Execução

Modo desenvolvimento:

npm run dev

Modo solicitado para a entrega:

npm run start

Compilar TypeScript:

npm run build

Executar a versão compilada:

npm run start:compiled
Estrutura
pokedex-typescript-lite/
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── models/
│   │   ├── CustomErrors.ts
│   │   └── Pokemon.ts
│   ├── services/
│   │   ├── BoxService.ts
│   │   └── PokeApiService.ts
│   ├── utils/
│   │   └── textFormatters.ts
│   └── main.ts
├── pc_box.json
├── package.json
├── tsconfig.json
└── README.md
Funcionalidades implementadas
RF01 – Node.js + TypeScript

Projeto configurado com package.json, tsconfig.json, scripts npm e arquivos .ts.

RF02 – Pokémon resumido

A interface PokemonResumo representa:

id
nome
tipos
altura
peso
RF03 – Retorno da PokeAPI

A interface PokemonApiResponse tipa os campos utilizados da resposta externa, incluindo tipos e estatísticas.

RF04 – Busca

PokeApiService.buscarPokemon() recebe nome ou ID, utiliza fetch e retorna Promise<PokemonResumo | null>.

RF05 – Tratamento de erro

Erros HTTP, inclusive 404, são tratados sem interromper o programa.

RF06 – Mapeamento

A resposta da API é convertida para um objeto PokemonResumo.

RF07/RF08 – Catálogo

BoxService mantém o catálogo em memória e impede duplicidade por ID.

RF09 – Listagem

O catálogo é exibido no terminal com forEach.

RF10 – Remoção

O Pokémon é localizado com find e removido usando filter.

RF11 – Métodos de array

O projeto utiliza, entre outros:

map
some
find
filter
forEach
includes
RF12 – Classe

BoxService possui atributo privado e métodos públicos para adicionar, listar, remover e contar Pokémon por tipo.

RF13 – Fluxo

main.ts instancia as dependências e inicia a demonstração através do TerminalController.

Exemplos de execução
Busca válida

Entrada:

pikachu

Saída esperada:

[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
Busca inválida

Entrada:

pokemon-inexistente

Saída esperada:

[ERRO] Pokémon não encontrado: pokemon-inexistente
Duplicidade

O sistema tenta adicionar Pikachu duas vezes:

[OK] pikachu adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
Remoção

Ao remover o ID 25:

[OK] Pokémon removido do catálogo.
Kanban

Quadro sugerido para cadastrar no GitHub Projects/Trello:

Backlog	A Fazer	Em Andamento	Concluído
Melhorias futuras	Criar repositório	Documentação	Configuração TypeScript
Menu interativo	Revisar README	
	Interfaces
Persistência futura	
	
	PokeAPI
Filtros por tipo	
	
	Catálogo

	
	
	Tratamento de erros
Branches

Para cumprir a organização solicitada:

main
develop
feat/pokedex
docs/readme
Sugestão de histórico de commits
feat: configura projeto com typescript
feat: cria interfaces de pokemon
feat: implementa busca na pokeapi
feat: cria classe de catalogo
feat: adiciona validacao de duplicidade
fix: trata pokemon inexistente
docs: atualiza readme com instrucoes

Para um projeto individual, a atividade exige no mínimo 4 commits. O histórico acima fornece uma sequência maior para demonstrar evolução lógica.

Checklist

Node.js

TypeScript

package.json

tsconfig.json

src/main.ts

Interfaces

Funções tipadas

fetch

async/await

Promises

try/catch

Tratamento de 404

Mapeamento da PokeAPI

Catálogo local

Bloqueio de duplicidade

Listagem

Remoção por ID

Métodos de array

Classe

Modificador private

README

pc_box.json

Melhorias futuras
Criar menu interativo com readline.
Persistir o catálogo no pc_box.json.
Exibir HP, Attack e Defense no catálogo.
Criar filtros por tipo.
Criar uma API própria usando Express.
Observação

O arquivo pc_box.json está incluído e inicializado com [], conforme o material da atividade. A implementação mínima do requisito de catálogo trabalha em memória, conforme a seção RF07 do enunciado.

Fonte externa

PokeAPI: https://pokeapi.co/docs/v2

Validação do projeto

O projeto foi validado com os seguintes comandos:

npm install — instalação das dependências.
npm run start — execução da aplicação em TypeScript.
npm run build — compilação do TypeScript.
npm run start:compiled — execução da versão compilada.

Os testes demonstram o consumo da PokeAPI, inclusão de Pokémon no catálogo, prevenção de duplicidade, tratamento de Pokémon inexistente, listagem e remoção por ID.
