import { motion } from "framer-motion";

export default function SplitSection() {
  return (
    <motion.section
      id="mechanics"
      className="border-t border-[#D5CBBF] bg-[#F4EEE6] py-16 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="uppercase tracking-[0.35em] text-[10px] md:text-[11px] mb-3 md:mb-4 text-blacklux/70">
            HAND-FINISHED MECHANICS
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase leading-tight mb-5 md:mb-6 text-blacklux">
            Calibre 421 <br className="hidden md:block" /> Movement
          </h2>

          <div className="w-16 md:w-20 h-[2px] bg-goldlux mb-6 md:mb-8"></div>

          <p className="max-w-md text-sm text-blacklux/80 leading-relaxed mb-4">
            Kalibre 421; altın balans köprüsü, mavi çelik vidalar ve elle
            işlenmiş Côte de Genève desenleriyle en saf saat ustalığını temsil
            eder. Her bir parça, ustaların atölyesinde tek tek elle ayarlanır.
          </p>

          <p className="text-[10px] md:text-xs text-blacklux/60 tracking-[0.16em] uppercase">
            Sapphire exhibition caseback · 28,800 vph · 42-hour power reserve
          </p>
        </div>

        {/* IMAGE */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/e1.jpg"
            alt="Calibre 421 Movement"
            className="w-full h-[320px] sm:h-[380px] md:h-[520px] object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
