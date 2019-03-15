import { useState } from "react";

export default function useRecords() {
  const [records, setRecords] = useState({ ids: [] });
  return [records, setRecords];
}
