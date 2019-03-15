import { useState } from "react";

export default function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);
  return [input, setInput];
}
