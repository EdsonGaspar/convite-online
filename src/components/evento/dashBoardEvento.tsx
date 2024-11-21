import { Convidado, Evento, eventos } from "@/core";
import InformacoesEvento from "./informacoesEventos";
import { AcessarViaQrCode } from "./acessarViaQrCode";
import { Estatisticas } from "../shared/estatisticas";

export interface DashBoardEventoProps {
  evento: Evento;
}

export default function DashBoardEvento(props: DashBoardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatisticas
          text="Espectativa de convidado"
          value={props.evento.publicoEsperado}
          imgan="/icones/convidados.svg"
        />
        <Estatisticas
          text="Espectativa de convidado"
          value={props.evento.publicoEsperado}
          imgan="/icones/confirmados.svg"
        />
        <Estatisticas
          text="Espectativa de convidado"
          value={props.evento.publicoEsperado}
          imgan="/icones/acompanhantes.svg"
        />
      </div>
    </div>
  );
}
