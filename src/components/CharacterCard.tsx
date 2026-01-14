import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Character } from '../types';

interface Props {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterCard: React.FC<Props> = ({ character, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center md:justify-start md:pl-[8%] pointer-events-none">
          {/* Invisible Closer */}
          <div className="absolute inset-0 z-40 pointer-events-auto" onClick={onClose} />

          {/* 3D Container & Entrance Animation */}
          <div className="relative z-50 pointer-events-auto" style={{ perspective: '1500px' }}>
            <motion.div
              className="w-[85vw] md:w-[360px]"
              initial={{
                rotateY: 45,
                x: -200,
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                rotateY: 15,
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotateY: 45,
                x: -200,
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.3 }
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 120,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Visual Card with Neon Border Beam */}
                <div
                  className="relative rounded-[2rem] overflow-hidden p-[2px] transition-all duration-300"
                  style={{
                    boxShadow: `0 0 20px ${character.themeColor}40, 0 20px 40px rgba(0,0,0,0.2)`
                  }}
                >
                  {/* Rotating Beam */}
                  <motion.div
                    className="absolute inset-[-100%]"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0deg, ${character.themeColor} 360deg)`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Inner Content Card (Masks the center) */}
                  <div className="relative bg-white/90 backdrop-blur-3xl rounded-[calc(2rem-2px)] overflow-hidden h-full">
                    {/* Header / Top Bar */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-2">
                      <div className="flex space-x-2 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                      </div>
                      <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors group">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-slate-800 transition-colors">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="px-8 pb-10 pt-2 flex flex-col items-center text-center">

                      <motion.h2
                        className="text-4xl font-bold text-slate-900 tracking-tight mb-1"
                        layoutId={`name-${character.id}`}
                      >
                        {character.name}
                      </motion.h2>

                      <div className="flex items-center gap-2 mb-6">
                        <div
                          className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ backgroundColor: character.themeColor, color: character.themeColor }}
                        />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                          {character.role}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-8 font-medium opacity-90">
                        {character.description}
                      </p>

                      {/* Abilities Row */}
                      <div className="w-full bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Special Abilities</span>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                          {character.abilities.map((ability, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 group cursor-help" title={ability}>
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm shadow-sm border border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                                style={{
                                  backgroundColor: i === 3 ? character.themeColor : '#f1f5f9', // slate-100 for inactive
                                  color: i === 3 ? '#ffffff' : '#475569', // slate-600 for inactive
                                  boxShadow: i === 3 ? `0 4px 10px ${character.themeColor}60` : 'none'
                                }}
                              >
                                <span className="font-bold">
                                  {ability.charAt(0)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        className="w-full py-4 rounded-xl font-bold tracking-widest text-xs shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-slate-900"
                        style={{
                          background: character.gradient,
                          boxShadow: `0 10px 20px -5px ${character.themeColor}80`
                        }}
                      >
                        <span>SELECT AGENT</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CharacterCard;