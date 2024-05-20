import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl flex flex-col items-center md:justify-center">
        <div className="max-w-3xl text-center text-black">
          <h2 className="text-5xl font-semibold mt-20">
            Diseño Para Tus Espacios
          </h2>
          <h2 className="mt-2 text-xl md:mt-8 ">
            contamos con los mejores productos y los mejores instaladores para
            el hogar de tus sueños
          </h2>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
