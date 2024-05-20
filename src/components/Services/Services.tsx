"use client"

import { Transition } from "../Transition";
import { BsPersonFillGear } from "react-icons/bs";
import { Slider } from "./Slider";


export function Services() {
    return (
      <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-8">
        <div className="max-w-xl mb-7">
          <h2 className="text-secondary font-bold flex items-center text-2xl">Servicios <BsPersonFillGear className="ml-1"/></h2>
          <h2 className="my-4 text-4xl font-semibold">
            Adquiere Nuestros Servicios De Lavado Restauracion e Instalacion.
          </h2>
          <p className="mb-10 mt-7">
            !En <span className="font-bold">Alfombrando</span>, tu hogar esta en las mejores manos! con Nuestros
            servicios de <span className="font-bold">Alta Calidad</span>. Ofrecemos limpieza
            profunda, mantenimiento y restauracion de muebles, alfombras, pisos,
            vidrios <span className="font-bold">¡Y MAS!</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
            <Slider />

        </div>
      </Transition>
    );
}
