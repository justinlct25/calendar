"use client";

import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

// Helper to get month name
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

type Event = {
    id: string;
    title: string;
    time: string;
    color: string;
    date: Date;
  };

// Helper to generate weeks for a given month/year
function getWeeks(year: number, month: number, events: Event[]) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const weeks = [];
  const current = new Date(firstDay);
  current.setDate(current.getDate() - current.getDay()); // Start from Sunday

  while (current <= lastDay || current.getDay() !== 0) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const dayEvents = events.filter(
        (e) =>
          e.date.getFullYear() === current.getFullYear() &&
          e.date.getMonth() === current.getMonth() &&
          e.date.getDate() === current.getDate()
      );
      week.push({ date: new Date(current), events: dayEvents });
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
    if (current > lastDay && current.getDay() === 0) break;
  }
  return weeks;
}

// Mock events
const mockEvents = [
  {
    id: "1",
    title: "Team Lunch",
    time: "11:00",
    color: "#4ade80",
    date: new Date(2024, 11, 1), // December 1, 2024
  },
  {
    id: "2",
    title: "Standup",
    time: "10:00",
    color: "#818cf8",
    date: new Date(2024, 11, 4), // December 4, 2024
  },
  // Add more mock events as needed
];

export default function MonthView() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [view, setView] = useState("Month");

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const weeks = getWeeks(year, month, mockEvents);

  return (
    <div>
      <CalendarHeader
        month={monthNames[month]}
        year={year}
        onPrev={handlePrev}
        onNext={handleNext}
        view={view}
        setView={setView}
      />
      <CalendarGrid weeks={weeks} />
    </div>
  );
}