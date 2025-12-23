"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const navLinks = [
  { href: "#philosophie", label: "À Propos" },
  { href: "#locations", label: "Où nous trouver" },
  { href: "#contact", label: "Nous contacter" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass-effect border-b border-[#e7cfcf] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-4 py-3 lg:px-8">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={isScrolled ? "/logo.png" : "/logo-white.png"}
            alt="Ruspee's Logo"
            width={120}
            height={40}
            className="md:h-10 w-auto transition-all duration-300 group-hover:scale-105"
            priority
          />
        </motion.a>

        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm font-bold hover:text-[#ec1313] transition-colors leading-normal group",
                  isScrolled ? "text-[#1b0d0d]" : "text-white"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec1313] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </nav>

        <button
          className={clsx("md:hidden p-2", isScrolled ? "text-[#1b0d0d]" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-[#e7cfcf]"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[#1b0d0d] text-base font-bold hover:text-[#ec1313] transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
