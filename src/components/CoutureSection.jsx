import { motion } from "framer-motion";

export default function CoutureSection() {
  return (
    <motion.section
      id="heritage"
      className="bg-cream py-28 md:py-32 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2
          className="font-serif text-blacklux uppercase tracking-[0.55em]
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5"
        >
          Haute Horlogerie
        </h2>

        <div className="w-24 h-[2px] bg-goldlux mb-5"></div>

        <p className="max-w-xl text-sm md:text-[15px] text-blacklux/80 leading-relaxed">
          Zamanın ötesine geçen tasarım; el işçiliğiyle son vida kadar
          şekillenen mekanik ve modern minimalizmin buluştuğu seçkin saatler.
        </p>
      </div>
    </motion.section>
  );
}
