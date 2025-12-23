"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const locations = [
  {
    name: "Ain Allah",
    address: "Cité 450 Logements, Dely Ibrahim",
    hours: "11:00 - 23:00 (Tous les jours)",
    phone: "+213 555 12 34 56",
    status: "OUVERT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqR9c4SSTml-dzbBUGUeBzePoregBX76OHj_Wmrg21J1nJRRz0PnhMFL_xqY4zBMDZuHF6cIvwY__QRgVkAbUe_PJJAPeHj9kPgfi5KX1EfmHl_WptwSRrqL5nF__u5qmDFTn0bGgTCBVgH-ope1CGW0uPAgXVqXl2AXODVFieLqr4U7jRm_ftmoY-qLhoUUJekmLH1TDdcwS7xWqmMB4TqTXWwFTl67eR9won6wL16Q19TB9fN0gsZfmDsao0dxjO5iQurUEPB4",
  },
  {
    name: "Draria",
    address: "Boulevard Principal, Draria Centre",
    hours: "11:00 - 23:30 (Tous les jours)",
    phone: "+213 555 98 76 54",
    status: "OUVERT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8XUv7QqVGUsciLv7pdds9z29Nu8TU08l-hjHmdj-Yo8z3KC2ssru7_cSZMgxGAxiRG2SWxLMlftUU9E74a_-lbUDFdx-nLdBWnMBwLS0nqTbX1NVWgBScTuFRgehdNZTv5havRCtWVMBdYO9_F2UM4YaCidCbFrXahiqhXaAkIgUr6k4n2up5oPk2i_ZA5ihm9jjeBPMSS8Sl9MDN1Dlhs6wuhKWeFiI9ib2a84GzbpyF3HWHrp8N_UZl2D2eZhDy8jLP7592tYc",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative w-full bg-[#f8f6f6] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e7cfcf] to-transparent" />
      
      <div className="max-w-[960px] mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#ec1313]/10 text-[#ec1313] text-sm font-bold mb-4"
          >
            Venez nous voir
          </motion.span>
          <h2 className="text-[#1b0d0d] text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4">
            Nos Restaurants
          </h2>
          <p className="text-[#5c4040] text-lg md:text-xl font-medium leading-relaxed max-w-[600px] mx-auto">
            Retrouvez-nous à Alger et venez déguster nos spécialités.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e7cfcf] card-hover">
                <div
                  className="h-52 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url("${location.image}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    className="absolute bottom-4 left-4 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
                      {location.status}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1b0d0d] mb-2 group-hover:text-[#ec1313] transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-[#5c4040] text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#ec1313]" />
                        {location.address}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[#5c4040]">
                      <Clock className="w-4 h-4 text-[#ec1313]" />
                      <span>{location.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#5c4040]">
                      <Phone className="w-4 h-4 text-[#ec1313]" />
                      <span>{location.phone}</span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-[#ec1313]/10 hover:bg-[#ec1313] hover:text-white transition-all duration-300 text-[#ec1313] font-bold text-sm group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Navigation className="w-5 h-5 transition-transform group-hover/btn:rotate-45" />
                    OBTENIR UN ITINÉRAIRE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
