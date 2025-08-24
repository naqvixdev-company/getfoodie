'use client';

// import Image from 'next.js/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Hero = () => {
  const glowRef = useRef(null);
  const baseHeadingRef = useRef(null);
  const letterRefs = useRef([]);
  const paraRef = useRef(null);

  const headingText = 'FOODIE';

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, headingText.length);

    // Initial state
    gsap.set(glowRef.current, { opacity: 0, scale: 0.85 });
    gsap.set(paraRef.current, { opacity: 0, y: 24 });
    gsap.set(baseHeadingRef.current, { opacity: 0 });

    gsap.set(letterRefs.current, {
      color: 'white',
      WebkitTextFillColor: 'white',
      backgroundImage: 'none',
      willChange: 'color, background-position',
      opacity: 1,
    });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // 1) Bulb glow faster
    tl.to(glowRef.current, { opacity: 0.55, scale: 1, duration: 1.2 });

    // 2) White FOODIE fade in faster
    tl.to(baseHeadingRef.current, { opacity: 1, duration: 0.6 }, '-=0.2');

    // 3) Switch to gradient
    tl.set(letterRefs.current, {
      backgroundImage: 'linear-gradient(90deg,#FACC15,#FB923C,#EA580C)',
      backgroundSize: '300% 100%',
      backgroundPositionX: '-200%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    });

    // 4) Gradient sweep faster
    tl.to(
      letterRefs.current,
      {
        backgroundPositionX: '0%',
        duration: 0.55,
        stagger: 0.1,
      },
      '+=0.15'
    );

    // 5) Fade out white base quickly
    tl.to(baseHeadingRef.current, { opacity: 0, duration: 0.3 }, '-=0.25');

    // 6) Paragraph fade + slide up
    tl.to(paraRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.05');
  }, []);

  return (
    <section className="w-screen h-[70vh]  md:h-screen flex flex-col  items-center relative overflow-hidden">
      {/* Top bar */}
      <div className="flex  w-full justify-between items-center p-4">
        <Image src="/logo.jpg" width={70} height={70} alt="logo" />
        <button className="px-5 py-2 bg-white rounded-full text-black text-sx">
          Try Free
        </button>
      </div>

      {/* Center Content */}
      <div className="flex h-full   justify-center mt-20 flex-col items-center w-fit relative">
        {/* Glow behind heading */}
        <div
          ref={glowRef}
          className="absolute top-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 
             w-[40vw] h-[40vw] bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 
             rounded-full blur-[150px] opacity-50 z-0"
        />

        {/* Heading container */}
        <div className="relative z-10 leading-none">
          {/* Base white heading */}
          <h1
            ref={baseHeadingRef}
            className="text-[20vw] vodka-font sm:text-[13vw] font-bold text-white select-none"
          >
            {headingText}
          </h1>

          {/* Gradient overlay heading */}
          <h1
            aria-hidden
            className="pointer-events-none absolute inset-0 flex font-bold text-[20vw] sm:text-[13vw] leading-none"
          >
            {headingText.split('').map((char, i) => (
              <span
                key={i}
                ref={(el) => (letterRefs.current[i] = el)}
                className="inline-block [-webkit-text-fill-color:transparent] vodka-font bg-clip-text"
                style={{ lineHeight: 1 }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subheading */}
        <div className="relative z-10 flex justify-center w-full">
          <div className="relative z-10 flex justify-center w-full">
            <p
              ref={paraRef}
              className="relative text-xl sm:text-4xl font-bold tracking-wider text-outline-black-orange w-[90%] sm:w-2/3 text-center"
            >
              Because great food deserves more than just a star rating.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed burger image with proper sizing and quality settings */}
      <div className="absolute bottom-0 sm:bottom-0 left-1/2 -translate-x-1/2 z-0 w-full md:w-[80%] max-w-[800px]">
        <Image
          src="/hero2.png"
          width={800}
          height={800}
          alt="Burger Man"
          className="w-full h-[90vh]  object-contain object-bottom "
        />
      </div>
    </section>
  );
};

export default Hero;
