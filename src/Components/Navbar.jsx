import React, { useState } from "react";
import NavLinks from "./NavLinks"; // Component that renders individual navigation links
import { Menu } from "lucide-react"; // Hamburger menu icon for mobile view

// Define the navigation items with id, title, and path
const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Portfolio", path: "/portfolio" },
  { id: 5, title: "Contact", path: "/contact" },
];

// Map navItems to NavLinks components
const links = navItems.map((route) => <NavLinks key={route.id} route={route} />);

const Navbar = () => {
  const [open, setOpen] = useState(false); // State to track mobile menu open/close

  return (
    <nav className="flex justify-between items-center p-5 shadow-sm mb-8">
      
      {/* Left side: brand name and mobile menu */}
      <span onClick={() => setOpen(!open)} className="flex gap-3 items-center">
        {/* Show "Close" text if menu is open, otherwise show hamburger icon */}
        {open ? "Close" : <Menu className="md:hidden" />}
        
        {/* Mobile menu */}
        <ul
          className={`md:hidden absolute duration-700 ${
            open ? "top-18 left-14" : "-top-40"
          }`}
        >
          {links} {/* Render the nav links in mobile view */}
        </ul>
        
        {/* Brand / Navbar title */}
        <h3 className="font-bold text-lg">My Navbar</h3>
      </span>
      
      {/* Desktop menu */}
      <ul className="md:flex hidden">
        {links} {/* Render nav links for larger screens */}
      </ul>
      
      {/* Sign In button */}
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
