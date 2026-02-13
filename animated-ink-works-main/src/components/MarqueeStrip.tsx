import { motion } from "framer-motion";

const MarqueeStrip = ({ text = "Clarity · Consistency · Intent · Impact · " }: { text?: string }) => {
  const repeated = text.repeat(8);
  return (
    <motion.div
      className="overflow-hidden py-6 border-y border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="whitespace-nowrap font-serif text-3xl md:text-5xl text-muted-foreground/15 font-bold"
        animate={{ x: [0, -(text.length * 20)] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {repeated}
      </motion.div>
    </motion.div>
  );
};

export default MarqueeStrip;
