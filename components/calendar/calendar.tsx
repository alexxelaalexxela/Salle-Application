import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  addDays
} from "date-fns";
import { fr } from "date-fns/locale";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-between p-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          Prev
        </button>
        <span>{format(currentMonth, dateFormat, { locale: fr })}</span>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          Next
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eee";
    const days = [];
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col-span-1" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: fr })}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col-span-1 ${
              isPastDate(day) ? "text-gray-400" : "cursor-pointer"
            }`}
            key={day.toString()}
            onClick={() => !isPastDate(day) && setSelectedDate(cloneDay)}
          >
            <span className={`${dayStyles(day)}`}>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="flex flex-col">{rows}</div>;
  };

  const isPastDate = (date) => {
    return date < new Date();
  };

const dayStyles = (day: Date): string => {
  if (isPastDate(day)) return "text-gray-400";
  if (
    selectedDate &&
    format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
  ) {
    return "bg-primary";
  }
  return "";
};

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="rounded-lg bg-white shadow-lg">
        <div className="border-gray-200 border-b p-4 text-center">
          {renderHeader()}
        </div>
        <div className="grid grid-cols-7 gap-4 p-4">{renderDays()}</div>
        <div className="grid grid-cols-7 gap-4 p-4">{renderCells()}</div>
      </div>
      {selectedDate && !isPastDate(selectedDate) && (
        <button
          className="hover:bg-primary-dark mt-4 rounded-lg bg-primary py-2 px-4 font-mulish text-white shadow transition duration-300 ease-in-out"
          onClick={() => (window.location.href = "/reservation")}
        >
          Continuer vers la réservation
        </button>
      )}
    </div>
  );
};

export default Calendar;
