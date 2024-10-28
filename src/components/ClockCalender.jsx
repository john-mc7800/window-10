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
        }), // Ensure it shows only hours and minutes
      });
    }, 1000); // Update every second for accurate time display

    return () => clearInterval(timer);
  }, []);

  // Function to format the date as "28-OCT-24"
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0"); // Get day and ensure it's 2 digits
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase(); // Get month in uppercase
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    return `${day}-${month}-${year}`; // Format as "28-OCT-24"
  }

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p className="text-sm">{currentDateTime.time}</p>
      <p className="text-sm">{currentDateTime.date}</p>
    </div>
  );
}
