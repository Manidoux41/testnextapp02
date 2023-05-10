"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const navLink = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "A Propos",
      link: "/about",
    },
  ];

  return (
    <nav className="p-4 w-full mx-auto lg:w-[1240px] flex justify-between items-center ">
      <Link href="/">
        <Image src='/logo.png' width={145} height={47} alt="logo kasa"/>
      </Link>
      <ul className="flex justify-between items-center gap-5 md:gap-14 text-lg md:text-2xl">
        {navLink.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={` ${
              pathname === link
                ? "text-red-500 uppercase md:normal-case text-xs md:text-lg underline"
                : "text-red-500 uppercase md:normal-case text-xs md:text-lg"
            }`}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
