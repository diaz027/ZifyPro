// import "./Navbar.css";
// import React from "react";
// import {
//   Navbar,
//   NavbarMenuToggle,
//   NavbarMenuItem,
//   NavbarMenu,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// export default function NavBarMobile() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = ["Profile", "Proyectos", "about", "contac"];

//   return (
//     <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         />
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex pr-3" justify="center">
//         {menuItems.map((item, index) => (
//           <NavbarItem key={`${item}-${index}`}>
//             <Link color="foreground" href="#">
//               {item}
//             </Link>
//           </NavbarItem>
//         ))}
//       </NavbarContent>

//       <NavbarMenu className="sm:hidden">
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2
//                   ? "warning"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
import "./Navbar.css";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavBarMobile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Inicio", link: "/" },
    { name: "Proyectos", link: "#proyecto" },
    { name: "Nosotros", link: "/about" },
    { name: "Trabajemos", link: "#contacto" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex pr-3" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
