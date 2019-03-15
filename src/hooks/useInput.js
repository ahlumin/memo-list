import { useState, useCallback } from "react";

export default function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  return [input, onChange, setInput];
}
