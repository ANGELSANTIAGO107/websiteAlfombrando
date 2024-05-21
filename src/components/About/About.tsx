import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className=" grid px-4 py-8 md:py44 md:px-36 md:grid-cols-2">
      <div
        className="flex flex-col items-center justify-center max-w-xl mb-7"
        id="about"
      >
        <h4 className="text-secondary">Sobre Nosotros</h4>
      </div>
    </Transition>
  );
}
