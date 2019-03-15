import { useState } from "react";

export default function useAppState() {
  const [app, setApp] = useState({
    isLoading: true,
    isCloseLogInPop: false,
    isFetching: false,
    isShowInput: false
  });
  return [app, setApp];
}
