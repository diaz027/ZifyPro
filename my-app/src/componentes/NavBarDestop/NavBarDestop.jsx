import React from "react";
import { Navbar, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import "./navDesk.css";

export default function NavBarDesktop() {
  return (
    <Navbar className="nabDesk" shouldHideOnScroll>
      <NavbarItem>
        <Link color="primary" href="/">
          <div id="container1">
            <h2>home</h2>
          </div>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#proyecto">
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
