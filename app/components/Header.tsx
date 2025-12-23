"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChefHat } from "lucide-react";
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
          <div className="text-[#ec1313] transition-transform duration-300 group-hover:rotate-12">
            <ChefHat className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h2 className="text-[#1b0d0d] text-2xl font-extrabold leading-tight tracking-[-0.015em]">
            Ruspee&apos;s
          </h2>
        </motion.a>

        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-[#1b0d0d] text-sm font-bold hover:text-[#ec1313] transition-colors leading-normal group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec1313] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <motion.button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#ec1313] hover:bg-[#c40f0f] transition-all text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="truncate">Commander</span>
          </motion.button>
        </nav>

        <button
          className="md:hidden text-[#1b0d0d] p-2"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[#ec1313] hover:bg-[#c40f0f] transition-all text-white text-base font-bold shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Commander
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
