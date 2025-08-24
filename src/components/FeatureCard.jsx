'use client';
import React, { useRef } from 'react';

const FeatureCard = ({ heading, para }) => {
  const glowRef = useRef(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    const card = cardRef.current;
    if (!glow || !card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Glow follows the cursor
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,200,100,0.3), transparent 60%)`;

    // Tilt effect
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = 'transparent';
    if (cardRef.current)
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className="relative max-w-lg p-6 rounded-xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/5 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow layer */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition duration-300"
      />

      {/* Heading with gradient */}
      <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-600 bg-clip-text text-transparent mb-3">
        {heading}
      </h4>

      {/* Description */}
      <p className="text-zinc-300 leading-relaxed">{para}</p>
    </div>
  );
};

export default FeatureCard;
