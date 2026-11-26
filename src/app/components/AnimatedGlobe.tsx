import { useEffect, useRef } from "react";

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: { 
      x: number; 
      y: number; 
      z: number; 
      baseAngle: number; 
      basePhi: number; 
      size: number;
      speed: number;
    }[] = [];
    
    // Create an abstract globe using particles
    const particleCount = 800;
    const radius = Math.min(width, height) * 0.45;
    
    for (let i = 0; i < particleCount; i++) {
      // Golden ratio spiral for even distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      particles.push({
        x: 0,
        y: 0,
        z: 0,
        baseAngle: theta,
        basePhi: phi,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.5
      });
    }

    let time = 0;

    const draw = () => {
      // Create trailing effect for flowing motion
      ctx.fillStyle = 'rgba(250, 250, 250, 0.2)'; // Match bg-[#fafafa] with trail
      ctx.fillRect(0, 0, width, height);
      
      time += 0.003;

      const centerX = width / 2;
      const centerY = height / 2;

      // Sort particles by Z-index to draw back-to-front
      const projectedParticles = particles.map((p) => {
        // Dynamic flowing motion applied to angles
        const currentAngle = p.baseAngle + time * p.speed;
        const wave = Math.sin(time * 3 + p.basePhi * 4) * 0.1;
        const currentPhi = p.basePhi + wave;

        const currentX = radius * Math.sin(currentPhi) * Math.cos(currentAngle);
        const currentY = radius * Math.cos(currentPhi);
        const currentZ = radius * Math.sin(currentPhi) * Math.sin(currentAngle);

        const perspective = 1000;
        const scale = perspective / (perspective + currentZ);
        
        return {
          ...p,
          projX: centerX + currentX * scale,
          projY: centerY + currentY * scale,
          scale,
          z: currentZ,
          ratioZ: (currentZ + radius) / (radius * 2), // 0 (back) to 1 (front)
          ratioY: (currentY + radius) / (radius * 2), // 0 (top) to 1 (bottom)
        };
      }).sort((a, b) => b.z - a.z);

      projectedParticles.forEach((p) => {
        // High-tech flowing gradient based on position and time
        const hue1 = 78;  // #01CD86 equivalent hue
        const hue2 = 177; // #606872 equivalent hue
        
        // Blend colors based on Y position and time wave
        const colorBlend = (Math.sin(p.ratioY * Math.PI + time * 5) + 1) / 2;
        const isPrimary = colorBlend > 0.5;
        
        const opacity = Math.max(0.05, p.ratioZ * 0.8);
        
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, p.size * p.scale, 0, Math.PI * 2);
        
        if (isPrimary) {
          ctx.fillStyle = `rgba(1, 205, 134, ${opacity})`;
        } else {
          ctx.fillStyle = `rgba(0, 160, 152, ${opacity})`;
        }
        ctx.fill();
        
        // Add subtle glow to front particles
        if (p.ratioZ > 0.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = isPrimary ? '#01CD86' : '#606872';
        } else {
          ctx.shadowBlur = 0;
        }
      });
      
      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-80"
        style={{ mixBlendMode: 'multiply' }}
      />
      {/* Dynamic gradient overlay to enhance high-tech feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/50 to-[#fafafa]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fafafa_70%)]" />
    </div>
  );
}
