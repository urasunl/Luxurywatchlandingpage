import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const WATCHES = {
  "midnight-steel": {
    name: "Midnight Steel",
    image: "/images/2.jpg",
    subtitle: "Steel Collection · 40mm",
    description:
      "Satin yüzeyli paslanmaz çelik kasa, koyu antrasit kadran ve şehir ışıklarından ilham alan keskin indeksler. Günlük kullanıma uygun, modern ve zamansız bir tasarım.",
    specs: [
      "Paslanmaz çelik kasa, 40mm",
      "Safir kristal cam",
      "Otomatik mekanizma, 42 saat güç rezervi",
      "50m su geçirmezlik",
    ],
  },
  "lunar-gold": {
    name: "Lunar Gold",
    image: "/images/e3.jpg",
    subtitle: "Goldline Series · 38mm",
    description:
      "Ay ışığının gölgelerinden ilham alan 18 ayar şampanya altın kasa ve opalin kadran. Zarafeti minimalizmle buluşturan ince bir siluet.",
    specs: [
      "18 ayar altın kasa, 38mm",
      "Opalin kadran",
      "El kurmalı mekanizma",
      "Sapphire exhibition caseback",
    ],
  },
  "obsidian-automatic": {
    name: "Obsidian Automatic",
    image: "/images/e2.jpg",
    subtitle: "Automatic · 41mm",
    description:
      "Obsidyen siyah kadran, elmas kesim indeksler ve 42 saat güç rezervine sahip otomatik mekanizma ile modern bir klasik.",
    specs: [
      "Paslanmaz çelik kasa, 41mm",
      "Obsidyen siyah kadran",
      "Otomatik kalibre 421",
      "Crocodile leather kayış",
    ],
  },
};

export default function WatchDetail() {
  const { slug } = useParams();
  const watch = WATCHES[slug];

  if (!watch) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-sm text-blacklux/70 mb-6">
          The requested timepiece could not be found.
        </p>
        <Link
          to="/"
          className="text-xs tracking-[0.18em] uppercase border border-blacklux/40 px-6 py-2 hover:bg-blacklux hover:text-cream transition-colors"
        >
          Back to collections
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="py-20 md:py-24 px-6 bg-cream text-blacklux"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Görsel */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl bg-black">
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full h-[360px] md:h-[520px] object-cover object-center"
          />
        </div>

        {/* Metin */}
        <div className="w-full md:w-1/2">
          <div className="uppercase tracking-[0.3em] text-[10px] text-blacklux/60 mb-3">
            L’Atelier du Temps
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase leading-tight mb-3">
            {watch.name}
          </h1>

          <div className="text-[11px] tracking-[0.18em] uppercase text-blacklux/60 mb-5">
            {watch.subtitle}
          </div>

          <div className="w-16 h-[2px] bg-goldlux mb-5" />

          <p className="text-sm text-blacklux/80 leading-relaxed mb-6">
            {watch.description}
          </p>

          <ul className="text-sm text-blacklux/80 space-y-1 mb-8">
            {watch.specs.map((spec, i) => (
              <li key={i}>• {spec}</li>
            ))}
          </ul>

          <Link
            to="/"
            className="text-xs tracking-[0.18em] uppercase border border-blacklux/40 px-6 py-2 hover:bg-blacklux hover:text-cream transition-colors"
          >
            Back to collections
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
