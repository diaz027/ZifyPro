"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import NavBarDesktop from "@/componentes/NavBarDestop/NavBarDestop";
import NavBarMobile from "@/componentes/NavBar/NavBarMobile";

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
    <>
      {isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
      <br />
      <div>
        <h2>
          En ZifyPro nos especializamos en la creación y optimización de páginas
          web para potenciar su diseño y mejorar la comunicación con sus
          clientes. Si está buscando desarrollar una nueva página web o mejorar
          la existente, no dude en ponerse en contacto con nosotros. Estamos
          comprometidos en ofrecer soluciones efectivas que se adapten a sus
          necesidades y contribuyan al éxito de su presencia en línea
        </h2>
      </div>
      <Button color="primary">Button</Button>
    </>
  );
}
