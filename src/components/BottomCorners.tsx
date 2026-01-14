import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  leftText: string;
  rightText: string;
}

const BottomCorners: React.FC<Props> = ({ leftText, rightText }) => {
  return (
    <>
      {/* Bottom Left */}
      <div className="fixed bottom-8 left-8 sm:bottom-12 sm:left-12 z-20 mix-blend-multiply pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={leftText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-light uppercase tracking-widest text-xs sm:text-sm text-slate-800">
              {leftText}
            </p>
            <div className="h-[1px] w-8 bg-slate-800 mt-2 opacity-30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Right */}
      <div className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-20 text-right mix-blend-multiply pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={rightText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-light uppercase tracking-widest text-xs sm:text-sm text-slate-800">
              {rightText}
            </p>
            <div className="h-[1px] w-8 bg-slate-800 mt-2 ml-auto opacity-30" />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default BottomCorners;