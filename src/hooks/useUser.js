import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState({ uid: "", email: "", hasAuth: false });
  return [user, setUser];
}
