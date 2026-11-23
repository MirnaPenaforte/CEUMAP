import { Home, Map as MapIcon, Clock, User, type LucideIcon } from "lucide-react";

/**
 * Lista única de destinos principais do Ceumap.
 * Combinado com o grupo: para adicionar/renomear uma tela, mexa só aqui.
 */
export type DestinoId = "inicio" | "mapa" | "horas" | "perfil";

export interface Destino {
  id: DestinoId;
  rotulo: string;
  icone: LucideIcon;
}

export const DESTINOS: Destino[] = [
  { id: "inicio", rotulo: "Início", icone: Home },
  { id: "mapa", rotulo: "Setores / Mapa", icone: MapIcon },
  { id: "horas", rotulo: "Horas complementares", icone: Clock },
  { id: "perfil", rotulo: "Perfil", icone: User },
];

export const DESTINO_PADRAO: DestinoId = "inicio";

export function ehDestinoValido(valor: string): valor is DestinoId {
  return DESTINOS.some((d) => d.id === valor);
}
