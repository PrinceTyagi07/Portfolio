import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import './MouseFollower.css';

const MouseFollower = () => {
  const [xscale, setXscale] = useState(1);
  const [yscale, setYscale] = useState(1);
  const [xprev, setXprev] = useState(0);
  const [yprev, setYprev] = useState(0);
  const timeoutRef = useRef(null);
  const minicircleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const mainElement = document.querySelector("#main");

    if (!mainElement) {
      console.error("#main element not found.");
      return;
    }

   

    const handleMouseMove = (dets) => {
      clearTimeout(timeoutRef.current);

      const newXscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      const newYscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      setXscale(newXscale);
      setYscale(newYscale);
      setXprev(dets.clientX);
      setYprev(dets.clientY);

      circleMouseFollower(newXscale, newYscale, dets.clientX, dets.clientY);

      timeoutRef.current = setTimeout(() => {
        if (minicircleRef.current) {
          minicircleRef.current.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }
      }, 50);
    };

    const circleMouseFollower = (xscale, yscale, clientX, clientY) => {
      if (minicircleRef.current) {
        minicircleRef.current.style.transform =` translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // if (scroll.destroy) {
      //   scroll.destroy();
      // }
    };
  }, [xprev, yprev, isMobile]);

  if (isMobile) return null;

  return (
    <div>
      <div id="minicircle" ref={minicircleRef}></div>
      <div id="main">
      </div>
    </div>
  );
};

export default MouseFollower;