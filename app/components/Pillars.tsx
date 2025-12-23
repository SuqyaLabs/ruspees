"use client";

import { motion } from "framer-motion";
import { Flame, Drumstick, Heart } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "CROUSTY",
    description: "Une panure secrète, dorée et croustillante à souhait qui réveille vos sens.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Drumstick,
    title: "ROSTY",
    description: "Une cuisson rôtie maîtrisée pour une viande tendre et juteuse à l'intérieur.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "TASTY",
    description: "Une explosion de saveurs authentiques grâce à nos épices de qualité.",
    color: "from-red-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

export default function Pillars() {
  return (
    <section id="pillars" className="relative w-full bg-[#fcf8f8] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e7cfcf] to-transparent" />
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ec1313]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ec1313]/5 rounded-full blur-3xl" />

      <div className="max-w-[960px] mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#ec1313]/10 text-[#ec1313] text-sm font-bold mb-4"
          >
            Notre Secret
          </motion.span>
          <h2 className="text-[#1b0d0d] text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4">
            Nos Piliers
          </h2>
          <p className="text-[#5c4040] text-lg md:text-xl font-medium leading-relaxed max-w-[720px]">
            Découvrez ce qui fait la différence chez Ruspee&apos;s. Trois mots, une promesse.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative flex flex-col gap-6 rounded-2xl border border-[#e7cfcf] bg-white p-8 h-full overflow-hidden card-hover">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ec1313]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  className="relative w-16 h-16 rounded-2xl bg-[#ec1313]/10 flex items-center justify-center text-[#ec1313] group-hover:bg-[#ec1313] group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <pillar.icon className="w-8 h-8" strokeWidth={2} />
                </motion.div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-[#1b0d0d] text-2xl font-black uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-[#5c4040] text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec1313] to-[#ff4444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
