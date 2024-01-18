"use client";
import React, { useState, useEffect } from "react";
import NavBarDesktop from "@/componentes/NavBarDestop/NavBarDestop";
import NavBarMobile from "@/componentes/NavBar/NavBarMobile";
import "./pages.css";
import LandingPages from "@/componentes/landing/landingPages";
import Vorttex from "@/componentes/Vorttex/Vorttex";

export default function Home() {
  return (
    <div className="container">
      <LandingPages />
      <Vorttex id="proyecto" />
    </div>
  );
}
