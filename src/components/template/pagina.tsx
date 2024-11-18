export interface PaginaProps {
  children: React.ReactNode;
  clasName?: string;
}

export function Pagina(props: PaginaProps) {
  return (
    <div
      className={
        "flex flex-col items-center  py-10 min-h-screen bg-[url('/background.png')]  bg-cover"
      }
    >
      <main className={props.clasName}>{props.children}</main>
    </div>
  );
}
