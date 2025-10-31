import React from 'react';

const CONFETTI_COLORS = ['#E6C36A', '#5AA9E6', '#C44545', '#7FFFD4', '#8C6FF7'];
const NUM_CONFETTI = 150;

export const Confetti: React.FC = () => {
  const confettiPieces = React.useMemo(() => {
    return Array.from({ length: NUM_CONFETTI }).map((_, index) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 4}s`, // 4s to 7s
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
        transform: `scale(${Math.random() * 0.75 + 0.5})`, // Random size
        borderRadius: `${Math.random() > 0.5 ? '50%' : '0'}`, // Mix of circles and rectangles
      };
      return <div key={index} className="confetti-piece" style={style} />;
    });
  }, []);

  return <div className="confetti-container">{confettiPieces}</div>;
};