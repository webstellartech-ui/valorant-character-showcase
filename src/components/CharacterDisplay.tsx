import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Props {
  imagePath: string;
  name: string;
  direction: number;
  onClick: () => void;
}

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction === 1 ? '-120vw' : '120vw',
    opacity: 0,
    scale: 0.8,
    rotate: direction === 1 ? 5 : -5, 
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    }
  },
  exit: (direction: number) => ({
    x: direction === 1 ? '120vw' : '-120vw',
    opacity: 0,
    scale: 1.1,
    rotate: direction === 1 ? 5 : -5,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  })
};

const CharacterDisplay: React.FC<Props> = ({ imagePath, name, direction, onClick }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={name}
          custom={direction}
          className="relative cursor-pointer h-[50vh] sm:h-[60vh] lg:h-[75vh] w-auto flex items-center justify-center pointer-events-auto"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          onClick={onClick}
        >
          {/* Inner Floating Animation */}
          <motion.div
            className="w-full h-full flex items-center justify-center"
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src={imagePath}
              alt={name}
              className="h-full w-auto object-contain"
              style={{ 
                  filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.4))", // Increased shadow
                  imageRendering: 'auto' 
              }}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CharacterDisplay;