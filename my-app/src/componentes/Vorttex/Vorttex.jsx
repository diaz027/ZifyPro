"use client";
import "./vorttex.css";
import Image from "next/image";
import vorttex00 from "./vorttex00.jpg";
import vorttex1 from "./vorttex1.jpg";
import vorttex2 from "./vorttex2.jpg";
import vorttex3 from "./vorttex3.jpg";
import vorttex4 from "./vorttex4.jpg";
import { useEffect, useState } from "react";

const images = [vorttex00, vorttex1, vorttex2, vorttex3, vorttex4];

const Vorttex = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos
    return () => clearInterval(timer);
  }, [currentImageIndex]);
  return (
    <div id="proyecto">
      <div className="title3">
        <h2>Vorttex Gaming</h2>
      </div>

      <div className="text3">
        <p>
          Vorttex Gaming es más que un eCommerce de claves de videojuegos; es un
          proyecto integral destacado por su eficiencia, versatilidad y atención
          al cliente. En solo 1 mes, nuestro equipo desarrolló una plataforma
          con un sofisticado panel de administrador para controlar usuarios y
          monitorear el stock en tiempo real. La edición y actualización son
          fáciles, brindando flexibilidad al equipo
        </p>
      </div>
      <Image src={images[currentImageIndex]} alt="[currentImageIndex]" className="img3" />
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Z729kJrw1aA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Vorttex;
