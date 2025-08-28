"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.3 }); // Trigger when 30% visible

  // Animation controls
  const imgControls = useAnimation();
  const textControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      imgControls.start("visible");
      textControls.start("visible");
    } else {
      imgControls.start("hidden");
      textControls.start("hidden");
    }
  }, [inView, imgControls, textControls]);

  // Glow + tilt refs
  const glowRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    const card = cardRef.current;
    if (!glow || !card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,200,100,0.3), transparent 60%)`;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = "transparent";
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  // Variants for images and text
  const imgVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const img2Variant = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className=" overflow-x-hidden text-black  pt-20 pb-10 flex flex-col md:flex-row justify-center items-center w-full p-5 gap-10 relative"
    >
      {/* Images with animations */}
      <motion.div className="relative flex gap-4" animate={imgControls}>
        {/* Glow behind images */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 blur-[120px] opacity-70 rounded-full" />

        <motion.div variants={imgVariant}>
          <Image
            src="/Home.png"
            width={220}
            height={220}
            alt="Delicious food"
            className="rounded-xl shadow-lg transform translate-y-4 hover:scale-105 transition duration-300"
          />
        </motion.div>

        <motion.div variants={img2Variant}>
          <Image
            src="/Home2.png"
            width={220}
            height={220}
            alt="Tasty meal"
            className="rounded-xl shadow-lg transform -translate-y-4 hover:scale-105 transition duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Text with tilt + glow */}
      <motion.div
        ref={cardRef}
        className="relative max-w-lg p-3 sm:p-6 rounded-xl overflow-hidden border border-black backdrop-blur-sm bg-black/10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={textVariant}
        animate={textControls}
      >
        {/* Glow effect on hover */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition duration-300"
        />

        <h3 className="text-5xl vodka-font  font-bold mb-4 bg-gradient-to-r 
        text-black bg-clip-text ">
          About Us
        </h3>
        <p className="text-black leading-relaxed">
          At <span className="text-yellow-400 font-semibold">Foodie</span>, we
          believe every dish deserves more than just a star rating. Our app is
          built for true food lovers — helping you explore, review, and share
          meals that spark joy. Whether you’re hunting for street food gems or
          gourmet dining, Foodie lights the way to your next unforgettable bite.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
