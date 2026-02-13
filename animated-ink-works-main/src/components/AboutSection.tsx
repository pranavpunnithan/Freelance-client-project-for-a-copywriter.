import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const paragraphs = [
    "I believe every word on a page should serve a purpose.",
    "I'm a Copywriter specializing in ad content writing — clear, persuasive copy designed to capture attention, communicate value, and prompt action.",
    "For me, it's all about clarity and consistency. I make sure your messaging aligns perfectly with your brand's unique voice and, more importantly, meets the expectations of your audience.",
    "Whether we are building a website from scratch or launching a new ad campaign, I'm here to help you present your business confidently and professionally across every platform.",
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-48 px-4 sm:px-6 overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* ===== SECTION HEADER — ALWAYS VISIBLE ===== */}
        <motion.span
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.span>
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          About{" "}
          <span className="text-gradient-gold">Me</span>
        </motion.h2>

        <div className="space-y-6 md:space-y-8">
          {paragraphs.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.p
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-serif ${i === 0 ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                initial={{ filter: "blur(6px)" }}
                whileInView={{ filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 + 0.15 }}
              >
                {i === 0 ? (
                  text.split(" ").map((word, wi) => (
                    <motion.span
                      key={wi}
                      className="inline-block mr-[0.3em]"
                      initial={{ opacity: 0, y: 25, rotateX: 40 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + wi * 0.06 }}
                    >
                      {word}
                    </motion.span>
                  ))
                ) : (
                  text.split(" ").map((word, wi) => (
                    <motion.span
                      key={wi}
                      className="inline-block mr-[0.25em]"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.12 + wi * 0.02 }}
                    >
                      {word}
                    </motion.span>
                  ))
                )}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Scroll-driven progress line */}
        <motion.div className="mt-12 md:mt-16 h-[1px] bg-primary/20 relative overflow-hidden">
          <motion.div className="absolute inset-y-0 left-0 bg-primary/40" style={{ width: lineWidth }} />
        </motion.div>
      </div>

      <div className="section-divider mt-20 md:mt-32 mx-auto max-w-6xl" />
    </section>
  );
};

export default AboutSection;
