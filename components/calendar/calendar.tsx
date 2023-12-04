import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
type BookingSlot = "all day" | "morning" | "afternoon" | "evening" | null;

type CalendarDay = {
  date: Date;
  isAvailable: boolean;
  bookingSlot?: BookingSlot;
};
const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [bookingSlots, setBookingSlots] = useState<BookingSlot[]>([]);

  const handleBookingSlotSelection = (slot: BookingSlot) => {
    if (selectedDay) {
      setSelectedDay({ ...selectedDay, bookingSlot: slot });
      // Here you can add logic to save the booking or display a confirmation
    }
  };

  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= totalDays; day++) {
      // Setting specific dates in red
      let isAvailable = true;
      if (month === 11) {
        // Check for December
        if ([15, 16, 22, 25, 28, 12, 11].includes(day)) {
          isAvailable = false;
        }
      }
      days.push({ date: new Date(year, month, day), isAvailable });
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleDayClick = (day: CalendarDay) => {
    if (day.isAvailable && day.date >= today) {
      setSelectedDay(day);
      setBookingSlots(day.bookingSlot || []);
    }
  };

  const toggleBookingSlot = (slot: BookingSlot) => {
    setBookingSlots((prevSlots) =>
      prevSlots.includes(slot)
        ? prevSlots.filter((s) => s !== slot)
        : [...prevSlots, slot]
    );
  };

  const confirmBooking = () => {
    if (selectedDay) {
      const updatedDay = { ...selectedDay, bookingSlot: bookingSlots };
      setSelectedDay(updatedDay);
      // Here, you can add logic to save or process the booking
      alert(
        `Vous avez réservé la chambre pour le ${updatedDay.date.toDateString()} aux horaires suivants: ${updatedDay.bookingSlot.join(
          ", "
        )}`
      );
    }
  };

  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col items-center rounded-lg bg-white bg-opacity-60 p-5 shadow-xl backdrop-blur-lg backdrop-filter">
        <div className="my-2 flex items-center text-lg font-semibold">
          <button
            onClick={goToPreviousMonth}
            className="hover:bg-gray-700 mx-3 flex items-center rounded bg-gray px-4 py-2 text-white"
          >
            <MdArrowBack className="mr-2" /> Previous
          </button>
          <div className="mx-9 text-xl">
            {currentMonth.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <button
            onClick={goToNextMonth}
            className="hover:bg-gray-700 mx-3 flex items-center rounded bg-gray px-4 py-2 text-white"
          >
            Next <MdArrowForward className="ml-2" />
          </button>
        </div>
        {/*   CALENDAR */}
        <div className="grid grid-cols-7 gap-4 p-5">
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDayClick(day)}
              className={`cursor-pointer rounded-lg p-4
              ${
                day.date.toDateString() === today.toDateString()
                  ? "ring-blue-500 ring-2"
                  : ""
              }
              ${!day.isAvailable ? "bg-customRed-20 ring-2 ring-customRed" : ""}
              ${day.isAvailable ? "ring-2 ring-customGreen" : ""}
              ${
                day.date < today
                  ? "text-gray-400 ring-gray-400 ring-1"
                  : "text-black"
              }
            `}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
        {selectedDay && (
          <div className="mt-5 rounded-lg bg-white p-4 shadow-lg">
            <div className="mb-2 font-bold">
              Select time slots for {selectedDay.date.toDateString()}:
            </div>
            {["all day", "morning", "afternoon", "evening"].map((slot) => (
              <div key={slot} className="mb-2">
                <input
                  type="checkbox"
                  id={slot}
                  checked={bookingSlots.includes(slot as BookingSlot)}
                  onChange={() => toggleBookingSlot(slot as BookingSlot)}
                  className="mr-2"
                />
                <label htmlFor={slot}>{slot}</label>
              </div>
            ))}
            <button
              onClick={confirmBooking}
              className="hover:bg-green-700 mt-4 rounded bg-customGreen py-2 px-4 font-bold text-white"
            >
              Confirmer la réservation
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Calendar;
