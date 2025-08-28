// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { FaStar, FaSearch, FaHeart, FaWifi } from "react-icons/fa";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import VanillaTilt from "vanilla-tilt";

// gsap.registerPlugin(ScrollTrigger);

// const WhyUs = () => {
//   const sectionRef = useRef(null);
//   const img1WrapperRef = useRef(null);
//   const img2WrapperRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Text Animation
//       gsap.fromTo(
//         ".why-text",
//         { opacity: 0, x: -50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       // Images Animation (Left higher than Right)
//       gsap.fromTo(
//         img1WrapperRef.current,
//         { opacity: 0, y: 80 },
//         {
//           opacity: 1,
//           y: -20,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         img2WrapperRef.current,
//         { opacity: 0, y: 80 },
//         {
//           opacity: 1,
//           y: 15,
//           duration: 1,
//           delay: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       // Cards Animation
//       gsap.fromTo(
//         cardsRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     // VanillaTilt + Bulb effect
//     cardsRef.current.forEach((card) => {
//       if (card) {
//         VanillaTilt.init(card, {
//           max: 15,
//           speed: 300,
//           glare: true,
//           "max-glare": 0.3,
//         });

//         // Bulb glow
//         const bulb = document.createElement("div");
//         bulb.className =
//           "absolute w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300";
//         card.style.position = "relative";
//         card.appendChild(bulb);

//         card.addEventListener("mousemove", (e) => {
//           const rect = card.getBoundingClientRect();
//           const x = e.clientX - rect.left - 80;
//           const y = e.clientY - rect.top - 80;
//           bulb.style.transform = `translate(${x}px, ${y}px)`;
//           bulb.style.opacity = "1";
//         });

//         card.addEventListener("mouseleave", () => {
//           bulb.style.opacity = "0";
//         });
//       }
//     });

//     return () => ctx.revert();
//   }, []);

//   const reasons = [
//     {
//       icon: <FaStar size={24} />,
//       title: "Personalized Recommendations",
//       desc: "AI-driven suggestions based on your taste history.",
//     },
//     {
//       icon: <FaSearch size={24} />,
//       title: "Seamless Food Discovery",
//       desc: "Explore by cuisine, mood, or trending dishes.",
//     },
//     {
//       icon: <FaHeart size={24} />,
//       title: "Real Reviews by Real Foodies",
//       desc: "Every review is verified for authenticity.",
//     },
//     {
//       icon: <FaWifi size={24} />,
//       title: "Offline Access",
//       desc: "View your saved spots even without internet.",
//     },
//   ];

//   return (
//     <section
//       id="why-us"
//       ref={sectionRef}
//       className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-20"
//     >
//       {/* Left Content */}
//       <div className="flex flex-col gap-6 md:w-1/2 why-text">
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">
//           Why Foodies Choose Foodie
//         </h2>
//         <p className="text-lg text-gray-300">
//           Discover, rate, and share meals you’ll never forget.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
//           {reasons.map((reason, i) => (
//             <div
//               key={i}
//               ref={(el) => (cardsRef.current[i] = el)}
//               className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-yellow-400/70 transition-all duration-300 text-white overflow-hidden"
//             >
//               <div className="mb-3 text-yellow-400">{reason.icon}</div>
//               <h3 className="font-semibold mb-1">{reason.title}</h3>
//               <p className="text-sm text-gray-300">{reason.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Images */}
//       <div className="relative flex items-center justify-center md:w-1/2 gap-10">
//         {/* Glow behind images */}
//         <div className="absolute w-72 h-72 bg-yellow-400/30 blur-3xl rounded-full"></div>

