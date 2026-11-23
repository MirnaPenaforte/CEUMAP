import type { ReactNode } from "react";
import { NavegacaoPrincipal } from "./NavegacaoPrincipal";
import type { DestinoId } from "../data/destinos";

interface Props {
  atual: DestinoId;
  aoNavegar: (id: DestinoId) => void;
  children: ReactNode;
}

/**
 * Casca do app: navegação + área de conteúdo.
 * O padding reserva espaço pra barra (embaixo no celular, à esquerda no desktop).
 * overflow-x-hidden + min-w-0 evitam rolagem horizontal causada por telas filhas.
 */
export function LayoutApp({ atual, aoNavegar, children }: Props) {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-slate-50 text-slate-900">
      <NavegacaoPrincipal atual={atual} aoNavegar={aoNavegar} />
      <main className="min-w-0 px-4 pb-24 pt-6 md:ml-56 md:px-8 md:pb-8">{children}</main>
    </div>
  );
}
