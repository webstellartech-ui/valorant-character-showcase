import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string;
  direction: number;
}

const BehindText: React.FC<Props> = ({ text, direction }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.h1
          key={text}
          custom={direction}
          // Direction 1 (Next): Text moves Right -> Left (Opposite to Character)
          initial={{ x: direction === 1 ? '120vw' : '-120vw', opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }} // Increased from 0.08 to 0.15 for better visibility
          exit={{ x: direction === 1 ? '-120vw' : '120vw', opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[18vw] sm:text-[15vw] leading-none text-black select-none whitespace-nowrap"
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default BehindText;