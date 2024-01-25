"use client";
import React, { useEffect, useRef } from "react";
import "./vorttex.scss";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Vorttex = () => {
  const titleRef = useRef(); // Crear la referencia

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aquí puedes agregar o quitar la clase según sea visible o no
        if (entry.isIntersecting) {
          entry.target.classList.add("wobble-horizontal-top");
        } else {
          entry.target.classList.remove("wobble-horizontal-top");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      var imagenm = document.getElementById("Image");
      var altura = window.innerHeight / 1.45;
      console.log(altura);
      var distancia = imagenm.getBoundingClientRect().top;
      console.log(distancia);

      if (distancia <= altura) {
        imagenm.classList.add("aparece", "transform_left");
      } else {
        imagenm.classList.remove("aparece");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="proyecto" id="proyecto">
      <div className="tittleTrabajos">
        <h1 className="tituloDuro" ref={titleRef}>
          {" "}
          Trabajos
        </h1>{" "}
        {/* Usar la referencia aquí */}
      </div>
      <img id="Image" src="/img/vorttex00.jpg" alt="" />
      <div></div>
      <div className="pepe2">
        dedicada a la venta de keys online, vortex gaming
        <br /> es una plataforma profecional a gran escala
        <br /> con diferentes implementaciones:
        <ol>
          <li> -autenticacion de terceros</li>
          <li> -panel de administrador</li>
          <li> -gestion de stock</li>
          <li> -DB/API propia </li>
        </ol>
      <Link href="https://vorttex-gaming-topabli2-topablis-projects.vercel.app/">
        <Button className="vortexPag" type="submit" color="primary">
          ir al sitio web
        </Button>
      </Link>
      </div>
    </section>
  );
};

export default Vorttex;
