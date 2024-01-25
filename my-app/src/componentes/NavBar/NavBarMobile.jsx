import "./Navbar.css";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavBarMobile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Inicio", link: "/" },
    { name: "Proyectos", link: "/#proyecto" },
    { name: "Nosotros", link: "/about" },
    { name: "Trabajemos", link: "/#contacto" },
  ];

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen);
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <img className="logots" src="/NavBarCelu.png" alt="logo" />
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex pr-3" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`} onClick={handleItemClick}>
            <Link href={item.link}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            onClick={handleItemClick}
          >
            <Link href={item.link}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
