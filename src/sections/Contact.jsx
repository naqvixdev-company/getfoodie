// "use client";
// import React, { useState } from "react";
// import { FiSend } from "react-icons/fi";

// const Contact = () => {
//   const [focusedInput, setFocusedInput] = useState(null);

//   const handleFocus = (id) => setFocusedInput(id);
//   const handleBlur = () => setFocusedInput(null);

//   return (
//     <section
//       id="contact"
//       className="relative w-screen flex flex-col items-center md:mt-30 py-10 overflow-hidden"
//     >
//       {/* Left Bottom Radiant Glow for Section */}
//       <div className="absolute bottom-0 left-0 -z-10">
//         <div className="w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 blur-[180px] opacity-30 rounded-full" />
//       </div>

//       {/* Heading */}
//       <div className="flex flex-col w-full px-4">
//         <h2 className="text-5xl vodka-font md:text-7xl text-center font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">
//           Get in Touch
//         </h2>
//         <p className="text-center text-lg text-zinc-300">
//           Have a question or collaboration in mind? Let’s talk. Starts here.
//         </p>
//       </div>

//       {/* Form */}
//       <form className="md:w-1/2 w-full flex flex-col items-center justify-center p-4 mt-5 gap-5">
//         {/* Name Input */}
//         <div className="relative w-full">
//           {focusedInput === "name" && (
//             <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
//           )}
//           <input
//             type="text"
//             placeholder="Name:"
//             onFocus={() => handleFocus("name")}
//             onBlur={handleBlur}
//             className="p-4 border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="relative w-full">
//           {focusedInput === "email" && (
//             <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
//           )}
//           <input
//             type="text"
//             placeholder="Email:"
//             onFocus={() => handleFocus("email")}
//             onBlur={handleBlur}
//             className="p-4 border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
//           />
//         </div>

//         {/* Message Input */}
//         <div className="relative w-full">
//           {focusedInput === "message" && (
//             <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
//           )}
//           <textarea
//             placeholder="Message or any suggestion ..."
//             onFocus={() => handleFocus("message")}
//             onBlur={handleBlur}
//             className="p-4 h-[200px] border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
//           />
//         </div>

//         {/* Submit Button */}
//         <button className="w-full p-4 flex items-center justify-center gap-2 text-md text-white font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300">
//           Send Message <FiSend className="text-lg" />
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
"use client";
import React, { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  const handleFocus = (id) => setFocusedInput(id);
  const handleBlur = () => setFocusedInput(null);

  // Animation variants
  const glowVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.3, scale: 1, transition: { duration: 1 } },
  };

  const fieldVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-screen flex flex-col items-center md:mt-30 py-10 overflow-hidden"
    >
      {/* Left Bottom Radiant Glow for Section */}
      <motion.div
        className="absolute bottom-0 left-0 -z-10"
        variants={glowVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 blur-[180px] rounded-full" />
      </motion.div>

      {/* Heading */}
      <motion.div
        className="flex flex-col w-full px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-5xl vodka-font md:text-7xl text-center font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-zinc-300">
          Have a question or collaboration in mind? Let’s talk. Starts here.
        </p>
      </motion.div>

      {/* Form */}
      <form className="md:w-1/2 w-full flex flex-col items-center justify-center p-4 mt-5 gap-5">
        {/* Name Input */}
        <motion.div
          className="relative w-full"
          variants={fieldVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          {focusedInput === "name" && (
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
          )}
          <input
            type="text"
            placeholder="Name:"
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className="p-4 border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          className="relative w-full"
          variants={fieldVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          {focusedInput === "email" && (
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
          )}
          <input
            type="text"
            placeholder="Email:"
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className="p-4 border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div
          className="relative w-full"
          variants={fieldVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
        >
          {focusedInput === "message" && (
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 blur-[100px] opacity-50 pointer-events-none" />
          )}
          <textarea
            placeholder="Message or any suggestion ..."
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            className="p-4 h-[200px] border border-white/20 outline-none w-full bg-white/5 backdrop-blur-sm text-white rounded-md"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={fieldVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
          className="w-full p-4 flex items-center justify-center gap-2 text-md text-white font-semibold rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300"
        >
          Send Message <FiSend className="text-lg" />
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
