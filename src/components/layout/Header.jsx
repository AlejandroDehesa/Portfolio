import React from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/portfolio";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/stack", label: "Stack" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

function Header() {
  return (
    <header className="topbar" aria-label="Navegación principal">
      <Link className="brand" to="/" aria-label="Inicio">
        <span>{profile.initials}</span>
        <strong>{profile.name}</strong>
      </Link>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
