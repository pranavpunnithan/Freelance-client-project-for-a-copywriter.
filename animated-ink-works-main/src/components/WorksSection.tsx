import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { X } from "lucide-react";

import workCappacale from "@/assets/work-cappacale.jpeg";
import workNmc from "@/assets/work-nmc-osce.jpg";
import workCzechmate from "@/assets/work-czechmate.jpg";
import workSunfocuz from "@/assets/work-sunfocuz.jpg";
import workMobileking from "@/assets/work-mobileking.jpg";
import workMillet from "@/assets/work-cappacale-millet.jpg";
import workBear from "@/assets/work-bear.jpg";
import workBumble from "@/assets/work-bumble.jpg";
import workColgate from "@/assets/work-colgate.jpg";
import workDurex from "@/assets/work-durex.jpg";

const works = [
  { src: workCappacale, title: "Cappacale Foods", category: "Ad Campaign" },
  { src: workCzechmate, title: "Czech Mate – Ahoy Consulting", category: "Social Media" },
  { src: workSunfocuz, title: "Sunfocuz Solar", category: "Promotional" },
  { src: workMobileking, title: "Mobile King", category: "Ad Copy" },
  { src: workMillet, title: "Cappacale Millet Dosa", category: "Product Campaign" },
  { src: workBear, title: "Bear vs Men – Concept Ad", category: "Creative Copy" },
  { src: workBumble, title: "Bumble – Concept Ad", category: "Creative Copy" },
  { src: workColgate, title: "Colgate – Concept Ad", category: "Brand Copy" },
  { src: workDurex, title: "Durex – Concept Ad", category: "Creative Copy" },
  { src: workNmc, title: "NMC OSCE Blog Article", category: "Blog / SEO" },
];

const WorkCard = ({ work, index, onSelect }: { work: typeof works[0]; index: number; onSelect: () => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.3, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const cardRotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(mouseY, { damping: 18, stiffness: 200 });
  const tiltY = useSpring(mouseX, { damping: 18, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 12);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * -12);
  };

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      className="rounded-lg overflow-hidden relative group cursor-pointer w-full"
      data-cursor="image"
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
        rotateX: cardRotateX,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 30px 80px hsl(0 0% 0% / 0.5)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-lg z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1px solid hsl(42 60% 57% / 0.3)" }}
      />

      <div className="aspect-[3/4] overflow-hidden relative w-full">
        <motion.img
          src={work.src}
          alt={work.title}
          className="w-full h-full object-cover object-center"
          style={{ rotateX: tiltX, rotateY: tiltY }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        {/* Shimmer overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
        <motion.span
          className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary mb-2 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
        >
          {work.category}
        </motion.span>
        <motion.h3
          className="text-sm md:text-lg font-serif font-semibold text-foreground"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
        >
          {work.title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const WorksSection = () => {
  const sectionRef = useRef(null);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-48 overflow-hidden" id="works">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
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
          Selected{" "}
          <span className="text-gradient-gold">Works</span>
        </motion.h2>

        {/* Vertical grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} onSelect={() => setSelectedWork(work)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-lg"
            initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground border border-border hover:border-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedWork.src}
              alt={selectedWork.title}
              className="max-h-[85vh] w-auto mx-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">{selectedWork.category}</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mt-1">{selectedWork.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="section-divider mt-20 md:mt-32 mx-auto max-w-6xl" />
    </section>
  );
};

export default WorksSection;
