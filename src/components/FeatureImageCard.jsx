"use client";
import Image from "next/image";
import React from "react";

const FeatureImageCard = ({ img1, img2, alt1 = "Image 1", alt2 = "Image 2" }) => {
  return (
    <div className="relative flex gap-4 justify-center items-center">
      {/* Gradient Glow Behind Images */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 blur-[120px] opacity-50 rounded-full" />

      {/* First Image - slightly lower */}
      <div className="transform translate-y-4 hover:scale-105 transition duration-300">
        <Image
          src={img1}
          width={160}
          height={160}
          alt={alt1}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Second Image - slightly higher */}
      <div className="transform -translate-y-4 hover:scale-105 transition duration-300">
        <Image
          src={img2}
          width={160}
          height={160}
          alt={alt2}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureImageCard;
