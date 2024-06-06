import Link from "next/link";
import { Transition } from "../Transition";
import { dataProducts } from "./Products.data";
import Image from "next/image";
import { useState } from "react";

export function Products() {
  const [counterProducts, setCounterProducts] = useState(4);
  const dataFilterProducts = dataProducts.slice(0, counterProducts);

  const loadMoreProducts = () => {
    setCounterProducts((prevCounter) => prevCounter + 4);
  };

  const loadMenusProducts = () => {
    setCounterProducts((prevCounter) => Math.max(4, prevCounter - 4));
  };

  return (
    <Transition className="px-4 my-8 md:py-28 md:px-40">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataFilterProducts.map(({ id, name, image, description }) => (
          <Link
            key={id}
            href={`product/${id}`}
            className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer flex flex-col bg-white"
          >
            <div className="relative">
              <Image
                src={`/assets/product/${image}`}
                alt={name}
                width={300}
                height={200}
                className="object-cover w-full h-48 rounded-t-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-full">
              <div className="flex-grow">
                <p className="text-secondary mb-2 font-bold text-center">{name}</p>
                <p className=" p-2 rounded-lg  text-sm overflow-hidden h-full text-center w-full flex justify-center ">
                  {description}
                </p>
              </div>
              <button className="w-full py-2 text-white bg-secondary rounded-lg text-center">
                Ver Catálogo
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center my-7 flex justify-center gap-4">
        {counterProducts < dataProducts.length && (
          <button
            className="px-6 py-2 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
            onClick={loadMoreProducts}
          >
            Ver Más Productos
          </button>
        )}
        {counterProducts > 4 && (
          <button
            className="px-6 py-2 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
            onClick={loadMenusProducts}
          >
            Ver Menos Productos
          </button>
        )}
      </div>
    </Transition>
  );
}
