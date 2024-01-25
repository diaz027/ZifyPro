"use strict";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./accordion.css";
import Avatar from "../Checkbox/avatar";

export default function MyAccordion() {
  const PrimerItems = `En ZifyPro, hacemos de tus ideas una realidad. Somos un equipo
     apasionado de desarrolladores Full Stack dedicados a transformar
     conceptos en experiencias digitales impactantes. Nos especializamos en
     el desarrollo web y diseño personalizado, ofreciendo soluciones innovadoras que se destacan en la creación de páginas web únicas y
     funcionales.`;

  const SegItems = `En ZifyPro, destacamos como expertos en desarrollo Full Stack y diseño
  personalizado. Nos enorgullece no solo construir páginas web, sino
  también crear experiencias únicas que cumplen con tus objetivos.
  Colaborar con nosotros significa beneficiarte de soluciones digitales
  que van más allá de las expectativas, fusionando tecnología y
  creatividad para obtener resultados tangibles.`;

  return (
    <div className="conten">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="¿Quiénes Somos?"
          title={
            <span style={{ color: "white", fontSize: "1.5em" }}>
              ¿Quiénes Somos?
            </span>
          }
        >
          <div className="text5">{PrimerItems}</div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="¿Por Qué Elegirnos?"
          title={
            <span style={{ color: "white", fontSize: "1.5em" }}>
              ¿Por Qué Elegirnos?
            </span>
          }
        >
          <div className="text5">{SegItems}</div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Equipo de Desarrollo"
          title={
            <span style={{ color: "white", fontSize: "1.5em" }}>
              Nuestro Equipo
            </span>
          }
        >
          <Avatar />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
