import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const LogoHorizontal: React.FC<LogoProps> = ({ className = "", color = "#10B981" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 40" // Augmenté légèrement car l'italique prend plus de place
      className={`font-mono ${className}`}
      height="40"
      width="auto"
      role="img"
      aria-label="Clav's Portfolio Logo"
    >
      <text
        x="0"
        y="28"
        fill={color}
        fontSize="20"
        // On transforme la string CSS en objet JavaScript
        style={{ 
          fontFamily: '"JetBrains Mono", monospace',
          fontOpticalSizing: 'auto',
          fontWeight: 400,
          fontStyle: 'normal'
        }}
      >
        Clav's Portfolio
      </text>
    </svg>
  );
};

export default LogoHorizontal;