import React from "react";
import Logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} className="nav--logo" alt="Logo-Image" />
    </nav>
  );
}
