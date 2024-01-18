"use client";
import React, { useState, useEffect } from "react";
import NavBarDesktop from "../NavBarDestop/NavBarDestop";
import NavBarMobile from "../NavBar/NavBarMobile";

export default function NavBB() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isDesktop ? <NavBarDesktop /> : <NavBarMobile />}</div>;
}