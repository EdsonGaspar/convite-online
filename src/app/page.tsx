import { Pagina } from "@/components/template/pagina";
import { Evento } from "@/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina clasName="w-full">
      <div>Edson, dev 2024</div>
    </Pagina>
  );
}
