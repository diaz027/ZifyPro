"use client";
import React, { useState, useEffect } from "react";
import NavBarDesktop from "@/componentes/NavBarDestop/NavBarDestop";
import NavBarMobile from "@/componentes/NavBar/NavBarMobile";
import "./pages.css";
import LandingPages from "@/componentes/landing/landingPages";
import Tecnologias from "@/componentes/Tecnologias/Tecnologias";
import Vorttex from "@/componentes/Vorttex/Vorttex";
import Email from "@/componentes/Contacto/Contac";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768);
      const handleResize = () => setIsDesktop(window.innerWidth > 768);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>
      {isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
      <div className="container">
        <LandingPages />
        <Tecnologias />
        <Vorttex />
        <Email />
      </div>
    </div>
  );
}
