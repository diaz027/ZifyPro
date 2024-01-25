"use client";
import NavBB from "@/componentes/navBB/NavBB";
import "./new.css";
import MyAccordion from "@/componentes/Accordion/accordion";
import MyModel from "@/componentes/model/model";

const About = () => {
  return (
    <div className="about">
      <NavBB />
      <div>
        <MyModel />
      </div>
      <div>
        <MyAccordion />
      </div>
    </div>
  );
};

export default About;
