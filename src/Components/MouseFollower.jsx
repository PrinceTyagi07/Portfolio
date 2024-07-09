// src/components/MouseFollower.js

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Expo, Power3 } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import './MouseFollower.css';

const MouseFollower = () => {
  const [xscale, setXscale] = useState(1);
  const [yscale, setYscale] = useState(1);
  const [xprev, setXprev] = useState(0);
  const [yprev, setYprev] = useState(0);
  const timeoutRef = useRef(null);
  const minicircleRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

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
        minicircleRef.current.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xprev, yprev]);

  const circleMouseFollower = (xscale, yscale, clientX, clientY) => {
    minicircleRef.current.style.transform = `translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
  };

  // useEffect(() => {
  //   document.querySelectorAll(".elem").forEach((elem) => {
  //     let rotate = 0;
  //     let diffrot = 0;

  //     elem.addEventListener("mouseleave", () => {
  //       gsap.to(elem.querySelector("img"), {
  //         opacity: 0,
  //         ease: Power3,
  //         duration: 0.5,
  //       });
  //     });

  //     elem.addEventListener("mousemove", (dets) => {
  //       const diff = dets.clientY - elem.getBoundingClientRect().top;
  //       diffrot = dets.clientX - rotate;
  //       rotate = dets.clientX;
  //       gsap.to(elem.querySelector("img"), {
  //         opacity: 1,
  //         ease: Power3,
  //         top: diff,
  //         left: dets.clientX,
  //         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div>
      <div id="minicircle" ref={minicircleRef}></div>
      {/* Rest of your elements */}
      <div id="main">
        <div className="elem">
        </div>
      </div>
    </div>
  );
};

export default MouseFollower;
