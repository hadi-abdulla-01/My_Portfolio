import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import svgPaths from "../lib/svg-paths";

interface ControlPoint {
  x: number;
  y: number;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();
  const velocityRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 300, y: 300 });
  const mousePositionRef = useRef({ x: 300, y: 300 });

  const [maskUrl, setMaskUrl] = useState<string>('');
  const [mousePosition, setMousePosition] = useState({ x: 300, y: 300 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Track image loading
  useEffect(() => {
    let count = 0;
    const totalImages = 2;

    const img1 = new Image();
    const img2 = new Image();

    img1.onload = () => {
      count++;
      setLoadedCount(count);
      if (count === totalImages) setImagesLoaded(true);
    };

    img2.onload = () => {
      count++;
      setLoadedCount(count);
      if (count === totalImages) setImagesLoaded(true);
    };

    img1.src = '/hero-layer-bottom.png';
    img2.src = '/hero-layer-top.png';
  }, []);


  // Initialize offscreen canvas
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = 600;
      offscreenCanvas.height = 600;
      offscreenCanvasRef.current = offscreenCanvas;
    }
  }, []);

  // Mouse and Touch tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        mousePositionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current && e.touches.length > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        setMousePosition({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top
        });
        mousePositionRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (containerRef.current && e.touches.length > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        setMousePosition({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top
        });
        mousePositionRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      }
    };

    const container = containerRef.current;
    if (container) {
      // Mouse events
      container.addEventListener('mousemove', handleMouseMove);
      // Touch events
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, []);

  // Draw blob function
  const drawBlob = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    time: number,
    seed: number,
    stretchX: number,
    stretchY: number
  ) => {
    const controlPoints: ControlPoint[] = [];
    const numPoints = 120;

    // Generate control points
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;

      // Calculate velocity-based stretching
      const stretchMagnitude = Math.sqrt(stretchX * stretchX + stretchY * stretchY);
      const stretchAngle = Math.atan2(stretchY, stretchX);
      const angleDiff = angle - stretchAngle;
      const stretchCurve = Math.cos(angleDiff);
      const smoothStretch = Math.pow((stretchCurve + 1) / 2, 3);
      const stretchFactor = smoothStretch * stretchMagnitude * 0.15;
      const stretchMod = 1 + stretchFactor;

      // Organic distortion formula
      const radiusVariation = radius * stretchMod * (
        0.85 +
        Math.sin(angle * 3 + time * 0.4 + seed) * 0.12 +
        Math.sin(angle * 5 + time * 0.6 + seed * 1.3) * 0.08 +
        Math.sin(angle * 7 + time * 0.25 + seed * 0.7) * 0.06 +
        Math.sin(angle * 2 + time * 0.15 + seed * 2) * 0.04
      );

      controlPoints.push({
        x: x + Math.cos(angle) * radiusVariation,
        y: y + Math.sin(angle) * radiusVariation
      });
    }

    // Draw smooth bezier curves through all points
    ctx.beginPath();
    ctx.moveTo(controlPoints[0].x, controlPoints[0].y);

    for (let i = 0; i < numPoints; i++) {
      const current = controlPoints[i];
      const next = controlPoints[(i + 1) % numPoints];
      const nextNext = controlPoints[(i + 2) % numPoints];

      // Calculate bezier control points
      const cp1x = current.x + (next.x - current.x) * 0.7;
      const cp1y = current.y + (next.y - current.y) * 0.7;
      const cp2x = next.x - (nextNext.x - current.x) * 0.05;
      const cp2y = next.y - (nextNext.y - current.y) * 0.05;

      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
    }

    ctx.closePath();
    ctx.fill();
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const offscreenCanvas = offscreenCanvasRef.current;
    if (!canvas || !offscreenCanvas) return;

    const ctx = canvas.getContext('2d');
    const offscreenCtx = offscreenCanvas.getContext('2d');
    if (!ctx || !offscreenCtx) return;

    const animate = () => {
      // Update time
      timeRef.current += 0.04;

      // Calculate velocity
      const dx = mousePositionRef.current.x - prevMouseRef.current.x;
      const dy = mousePositionRef.current.y - prevMouseRef.current.y;
      velocityRef.current.x = dx * 0.2 + velocityRef.current.x * 0.8;
      velocityRef.current.y = dy * 0.2 + velocityRef.current.y * 0.8;
      prevMouseRef.current = { x: mousePositionRef.current.x, y: mousePositionRef.current.y };

      // Clear main canvas
      ctx.clearRect(0, 0, 600, 600);

      // Draw main center blob
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      const mainRadius = 90 + Math.sin(timeRef.current * 0.8) * 8;
      drawBlob(
        ctx,
        300,
        300,
        mainRadius,
        timeRef.current,
        0,
        velocityRef.current.x * 1.2,
        velocityRef.current.y * 1.2
      );

      // Apply contrast using offscreen canvas
      offscreenCtx.filter = 'contrast(30)';
      offscreenCtx.clearRect(0, 0, 600, 600);
      offscreenCtx.drawImage(canvas, 0, 0);

      // Convert to data URL
      const maskDataUrl = offscreenCanvas.toDataURL();
      setMaskUrl(maskDataUrl);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {!imagesLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
        >
          <div className="text-center">
            {/* Animated Logo/Name */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="font-['Syne',sans-serif] font-bold text-4xl md:text-6xl text-white mb-2">
                Mohammed Hadi
              </h1>
              <p className="font-['Syne',sans-serif] text-lg md:text-xl text-gray-400">
                Abdulla
              </p>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-4 border-4 border-white/20 border-t-white rounded-full"
            />

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['Rubik',sans-serif] text-white/60 text-sm"
            >
              Loading experience... {Math.round((loadedCount / 2) * 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Main Hero Content */}
      <div
        id="hero"
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden lg:cursor-none"
      >
        {/* Hidden canvas for drawing blob */}
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          className="absolute pointer-events-none"
          style={{ top: '-9999px' }}
        />

        {/* Bottom Image - Always Visible */}
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/hero-layer-bottom.png"
            alt="Bottom layer"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Top Image - Masked by Cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: maskUrl ? `url(${maskUrl})` : 'none',
            maskImage: maskUrl ? `url(${maskUrl})` : 'none',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '600px 600px',
            maskSize: '600px 600px'
          }}
          animate={{
            WebkitMaskPosition: `${mousePosition.x - 300}px ${mousePosition.y - 300}px`,
            maskPosition: `${mousePosition.x - 300}px ${mousePosition.y - 300}px`
          }}
          transition={{
            type: 'tween',
            duration: 0.1,
            ease: 'linear'
          }}
        >
          <img
            src="/hero-layer-top.png"
            alt="Top layer"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        {/* Decorative SVG Blur Elements */}
        <div className="absolute flex h-[288.088px] items-center justify-center left-[-41px] top-[81px] w-[524.932px] pointer-events-none hidden lg:flex" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[181.682deg]">
            <div className="h-[273.029px] relative w-[517.142px]">
              <div className="absolute inset-[-73.25%_-38.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917.142 673.029">
                  <g filter="url(#filter0_f_1_92)" id="Vector 6">
                    <path d={svgPaths.p3e0ce400} fill="white" fillOpacity="0.18" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="673.029" id="filter0_f_1_92" width="917.142" x="3.28046e-07" y="-2.87312e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_92" stdDeviation="100" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex h-[189.899px] items-center justify-center left-[754px] top-[624px] w-[346.019px] pointer-events-none hidden lg:flex" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[181.682deg]">
            <div className="h-[179.972px] relative w-[340.884px]">
              <div className="absolute inset-[-111.13%_-58.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 740.884 579.972">
                  <g filter="url(#filter0_f_1_90)" id="Vector 7">
                    <path d={svgPaths.p4a9f700} fill="white" fillOpacity="0.2" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="579.972" id="filter0_f_1_90" width="740.884" x="-9.4129e-07" y="6.19458e-08">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="100" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layer - Above Everything */}
        <div className="relative z-10 pointer-events-none">
          {/* Header/Navigation */}
          <header className="w-full">
            {/* Desktop Navigation - Exact Figma positioning */}
            <div className="hidden lg:block pointer-events-auto">
              <button onClick={() => scrollToSection("about")} className="absolute font-['Rubik',sans-serif] font-medium opacity-50 text-[14px] text-white uppercase hover:opacity-100 transition-opacity left-[806px] top-[57px]">
                ABOUT ME
              </button>
              <button onClick={() => scrollToSection("skills")} className="absolute font-['Rubik',sans-serif] font-medium opacity-50 text-[14px] text-white uppercase hover:opacity-100 transition-opacity left-[912px] top-[57px]">
                SKILLS
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="absolute font-['Rubik',sans-serif] font-medium opacity-50 text-[14px] text-white uppercase hover:opacity-100 transition-opacity left-[1008px] top-[57px]">
                PORTFOLIO
              </button>
              <button onClick={() => scrollToSection("contact")} className="absolute bg-[rgba(3,3,4,0.5)] border-2 border-[rgba(255,255,255,0.3)] rounded-[30px] h-[47px] w-[138px] flex items-center justify-center font-['Rubik',sans-serif] font-bold opacity-80 text-[14px] text-white uppercase hover:opacity-100 hover:bg-[rgba(3,3,4,0.7)] transition-all left-[1135px] top-[42px]">
                CONTACT
              </button>
            </div>

            {/* Mobile/Tablet Navigation */}
            <nav className="lg:hidden flex items-center justify-between px-4 md:px-8 py-6 md:py-10 pointer-events-auto">
              <div className="flex items-center gap-4">
                <button onClick={() => scrollToSection("about")} className="font-['Rubik',sans-serif] font-medium opacity-50 text-[14px] text-white uppercase hover:opacity-100 transition-opacity hidden md:block">
                  ABOUT ME
                </button>
                <button onClick={() => scrollToSection("skills")} className="font-['Rubik',sans-serif] font-medium opacity-50 text-[14px] text-white uppercase hover:opacity-100 transition-opacity hidden md:block">
                  SKILLS
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 mx-4 md:mx-8 bg-[rgba(3,3,4,0.9)] backdrop-blur-md rounded-lg p-6 pointer-events-auto">
                <div className="flex flex-col gap-4">
                  <button onClick={() => scrollToSection("about")} className="font-['Rubik',sans-serif] opacity-80 text-[14px] text-white uppercase hover:opacity-100 transition-opacity py-2">
                    ABOUT ME
                  </button>
                  <button onClick={() => scrollToSection("skills")} className="font-['Rubik',sans-serif] opacity-80 text-[14px] text-white uppercase hover:opacity-100 transition-opacity py-2">
                    SKILLS
                  </button>
                  <button onClick={() => scrollToSection("portfolio")} className="font-['Rubik',sans-serif] opacity-80 text-[14px] text-white uppercase hover:opacity-100 transition-opacity py-2">
                    PORTFOLIO
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="font-['Rubik',sans-serif] opacity-80 text-[14px] text-white uppercase hover:opacity-100 transition-opacity py-2">
                    CONTACT
                  </button>
                </div>
              </div>
            )}
          </header>

          {/* Hero Content - Desktop: Exact Figma positioning, Mobile/Tablet: Responsive */}
          <div>
            {/* Desktop Layout - Exact Figma positions */}
            <h1 className="hidden lg:block absolute font-['Syne',sans-serif] font-bold leading-[normal] left-[147px] right-[146px] text-[64px] text-center text-white top-[162px]">
              Mohammed Hadi Abdulla
            </h1>
            <div className="hidden lg:block absolute font-['Syne',sans-serif] font-bold leading-[normal] left-[96px] right-[146px] text-[33px] text-center text-white top-[234px]">
              <p className="mb-0">BTech CSE (AI & ML) Student | Aspiring AI/ML Developer</p>
              <p>&nbsp;</p>
            </div>

            {/* Mobile/Tablet Layout - Responsive */}
            <div className="lg:hidden px-4 md:px-8">
              <h1 className="font-['Syne',sans-serif] font-bold text-center text-white text-3xl md:text-5xl leading-tight mb-4 md:mb-6 mt-8 md:mt-16">
                Mohammed Hadi Abdulla
              </h1>
              <p className="font-['Syne',sans-serif] font-bold text-center text-white text-lg md:text-2xl leading-normal">
                BTech CSE (AI & ML) Student | Aspiring AI/ML Developer
              </p>
            </div>

            {/* Social Media Buttons - Desktop */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 top-[320px] gap-4 pointer-events-auto">
              <motion.a
                href="mailto:mhadiabdulla4@gmail.com?subject=Hello Mohammed&body=Hi Mohammed, I would like to connect with you."
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/hadi-abdulla-01/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-hadi-abdulla-4033782b5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>

            {/* Social Media Buttons - Mobile/Tablet */}
            <div className="lg:hidden flex justify-center gap-4 px-4 md:px-8 mt-6 pointer-events-auto">
              <motion.a
                href="mailto:mhadiabdulla4@gmail.com?subject=Hello Mohammed&body=Hi Mohammed, I would like to connect with you."
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/hadi-abdulla-01/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-hadi-abdulla-4033782b5/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md border border-white/30"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
