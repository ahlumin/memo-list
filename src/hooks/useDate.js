import { useState } from "react";

export default function useDate() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const year = currentYear;
  const month = currentMonth;

  const [dateInfo, setDateInfo] = useState({
    currentYear,
    currentMonth,
    year,
    month
  });

  return [dateInfo, setDateInfo];
}
