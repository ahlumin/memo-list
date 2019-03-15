import { useState, useCallback } from "react";

export default function useDate() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const year = currentYear;
  const month = currentMonth;

  const [dateInfo, setDate] = useState({
    today,
    currentYear,
    currentMonth,
    year,
    month
  });

  const onPrevious = useCallback(e => {
    e.preventDefault();
    setDate(state => {
      const { year, month } = state;
      if (month === 1) {
        return { ...state, year: year - 1, month: 12 };
      }
      return { ...state, month: month - 1 };
    });
  }, []);

  const onNext = useCallback(e => {
    e.preventDefault();
    setDate(state => {
      const { year, month } = state;
      if (month === 12) {
        return { ...state, year: year + 1, month: 1 };
      }
      return { ...state, month: month + 1 };
    });
  }, []);

  const onCurrent = useCallback(() => {
    setDate(state => ({
      ...state,
      year: state.currentYear,
      month: state.currentMonth
    }));
  }, []);

  return [dateInfo, onPrevious, onNext, onCurrent];
}
