import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle, Users, ExternalLink, Snowflake } from 'lucide-react';
import backgroundImage from '../assets/bg.png';
const IceSculpture = ({ isHovered }) => (
  <div className="relative w-12 h-12 md:w-16 md:h-16">
    <div className={`
      absolute inset-0 blur-2xl bg-white/40
      transition-all duration-700
      ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-30'}
    `} />
    <div className="absolute inset-0">
      <div className={`
        absolute inset-0 bg-gradient-to-br from-white/30 to-cyan-500/50
        backdrop-blur-xl border border-white/20
        transition-all duration-700 transform-gpu
        ${isHovered ? 'scale-125 rotate-45' : 'rotate-0'}
      `} />
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 bg-gradient-to-br from-white/10 to-cyan-500/20
            border border-white/10 backdrop-blur-sm
            transition-all duration-700 transform-gpu
            ${isHovered ? 'scale-150' : 'scale-100'}
          `}
          style={{
            transform: `rotate(${i * 45}deg) scale(${0.8 - i * 0.1})`,
          }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  </div>
);

const CardSnowflakes = ({ isHovered }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className={`
          absolute transition-all duration-1000
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      >
        <Snowflake
          className="text-cyan-200/30 animate-spin"
          size={Math.random() * 12 + 8}
          style={{
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      </div>
    ))}
  </div>
);

const TimelineEvent = ({ event, isLeft, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`
        flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6
        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        transition-all duration-1000 ease-out transform
      `}
    >
      <div 
        className="w-full md:w-5/12 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`
          absolute -inset-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0
          opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700
        `} />

        <div className={`
          relative p-4 md:p-6 rounded-xl
          bg-gradient-to-br from-white/10 to-cyan-900/30
          backdrop-blur-xl
          border border-cyan-200/20
          transition-all duration-700 transform-gpu
          ${isHovered ? 'scale-105 -rotate-1 shadow-2xl shadow-cyan-500/30' : 'shadow-lg shadow-cyan-300/10'}
        `}>
          <CardSnowflakes isHovered={isHovered} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Calendar className={`
                w-4 h-4 md:w-5 md:h-5 text-cyan-300 transition-all duration-500
                ${isHovered ? 'scale-125 rotate-12' : ''}
              `} />
              <span className="text-cyan-200 font-medium text-xs md:text-sm">{event.date}</span>
            </div>
            
            <h3 className={`
              text-xl md:text-2xl font-bold mb-2 md:mb-3
              bg-gradient-to-r from-cyan-200 via-white to-cyan-200
              bg-clip-text text-transparent
              transition-all duration-500
              ${isHovered ? 'translate-x-2' : ''}
            `}>
              {event.title}
            </h3>
            
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Clock className={`
                w-3 h-3 md:w-4 md:h-4 transition-transform duration-700
                ${isHovered ? 'rotate-[360deg]' : ''}
              `} />
              <span className="text-cyan-200/90 text-xs md:text-sm">{event.time}</span>
            </div>

            {event.description && (
              <p className="text-xs md:text-sm text-cyan-100/80 border-l-2 border-cyan-400/30 pl-3 
                hover:border-cyan-400/50 transition-all duration-500 hover:translate-x-2">
                {event.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center w-full md:w-2/12 justify-center gap-4">
        <IceSculpture isHovered={isHovered} />
        
        <div className="relative h-1 w-24 md:h-24 md:w-1">
          <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-cyan-400/50 via-cyan-500/30 to-transparent animate-pulse" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 w-full
                bg-gradient-to-r md:bg-gradient-to-b from-cyan-300/50 via-cyan-400/30 to-transparent
                transition-all duration-500
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transform: `translateY(${(i - 1) * 2}px) md:translateX(${(i - 1) * 2}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HackathonTimeline = () => {
  const events = [
    {
      title: "Registrations",
      date: "Pre-Event",
      time: "Until Feb 1st",
      description: "Register your team for the hackathon"
    },
    {
      title: "Hacking Period Starts",
      date: "1st February, 2025",
      time: "11:00 AM onwards",
      description: "Begin your innovative journey!"
    },
    {
      title: "Mid Evaluation",
      date: "1st February, 2025",
      time: "9:00 PM onwards",
      description: "Present your progress to the judges"
    },
    {
      title: "Hacking Period Ends",
      date: "2nd February, 2025",
      time: "6:00 PM",
      description: "Time to wrap up your projects"
    },
    {
      title: "Project Submission",
      date: "2nd February, 2025",
      time: "6:00 PM - 6:30 PM",
      description: "Submit your final project"
    },
    {
      title: "Final Evaluation",
      date: "2nd February, 2025",
      time: "6:30 PM onwards",
      description: "Present your complete project to the judges"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
     
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
     
  
      <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 
          bg-gradient-to-r from-cyan-200 via-white to-cyan-200 
          bg-clip-text text-transparent animate-pulse">
          Timeline
        </h1>
        <div className="space-y-8 md:space-y-16">
          {events.map((event, index) => (
            <TimelineEvent 
              key={index}
              event={event}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonTimeline;