import { SearchButton } from "../SearchButton";
import { SearchServices } from "../SearchServices";
import { SearchProducts } from "../SearchProducts";
import { Transition } from "../Transition";
export function FloatedSearch() {
  return (
    <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
      <div className="flex-col justify-around gap-4 py-4 px-3  bg-white rounded-md md:flex md:flex-row backdrop-blur shadow-light">
        <SearchServices />
        <SearchProducts />
        <SearchButton />
      </div>
    </Transition>
  );
}
