"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const lines: Array<{
      x1: number; y1: number; x2: number; y2: number;
      opacity: number; speed: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    // Create geometric lines
    for (let i = 0; i < 8; i++) {
      lines.push({
        x1: Math.random() * width,
        y1: Math.random() * height,
        x2: Math.random() * width,
        y2: Math.random() * height,
        opacity: Math.random() * 0.08 + 0.02,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Draw subtle grid
      ctx.strokeStyle = "rgba(57, 255, 20, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${p.opacity})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(57, 255, 20, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw a subtle hexagon
      const cx = width / 2;
      const cy = height / 2;
      const r = Math.min(width, height) * 0.35;
      const pulse = Math.sin(tick * 0.01) * 0.02 + 0.04;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(57, 255, 20, ${pulse})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
