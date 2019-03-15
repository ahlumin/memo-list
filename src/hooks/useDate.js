import { useState } from "react";

export default function useDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const [dateInfo, setDateInfo] = useState({
    today,
    year,
    month
  });

  return [dateInfo, setDateInfo];
}
