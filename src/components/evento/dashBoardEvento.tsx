import { Evento, eventos } from "@/core";
import InformacoesEvento from "./informacoesEventos";
import { AcessarViaQrCode } from "./acessarViaQrCode";

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
    </div>
  );
}
