import { useState } from "react";

export const useDateTime = (targetDate?: number | string) => {
  const [dateTime] = useState(new Date(targetDate || Date.now()));
  const [date] = useState(dateTime.getDate());
  const [dayName] = useState(
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(dateTime)
  );

  const [month] = useState(dateTime.getMonth());
  const [monthName] = useState(
    new Intl.DateTimeFormat("en-US", { month: "long" }).format(dateTime)
  );
  const [year] = useState(dateTime.getFullYear());
  const [hours] = useState(
    new Intl.DateTimeFormat("en-US", { hour: "2-digit" }).format(dateTime)
  );
  const [minutes] = useState(
    ` ${dateTime.getMinutes() < 10 ? "0" : ""}${dateTime
      .getMinutes()
      .toString()}`
  );

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
