"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0., 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >  The bikes that are usually powered by petrol or octane are called 
          {" "}
        <Highlight className="text-black dark:text-white">
        The engines of this type of motorcycle tend to be much more powerful and can cover many long distances at once
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
