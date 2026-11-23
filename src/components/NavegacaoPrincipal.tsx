import { DESTINOS, type DestinoId } from "../data/destinos";

interface Props {
  atual: DestinoId;
  aoNavegar: (id: DestinoId) => void;
}

/**
 * Navegação principal.
 * - Celular: barra fixa embaixo, 4 itens dividindo a largura (grid), sem rolagem horizontal.
 * - Desktop (md+): barra lateral à esquerda.
 * A seção atual recebe aria-current="page" e destaque visual.
 */
export function NavegacaoPrincipal({ atual, aoNavegar }: Props) {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white
                 md:inset-y-0 md:right-auto md:w-56 md:border-r md:border-t-0"
    >
      <ul className="grid grid-cols-4 md:flex md:flex-col md:gap-1 md:p-3">
        {DESTINOS.map(({ id, rotulo, icone: Icone }) => {
          const ativo = id === atual;
          return (
            <li key={id} className="min-w-0">
              <a
                href={`#/${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  aoNavegar(id);
                }}
                aria-current={ativo ? "page" : undefined}
                className={[
                  "flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 px-1 py-2",
                  "text-[11px] leading-tight transition-colors",
                  "md:flex-row md:justify-start md:gap-3 md:rounded-lg md:px-3 md:text-sm",
                  "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600",
                  ativo
                    ? "bg-blue-50 font-semibold text-blue-700"
                    : "text-slate-600 hover:bg-slate-50",
                ].join(" ")}
              >
                <Icone aria-hidden="true" className="size-5 shrink-0" />
                <span className="w-full break-words text-center md:text-left">{rotulo}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
