import { motion } from "framer-motion";

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
    {/* Primary gold orb */}
    <motion.div
      className="absolute w-[60vw] h-[60vw] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(42 60% 57%), transparent 70%)" }}
      animate={{
        x: ["-10vw", "30vw", "10vw", "-5vw", "-10vw"],
        y: ["-10vh", "20vh", "50vh", "30vh", "-10vh"],
        scale: [1, 1.3, 0.9, 1.1, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Violet orb */}
    <motion.div
      className="absolute w-[50vw] h-[50vw] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(270 50% 55%), transparent 70%)" }}
      animate={{
        x: ["60vw", "20vw", "40vw", "55vw", "60vw"],
        y: ["60vh", "10vh", "30vh", "50vh", "60vh"],
        scale: [1, 0.8, 1.2, 0.95, 1],
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Red orb */}
    <motion.div
      className="absolute w-[45vw] h-[45vw] rounded-full opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(0 55% 50%), transparent 70%)" }}
      animate={{
        x: ["30vw", "60vw", "15vw", "45vw", "30vw"],
        y: ["20vh", "60vh", "40vh", "15vh", "20vh"],
        scale: [1, 1.15, 0.9, 1.05, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Teal orb */}
    <motion.div
      className="absolute w-[35vw] h-[35vw] rounded-full opacity-[0.04]"
      style={{ background: "radial-gradient(circle, hsl(175 55% 45%), transparent 70%)" }}
      animate={{
        x: ["50vw", "10vw", "35vw", "60vw", "50vw"],
        y: ["10vh", "50vh", "70vh", "30vh", "10vh"],
        scale: [0.9, 1.2, 1, 0.85, 0.9],
      }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Small fast gold accent */}
    <motion.div
      className="absolute w-[20vw] h-[20vw] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(42 60% 57%), transparent 70%)" }}
      animate={{
        x: ["70vw", "20vw", "50vw", "70vw"],
        y: ["80vh", "30vh", "10vh", "80vh"],
        scale: [1, 1.4, 0.8, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default GrainOverlay;
