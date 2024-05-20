import { useState } from 'react'
import { GrFormDown, GrFormUp,  } from "react-icons/gr";
import { FaHandsWash } from "react-icons/fa";

export function SearchServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaHandsWash />
      <div>
        <p>SERVICIOS</p>
        <p className="text-xs">Selecciona El Tipo De Servicio</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0 ">
          <p>Lavado De Alfombras</p>
          <p></p>
        </div>
      )}
    </div>
  );
}
