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

  const onAddRecord = useCallback(
    (day, consume, isCredit) => {
      return () => {
        setRecords(state => ({
          ...state,
          isUpdating: true,
          isShowField: false
        }));
        DAO.addRecord(email, year, month, day, consume, isCredit)
          .then(result => {
            setRecords(state => {
              const ids = state.ids.slice();
              ids.push(result.id);
              return {
                ...state,
                [result.id]: {
                  year,
                  month,
                  day,
                  isCredit,
                  consume
                },
                ids,
                isUpdating: false,
                isShowField: false
              };
            });
          })
          .catch(error => {
            console.error("error in Field", error);
            alert("oops! record added fail");
          });
      };
    },
    [DAO, email, month, year]
  );

  return [records, onToggleField, onAddRecord, setRecords];
}
