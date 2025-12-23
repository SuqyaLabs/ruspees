"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTkqaUXJpp1VV5vL6UYruKeN3ZmCR2QwGfYgBsdHiye20qkN8-vqoFdxGkB4zI3JSoR6jiBkgE1Ab0fgULxiLAUW0gXUG4sqgP7TxkcKq5153JRMe4g_DWEUqYNgpolaM9u2tQKckzXg0IYghdOBW-eFMlh8xeCvAt_LR-RiB__1k5QpMjQGRQOYR3EdEiQF3boKJdJi-z3LZaI5VW4ivelQl8juU0Dgs0QkBk-Sj9rt0s0hoqXVH4aBW-hh-yv5L9-08MxG15BNw")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#ec1313]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-[#ec1313]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#ec1313]" />
            Nouveau à Alger
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-[-0.03em] mb-6"
        >
          Le Goût de la{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#ec1313]">Qualité</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-3 bg-[#ec1313]/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Un goût moderne, accessible à tous. Découvrez l&apos;expérience Ruspee&apos;s.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            className="group flex items-center justify-center gap-2 rounded-xl h-14 px-10 bg-[#ec1313] hover:bg-[#c40f0f] text-white text-lg font-bold tracking-wide shadow-2xl shadow-[#ec1313]/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir le menu
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
          <motion.button
            className="flex items-center justify-center gap-2 rounded-xl h-14 px-10 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white text-lg font-bold tracking-wide transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Nos restaurants
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 flex gap-2"
        >
          <div className="w-10 h-1.5 bg-[#ec1313] rounded-full" />
          <div className="w-2 h-1.5 bg-white/40 rounded-full" />
          <div className="w-2 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </div>

      <motion.a
        href="#pillars"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
