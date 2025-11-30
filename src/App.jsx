import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorialGrid from "./components/EditorialGrid";
import SplitSection from "./components/SplitSection";
import CoutureSection from "./components/CoutureSection";
import Footer from "./components/Footer";
import WatchDetail from "./components/WatchDetail";

function Home() {
  return (
    <>
      <Hero />
      <EditorialGrid />
      <SplitSection />
      <CoutureSection />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-cream text-blacklux min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:slug" element={<WatchDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
