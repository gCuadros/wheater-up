import { useEffect, useState } from "react";

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState(dateTime.getDate());
  const [dayName, setDayName] = useState(
    new Intl.DateTimeFormat("en-ES", { weekday: "long" }).format(date)
  );

  const [month, setMonth] = useState(dateTime.getMonth());
  const [monthName, setMonthName] = useState(
    new Intl.DateTimeFormat("en-ES", { month: "long" }).format(month)
  );
  const [year, setYear] = useState(dateTime.getFullYear());
  const [hours, setHour] = useState(dateTime.getHours());
  const [minutes, setMinutes] = useState(dateTime.getMinutes());

  useEffect(() => {
    const dateTimeInterval = setInterval(() => {
      setDateTime(new Date());
      setDate(dateTime.getDate());
      setDayName(
        new Intl.DateTimeFormat("en-ES", { weekday: "long" }).format(date)
      );

      setMonth(dateTime.getMonth());
      setMonthName(
        new Intl.DateTimeFormat("en-ES", { month: "long" }).format(month)
      );
      setYear(dateTime.getFullYear());
      setHour(dateTime.getHours());
      setMinutes(dateTime.getMinutes());
    }, 1000);

    return () => {
      clearInterval(dateTimeInterval);
    };
  }, [dateTime, date, dayName, month, monthName, year, hours, minutes]);

  return {
    dateTime,
    date,
    dayName,
    month,
    monthName,
    year,
    hours,
    minutes,
  };
};
