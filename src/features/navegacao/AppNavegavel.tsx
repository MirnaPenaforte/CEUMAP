import { LayoutApp } from "../../components/LayoutApp";
import { TELAS } from "./telas";
import { useRotaHash } from "./useRotaHash";

/**
 * Ponto de encaixe: no App.tsx basta renderizar <AppNavegavel />.
 */
export function AppNavegavel() {
  const { atual, ir } = useRotaHash();
  const Tela = TELAS[atual];

  return (
    <LayoutApp atual={atual} aoNavegar={ir}>
      <Tela />
    </LayoutApp>
  );
}
