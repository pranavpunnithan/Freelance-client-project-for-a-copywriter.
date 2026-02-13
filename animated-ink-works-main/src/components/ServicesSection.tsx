import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Megaphone, BookOpen, MessageCircle, Package, PenTool } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Ad & Promotional Copy", description: "Sharp, persuasive text for your campaigns. Simple, direct, aligned with brand tone, optimized for performance across digital platforms.", tags: ["Social Media Ads", "Campaign Headlines", "Taglines"] },
  { icon: Globe, title: "Website Content", description: "Engaging Home, About, and Service pages, plus high-converting landing pages that turn visitors into customers.", tags: ["Landing Pages", "Service Pages", "UX Copy"] },
  { icon: Megaphone, title: "Brand & Marketing Copy", description: "Communication that defines who you are. Brand voice development and marketing materials that resonate.", tags: ["Brand Voice", "Marketing Materials", "Positioning"] },
  { icon: BookOpen, title: "Blog Writing & Articles", description: "Thoughtful long-form content to build authority and engage your audience with valuable insights.", tags: ["SEO Articles", "Thought Leadership", "Guides"] },
  { icon: MessageCircle, title: "Social Media Content", description: "Posts that spark conversation and connection. Content designed to engage and grow your community.", tags: ["Instagram", "LinkedIn", "Facebook"] },
  { icon: Package, title: "Product & Service Descriptions", description: "Clear details that help customers choose you. Compelling copy that highlights value and drives decisions.", tags: ["E-commerce", "Catalogs", "Features"] },
  { icon: PenTool, title: "Content Rewriting & Editing", description: "Polishing your existing work for maximum impact. Refining tone, structure, and clarity.", tags: ["Editing", "Proofreading", "Optimization"] },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { damping: 20, stiffness: 200 });
  const rotateY = useSpring(mouseX, { damping: 20, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 15);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * -15);
  };

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      className="service-card rounded-lg p-6 md:p-8 group relative overflow-hidden"
      style={{
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.06 + 0.1 }}
          whileHover={{ rotate: 12, scale: 1.2 }}
        >
          <service.icon className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.h3
          className="text-lg md:text-xl font-serif font-semibold mb-3 text-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.06 + 0.2 }}
        >
          {service.title}
        </motion.h3>
        <motion.p
          className="text-sm text-muted-foreground leading-relaxed mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 + 0.3 }}
        >
          {service.description}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, ti) => (
            <motion.span
              key={tag}
              className="text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 + 0.35 + ti * 0.06 }}
              whileHover={{ scale: 1.12, borderColor: "hsl(42 60% 57% / 0.4)" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-48 px-4 sm:px-6 overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto relative z-10">
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
          Services{" "}
          <span className="text-gradient-gold">& Skills</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg mb-12 md:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I offer a range of content solutions designed to support your business goals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 md:mt-32 mx-auto max-w-6xl" />
    </section>
  );
};

export default ServicesSection;
