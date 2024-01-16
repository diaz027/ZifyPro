import React from "react";
import NavBar from "@/componentes/NavBar/NavBar";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NavBar />
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
