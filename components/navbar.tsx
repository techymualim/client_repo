"use client";

import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Brand from "./ui/brand";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className="z-20 pt-8">
      <nav
        className={`container flex justify-between items-center navbar-custom`}
      >
        <Brand pathname={pathname} />
        <NavContent pathname={pathname} />
        <Action />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className={`cursor-pointer lg:hidden text-foreground text-white`}
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className={`cursor-pointer lg:hidden text-foreground text-white`}
          />
        )}
      </nav>

      {isMenuOpen && (
        <NavContentMob
          pathname={pathname}
          setIsMenuOpen={setIsMenuOpen}
          isDropdownMenuOpen={isDropdownMenuOpen}
          setIsDropdownMenuOpen={setIsDropdownMenuOpen}
        />
      )}
    </section>
  );
}

const NavContent = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <ul
        className={`flex items-center justify-center gap-10 font-medium grow whitespace-nowrap max-lg:hidden text-white`}
      >
        {nav.map((_) => (
          <li key={_.name}>
            <div
              className={cn("relative cursor-pointer group hover:opacity-100", {
                "opacity-60": !(
                  (_.name !== "Home" && pathname.includes(_.href)) ||
                  (pathname === "/" && _.name === "Home")
                ),
              })}
            >
              {(_.name !== "Home" && pathname.includes(_.href)) ||
              (pathname === "/" && _.name === "Home") ? (
                <motion.div
                  layoutId="navbar"
                  className="absolute left-1/3 w-4 h-1 rounded-full -bottom-1 bg-primary/100"
                />
              ) : null}
              {_.group ? (
                <>
                  <div className="inline-flex items-center">
                    <h3>{_.name}</h3>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </div>
                  <ul className="group-hover:block absolute hidden navbar-dropdown-custom py-2 mt-1 -ml-8">
                    {_.child?.map((item) => {
                      return (
                        <li
                          className="opacity-60 hover:opacity-100 px-8 py-1"
                          key={item.name}
                        >
                          <Link
                            className="font-poppins-regular"
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <Link className="font-poppins-regular" href={_.href}>
                  {_.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({
  isDropdownMenuOpen,
  setIsDropdownMenuOpen,
  setIsMenuOpen,
  pathname,
}: {
  isDropdownMenuOpen: boolean;
  setIsDropdownMenuOpen: Function;
  setIsMenuOpen: Function;
  pathname: string;
}) => {
  return (
    <div>
      <ul
        className={`rounded-lg py-12 z-30 container absolute inset-x-0 flex flex-col items-start font-medium lg:hidden text-white bg-[#00050a]`}
      >
        {nav.map((_) => (
          <li className="py-2 w-full" key={_.name}>
            {_.group ? (
              <>
                <button
                  className="cursor-pointer inline-flex items-center justify-between w-full"
                  onClick={() => {
                    setIsDropdownMenuOpen(!isDropdownMenuOpen);
                  }}
                >
                  <h3>{_.name}</h3>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul
                  className={cn("ml-4 hidden", { block: isDropdownMenuOpen })}
                >
                  {_.child?.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className="cursor-pointer mt-2"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsDropdownMenuOpen(!isDropdownMenuOpen);
                        }}
                      >
                        <Link className="text-sm" href={item.href}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <h3>
                <Link href={_.href} onClick={() => setIsMenuOpen(false)}>
                  {_.name}
                </Link>
              </h3>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const nav = [
  { name: "Home", href: "/", group: false },
  { name: "How it works", href: "/#how-it-works", group: false },
  { name: "Marketplace", href: "/marketplace", group: false },
  {
    name: "About us ",
    href: "/about-patent-showcase",
    group: true,
    child: [
      { name: "About us", href: "/about" },
      { name: "Innox Patent", href: "/patent-showcase" },
    ],
  },
  { name: "Learn ", href: "/learn", group: false },
];

const Action = () => {
  return (
    <div className="flex items-center bg-white cursor-pointer hover:bg-primary/10 transition-all px-5 gap-2.5 rounded-lg h-8">
      <Image src={`/assets/images/wallet.svg`} alt="" width={25} height={25} />
      <p className="text-xs text-foreground font-semibold action-text">
        Sign up
      </p>
    </div>
  );
};
