import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Parallax = ({ imgUrl, text }) => {
  return (
    <div>
      <div className="relative h-[170vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayText text={text} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      className="sticky z-0 overflow-hidden"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100lvh",
        top: 0,
        scale,
      }}
      ref={targetRef}
    >
      <motion.div
        className="absolute inset-0 bg-neutral-900/50"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayText = ({ text }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center"
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
    >
      <p className="font-primary text-center text-4xl text-white md:text-5xl">
        {text}
      </p>
    </motion.div>
  );
};

export default Parallax;
