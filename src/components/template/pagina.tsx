import { Logo } from "./logo";

export interface PaginaProps {
  children: React.ReactNode;
  clasName?: string;
}

export function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col items-center  py-10 min-h-screen bg-[url('/background.png')]  bg-cover">
      <Logo />
      <main
        className={`${props.clasName}  flex-1 flex flex-col justify-center bg-red-500 container`}
      >
        {props.children}
      </main>
    </div>
  );
}
