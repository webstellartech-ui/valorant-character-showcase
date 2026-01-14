export interface FloatingObjectConfig {
  type: 'circle' | 'triangle' | 'square' | 'cross' | 'ring' | 'bolt' | 'petal' | 'flame';
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  delay: number;
}

export interface Character {
  id: string;
  name: string;
  role: 'Duelist' | 'Controller' | 'Sentinel' | 'Initiator';
  gradient: string;
  imagePath: string; // Ideally a transparent PNG
  behindText: string;
  floatingObjects: FloatingObjectConfig[];
  bottomLeft: string;
  bottomRight: string;
  abilities: string[];
  description: string;
  themeColor: string; // For accents
}