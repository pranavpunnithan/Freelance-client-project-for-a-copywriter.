import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const [cursorVariant, setCursorVariant] = useState<"default" | "text" | "link" | "image">("default");
  const cursorRef = useRef({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) setCursorVariant("link");
      else if (target.closest("img, video, [data-cursor='image']")) setCursorVariant("image");
      else if (target.closest("p, h1, h2, h3, h4, h5, h6, span, li")) setCursorVariant("text");
      else setCursorVariant("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  const sizes = { default: 16, text: 6, link: 48, image: 80 };
  const size = sizes[cursorVariant];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorVariant === "image" ? "transparent" : "hsl(42 60% 57%)",
          border: cursorVariant === "image" ? "1px solid hsl(42 60% 57%)" : "none",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
      {cursorVariant === "image" && (
        <motion.span
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-primary font-sans text-xs tracking-widest uppercase"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        >
          View
        </motion.span>
      )}
    </>
  );
};

export default CustomCursor;
