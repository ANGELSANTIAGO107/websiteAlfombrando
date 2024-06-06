import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar(props: NavbarProps) {
  const { openMobileMenu } = props;
  const [isScrolLing, setIsScrolLing] = useState(false);

  const hadleScroll = () => {
    if (window.scrollY <= window.innerHeight - 600) {
      setIsScrolLing(true);
    } else {
      setIsScrolLing(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hadleScroll);
    return () => {
      window.removeEventListener("scroll", hadleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolLing ? (
        <motion.nav
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="ml-auto mr-auto md:fixed <[9999] right-0 left-0 px-6 py-3 text-white bg-gray-400/40 top-0 rounded-3xl backdrop-blur w-full"
        >
          <div className="items-center hidden gap-5 md:flex">
            {dataHeader.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="hover:text-secondary hover:border-b-[1px] hover:border-secondary"
              >
                {name}
              </Link>
            ))}
          </div>
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4"
              : "hidden"
          } gap-5 md:flex`}
        >
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="block hover:text-secondary hover:border-b-[1px]"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    Transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};
