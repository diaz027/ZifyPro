"use client";
import React, { useState, useEffect } from "react";
import NavBarDesktop from "@/componentes/NavBarDestop/NavBarDestop";
import NavBarMobile from "@/componentes/NavBar/NavBarMobile";


export default function NavBB() {
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
    <div>
      {isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
    </div>
  );
}