"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`text-gray-100 p-2 bg-gradient-to-r from-gray-600 to-gray-700 bg-opacity-75 backdrop-filter backdrop-blur-md shadow-md transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <img
              src="./images/logo.webp"
              alt="logo"
              className="w-12 h-12 filter invert"
            />
          </Link>
        </h1>
        <div className="hidden md:flex space-x-3">
          <Link
            href="/"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Gallery
          </Link>
          {/* <Link
            href="/e-gift"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            E-Gift
          </Link>
          <Link
            href="/host-a-party"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Host a Party
          </Link>
          <Link
            href="/happy-hour"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Happy Hour
          </Link>
          <Link
            href="/promotions"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Promotions
          </Link> */}
          <Link
            href="/contact"
            className="text-sm hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="/book"
            className="text-sm bg-gray-700 hover:bg-gray-600 text-white font-medium py-1 px-3 rounded transition-colors duration-300"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
