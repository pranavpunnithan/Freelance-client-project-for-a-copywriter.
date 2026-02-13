import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const floatingWords = ["clarity", "intent", "voice", "impact", "brand", "story"];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, hsl(42 60% 57% / 0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 80% 20%, hsl(270 50% 55% / 0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 80%, hsl(0 55% 50% / 0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse at 20% 50%, hsl(42 60% 57% / 0.08) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {floatingWords.map((word, i) => (
        <motion.span
          key={word}
          className="absolute font-serif text-muted-foreground/10 text-6xl md:text-8xl select-none pointer-events-none hidden md:block"
          style={{
            top: `${15 + i * 14}%`,
            left: `${5 + (i % 3) * 35}%`,
            x: springX,
            y: springY,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [-2, 2, -2],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        >
          {word}
        </motion.span>
      ))}

      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl">
        {/* Name — LARGE, NO UNDERLINE, premium spacing (LINE 1) */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-4 text-gradient-gold leading-[1]"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {"Amritha".split("").map((char, i) => (
            <motion.span
              key={`a-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
          <br className="md:hidden" />
          <span className="inline-block md:ml-4">{" "}</span>
          {"Ullas".split("").map((char, i) => (
            <motion.span
              key={`u-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 60, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.65 + i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role — directly below name (LINE 2) */}
        <motion.p
          className="font-sans text-xl md:text-3xl tracking-[0.12em] text-foreground/80 mb-14 font-medium"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Content Writer & Copywriter
        </motion.p>

        {/* Main headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-[0.95] mb-8">
          <AnimatedText text="Writing with" delay={1.0} type="words" />
          <br />
          <span className="text-gradient-gold">
            <AnimatedText text="intent," delay={1.3} type="letters" />
          </span>
          <br />
          <AnimatedText text="not just words." delay={1.6} type="words" />
        </h2>

        {/* Subtext */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {"Copywriter specializing in ad content writing — clear, persuasive copy designed to capture attention, communicate value, and prompt action.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.0 + i * 0.03 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.span
            className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="w-[1px] h-12 bg-primary/40"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
