'use client';

import { useEffect, useRef } from 'react';

/*
 * Decorative background video. The source is attached only when the video
 * nears the viewport, playback pauses when it scrolls away, and it never
 * autoplays for visitors who prefer reduced motion.
 */
export default function LazyVideo({ src, className = '', priority = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    video.muted = true;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let loaded = false;

    const load = () => {
      if (!loaded) {
        video.src = src;
        loaded = true;
      }
    };
    const play = () => {
      if (reduceMotion) return;
      const attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
    };

    if (!('IntersectionObserver' in window)) {
      load();
      play();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          play();
        } else if (loaded) {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
