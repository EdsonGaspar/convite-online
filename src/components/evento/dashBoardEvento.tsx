import { Evento, eventos } from "@/core";
import InformacoesEvento from "./informacoesEventos";

export interface DashBoardEventoProps {
  evento: Evento;
}

export default function DashBoardEvento(props: DashBoardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 ">
        <InformacoesEvento evento={props.evento} className="flex-1" />
      </div>
    </div>
  );
}
