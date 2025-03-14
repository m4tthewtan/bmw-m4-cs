import ReactLenis from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const HERO_HEIGHT = 1500;

const Hero = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
        }}
      >
        <div
          className="relative bg-black"
          style={{ height: `calc(${HERO_HEIGHT}px + 100vh)` }}
        >
          <StickyImage />
        </div>
      </ReactLenis>
    </div>
  );
};

const StickyImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [20, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [80, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, HERO_HEIGHT + 500],
    ["170%", "100%"],
  );

  const opacity = useTransform(
    scrollY,
    [HERO_HEIGHT, HERO_HEIGHT + 500],
    [1, 0],
  );

  return (
    <motion.div
      className="sticky top-0 h-lvh"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/car-front.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
