import Image from "next/image";
import { Transition } from "../Transition";


export function About() {
  return (
    <Transition className="grid gap-5 px-4 py-8 md:py44 md:px-36 md:grid-cols-2 h-full">
      <div className="flex flex-col items-center justify-center place-items-center ">
        <Image
          src={"/assets/LogoAlfombrandoSinFondo.png"}
          alt="alfombrando"
          width={300}
          height={100}
          className="p-0 m-0 rounded-lg"
        />
        <h2 className="my-2 text-2xl font-semibold p-4">
          Vive experiencias unicas Como Tú
        </h2>
        <p>
          <span className="font-bold">
            ¿Cansado de las mismas opciones aburridas?
          </span><br></br>
          En Alfombrando, revolucionamos el mercado con productos y servicios
          innovadores que se adaptan a tus necesidades únicas. Descubre un mundo
          de posibilidades y experimenta la diferencia de ser parte de nuestra
          comunidad.
        </p>
      </div>
      <div className="flex items-center justify-center m-10px">
        <video src={"/assets/comoLlegar.mp4"} autoPlay loop muted className="w-80px h-96 w-80"></video>
      </div>
    </Transition>
  );
}
