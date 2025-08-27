'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasInteracted) return;

    if (isInView) {
      video.play().catch((err) => console.log('Play failed:', err));
    } else {
      if (!video.paused) video.pause();
    }
  }, [isInView, hasInteracted]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play()
      .then(() => setHasInteracted(true))
      .catch((err) => console.log('Play failed:', err));
  };

  return (
    <div
      ref={containerRef}
      className="relative max-w-7xl mx-auto py-20 flex items-center justify-center"
    >
      <video
        ref={videoRef}
        className="w-full h-auto sm:h-[100vh] sm:w-[350px] object-cover rounded-lg shadow-4xl"
        playsInline
        preload="metadata"
        controls={false}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!hasInteracted && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl font-semibold rounded-lg"
        >
          ▶ Play 
        </button>
      )}
    </div>
  );
};

export default VideoSection;
