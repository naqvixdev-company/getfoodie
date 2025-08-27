"use client"
// import Image from 'next.js/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Hero = () => {
  const glowRef = useRef(null);
  const letterLine1Refs = useRef([]);
  const letterLine2Refs = useRef([]);
  const paraRef = useRef(null);

  const headingLine1 = 'Your Personal';
  const headingLine2 = 'Food Guide';

  useEffect(() => {
    // Ensure refs arrays have correct length
    letterLine1Refs.current = letterLine1Refs.current.slice(0, headingLine1.length);
    letterLine2Refs.current = letterLine2Refs.current.slice(0, headingLine2.length);

    // Filter out null refs to avoid GSAP errors
    const validLine1Refs = letterLine1Refs.current.filter(ref => ref !== null);
    const validLine2Refs = letterLine2Refs.current.filter(ref => ref !== null);

    // Only proceed if we have valid refs
    if (validLine1Refs.length === 0 || validLine2Refs.length === 0) {
      console.warn('Some letter refs are null, animation may not work properly');
      return;
    }

    // Initial state - make sure all elements exist before animating
    if (glowRef.current) {
      gsap.set(glowRef.current, { opacity: 0, scale: 0.85 });
    }
    
    if (paraRef.current) {
      gsap.set(paraRef.current, { opacity: 0, y: 24 });
    }
    
    // Hide all letters initially
    gsap.set([...validLine1Refs, ...validLine2Refs], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // 1) Glow appears
    if (glowRef.current) {
      tl.to(glowRef.current, { opacity: 0.55, scale: 1, duration: 1.2 });
    }

    // 2) Typing animation for first line
    tl.to(
      validLine1Refs,
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.06,
      },
      '-=0.5'
    );

    // 3) Typing animation for second line
    tl.to(
      validLine2Refs,
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.06,
      },
      '+=0.2'
    );

    // 4) Paragraph fade + slide up (if paragraph exists)
    if (paraRef.current) {
      tl.to(paraRef.current, { opacity: 1, y: 0, duration: 0.7 }, '+=0.3');
    }

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []); // Remove dependencies to avoid re-running

  return (
    <section className="w-screen h-[70vh] md:h-screen flex flex-col items-center relative overflow-hidden">
      {/* Top bar */}
      <div className="flex w-full justify-between items-center p-4">
        <Image src="/logo.jpg" width={70} height={70} alt="logo" />
        <button className="px-5 py-2 bg-white rounded-full text-black text-sx">
          Try Free
        </button>
      </div>

      {/* Center Content */}
      <div className="flex h-full justify-center mt-10 md:mt-20 flex-col items-center w-fit relative">
        {/* Glow behind heading - changed to yellow */}
        {/* <div
          ref={glowRef}
          className="absolute top-8 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 
             w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-orange-400
             rounded-full blur-[150px] opacity-50 z-0"
        /> */}

        {/* Heading container */}
        <div className="relative z-10 leading-none text-center">
          {/* First Line - changed to yellow */}
          <h1 className="text-[15vw] md:text-[8vw] lg:text-[7vw] vodka-font font-bold text-black select-none flex justify-center">
            {headingLine1.split('').map((char, i) => (
              <span
                key={`line1-${i}`}
                ref={(el) => {
                  if (el) letterLine1Refs.current[i] = el;
                }}
                className="inline-block"
                style={{ lineHeight: 1 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* Second Line - changed to yellow */}
          <h1 className="text-[15vw] md:text-[8vw] lg:text-[7vw] vodka-font font-bold text-black select-none -mt-2 md:-mt-4 flex justify-center">
            {headingLine2.split('').map((char, i) => (
              <span
                key={`line2-${i}`}
                ref={(el) => {
                  if (el) letterLine2Refs.current[i] = el;
                }}
                className="inline-block"
                style={{ lineHeight: 1 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

      </div>

      {/* Fixed burger image with proper sizing and quality settings */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full md:w-[80%] max-w-[800px]">
        <Image
          src="/hero2.png"
          width={800}
          height={800}
          alt="Burger Man"
          className="w-full h-[60vh] md:h-[90vh] object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;