import React, { useState, useEffect, useRef, useCallback } from "react";
import "./BinaryBackground.css";

interface MousePosition {
  x: number;
  y: number;
}

const BinaryBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState<MousePosition | null>(null);
  const binaryContainerRef = useRef<HTMLDivElement>(null);
  const [binaryContent, setBinaryContent] = useState<string[][]>([]);
  const charWidthRef = useRef<number>(8); // Store char width in ref

  useEffect(() => {
    const generateBinary = () =>
      Array.from({ length: 200 }, () => Math.round(Math.random()).toString());
    setBinaryContent(Array.from({ length: 30 }, generateBinary));
    const intervalId = setInterval(() => {
      setBinaryContent((prevContent) => prevContent.map(generateBinary));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Use useCallback to memoize the handleMouseMove function
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (binaryContainerRef.current) {
      const rect = binaryContainerRef.current.getBoundingClientRect();
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      } else {
        setMousePos(null);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]); // Add handleMouseMove as a dependency

  useEffect(() => {
    if (binaryContainerRef.current) {
      const sampleChar =
        binaryContainerRef.current.querySelector(".binary-row span");
      if (sampleChar) {
        charWidthRef.current = sampleChar.getBoundingClientRect().width;
      }
    }
  }, [binaryContent]);

  const calculateDistance = (x: number, y: number) => {
    if (!mousePos) return Infinity;
    const dx = mousePos.x - x;
    const dy = mousePos.y - y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const renderBinary = useCallback(() => {
    return binaryContent.map((binaryString, rowIndex) => (
      <div key={rowIndex} className="binary-row">
        {binaryString.map((bit, bitIndex) => {
          const charX = bitIndex * charWidthRef.current;
          const charY = rowIndex * 16;
          const distance = calculateDistance(
            charX + charWidthRef.current / 2,
            charY + 8,
          );
          const brightness = Math.max(0.2, 1 - distance / 150);
          return (
            <span
              key={bitIndex}
              style={{ opacity: brightness, padding: "0 4px" }}
            >
              {bit}
            </span>
          );
        })}
      </div>
    ));
  }, [binaryContent, mousePos]); // Add binaryContent and mousePos as dependencies

  return (
    <div className="binary-background" ref={binaryContainerRef}>
      <div className="binary-content">{renderBinary()}</div>
    </div>
  );
};

export default BinaryBackground;
