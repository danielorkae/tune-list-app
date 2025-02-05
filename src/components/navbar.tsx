import { HeartIcon, HomeIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__link">
        <HomeIcon />
      </NavLink>
      <NavLink to="/favorites" className="navbar__link">
        <HeartIcon />
      </NavLink>
    </nav>
  );
}
