import { useCallback, useEffect, useState } from "react";
import { DESTINO_PADRAO, ehDestinoValido, type DestinoId } from "../../data/destinos";

function lerHash(): DestinoId {
  const valor = window.location.hash.replace(/^#\/?/, "");
  return ehDestinoValido(valor) ? valor : DESTINO_PADRAO;
}

/**
 * Controla a tela atual pelo #hash da URL (ex.: /#/mapa).
 * Sem biblioteca extra: botão voltar do navegador e links diretos funcionam.
 * Hash desconhecido cai em "inicio", então ninguém fica numa tela em branco.
 */
export function useRotaHash() {
  const [atual, setAtual] = useState<DestinoId>(lerHash);

  useEffect(() => {
    const aoMudar = () => setAtual(lerHash());
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, []);

  const ir = useCallback((id: DestinoId) => {
    window.location.hash = `/${id}`;
  }, []);

  return { atual, ir };
}
