"use client"
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { Routes, Route } from "react-router-dom";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-around px-5 md:px-0">
        <Link href="/">
          <Image
            src={"/assets/LogoAlfombrandoSinFondo.png"}
            alt="alfombrando"
            width={200}
            height={100}
            className="p-0 m-0 rounded-lg"
          />
        </Link>

        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:310 538 5315"
            className="flex items-center gap-4 cursor-pointer"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="hidden md:block font-semibold ">Whatsapp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