//         {/* Left Image Wrapper */}
//         <div ref={img1WrapperRef} className="relative z-10">
//           <Image
//             src="/why3.png"
//             alt="App Screenshot 1"
//             width={220}
//             height={400}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Right Image Wrapper */}
//         <div ref={img2WrapperRef} className="relative z-20">
//           <Image
//             src="/why2.png"
//             alt="App Screenshot 2"
//             width={220}
//             height={400}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaStar, FaSearch, FaHeart, FaWifi } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
import VideoSection from './videoSection';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const img1WrapperRef = useRef(null);
  const img2WrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text
      gsap.fromTo(
        '.why-text',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'restart reverse restart reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Images (left ends higher than right)
      gsap.fromTo(
        img1WrapperRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: -20, // left higher
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'restart reverse restart reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        img2WrapperRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 15, // right lower
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'restart reverse restart reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      // Cards
      const cards = cardsRef.current.filter(Boolean);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'restart reverse restart reverse',
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    // Tilt + Bulb glow on cards
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card) => {
      if (!card) return;

      // VanillaTilt
      VanillaTilt.init(card, {
        max: 15,
        speed: 300,
        glare: true,
        'max-glare': 0.3,
      });

      // Bulb setup
      const bulb = document.createElement('div');
      bulb.className =
        'absolute w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none opacity-0 transition-opacity duration-300';
      card.style.position = 'relative';
      card.appendChild(bulb);

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - 80;
        const y = e.clientY - rect.top - 80;
        bulb.style.transform = `translate(${x}px, ${y}px)`;
        bulb.style.opacity = '1';
      };
      const onLeave = () => {
        bulb.style.opacity = '0';
      };

      // Store refs for cleanup
      card.__bulb = bulb;
      card.__onMove = onMove;
      card.__onLeave = onLeave;

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });

    return () => {
      ctx.revert();

      // Clean up tilt + listeners + bulbs
      cards.forEach((card) => {
        try {
          card.removeEventListener('mousemove', card.__onMove);
          card.removeEventListener('mouseleave', card.__onLeave);
          if (card.__bulb && card.contains(card.__bulb)) {
            card.removeChild(card.__bulb);
          }
          card.__bulb = null;
          card.__onMove = null;
          card.__onLeave = null;
          card.vanillaTilt?.destroy();
        } catch {}
      });
    };
  }, []);

  const reasons = [
    {
      icon: <FaStar size={24} />,
      title: 'Personalized Recommendations',
      desc: 'AI-driven suggestions based on your taste history.',
    },
    {
      icon: <FaSearch size={24} />,
      title: 'Seamless Food Discovery',
      desc: 'Explore by cuisine, mood, or trending dishes.',
    },
    {
      icon: <FaHeart size={24} />,
      title: 'Real Reviews by Real Foodies',
      desc: 'Every review is verified for authenticity.',
    },
    {
      icon: <FaWifi size={24} />,
      title: 'Offline Access',
      desc: 'View your saved spots even without internet.',
    },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="w-full bg-amber-300 rounded-2xl   overflow-x-hidden   flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-16 py-10"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6 lg:w-1/2 why-text">
        <h2 className="text-5xl vodka-font md:text-5xl font-bold text-black  bg-clip-text ">
          Why Foodies Choose Foodie
        </h2>
        <p className="text-lg text-gray-900">
          Discover, rate, and share meals you’ll never forget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          {reasons.map((reason, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="p-5 rounded-xl bg-black/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-yellow-400/70 transition-all duration-300 text-white overflow-hidden"
            >
              <div className="mb-3 text-orange-400">{reason.icon}</div>
              <h3 className="font-semibold mb-1">{reason.title}</h3>
              <p className="text-sm text-white">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Images */}
      <div className="relative flex items-center justify-center mt-10 lg:mt-0 lg:w-1/2 gap-10">
        {/* Glow behind images */}
        {/* <div className="absolute w-120 h-120 bg-yellow-400/30 blur-3xl rounded-full"></div> */}

        <div
          ref={img1WrapperRef}
          className="relative z-10 group transition-transform duration-300 will-change-transform cursor-pointer hover:scale-115"
        >
          <VideoSection />
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
