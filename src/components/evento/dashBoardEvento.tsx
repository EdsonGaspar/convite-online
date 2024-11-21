import { Evento, eventos } from "@/core";
import InformacoesEvento from "./informacoesEventos";

export interface DashBoardEventoProps {
  evento: Evento;
}

export default function DashBoardEvento(props: DashBoardEventoProps) {
  return (
    <div>
      <div>
        <InformacoesEvento evento={props.evento} />
      </div>
    </div>
  );
}
