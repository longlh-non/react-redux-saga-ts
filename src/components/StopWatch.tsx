import React, { useState, useRef } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (!intervalRef.current) return intervalRef.current;
    clearInterval(intervalRef.current);
  }

  async function handleClear() {
    if (!intervalRef.current) return intervalRef.current;
    clearInterval(intervalRef.current);
    setNow(Date.now());
    setStartTime(Date.now());
  }

  let secondsPassed = 0;
  if (startTime && now) {
    secondsPassed = (now - startTime) / 1000;
    if (secondsPassed < 0) secondsPassed = 0;
  }

  return (
    <div
      style={{
        marginBottom: "24px",
      }}
    >
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button style={{ marginLeft: "16px" }} onClick={handleStop}>
        Stop
      </button>
      <button style={{ marginLeft: "16px" }} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}
