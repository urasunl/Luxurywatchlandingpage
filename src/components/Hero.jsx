import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Slider otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Parallax için
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  return (
    <motion.section
  id="top"
  className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center 
             gap-12 md:gap-20 py-16 md:py-24 px-6 bg-cream text-blacklux"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* SOL YAZI */}
  <div className="max-w-lg text-center md:text-left">
    <div className="uppercase tracking-[0.35em] text-[10px] md:text-[11px] mb-4 text-blacklux/70">
      HAUTE HORLOGERIE
    </div>

    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[1.07] mb-6">
      The Masterpiece <br className="hidden md:block" /> Chronograph
    </h1>

    <div className="w-16 h-[2px] bg-goldlux mx-auto md:mx-0 mb-6"></div>

    <p className="text-[14px] md:text-[15px] leading-relaxed text-blacklux/80 max-w-md mx-auto md:mx-0">
      El işçiliğiyle üretilmiş otomatik mekanizma, safir kristal cam ve 18 ayar
      şampanya altın detaylarla zamanı lüks bir forma dönüştüren yeni sezon
      kronograf.
    </p>
  </div>

  {/* SAĞ – SLIDER + PARALLAX */}
  <motion.div
    ref={imageRef}
    className="relative w-full max-w-[540px] overflow-hidden rounded-xl shadow-2xl 
               h-[360px] sm:h-[440px] md:h-[600px]"
  >
    <AnimatePresence>
      <motion.img
        key={index}
        src={images[index]}
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </AnimatePresence>

    <div className="absolute bottom-4 right-4 bg-blacklux/70 backdrop-blur-md
                    text-cream text-[10px] tracking-[0.22em] uppercase
                    px-4 py-2 shadow-xl rounded-sm">
      Limited Edition · No. 01
    </div>
  </motion.div>
</motion.section>

  );
}
