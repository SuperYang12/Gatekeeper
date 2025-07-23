'use client'
import { useState, useEffect } from 'react';
import {
  FaSkull,
  FaBookDead,
  FaDungeon,
  FaCoins,
  FaUsers,
  FaChartLine,
  FaUserShield,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';
import { GiStonePath, GiScrollQuill } from 'react-icons/gi';
import { RiSwordFill } from 'react-icons/ri';

export default function LandingPage() {
  const [huntersActive, setHuntersActive] = useState(0);
  const [gatesCompleted, setGatesCompleted] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [systemMessage, setSystemMessage] = useState('');
  const [letters, setLetters] = useState<Array<{
    id: number,
    char: string,
    top: number,
    left: number,
    animationDuration: number,
    rotate: number,
    amplitude: number,
    direction: number,
    delay: number,
    scale: number,
    opacity: number,
    color: string
  }>>([]);

  const systemMessages = [
    'The System has chosen you.',
    'Dungeon gates are opening...',
    'Hunters are mobilizing.',
    'Your stats are being calculated.',
    'Warning: High-level gates detected.',
    'Prepare for your daily quests.'
  ];

  useEffect(() => {
    const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ'];
    const initialLetters = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      char: runes[Math.floor(Math.random() * runes.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 6 + 6, 
      rotate: Math.random() * 360,
      amplitude: Math.random() * 40 + 40,
      direction: Math.random() > 0.5 ? 1 : -1,
      delay: Math.random() * 10, 
      scale: Math.random() * 0.5 + 0.8, 
      opacity: Math.random() * 0.3 + 0.3, 
      color: `hsl(${260 + Math.floor(Math.random() * 40)}, 100%, 70%)` 
    }));
    setLetters(initialLetters);

    const letterInterval = setInterval(() => {
      setLetters(prev => prev.map(l => ({
        ...l,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDuration: Math.random() * 15 + 10
      })));
    }, 15000); 

    return () => clearInterval(letterInterval);
  }, []);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setHuntersActive(prev => (prev < 12563 ? prev + 47 : prev));
      setGatesCompleted(prev => (prev < 89214 ? prev + 123 : prev));
      setXpEarned(prev => (prev < 524896 ? prev + 789 : prev));
    }, 50);

    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * systemMessages.length);
      setSystemMessage(systemMessages[randomIndex]);
    }, 3000);

    return () => {
      clearInterval(counterInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className='min-h-screen bg-black overflow-hidden relative font-body'>
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-90'></div>
        <div className='absolute inset-0 opacity-30' style={{
          backgroundImage: 'linear-gradient(rgba(110, 0, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 0, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px]'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-64 h-64 rounded-full border-4 border-[#6e00ff] animate-pulse' style={{
              boxShadow: '0 0 60px #6e00ff, 0 0 120px #6e00ff'
            }}></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center animate-spin' style={{
            animationDuration: '20s'
          }}>
            <div className='w-96 h-96 rounded-full border-2 border-[#8ce9ff] opacity-30'></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center animate-spin-reverse' style={{
            animationDuration: '25s'
          }}>
            <div className='w-[500px] h-[500px] rounded-full border border-[#6e00ff] opacity-20'></div>
          </div>
        </div>

        {letters.map((letter) => (
          <div
            key={letter.id}
            className='gatekeeper-rune absolute font-heading pointer-events-none'
            style={{
              top: `${letter.top}%`,
              left: `${letter.left}%`,
              animationName: 'floatRuneXY',
              animationDuration: `${letter.animationDuration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${letter.delay}s`,
              transform: `rotate(${letter.rotate}deg) scale(${letter.scale})`,
              opacity: letter.opacity,
              color: letter.color,
              '--rune-amplitude-x': `${letter.amplitude * letter.direction}px`,
              '--rune-amplitude-y': `${letter.amplitude * (Math.random() > 0.5 ? 1 : -1)}px`,
            } as React.CSSProperties}
          >
            {letter.char}
          </div>
        ))}
      </div>

      <div className='absolute top-0 left-0 right-0 bg-black/80 border-b border-[#6e00ff]/30 z-20 py-2 px-4 text-[#8ce9ff] text-sm font-mono flex items-center'>
        <div className='mr-2'>SYSTEM:</div>
        <div className='truncate animate-pulse'>{systemMessage || 'Initializing Gatekeeper System...'}</div>
      </div>

      <div className='relative z-10 container mx-auto px-4 py-16 flex flex-col items-center pt-20'>
        <header className='w-full flex justify-between items-center mb-16'>
          <div className='text-3xl font-heading text-[#8ce9ff] tracking-wider flex items-center'>
            <span className='text-[#6e00ff] mr-2'>⌈</span>
            GATEKEEPER
            <span className='text-[#6e00ff] ml-2'>⌋</span>
          </div>
          <div className='px-4 py-1 bg-gradient-to-r from-[#6e00ff] to-[#8ce9ff] text-black rounded-md text-sm font-heading tracking-wider flex items-center'>
            <FaUserShield className='mr-2' /> S-RANK HUNTER ACCESS
          </div>
        </header>

        <main className='flex flex-col items-center text-center max-w-3xl mb-32'>
          <div className='relative mb-8'>
            <h1 className='text-7xl md:text-9xl font-heading text-white mb-0 leading-none tracking-tighter' style={{
              textShadow: '0 0 15px #6e00ff, 0 0 30px #6e00ff'
            }}>
              GATEKEEPER
            </h1>
            <div className='absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6e00ff] to-transparent'></div>
          </div>

          <p className='text-xl text-[#8ce9ff] mb-12 max-w-2xl animate-fadeInUp' style={{ animationDelay: '0.2s' }}>
            <span className='text-white'>'</span>Turn your tasks into dungeon raids. Level up your life.<span className='text-white'>'</span>
          </p>

          <div className='flex gap-6 mb-20 animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
            <button className='cursor-pointer px-10 py-5 bg-black border-2 border-[#6e00ff] rounded-lg text-white font-heading text-2xl tracking-wider hover:bg-[#6e00ff]/10 transition-all duration-300 relative overflow-hidden group'>
              <span className='relative z-10 flex items-center justify-center'>
                <FaSignInAlt className='mr-3' /> LOG IN
              </span>
              <div className='absolute inset-0 bg-gradient-to-br from-[#6e00ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </button>

            <button className='cursor-pointer px-10 py-5 bg-black border-2 border-[#6e00ff] rounded-lg text-white font-heading text-2xl tracking-wider hover:bg-[#6e00ff]/10 transition-all duration-300 relative overflow-hidden group'>
              <span className='relative z-10 flex items-center justify-center'>
                <FaUserPlus className='mr-3' /> JOIN AS HUNTER
              </span>
              <div className='absolute inset-0 bg-gradient-to-br from-[#6e00ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </button>
          </div>


          <div className='flex flex-wrap justify-center gap-6 w-full animate-fadeInUp' style={{ animationDelay: '0.6s' }}>
            <div className='bg-black/80 p-5 rounded-lg border border-[#6e00ff]/30 min-w-[220px] relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-1 bg-[#6e00ff]'></div>
              <div className='text-[#8ce9ff] font-heading text-4xl mb-1 font-mono flex items-center justify-center'>
                <FaUsers className='mr-2' /> {huntersActive.toLocaleString()}
              </div>
              <div className='text-[#bfbcd3] text-sm tracking-widest'>HUNTERS ACTIVE</div>
            </div>
            <div className='bg-black/80 p-5 rounded-lg border border-[#ffd700]/30 min-w-[220px] relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-1 bg-[#ffd700]'></div>
              <div className='text-[#ffd700] font-heading text-4xl mb-1 font-mono flex items-center justify-center'>
                <GiStonePath className='mr-2' /> {gatesCompleted.toLocaleString()}
              </div>
              <div className='text-[#bfbcd3] text-sm tracking-widest'>GATES CLEARED</div>
            </div>
            <div className='bg-black/80 p-5 rounded-lg border border-[#9b5de5]/30 min-w-[220px] relative overflow-hidden'>
              <div className='absolute top-0 left-0 w-full h-1 bg-[#9b5de5]'></div>
              <div className='text-[#9b5de5] font-heading text-4xl mb-1 font-mono flex items-center justify-center'>
                <FaChartLine className='mr-2' /> {xpEarned.toLocaleString()}
              </div>
              <div className='text-[#bfbcd3] text-sm tracking-widest'>XP EARNED TODAY</div>
            </div>
          </div>
        </main>

        <section className='w-full max-w-6xl mb-32'>
          <h2 className='text-5xl font-heading text-white mb-16 text-center tracking-tight relative inline-block'>
            <span className='relative'>
              HUNTER SYSTEMS
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff]'></div>
            </span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#6e00ff]/30 hover:border-[#6e00ff]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#6e00ff] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#6e00ff]/10 rounded-lg flex items-center justify-center mr-4 border border-[#6e00ff]/30'>
                  <RiSwordFill className='w-8 h-8 text-[#6e00ff]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Skill Tree</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Unlock abilities and passive boosts as you complete tasks and gain XP.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>

            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#6e00ff]/30 hover:border-[#6e00ff]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#6e00ff] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#6e00ff]/10 rounded-lg flex items-center justify-center mr-4 border border-[#6e00ff]/30'>
                  <GiScrollQuill className='w-8 h-8 text-[#6e00ff]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Daily Quests</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Complete daily objectives to earn bonus rewards and keep your streak alive.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>

            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#ff4d4d]/30 hover:border-[#ff4d4d]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#ff4d4d] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#ff4d4d]/10 rounded-lg flex items-center justify-center mr-4 border border-[#ff4d4d]/30'>
                  <FaSkull className='w-8 h-8 text-[#ff4d4d]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Punishments</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Fail your objectives and face consequences. The System doesn't tolerate weakness.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#ff4d4d] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>

            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#6e00ff]/30 hover:border-[#6e00ff]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#6e00ff] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#6e00ff]/10 rounded-lg flex items-center justify-center mr-4 border border-[#6e00ff]/30'>
                  <FaDungeon className='w-8 h-8 text-[#6e00ff]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Dungeon Mode</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Enter focused work sessions with escalating challenges and rewards.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>

            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#9b5de5]/30 hover:border-[#9b5de5]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#9b5de5] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#9b5de5]/10 rounded-lg flex items-center justify-center mr-4 border border-[#9b5de5]/30'>
                  <FaCoins className='w-8 h-8 text-[#9b5de5]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Shadow Exchange</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Spend your earned crystals on upgrades, cosmetics, and power-ups.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#9b5de5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>

            <div className='bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#6e00ff]/30 hover:border-[#6e00ff]/60 transition-all duration-300 group relative overflow-hidden'>
              <div className='absolute -right-10 -top-10 w-32 h-32 bg-[#6e00ff] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
              <div className='flex items-start mb-4'>
                <div className='w-14 h-14 bg-[#6e00ff]/10 rounded-lg flex items-center justify-center mr-4 border border-[#6e00ff]/30'>
                  <FaUsers className='w-8 h-8 text-[#6e00ff]' />
                </div>
                <h3 className='text-2xl font-heading text-white mt-2 tracking-tight'>Guild System</h3>
              </div>
              <p className='text-[#bfbcd3] pl-18'>Team up with other hunters for shared objectives and leaderboards.</p>
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#6e00ff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500'></div>
            </div>
          </div>
        </section>

        <footer className='w-full border-t border-[#6e00ff]/20 pt-8 pb-12 text-center'>
          <div className='text-[#bfbcd3] text-sm font-mono'>
            <div className='mb-2'>© 2025 GATEKEEPER SYSTEM</div>
            <div className='text-xs opacity-60'>WARNING: UNAUTHORIZED ACCESS WILL BE PUNISHED BY THE SYSTEM</div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes floatRuneXY {
          0%   { transform: translate(0, 0) scale(var(--rune-scale, 1)); filter: blur(0px); }
          20%  { opacity: 0.7; filter: blur(1px); }
          50%  { transform: translate(var(--rune-amplitude-x, 40px), var(--rune-amplitude-y, 40px)) scale(var(--rune-scale, 1.1)); opacity: 1; filter: blur(2px); }
          80%  { opacity: 0.7; filter: blur(1px); }
          100% { transform: translate(0, 0) scale(var(--rune-scale, 1)); filter: blur(0px); }
        }
        .gatekeeper-rune {
          text-shadow: 0 0 12px var(--rune-glow, #6e00ff), 0 0 32px var(--rune-glow, #6e00ff);
          will-change: transform, opacity, filter;
          transition: opacity 0.5s, color 1s;
        }
        /* Suport pentru scale custom */}
        .gatekeeper-rune {
          --rune-scale: 1;
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse linear infinite;
        }
        body {
          background-color: #000;
          color: #fff;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}