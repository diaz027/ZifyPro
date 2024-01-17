import React from "react";
import { Navbar, NavbarItem } from "@nextui-org/react";
import Link from "next/link";

export default function NavBarDesktop() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarItem>
        <Link color="primary" href="/">
          Profile
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/Proyectos"}>
          <h2>Proyecto</h2>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/about"}>
          <h2>About</h2>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/contacto"}>
          <h2>Contacto</h2>
        </Link>
      </NavbarItem>
    </Navbar>
  );
}
