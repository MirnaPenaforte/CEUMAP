import type { ReactElement } from "react";
import type { DestinoId } from "../../data/destinos";

/**
 * Telas provisórias (placeholders).
 * Cada colega troca o componente da sua tela pelo real e mantém o mesmo id.
 */
function Provisoria({ titulo }: { titulo: string }) {
  return (
    <section>
      <h1 className="text-2xl font-bold">{titulo}</h1>
      <p className="mt-2 text-slate-600">Tela em construção.</p>
    </section>
  );
}

export const TELAS: Record<DestinoId, () => ReactElement> = {
  inicio: () => <Provisoria titulo="Início" />,
  mapa: () => <Provisoria titulo="Setores / Mapa" />,
  horas: () => <Provisoria titulo="Horas complementares" />,
  perfil: () => <Provisoria titulo="Perfil" />,
};
