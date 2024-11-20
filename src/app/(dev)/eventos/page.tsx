import { eventos } from "@/core";

export default function PaginaEvento() {
  return (
    <div>
      {eventos.map((evento) => (
        <span key={evento.id}>{evento.nome}</span>
      ))}
    </div>
  );
}
