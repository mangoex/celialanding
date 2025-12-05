import React from 'react';

const gradientMapping = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))'
};

export type GlassIconColor = keyof typeof gradientMapping;

interface GlassIconProps {
  icon: string;
  color: GlassIconColor;
  label?: string;
  className?: string;
}

export const GlassIcon: React.FC<GlassIconProps> = ({ icon, color, label, className = '' }) => {
  const getBackgroundStyle = (colorName: GlassIconColor) => {
    return { background: gradientMapping[colorName] || colorName };
  };

  return (
    <>
      <style>{`
        .icon-btn {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .icon-btn:hover {
          transform: translateY(-5px);
        }

        .icon-btn__back {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          filter: blur(15px);
          opacity: 0.4;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 0;
        }

        .icon-btn:hover .icon-btn__back {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .icon-btn__front {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          overflow: hidden;
        }

        .icon-btn__front::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: skewX(-25deg);
          transition: 0.5s;
          pointer-events: none;
        }

        .icon-btn:hover .icon-btn__front::before {
          left: 150%;
        }

        .icon-btn__icon {
          font-size: 2.5rem;
          color: white;
          z-index: 2;
        }

        .icon-btn__label {
          position: absolute;
          bottom: -30px;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        /* If we wanted to show label on hover:
        .icon-btn:hover .icon-btn__label {
          opacity: 1;
          transform: translateY(0);
        }
        */
      `}</style>
      <button className={`icon-btn ${className}`} type="button">
        <span 
          className="icon-btn__back" 
          style={getBackgroundStyle(color)}
        ></span>
        <span className="icon-btn__front">
          <span className="material-symbols-outlined icon-btn__icon" aria-hidden="true">
            {icon}
          </span>
        </span>
        {label && <span className="icon-btn__label">{label}</span>}
      </button>
    </>
  );
};
