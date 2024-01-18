import "./LandingPages.css";
import { Image } from "@nextui-org/react";

const LandingPages = () => {
  return (
    <section>
        <section class="layout">
          <div>
            {" "}
            <img
              className="fixI"
              alt="NextUI hero Image"
              src="https://res.cloudinary.com/divxrmzge/image/upload/v1705549628/_8ea46786-a71e-4936-bcfb-bb2035970099-PhotoRoom.png-PhotoRoom_mxhlb5.png"
            />
          </div>
          <div class="grow1">
            <h2>
              En ZifyPro nos especializamos en la creación y optimización de
              páginas web para potenciar su diseño y mejorar la comunicación con
              sus clientes. Si está buscando desarrollar una nueva página web o
              mejorar la existente, no dude en ponerse en contacto con nosotros.
              Estamos comprometidos en ofrecer soluciones efectivas que se
              adapten a sus necesidades y contribuyan al éxito de su presencia
              en línea.
            </h2>
          </div>
        </section>
      <div className="text">
      </div>
      <video className="videoH" muted autoPlay loop>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="capa"></div>
    </section>
  );
};
export default LandingPages;
