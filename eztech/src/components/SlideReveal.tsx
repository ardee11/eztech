import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  duration?: number;
  delay?: number;
}

export const SlideReveal = ({
  children,
  width = "fit-content",
  duration = 0.5, // Default duration
  delay = 0.25, // Default delay
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      {children}
      <motion.div
        variants={{
          hidden: { left: "0%" }, // Start off-screen to the left
          visible: { left: "100%" } // Slide in from the left
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, delay, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgba(52, 152, 219, 1)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
