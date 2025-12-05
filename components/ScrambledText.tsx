import React, { useEffect, useRef } from 'react';

const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|{}[]:;?><,./-=';

interface ScrambledTextProps {
  children: string;
  className?: string;
  radius?: number; // Radius of interaction in pixels
  scrambleSpeed?: number; // Speed of character changes (lower is faster updates)
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  children,
  className = '',
  radius = 80,
  scrambleSpeed = 50, // ms between updates
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animationsRef = useRef<Map<number, number>>(new Map()); // index -> timeoutId

  // Helper to split text into words and chars to preserve wrapping
  const words = children.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: PointerEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      spansRef.current.forEach((span, index) => {
        if (!span) return;

        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dist = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));

        if (dist < radius) {
          // If already animating, check if we should continue or if it's a new trigger
          // For simplicity and performance, if it's already in our map, we let it run or overwrite
          
          if (!animationsRef.current.has(index)) {
             startScramble(span, index, dist);
          }
        }
      });
    };

    const startScramble = (span: HTMLSpanElement, index: number, initialDist: number) => {
        const originalChar = span.getAttribute('data-char') || '';
        if (originalChar === ' ') return;
        
        // Intensity based on proximity
        const duration = 400 + (1 - Math.min(initialDist / radius, 1)) * 400; 
        const startTime = Date.now();

        const update = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
                // Schedule next update
                const timeoutId = window.setTimeout(update, scrambleSpeed);
                animationsRef.current.set(index, timeoutId);
            } else {
                // Restore
                span.textContent = originalChar;
                animationsRef.current.delete(index);
            }
        };

        update();
    };

    container.addEventListener('pointermove', handleMove);
    return () => {
      container.removeEventListener('pointermove', handleMove);
      // Cleanup animations
      animationsRef.current.forEach((id) => clearTimeout(id));
      animationsRef.current.clear();
    };
  }, [radius, scrambleSpeed]);

  // Reset refs on re-render
  spansRef.current = [];
  let globalCharIndex = 0;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
        {/* We use a specific structure to ensure words wrap correctly */}
        {words.map((word, wIndex) => (
            <span key={wIndex} className="inline-block whitespace-nowrap">
                {word.split('').map((char, cIndex) => {
                    const idx = globalCharIndex++;
                    return (
                        <span
                            key={cIndex}
                            ref={(el) => { spansRef.current[idx] = el; }}
                            data-char={char}
                            className="inline-block"
                        >
                            {char}
                        </span>
                    );
                })}
                {/* Add space after word unless it's the last one */}
                {wIndex < words.length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                )}
            </span>
        ))}
    </div>
  );
};

export default ScrambledText;
