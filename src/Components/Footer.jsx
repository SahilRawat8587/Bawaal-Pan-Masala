import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-6">
      {/* Top Section */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">KSSR LETSGROW PVT LTD. We're here</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-4">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Products", path: "/product" },
          { name: "Contact", path: "/contact" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-lg font-medium hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <hr className="border-black mb-4" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center">
        <img
          src={assets.logo}
          alt="Bawaal Pan Masala"
          className="w-24 mb-2"
        />
        <p className="text-sm">
          &copy; 2025 ABC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;