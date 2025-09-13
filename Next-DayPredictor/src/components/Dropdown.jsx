import React, { useState } from "react";

const Dropdown = () => {
  const [day, setDay] = useState("");
  const [loadingMessages, setLoadingMessages] = useState([]);
  const [finalDay, setFinalDay] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const fakeMessages = [
    "Checking system requirements...",
    "Deleting OS files... ",
    "Optimizing hard drive...",
    "Installing virus... ",
    "Just kidding! ",
    "Fetching your lucky day..."
  ];

  const handleSelect = (e) => {
    const selectedDay = e.target.value;
    setDay(selectedDay);
    setLoadingMessages([]);
    setFinalDay("");

    if (!selectedDay) return;

  
    fakeMessages.forEach((msg, i) => {
      setTimeout(() => {
        setLoadingMessages((prev) => [...prev, msg]);
      }, i * 1500);
    });

    
    const currentIndex = daysOfWeek.indexOf(selectedDay);
    const nextDay = daysOfWeek[(currentIndex + 1) % daysOfWeek.length];

   
    setTimeout(() => {
      setFinalDay(nextDay);
    }, fakeMessages.length * 1500);
  };

  return (
    <div className="p-4">
      <label htmlFor="days" className="mr-2 text-lg font-medium text-white">
        Choose a day:
      </label>
      <select
        id="days"
        value={day}
        onChange={handleSelect}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">--Select--</option>
        {daysOfWeek.map((d, index) => (
          <option key={index} value={d}>
            {d}
          </option>
        ))}
      </select>

      <div className="mt-4 text-white">
        {loadingMessages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>

      {finalDay && (
        <p className="mt-4 text-2xl text-amber-200 font-bold">
          ✅ The next day is: {finalDay}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
