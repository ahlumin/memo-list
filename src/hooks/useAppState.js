import { useState } from "react";

export default function useAppState() {
  const [app, setApp] = useState({
    isLoading: true,
    isCloseLogInPop: false
  });
  return [app, setApp];
}
