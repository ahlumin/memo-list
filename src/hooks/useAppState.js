import { useState } from "react";

export default function useAppState() {
  const [app, setApp] = useState({ isLoading: true });
  return [app, setApp];
}
