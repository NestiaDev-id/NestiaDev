"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";


export default function Home() {

  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center pixel-font">
      <h1 className={`text-yellow-400 text-4xl ${blink ? "opacity-100" : "opacity-50"}`}>
        Selamat Datang di Portofolio Saya!
      </h1>
      <p className="text-white text-lg mt-4">Saya seorang pengembang web dengan gaya Pixel Art UI 🎮</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white border-4 border-white hover:bg-blue-700 pixel-button">
        Lihat Proyek Saya
      </button>
    </div>
  );
}
