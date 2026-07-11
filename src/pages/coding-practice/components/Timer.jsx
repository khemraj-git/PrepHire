import { useEffect, useState } from "react";
import {
  FiPlay,
  FiPause,
  FiRotateCcw,
  FiClock,
} from "react-icons/fi";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="flex items-center gap-3">

      <button
        onClick={() => setIsRunning((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-100"
      >
        {isRunning ? (
          <FiPause size={18} />
        ) : (
          <FiPlay size={18} />
        )}
      </button>

      <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-700">

        <FiClock />

        <span>
          {minutes}:{remainingSeconds}
        </span>

      </div>

      <button
        onClick={handleReset}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-100"
      >
        <FiRotateCcw size={18} />
      </button>

    </div>
  );
}

export default Timer;