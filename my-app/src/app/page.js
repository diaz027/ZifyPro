"use client";
import "./pages.css";
import LandingPages from "@/componentes/landing/landingPages";
import Vorttex from "@/componentes/Vorttex/Vorttex";
import Email from "@/componentes/Contacto/Contac";
import NavBB from "@/componentes/navBB/NavBB";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="container">
      <NavBB />
      <Element name="inicio">
        <LandingPages />
      </Element>
      <Element name="proyecto">
        <Vorttex />
      </Element>
      <Element name="contacto">
        <Email />
      </Element>
    </div>
  );
}
