import React, { useEffect, useState } from 'react';

type MovingDotsProps = {
  text: string;
};

export const MovingDots = ({ text }: MovingDotsProps) => {
  const [tick, setTick] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const dots = [...Array(tick)].fill('.').join('').padEnd(3);

  return (
    <span style={{ whiteSpace: 'pre' }}>
      {text}
      {dots}
    </span>
  );
};
