import React from "react";
import { Navbar, NavbarItem, Link } from "@nextui-org/react";

export default function NavBarDesktop() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarItem>
        <Link color="primary" href="/">
          Profile
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/proyectos"}>
          <h2>Proyecto</h2>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/about"}>About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/contacto"}>Contacto</Link>
      </NavbarItem>
    </Navbar>
  );
}
