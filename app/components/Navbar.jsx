'use client'
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 sm:px-8 px-4 py-2 z-10 bg-white ${hasShadow ? "shadow-md" : ""}`}
      >
        <nav className="flex justify-between items-center max-container bg-transparent">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"  // Removed 'public'
              alt="Hashsync Logo"
              width={80}
              height={80}
              className="mr-2"
            />
          </Link>
          <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-dark hover:text-[#00848c]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu className="text-4xl text-dark" />
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-50 flex items-center justify-center">
          <nav className="lg:hidden">
            <div
              className="fixed right-0 px-8 py-4 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AiOutlineClose className="text-4xl" style={{ color: "#00848c" }} />
            </div>
            <ul className="flex flex-col items-center justify-center h-full">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-4">
                  <Link
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#00848c]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
