import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const InterviewTimer = () => {
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
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <FiClock className="text-xl text-blue-600" />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Interview Time
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-wider">
            {hours}:{minutes}:{secs}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default InterviewTimer;