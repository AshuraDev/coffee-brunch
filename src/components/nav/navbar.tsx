"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CollapseMenu } from "./collapse-menu";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathName = usePathname();

  const links = [
    {
      label: "Accueil",
      href: "/",
      isActive: pathName === "/" || pathName === "#",
    },
    {
      label: "À propos",
      href: "#a-propos",
      isActive: pathName === "#a-propos",
    },
    {
      label: "Menu",
      href: "#menu",
      isActive: pathName === "#menu",
    },
    {
      label: "Galerie",
      href: "#galerie",
      isActive: pathName === "#galerie",
    },
    {
      label: "Contacts",
      href: "#contacts",
      isActive: pathName === "#contacts",
    },
  ];

  return (
    <nav className="max-w-6xl m-auto">
      <div className="flex items-center justify-between p-4 md:p-6 h-16">
        <span className="font-bold text-2xl text-primary">Cafeo ☕</span>
        <div className="">
        <ul className="hidden md:flex gap-x-4 items-center gap-y-4 transition-all">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={cn(
              "text-sm text-foreground transition-all font-semibold hover:text-primary",
              link.isActive && "text-primary"
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
        </div>
        <div className="">
            <Button size={"sm"}>Contactez-nous
                <Phone className="h-6 w-6 ml-2"/>
            </Button>
        </div>
        <div
          className="ml-auto md:hidden cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <X className="w-6 h-6 transition-all" />
          ) : (
            <Menu className="w-6 h-6 transition-all" />
          )}
        </div>
      </div>
      {/* {openMenu && ( */}
        <div
          className={cn(
            "md:hidden transition-all overflow-hidden",
            openMenu ? "h-56" : "h-0"
          )}
        >
          <CollapseMenu links={links} />
        </div>
      {/* )} */}
    </nav>
  );
};
