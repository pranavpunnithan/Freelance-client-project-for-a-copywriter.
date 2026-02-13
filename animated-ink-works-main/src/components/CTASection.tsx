import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <section ref={ref} className="relative py-24 md:py-48 px-4 sm:px-6 overflow-hidden" id="contact">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, hsl(42 60% 57% / 0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 70% 50%, hsl(270 50% 55% / 0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 50%, hsl(42 60% 57% / 0.06) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ scale, opacity, rotateX, perspective: 1000 }} className="max-w-4xl mx-auto text-center relative z-10">
        {/* ===== SECTION HEADER — ALWAYS VISIBLE ===== */}
        <motion.span
          className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6 block font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           Contact
        </motion.span>
        <motion.h2
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get in{" "}
          <span className="text-gradient-gold">Touch</span>
        </motion.h2>

        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.95] mb-8">
          <AnimatedText text="Let's create" delay={0} />
          <br />
          <span className="text-gradient-multi">
            <AnimatedText text="something" delay={0.2} type="letters" />
          </span>
          <br />
          <AnimatedText text="together." delay={0.4} />
        </h3>

        <motion.p
          className="text-base md:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {"Looking for copy that works as hard as you do? Let's talk about how we can bring your brand's story to life.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.a
          href="mailto:amrithaullas234@gmail.com"
          className="download-btn inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-lg font-sans font-semibold text-base md:text-lg"
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>

        <motion.div
          className="mt-20 md:mt-32 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
