"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Music } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "#", label: "Notre Menu" },
  { href: "#locations", label: "Nos Restaurants" },
  { href: "#philosophie", label: "À Propos" },
  { href: "#", label: "Carrières" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Music, label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#1b0d0d] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ec1313]/30 to-transparent" />
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#ec1313]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ec1313]/5 rounded-full blur-3xl" />

      <div className="relative max-w-[960px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <a href="#" className="inline-block mb-6 group">
              <Image
                src="/logo.png"
                alt="Ruspee's Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-6">
              Le goût authentique du poulet frit moderne. Qualité, fraîcheur et convivialité à chaque commande.
            </p>
            <motion.button
              className="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-[#ec1313] hover:bg-[#c40f0f] text-white font-bold transition-all duration-300 shadow-lg shadow-[#ec1313]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander maintenant
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ec1313] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#ec1313] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Suivez-nous</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#ec1313] transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-8">
              <h5 className="text-sm font-bold text-white mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 h-10 px-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#ec1313] transition-colors"
                />
                <motion.button
                  className="h-10 px-4 rounded-lg bg-[#ec1313] hover:bg-[#c40f0f] text-white text-sm font-bold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ruspee&apos;s Algérie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
