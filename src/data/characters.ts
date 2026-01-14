import { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'jett',
    name: 'Jett',
    role: 'Duelist',
    gradient: 'linear-gradient(135deg, #F4FAFF 0%, #E6F3FA 100%)',
    imagePath: '/characters/jett.png',
    behindText: 'JETT',
    bottomLeft: 'South Korean',
    bottomRight: 'Wind Wielder',
    abilities: ['Cloudburst', 'Updraft', 'Tailwind', 'Blade Storm'],
    description: 'Representing South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.',
    themeColor: '#90E0EF',
    floatingObjects: [
      { type: 'triangle', color: '#90E0EF', size: 30, initialX: -150, initialY: -150, delay: 0 },
      { type: 'circle', color: '#CAF0F8', size: 50, initialX: 200, initialY: 100, delay: 0.2 },
      { type: 'cross', color: '#00B4D8', size: 20, initialX: -100, initialY: 200, delay: 0.4 }
    ]
  },
  {
    id: 'neon',
    name: 'Neon',
    role: 'Duelist',
    gradient: 'linear-gradient(135deg, #E9FBFF 0%, #DFF6FF 100%)',
    imagePath: '/characters/neon.png',
    behindText: 'NEON',
    bottomLeft: 'Filipino',
    bottomRight: 'Speed Demon',
    abilities: ['Fast Lane', 'Relay Bolt', 'High Gear', 'Overdrive'],
    description: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it.',
    themeColor: '#FFEE32',
    floatingObjects: [
      { type: 'bolt', color: '#FFEE32', size: 60, initialX: -200, initialY: 50, delay: 0 },
      { type: 'circle', color: '#4CC9F0', size: 40, initialX: 150, initialY: -150, delay: 0.2 },
      { type: 'bolt', color: '#FFEE32', size: 40, initialX: 100, initialY: 150, delay: 0.3 }
    ]
  },
  {
    id: 'omen',
    name: 'Omen',
    role: 'Controller',
    gradient: 'linear-gradient(135deg, #F2ECF9 0%, #E9E6F0 100%)',
    imagePath: '/characters/omen.png',
    behindText: 'OMEN',
    bottomLeft: 'Unknown',
    bottomRight: 'Phantom',
    abilities: ['Shrouded Step', 'Paranoia', 'Dark Cover', 'From the Shadows'],
    description: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold.',
    themeColor: '#7209B7',
    floatingObjects: [
      { type: 'circle', color: '#3A0CA3', size: 60, initialX: -180, initialY: -100, delay: 0 },
      { type: 'ring', color: '#7209B7', size: 50, initialX: 220, initialY: 80, delay: 0.2 },
      { type: 'circle', color: '#B5179E', size: 20, initialX: 0, initialY: 220, delay: 0.4 }
    ]
  },
  {
    id: 'chamber',
    name: 'Chamber',
    role: 'Sentinel',
    gradient: 'linear-gradient(135deg, #FAF6F0 0%, #EFE7DA 100%)',
    imagePath: '/characters/chamber.png',
    behindText: 'CHAMBER',
    bottomLeft: 'French',
    bottomRight: 'Marksman',
    abilities: ['Trademark', 'Headhunter', 'Rendezvous', 'Tour De Force'],
    description: 'Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line.',
    themeColor: '#FFD700',
    floatingObjects: [
      { type: 'square', color: '#FFD700', size: 40, initialX: -220, initialY: 120, delay: 0 },
      { type: 'cross', color: '#14213D', size: 30, initialX: 180, initialY: -80, delay: 0.2 },
      { type: 'ring', color: '#FCA311', size: 50, initialX: -50, initialY: -200, delay: 0.3 }
    ]
  },
  {
    id: 'reyna',
    name: 'Reyna',
    role: 'Duelist',
    gradient: 'linear-gradient(135deg, #F6EAF2 0%, #EAD9F2 100%)',
    imagePath: '/characters/reyna.png',
    behindText: 'REYNA',
    bottomLeft: 'Mexican',
    bottomRight: 'Empress',
    abilities: ['Leer', 'Devour', 'Dismiss', 'Empress'],
    description: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill.',
    themeColor: '#D00000',
    floatingObjects: [
      { type: 'circle', color: '#9D0208', size: 55, initialX: -160, initialY: -140, delay: 0 },
      { type: 'petal', color: '#D00000', size: 45, initialX: 200, initialY: 100, delay: 0.2 },
      { type: 'ring', color: '#370617', size: 30, initialX: 100, initialY: -180, delay: 0.4 }
    ]
  },
  {
    id: 'clove',
    name: 'Clove',
    role: 'Controller',
    gradient: 'linear-gradient(135deg, #F1EEF4 0%, #E8E6EC 100%)',
    imagePath: '/characters/clove.png',
    behindText: 'CLOVE',
    bottomLeft: 'Scottish',
    bottomRight: 'Immortal',
    abilities: ['Pick-me-up', 'Meddle', 'Ruse', 'Not Dead Yet'],
    description: 'Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing.',
    themeColor: '#FF99C8',
    floatingObjects: [
      { type: 'petal', color: '#FF99C8', size: 50, initialX: -200, initialY: 50, delay: 0 },
      { type: 'circle', color: '#E0AAFF', size: 30, initialX: 150, initialY: -120, delay: 0.2 },
      { type: 'petal', color: '#FF99C8', size: 40, initialX: 50, initialY: 200, delay: 0.3 }
    ]
  },
  {
    id: 'brimstone',
    name: 'Brimstone',
    role: 'Controller',
    gradient: 'linear-gradient(135deg, #F3F1ED 0%, #E9E5DF 100%)',
    imagePath: '/characters/brimbstone.png',
    behindText: 'BRIMSTONE',
    bottomLeft: 'American',
    bottomRight: 'Commander',
    abilities: ['Incendiary', 'Stim Beacon', 'Sky Smoke', 'Orbital Strike'],
    description: 'Joining from the USA, Brimstone\'s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely makes him the unmatched boots-on-the-ground commander.',
    themeColor: '#E85D04',
    floatingObjects: [
      { type: 'square', color: '#E85D04', size: 50, initialX: -180, initialY: -150, delay: 0 },
      { type: 'flame', color: '#FFBA08', size: 60, initialX: 200, initialY: 80, delay: 0.2 },
      { type: 'cross', color: '#6A040F', size: 25, initialX: -80, initialY: 180, delay: 0.4 }
    ]
  },
  {
    id: 'sage',
    name: 'Sage',
    role: 'Sentinel',
    gradient: 'linear-gradient(135deg, #ECF7F3 0%, #E3F4EF 100%)',
    imagePath: '/characters/sage.png',
    behindText: 'SAGE',
    bottomLeft: 'Chinese',
    bottomRight: 'Healer',
    abilities: ['Barrier Orb', 'Slow Orb', 'Healing Orb', 'Resurrection'],
    description: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes. From reviving fallen friends to staving off aggressive pushes, she provides a calm center to a hellish fight.',
    themeColor: '#2EC4B6',
    floatingObjects: [
      { type: 'square', color: '#CBF3F0', size: 45, initialX: -190, initialY: 100, delay: 0 },
      { type: 'circle', color: '#2EC4B6', size: 35, initialX: 180, initialY: -130, delay: 0.2 },
      { type: 'square', color: '#FFFFFF', size: 25, initialX: 0, initialY: -200, delay: 0.4 }
    ]
  },
  {
    id: 'raze',
    name: 'Raze',
    role: 'Duelist',
    gradient: 'linear-gradient(135deg, #FFF1E6 0%, #FFE2D1 100%)',
    imagePath: '/characters/raze.png',
    behindText: 'RAZE',
    bottomLeft: 'Brazilian',
    bottomRight: 'Demolitionist',
    abilities: ['Boom Bot', 'Blast Pack', 'Paint Shells', 'Showstopper'],
    description: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces.',
    themeColor: '#FB5607',
    floatingObjects: [
      { type: 'circle', color: '#FB5607', size: 50, initialX: -200, initialY: -100, delay: 0 },
      { type: 'triangle', color: '#FFBE0B', size: 40, initialX: 200, initialY: 150, delay: 0.2 },
      { type: 'square', color: '#3A86FF', size: 30, initialX: 100, initialY: -150, delay: 0.4 }
    ]
  },
  {
    id: 'cypher',
    name: 'Cypher',
    role: 'Sentinel',
    gradient: 'linear-gradient(135deg, #F4F2EE 0%, #E8E6E2 100%)',
    imagePath: '/characters/cypher.png',
    behindText: 'CYPHER',
    bottomLeft: 'Moroccan',
    bottomRight: 'Spy Master',
    abilities: ['Trapwire', 'Cyber Cage', 'Spycam', 'Neural Theft'],
    description: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy\'s every move. No secret is safe. No maneuver goes unseen.',
    themeColor: '#495057',
    floatingObjects: [
      { type: 'ring', color: '#343A40', size: 50, initialX: -210, initialY: 80, delay: 0 },
      { type: 'circle', color: '#ADB5BD', size: 30, initialX: 180, initialY: -120, delay: 0.2 },
      { type: 'ring', color: '#495057', size: 60, initialX: 0, initialY: 200, delay: 0.4 }
    ]
  },
  {
    id: 'deadlock',
    name: 'Deadlock',
    role: 'Sentinel',
    gradient: 'linear-gradient(135deg, #F6F5F2 0%, #E7EFEA 100%)',
    imagePath: '/characters/deadlock.png',
    behindText: 'DEADLOCK',
    bottomLeft: 'Norwegian',
    bottomRight: 'Sentinel',
    abilities: ['GravNet', 'Sonic Sensor', 'Barrier Mesh', 'Annihilation'],
    description: 'Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch.',
    themeColor: '#8ECAE6',
    floatingObjects: [
      { type: 'ring', color: '#8ECAE6', size: 55, initialX: -190, initialY: -130, delay: 0 },
      { type: 'square', color: '#219EBC', size: 35, initialX: 200, initialY: 100, delay: 0.2 },
      { type: 'cross', color: '#023047', size: 25, initialX: 50, initialY: -180, delay: 0.4 }
    ]
  },
  {
    id: 'viper',
    name: 'Viper',
    role: 'Controller',
    gradient: 'linear-gradient(135deg, #EAF6F0 0%, #DEEAE5 100%)',
    imagePath: '/characters/viper.png',
    behindText: 'VIPER',
    bottomLeft: 'American',
    bottomRight: 'Chemist',
    abilities: ['Snake Bite', 'Poison Cloud', 'Toxic Screen', 'Viper\'s Pit'],
    description: 'The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy\'s vision. If the toxins don\'t kill her prey, her mind games surely will.',
    themeColor: '#386641',
    floatingObjects: [
      { type: 'circle', color: '#6A994E', size: 50, initialX: -200, initialY: 120, delay: 0 },
      { type: 'triangle', color: '#386641', size: 40, initialX: 180, initialY: -100, delay: 0.2 },
      { type: 'circle', color: '#A7C957', size: 30, initialX: -50, initialY: 180, delay: 0.4 }
    ]
  }
];