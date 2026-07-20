import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const InterviewTimer = ({ duration = "30 Minutes" }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2">
      <FiClock className="text-lg text-blue-700" />

      <div>
        <p className="text-[10px] font-medium uppercase tracking-wide text-blue-600">
          Elapsed
        </p>

        <p className="text-sm font-bold text-blue-700">
          {hours}:{minutes}:{secs}
        </p>
      </div>

      <div className="h-8 w-px bg-blue-300" />

      <div>
        <p className="text-[10px] font-medium uppercase tracking-wide text-blue-600">
          Limit
        </p>

        <p className="text-sm font-bold text-blue-700">
          {duration}
        </p>
      </div>
    </div>
  );
};

export default InterviewTimer;