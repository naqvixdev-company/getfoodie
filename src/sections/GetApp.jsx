"use client";

import { useEffect, useState } from "react";
import FeatureImageCard from '@/components/FeatureImageCard';
import Image from 'next/image';
import { motion } from "framer-motion";

const GetApp = () => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const text = "Download Foodie Now";

  // ✅ Run animations only after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Typing animation logic (client only)
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    // SSR-safe static render
    return (
      <section className="w-[90%] m-auto flex md:flex-row flex-col gap-10 items-center justify-evenly mt-30">
        <h2 className="text-5xl vodka-font md:text-7xl text-center font-bold">
          {text}
        </h2>
      </section>
    );
  }

  return (
    <section
      id="app"
      className="w-[90%] m-auto flex md:flex-row flex-col gap-10 items-center justify-evenly mt-30"
    >
      <div className="md:w-[50%] w-full">
        <div className="flex flex-col w-full">
          <h2 className="text-5xl vodka-font md:text-7xl text-center font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">
            {displayText}
          </h2>
          <p className="text-center text-lg">
            Available on Google Play, your journey to mouth-watering discoveries starts here.
          </p>
        </div>

        {/* Parallax images with safe animation */}
        <div className="mt-5 flex items-center justify-center gap-10">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 w-fit"
          >
            <Image src="/app1.png" width={200} height={200} alt="App preview" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 w-fit"
          >
            <Image src="/app2.png" width={200} height={200} alt="App preview" />
          </motion.div>
        </div>
      </div>

      {/* Static FeatureImageCard (no SSR mismatch) */}
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -15 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <FeatureImageCard
          img1="/download1.png"
          img2="/download2.png"
          alt1="Delicious Pasta"
          alt2="Tasty Dessert"
        />
      </motion.div>
    </section>
  );
};

export default GetApp;
