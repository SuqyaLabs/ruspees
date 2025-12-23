"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Award } from "lucide-react";

const philosophyItems = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDolWiYb1-V63EkneHxfNbQHjsY-P-ifqylDnNIP3PQm7T0kf-rKlvHHQcj_2c71wNihUgpsDLvgB11dwb_DPn3zhMa8S3GllQvuj05cDfNBmlXSn30wcD_QMGyp0GUbixvIpC9_fGQZ5r_3BJNbPCODtM0rdXTM9iv3hrekh1YgjMUah_3qMfXaqTFqjWVTKOe3yCh1uS9jeyOhJ0zra5p4TZDKAnE0Zf5Upj0jAp33nfTKTZ11rAN8nC6QbEXkzmM1yr9nAsf_V0",
    alt: "Ingrédients frais de qualité",
    icon: Leaf,
    title: "Ingrédients Frais",
    description: "Nous sélectionnons scrupuleusement nos volailles auprès de producteurs locaux de confiance. La fraîcheur est notre priorité absolue, garantissant une texture et un goût incomparables à chaque bouchée.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-zylZkgC3sDNpmmnYBRf851rloFFylsgLgjGRtOj5uZvfFVtBiMcx7QZoHMzztqIOTsj_0eKoAAY4W6UFJggLxYt6D-4O7tDYUQaoGmJHWmPlBk7WjIg_zK4EuIoIljDSiMZQSHDoM3F6JmGZtiAQN-ovUjGNoFchqKaX5Q2X9NkJGkfM5WftwEPMag6WqsriBXLnRQ8x3djuUxNU0cTE2XcRenYIPxVW6OCfRevSHR_8fS-CjOgVvnZqs93rwYqmWW1vf5Nn7CQ",
    alt: "Chef préparant du poulet frit",
    icon: Award,
    title: "Technique Maîtrisée",
    description: "Nos chefs utilisent des équipements de pointe et des méthodes de cuisson précises. Température, temps de cuisson, assaisonnement : rien n'est laissé au hasard pour obtenir le croustillant parfait.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophie" className="relative w-full bg-white py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ec1313]/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-[960px] mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#ec1313]/10 text-[#ec1313] text-sm font-bold mb-4"
          >
            Notre Engagement
          </motion.span>
          <h2 className="text-[#1b0d0d] text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4">
            Notre Philosophie
          </h2>
          <p className="text-[#5c4040] text-lg md:text-xl font-medium leading-relaxed max-w-[720px]">
            Une sélection rigoureuse d&apos;ingrédients et des techniques de cuisson modernes pour vous offrir le meilleur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#ec1313] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#1b0d0d] text-2xl font-bold leading-tight group-hover:text-[#ec1313] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5c4040] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
