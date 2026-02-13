import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

const downloads = [
  { icon: FileText, label: "Download Portfolio", description: "Complete collection of selected works", href: "/Amritha_portfolio.pdf" },
  { icon: Download, label: "Download Resume", description: "Professional background & experience", href: "/Amritha_Ullas_Resume.pdf" },
];

const DownloadSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-48 px-4 sm:px-6 overflow-hidden" id="downloads">
      <motion.div
        style={{ y: bgY }}
        className="absolute top-10 left-1/2 -translate-x-[65%] font-serif text-[10vw] md:text-[12vw] leading-none text-muted-foreground/5 select-none pointer-events-none hidden md:block"
      >
       
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary"></span>
          <motion.span
            className="glow-line"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.span
            className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Downloads
          </motion.span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get the <span className="text-gradient-gold">full story</span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          {downloads.map((dl, i) => (
            <motion.a
              key={dl.label}
              href={dl.href}
              download
              className="download-btn px-8 md:px-10 py-5 md:py-6 rounded-lg font-sans font-semibold text-base md:text-lg flex items-center gap-4 group"
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.06, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <dl.icon className="w-6 h-6" />
              </motion.div>
              <div className="text-left">
                <div className="font-semibold">{dl.label}</div>
                <div className="text-xs opacity-70">{dl.description}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-32 mx-auto max-w-6xl" />
    </section>
  );
};

export default DownloadSection;
