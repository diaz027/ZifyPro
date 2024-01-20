"use client";
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
            <h2 id="inicio">Inicio</h2>
          </div>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/#proyecto"}>
          <h2 id="proyectos">Proyectos</h2>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/about"}>
          <h2 id="nosotros">Nosotros</h2>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href={"/#contacto"}>
          <h2 id="trabajemos">Trabajemos</h2>
        </Link>
      </NavbarItem>
    </Navbar>
  );
}
