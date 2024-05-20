import Link from "next/link";
import { Transition } from "../Transition";
import { dataProducts } from "./Products.data";
import Image from "next/image";
import { useState } from "react";

export function Products() {
  const [counterProducts, setCounterProducts] = useState(4);
  const dataFilterProducts = dataProducts.slice(0, counterProducts);

  const loadMoreProducts = () => {
    setCounterProducts(counterProducts + 4);
  };
  return (
    <Transition className="px-4 my-8 md:py-32 md:px-40">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {dataFilterProducts.map(({ id, name, image, description }) => (
          <Link
            key={id}
            href={`product/${id}`}
            className="shadow-ligth hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative -z-[1]">
              <div className="relative">
                <div className="obsolute flex items-center px-2 mx-2 rounded-lg bg-slate-50 top-2">
                  <Image
                    src={`/assets/product/${image}`}
                    alt="name"
                    width={150}
                    height={150}
                    className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"
                  />
                </div>

                <div className="px-3 py-5">
                  <p className="text-secondary">{name}</p>
                  <div className="gap-4 mt-2 xl:flex">
                    <div className="flex items-center px-2 py-1 rounded-lg bg-slate-300/30">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center my-7">
        {counterProducts < dataProducts.length && (
          <button
            className="px-6 py-6 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
            onClick={loadMoreProducts}
          >
            Ver Mas Productos
          </button>
        )}
      </div>
    </Transition>
  );
}
