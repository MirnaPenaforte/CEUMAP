# Ceumap — arquitetura inicial do protótipo

## Escopo acordado

Protótipo local, sem backend de aplicação, para exibir mapas visuais estáticos com uma rota previamente definida. A planta do CEUMA será a base da navegação dentro do campus, com o percurso desenhado como camada visual separada da imagem original. Se houver um mapa externo para chegar ao campus, ele será tratado como outro recurso visual. Não fazem parte desta etapa interatividade, GPS ou cálculo automático de rotas.

A rota interna deverá ser validada antes de ser representada. Os arquivos de mapa ficam no projeto; o mapa externo, se baseado em Google Maps, depende de internet e deve respeitar as condições de uso da fonte escolhida.

## Arquitetura de execução

- Front-end em React + TypeScript, servido localmente durante o desenvolvimento pelo Vite.
- Conteúdo estático, sem API própria, banco de dados ou serviços de backend.
- A planta e outros mapas ficam em `public/mapas/`.
- A apresentação do mapa e da rota será implementada no front-end; nesta etapa foram preparados apenas os diretórios e as dependências gerais, sem componentes ou lógica específicos.

## Organização de pastas

```text
Ceumap/
├── docs/                 # decisões e documentação do projeto
├── public/
│   └── mapas/            # mapas e plantas estáticos usados pelo protótipo
└── src/
    ├── assets/           # recursos importados pelo código da aplicação
    ├── components/
    │   └── ui/           # componentes visuais reutilizáveis, quando adicionados
    ├── data/             # dados estáticos do protótipo, se necessários
    ├── features/
    │   └── mapa/         # apresentação do mapa e da rota, quando implementadas
    ├── styles/           # estilos globais e tokens visuais
    └── types/            # tipos TypeScript compartilhados
```

## Dependências gerais instaladas

- `react`, `react-dom`: interface em React (já estavam instaladas).
- `typescript`, `@types/react`, `@types/react-dom`, `@types/node`: TypeScript e tipos.
- `vite`, `@vitejs/plugin-react`: servidor local e empacotamento do front-end.
- `tailwindcss`, `@tailwindcss/vite`: base de estilos para a configuração do shadcn/ui.
- `shadcn`: CLI para adicionar/configurar componentes shadcn/ui posteriormente; nenhum componente foi gerado nesta etapa.
- `class-variance-authority`, `clsx`, `tailwind-merge`: utilitários gerais usados no ecossistema shadcn/ui.
- `lucide-react`: ícones (já estava instalado).

A escolha de componentes específicos do shadcn/ui e suas dependências transitivas ficam para quando houver telas/componentes definidos. Também não foram criados arquivos de entrada React, configuração de Vite/TypeScript/Tailwind ou código de interface; portanto, esta preparação ainda não representa uma aplicação executável.
