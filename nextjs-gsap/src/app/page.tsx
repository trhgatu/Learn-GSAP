"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scene",         // section cần pin
        start: "top top",          // bắt đầu khi chạm top viewport
        end: "+=1000",             // kéo dài 1000px scroll
        scrub: true,               // animation bám theo scroll
        pin: true,                 // giữ .scene cố định trong lúc scroll
        markers: true              // debug
      }
    });

    // Xoay từng box theo thứ tự
    tl.to(".purple", { rotation: 360 });
    tl.to(".green", { rotation: 360 });
    tl.to(".yellow", { rotation: 360 });
    tl.to(".gray", { rotation: 360 });
  }, { scope: container });

  return (
    <section ref={container} className="h-[300vh] bg-gray-100">
      <div className="bg-blue-500 w-full h-[100vh] flex items-center justify-center text-white text-2xl">
        Scroll xuống để xem pin + scrub
      </div>

      {/* SECTION BỊ PIN + SCRUB */}
      <div className="scene bg-gray-50 pt-20 flex justify-around w-full h-[100vh] items-center">
        <div className="box rounded-lg purple h-[100px] w-[100px] bg-purple-500" />
        <div className="box rounded-lg green h-[100px] w-[100px] bg-green-400" />
        <div className="box rounded-lg yellow h-[100px] w-[100px] bg-yellow-400" />
        <div className="box rounded-lg gray h-[100px] w-[100px] bg-gray-400" />
      </div>

      <div className="bg-blue-500 w-full h-[100vh]" />
    </section>
  );
}
