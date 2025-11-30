export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="bg-blacklux text-cream mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-12">

        {/* Newsletter */}
        <div className="text-center mb-12">
          <h3 className="font-serif tracking-[0.25em] uppercase text-sm mb-3">
            L’ATELIER DU TEMPS
          </h3>
          <p className="text-xs text-cream/75 max-w-md mx-auto mb-5">
            Yeni koleksiyon lansmanları, limitli seri duyuruları ve atölye
            hikâyeleri için bültene kaydol. Ayda bir, yalnızca seçilmiş içerik.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <input
              type="email"
              placeholder="E-posta adresin"
              className="px-4 py-2 text-xs bg-transparent border border-cream/40 outline-none w-full sm:w-72 placeholder:text-cream/40"
            />
            <button
              type="submit"
              className="px-6 py-2 text-[11px] tracking-[0.18em] uppercase border border-cream/70 hover:bg-cream hover:text-blacklux transition-colors"
            >
              Join Newsletter
            </button>
          </form>
        </div>

        {/* Alt kolonlar */}
        <div className="grid md:grid-cols-3 gap-10 text-xs text-cream/80 mb-10">
          <div>
            <h4 className="uppercase tracking-[0.18em] text-[11px] mb-3">
              Maison
            </h4>
            <ul className="space-y-1">
              <li>Philosophy</li>
              <li>Craftsmanship</li>
              <li>Heritage</li>
              <li>Ateliers & Stores</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.18em] text-[11px] mb-3">
              Collections
            </h4>
            <ul className="space-y-1">
              <li>Chronograph</li>
              <li>Automatic</li>
              <li>Goldline</li>
              <li>Limited Editions</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.18em] text-[11px] mb-3">
              Support
            </h4>
            <ul className="space-y-1">
              <li>Service & Maintenance</li>
              <li>Warranty</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div className="border-top border-cream/20 pt-4 text-[11px] flex flex-col sm:flex-row justify-between gap-2 text-cream/60">
          <span>© {year} L’Atelier du Temps · All rights reserved.</span>
          <span>Swiss Designed · Mechanical Timepieces</span>
        </div>
      </div>
    </footer>
  );
}
