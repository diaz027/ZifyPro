"use client";
import React, { useState, useEffect } from "react";
import "./pages.css";
import LandingPages from "@/componentes/landing/landingPages";
import Vorttex from "@/componentes/Vorttex/Vorttex";
import Email from "@/componentes/Contacto/Contac";
import NavBB from "@/componentes/navBB/NavBB";

export default function Home() {
  return (
    <div className="container">
      <NavBB/>
      <LandingPages />
      <Vorttex id="proyecto"></Vorttex>
      <Email id="contacto" />
    </div>
  );
}
