"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { SiJavascript, SiTypescript, SiReact, SiAngular } from "react-icons/si";

type ParallaxItemProps = {
  children: React.ReactNode;
  x: string;
  y: string;
  speed: number;
  className?: string;
};

const ParallaxItem = ({ children, x, y, speed, className }: ParallaxItemProps) => {
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 1], [0, speed * 500]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        y: yMove,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const elements = [
    { Icon: SiJavascript, x: "10%", y: "15%", size: 40, speed: -0.2, color: "text-yellow-400/15" },
    { Icon: SiTypescript, x: "85%", y: "10%", size: 50, speed: -0.3, color: "text-blue-500/15" },
    { Icon: SiReact, x: "75%", y: "45%", size: 60, speed: -0.15, color: "text-cyan-400/15" },
    { Icon: SiAngular, x: "15%", y: "65%", size: 45, speed: -0.25, color: "text-red-600/15" },
    // Code symbols
    { content: "{ }", x: "20%", y: "30%", size: 24, speed: -0.1, color: "text-muted/15" },
    { content: "</>", x: "80%", y: "70%", size: 30, speed: -0.35, color: "text-muted/15" },
    { content: "=>", x: "40%", y: "85%", size: 28, speed: -0.2, color: "text-muted/15" },
    { content: "( )", x: "60%", y: "20%", size: 22, speed: -0.4, color: "text-muted/15" },
    { content: "[ ]", x: "50%", y: "50%", size: 26, speed: -0.12, color: "text-muted/15" },
  ];

  // Fixed particles seed for consistency between renders
  const particles = [
    { x: "5%", y: "25%", size: 4, speed: -0.15 },
    { x: "95%", y: "35%", size: 6, speed: -0.25 },
    { x: "45%", y: "15%", size: 3, speed: -0.1 },
    { x: "15%", y: "85%", size: 5, speed: -0.3 },
    { x: "85%", y: "75%", size: 4, speed: -0.2 },
    { x: "35%", y: "55%", size: 7, speed: -0.12 },
    { x: "65%", y: "65%", size: 3, speed: -0.4 },
    { x: "25%", y: "45%", size: 5, speed: -0.18 },
    { x: "75%", y: "25%", size: 4, speed: -0.22 },
    { x: "55%", y: "85%", size: 6, speed: -0.28 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" ref={containerRef}>
      {elements.map((el, i) => (
        <ParallaxItem key={`el-${i}`} x={el.x} y={el.y} speed={el.speed} className={el.color}>
          {el.Icon ? (
            <el.Icon size={el.size} />
          ) : (
            <span style={{ fontSize: el.size }} className="font-mono font-bold">
              {el.content}
            </span>
          )}
        </ParallaxItem>
      ))}

      {particles.map((p, i) => (
        <ParallaxItem key={`p-${i}`} x={p.x} y={p.y} speed={p.speed}>
          <div
            style={{
              width: p.size,
              height: p.size,
            }}
            className="rounded-full bg-muted/10"
          />
        </ParallaxItem>
      ))}
    </div>
  );
};

export default ParallaxBackground;
