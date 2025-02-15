"use client"
import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

export default function Home() {
  const [blink, setBlink] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(20);
  const [glitch, setGlitch] = useState(false);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBlink((prev) => !prev);
  //   }, 500);
    
  //   const glitchInterval = setInterval(() => {
  //     setGlitch((prev) => !prev);
  //   }, 300);
    
  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(glitchInterval);
  //   };
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pixel-font">
  //       <h1 className={`text-yellow-400 text-4xl ${glitch ? "animate-glitch" : "animate-pulse"}`}>Loading {progress}%</h1>
  //       <div className="w-1/2 h-4 bg-gray-700 border-4 border-white mt-4 relative overflow-hidden">
  //         <div className="h-full bg-yellow-400 w-1/5 animate-none" />
  //       </div>
  //       <p className="text-gray-500 mt-4 text-sm">Website masih dalam tahap pengembangan...</p>
  //     </div>
  //   );
  // }
  // ! yang dibawah stuck
  // let startTime = Date.now();
  // const duration = 4000; // 4 detik

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBlink((prev) => !prev);
  //   }, 500);
    
  //   const progressInterval = setInterval(() => {
  //     const elapsed = Date.now() - startTime;
  //     const easedProgress = Math.min(20 + (elapsed / duration) * 80, 100);
  //     setProgress(easedProgress);
  //     if (easedProgress >= 100) {
  //       clearInterval(progressInterval);
  //       setTimeout(() => setLoading(false), 500);
  //     }
  //   }, 50);
  //   if (progress === 100) {
  //     setLoading(false);
  //   }
    
  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(progressInterval);
  //   };
  // }, [progress]);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pixel-font">
  //       <h1 className={`text-yellow-400 text-4xl animate-glitch`}>Loading {progress}%</h1>
  //       <div className="w-1/2 h-4 bg-gray-700 border-4 border-white mt-4 relative overflow-hidden">
  //         <div className="h-full bg-yellow-400" style={{ width: `${progress}%`, transition: 'width 0.5s linear' }} />
  //       </div>
  //       <p className="text-gray-500 mt-4 text-sm">Website masih dalam tahap pengembangan...</p>
  //     </div>
  //   );
  // }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center pixel-font ${darkMode ? 'bg-gray-900' : 'bg-black'}`}>
      <h1 className={`text-yellow-400 text-4xl m-10 ${blink ? "opacity-100" : "opacity-50"}`}>
        Selamat Datang di Portofolio Saya!
      </h1>
      <p className="text-white text-lg mt-4 m-10">Saya seorang fullstack development disini saya membuat sebuah website dengan gaya Pixel Art UI 🎮</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white border-4 border-white hover:bg-blue-700 pixel-button">
        Lihat Proyek Saya
      </button>

      {/* <Switch checked={darkMode} onCheckedChange={setDarkMode} className="mt-4" />
      <span className="text-white mt-2">Mode {darkMode ? "Gelap" : "Terang"}</span>

      <div className="mt-10 w-3/4 bg-gray-800 p-5 border-4 border-white pixel-box">
        <h2 className="text-green-400 text-2xl">Tentang Saya</h2>
        <p className="text-white mt-2">Saya memiliki pengalaman dalam pengembangan web dengan fokus pada desain retro dan pengalaman pengguna yang unik.</p>
      </div>
      <div className="mt-10 w-3/4 bg-gray-800 p-5 border-4 border-white pixel-box">
        <h2 className="text-red-400 text-2xl">Proyek Saya</h2>
        <ul className="text-white mt-2 list-disc list-inside">
          <li>Game RPG berbasis web</li>
          <li>Aplikasi Todo dengan desain pixel art</li>
          <li>Website portofolio dengan tema retro</li>
        </ul>
      </div>

      <Accordion className="mt-10 w-3/4">
        <AccordionItem title="Tentang Saya">
          <p className="text-white">Saya memiliki pengalaman dalam pengembangan web dengan fokus pada desain retro dan pengalaman pengguna yang unik.</p>
        </AccordionItem>
        <AccordionItem title="Proyek Saya">
          <ul className="text-white list-disc list-inside">
            <li>Game RPG berbasis web</li>
            <li>Aplikasi Todo dengan desain pixel art</li>
            <li>Website portofolio dengan tema retro</li>
          </ul>
        </AccordionItem>
      </Accordion> */}

    </div>
  );
}
