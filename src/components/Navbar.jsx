// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-cream/80 backdrop-blur-lg border-b border-[#e5ded6]">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Sol taraftaki Logo */}
        <Link
          to="/"
          className="font-serif tracking-[0.28em] text-sm text-blacklux uppercase z-20"
        >
          L’ATELIER DU TEMPS
        </Link>

        {/* ORTALANMIŞ MENÜ */}
        <nav className="
          hidden md:flex space-x-10 text-[13px] tracking-[0.2em] uppercase text-blacklux
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        ">
          <Link to="/collections" className="hover:text-blacklux transition">Collections</Link>
          <Link to="/mechanics" className="hover:text-blacklux transition">Mechanics</Link>
          <Link to="/heritage" className="hover:text-blacklux transition">Heritage</Link>
          <Link to="/about" className="hover:text-blacklux transition">About</Link>
        </nav>

        {/* Sağ tarafta sadece Search butonu */}
        <div className="hidden md:flex items-center space-x-6 text-[13px] tracking-[0.2em] uppercase text-blacklux">
          <button className="hover:text-blacklux transition">Search</button>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-blacklux z-20"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-cream border-t border-[#e5ded6] px-6 pt-4 pb-6 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Link onClick={() => setOpen(false)} to="/collections" className="block uppercase tracking-[0.2em]">Collections</Link>
            <Link onClick={() => setOpen(false)} to="/mechanics" className="block uppercase tracking-[0.2em]">Mechanics</Link>
            <Link onClick={() => setOpen(false)} to="/heritage" className="block uppercase tracking-[0.2em]">Heritage</Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block uppercase tracking-[0.2em]">About</Link>
            <button className="block uppercase tracking-[0.2em]">Search</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
