import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { characters } from './data/characters';
import Navbar from './components/Navbar';
import BehindText from './components/BehindText';
import FloatingObjects from './components/FloatingObjects';
import CharacterDisplay from './components/CharacterDisplay';
import BottomCorners from './components/BottomCorners';
import CharacterCard from './components/CharacterCard';
import { useKeyboardNav } from './hooks/useKeyboardNav';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = moving right (next), -1 = moving left (prev)
  const [showCard, setShowCard] = useState(false);

  // Determine current character
  const currentCharacter = characters[currentIndex];

  const nextCharacter = () => {
    setDirection(1); // Moving "forward" in the list
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setDirection(-1); // Moving "backward" in the list
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  // Keyboard navigation
  useKeyboardNav(
    nextCharacter,
    prevCharacter,
    () => setShowCard(false),
    showCard // Disable nav when card is open
  );

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ background: currentCharacter.gradient }}
        transition={{ duration: 1, ease: "linear" }}
      />

      <Navbar />

      {/* Main Stage */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* Layer 1: Behind Text */}
        <BehindText text={currentCharacter.behindText} direction={direction} />

        {/* Layer 2: Floating Objects */}
        <FloatingObjects 
          objects={currentCharacter.floatingObjects} 
          characterId={currentCharacter.id} 
        />

        {/* Layer 3: Character */}
        <CharacterDisplay
          imagePath={currentCharacter.imagePath}
          name={currentCharacter.name}
          direction={direction}
          onClick={() => setShowCard(true)}
        />
      </main>

      {/* Foreground UI */}
      <BottomCorners 
        leftText={currentCharacter.bottomLeft} 
        rightText={currentCharacter.bottomRight} 
      />

      {/* Modal */}
      <CharacterCard
        character={currentCharacter}
        isOpen={showCard}
        onClose={() => setShowCard(false)}
      />

      {/* Navigation Hints (Optional but helpful for non-keyboard users on mobile) */}
      <div className="fixed top-1/2 left-4 z-30 opacity-20 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </div>
      <div className="fixed top-1/2 right-4 z-30 opacity-20 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>
  );
};

export default App;