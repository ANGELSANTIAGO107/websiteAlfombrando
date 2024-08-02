import { Transition } from "../Transition";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import Image from "next/image";

export function JoinCommunity() {
  return (
    <Transition className="grid grid-cols-2 h-full w-full px-4 py-8  md:py-34 md:px-30 bg-secondary">
      {/* Columna 1: Texto */}
      <div className="flex items-center justify-center col-span-1 h-full">
        <h3 className="max-w-lg text-4xl font-semibold text-white text-center">
          Unete a Nuestras Redes Para Enterarte de lo Ultimo En Diseño De
          Interiores
        </h3>
      </div>
      {/* Columna 2 y 3 */}
      <div className="flex flex-col items-center justify-center col-span-1 h-full space-y-8">
        {/* Columna 2: Redes Sociales */}
        <div className="flex flex-row space-x-8 justify-center">
          {/* Enlace a Facebook */}
          <a
            href="https://www.facebook.com/alfombrandoarmenia?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col items-center justify-center py-5 text-white transition-all duration-100 bg-secondary rounded-lg px-10 w-fit hover:bg-black/60">
              <span className="text-sm font-medium mb-4">Facebook</span>
              <FaFacebookF className="text-4xl" />
            </button>
          </a>
          {/* Enlace a Instagram */}
          <a
            href="https://www.instagram.com/alfombrando_armenia?igsh=MTgzM2J5NGY4d2Ficg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col items-center justify-center py-5 text-white transition-all duration-100 bg-secondary rounded-lg px-10 w-fit hover:bg-black/60">
              <span className="text-sm font-medium mb-4">Instagram</span>
              <GrInstagram className="text-4xl" />
            </button>
          </a>
          {/* Enlace a TikTok */}
          <a
            href="https://www.tiktok.com/@cesaryovanyfrankl?_t=8mydCSYWpbZ&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col items-center justify-center py-5 text-white transition-all duration-100 bg-secondary rounded-lg px-10 w-fit hover:bg-black/60">
              <span className="text-sm font-medium mb-4 ">TikTok</span>
              <IoLogoTiktok className="text-4xl" />
            </button>
          </a>
        </div>
        {/* Columna 3: Código QR */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm font-medium mb-2 ml-10 text-white">
            Escaneame Y Chatea Con Nosotros
          </span>
          <div className="text-white transition-all duration-100 bg-secondary rounded-lg p-5 w-fit">
            <Image
              src={"/assets/QRwhatsapp.png"}
              alt="QR de WhatsApp"
              width={200}
              height={200}
              className="ml-10"
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}

