import { useState, useEffect, useCallback } from "react";

export default function useRecords(DAO, email, year, month) {
  const [records, setRecords] = useState({
    ids: [],
    isUpdating: false,
    isShowField: false
  });

  useEffect(() => {
    setRecords(state => ({ ...state, isUpdating: true }));

    DAO.selectRecords(email, year, month).then(result => {
      setRecords({ ...result, isUpdating: false, isShowField: false });
    });
  }, [DAO, email, month, year]);

  const onToggleField = useCallback(() => {
    setRecords(state => ({ ...state, isShowField: !state.isShowField }));
  }, []);

  return [records, setRecords, onToggleField];
}
