"use client";
import { useEffect, useState } from "react";

export default function ClockCalculator() {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: formatDate(new Date()),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDateTime({
        date: formatDate(now),
        time: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }), 
      });
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0"); 
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase(); 
    const year = date.getFullYear().toString().slice(-2); 

    return `${day}-${month}-${year}`; 
  }

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p className="text-sm">{currentDateTime.time}</p>
      <p className="text-sm">{currentDateTime.date}</p>
    </div>
  );
}
