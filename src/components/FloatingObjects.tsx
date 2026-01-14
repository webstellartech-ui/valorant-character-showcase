import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingObjectConfig } from '../types';

interface Props {
  objects: FloatingObjectConfig[];
  characterId: string;
}

const Shape: React.FC<{ type: string; color: string; size: number }> = ({ type, color, size }) => {
  const style = { width: size, height: size, background: color };
  const borderStyle = { width: size, height: size, border: `2px solid ${color}`, borderRadius: '50%' };
  
  if (type === 'circle') return <div style={{ ...style, borderRadius: '50%' }} className="shadow-lg opacity-80 backdrop-blur-sm" />;
  if (type === 'square') return <div style={{ ...style, borderRadius: 4 }} className="shadow-lg opacity-80 rotate-12 backdrop-blur-sm" />;
  if (type === 'ring') return <div style={borderStyle} className="shadow-lg opacity-80 backdrop-blur-sm" />;
  
  // Custom SVG shapes for others
  if (type === 'triangle') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="opacity-80 drop-shadow-lg">
        <path d="M12 2L22 22H2L12 2Z" />
      </svg>
    );
  }
  if (type === 'cross') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4" className="opacity-80 drop-shadow-lg">
        <path d="M12 2v20M2 12h20" />
      </svg>
    );
  }
  if (type === 'bolt') {
    return (
       <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="opacity-80 drop-shadow-lg">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (type === 'petal') {
     return (
       <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="opacity-80 drop-shadow-lg">
        <path d="M12 2C12 2 16 8 16 12C16 16 12 22 12 22C12 22 8 16 8 12C8 8 12 2 12 2Z" />
      </svg>
    );
  }
  if (type === 'flame') {
    return (
       <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="opacity-80 drop-shadow-lg">
         <path d="M12 22c4.97 0 9-4.03 9-9c0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
      </svg>
    );
  }
  
  return <div style={{ ...style, borderRadius: '50%' }} />;
};

const FloatingObjects: React.FC<Props> = ({ objects, characterId }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={characterId}
          className="relative w-full h-full"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {objects.map((obj, index) => (
            <motion.div
              key={`${characterId}-${index}`}
              className="absolute top-1/2 left-1/2"
              initial={{
                x: obj.initialX * 2, // Start further out
                y: obj.initialY * 2,
                opacity: 0,
                scale: 0,
                rotate: 180
              }}
              animate={{
                x: obj.initialX,
                y: obj.initialY,
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2 + (index * 0.1), // Stagger entrance
                  ease: "easeOut"
                }
              }}
              exit={{
                x: (Math.random() - 0.5) * 800, // Scatter randomly
                y: (Math.random() - 0.5) * 800,
                opacity: 0,
                scale: 0,
                rotate: 180,
                transition: { duration: 0.6, ease: "easeIn" }
              }}
            >
              {/* Continuous floating motion wrapper */}
              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  x: [-5, 5, -5],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4 + index, // Slight variance
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: obj.delay
                }}
              >
                <Shape type={obj.type} color={obj.color} size={obj.size} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingObjects;