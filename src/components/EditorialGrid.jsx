// src/components/EditorialGrid.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Midnight Steel",
    text: "Satin yüzeyli paslanmaz çelik kasa ve gece şehir ışıklarından ilham alan keskin çizgiler.",
    image: "/images/2.jpg",
    tag: "Steel Collection",
    slug: "midnight-steel",
  },
  {
    title: "Lunar Gold",
    text: "Ay ışığının gölgelerinden ilham alan 18 ayar altın kasa, zarafeti minimalizmle buluşturuyor.",
    image: "/images/e3.jpg",
    tag: "Goldline Series",
    slug: "lunar-gold",
  },
  {
    title: "Obsidian Automatic",
    text: "Obsidyen siyah kadran ve 42 saat güç rezervine sahip otomatik mekanizma ile modern klasik.",
    image: "/images/e2.jpg",
    tag: "Automatic",
    slug: "obsidian-automatic",
  },
];

export default function EditorialGrid() {
  return (
    <motion.section
      id="collections"
      className="border-top border-[#D5CBBF] bg-cream py-16 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-14">
        {/* Section başlığı */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10 text-center md:text-left">
          <div>
            <div className="uppercase tracking-[0.32em] text-[10px] md:text-[11px] mb-3 text-blacklux/60">
              SIGNATURE COLLECTIONS
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl uppercase text-blacklux">
              Curated Timepieces
            </h2>
          </div>
          <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-blacklux/50">
            Designed & crafted in Switzerland
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={i}
              className="relative bg-[#F4EEE6] overflow-hidden flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
            >
              <Link to={`/collections/${item.slug}`} className="block h-full">
                {/* Üst sol etiket */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blacklux/85 text-cream text-[9px] sm:text-[10px] uppercase tracking-[0.22em] px-3 sm:px-4 py-1 z-10">
                  {item.tag}
                </div>

                {/* Görsel */}
                <div className="overflow-hidden h-[220px] sm:h-[260px] md:h-[300px]">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Metin alanı */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg sm:text-xl mb-2 text-blacklux">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blacklux/80 leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <span className="mt-auto text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-blacklux/55">
                    View details →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
