# Navegação principal — guia de integração

## O que foi feito

Navegação entre as 4 telas principais, sem biblioteca de rotas. A tela atual vem do `#hash` da URL (`/#/inicio`, `/#/mapa`, `/#/horas`, `/#/perfil`). Hash desconhecido volta para Início.

## Arquivos

| Arquivo | Função |
|---|---|
| `src/data/destinos.ts` | Lista única dos destinos (id, rótulo, ícone). Fonte da verdade. |
| `src/features/navegacao/useRotaHash.ts` | Hook que lê e muda a tela pelo hash. |
| `src/features/navegacao/telas.tsx` | Mapa `id -> componente`. Hoje com placeholders. |
| `src/features/navegacao/AppNavegavel.tsx` | Junta tudo: layout + tela atual. |
| `src/components/NavegacaoPrincipal.tsx` | Barra de navegação (embaixo no celular, lateral no desktop). |
| `src/components/LayoutApp.tsx` | Casca com a navegação e a área de conteúdo. |

## Como encaixar no App.tsx

```tsx
import { AppNavegavel } from "./features/navegacao/AppNavegavel";

export default function App() {
  return <AppNavegavel />;
}
```

## Como cada colega liga a sua tela

Em `src/features/navegacao/telas.tsx`, trocar o placeholder pelo componente real:

```tsx
import { TelaMapa } from "../mapa/TelaMapa";

export const TELAS = {
  // ...
  mapa: () => <TelaMapa />,
};
```

## Combinados para o grupo (componentes compartilhados)

1. `LayoutApp` e `NavegacaoPrincipal` são compartilhados: as telas **não** devem desenhar outra barra de navegação.
2. Novo destino ou rótulo diferente: editar só `src/data/destinos.ts` (e adicionar a tela em `telas.tsx`).
3. Telas devem caber na largura do celular: evitar `width` fixo em px maior que a tela, usar `max-w-full`, `w-full` e `min-w-0` em itens flex/grid.
4. Imagens e mapas: `max-w-full h-auto`. Se o mapa for maior que a tela, rolar **dentro** de um contêiner próprio (`overflow-auto`), não na página.
5. O conteúdo já tem espaço reservado para a barra (padding embaixo no celular, margem à esquerda no desktop).

## Pré-requisito

Tailwind precisa estar ativo (`@import "tailwindcss";` no CSS global e o plugin `@tailwindcss/vite` no `vite.config.ts`). A configuração ainda não existe no repositório, é parte da montagem do `main.tsx`/`App.tsx`.

## Checklist de aceite

- [ ] Os 4 destinos abrem pela barra e pela URL direta (`/#/perfil`, etc.)
- [ ] A seção atual aparece destacada
- [ ] Em 320 px de largura não há rolagem horizontal
- [ ] Botão voltar do navegador volta para a tela anterior
- [ ] Navegação por teclado (Tab/Enter) funciona
