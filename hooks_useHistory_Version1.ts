import { useState, useEffect } from "react";

export function useHistory() {
  const [history, setHistory] = useState<string[][]>([]);
  const [openHistory, setOpenHistory] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("drawHistory="));
    if (cookie) {
      setHistory(JSON.parse(decodeURIComponent(cookie.split("=")[1])));
    }
  }, []);

  const addHistory = (ids: string[]) => {
    const newHistory = [...history, ids].slice(-5);
    setHistory(newHistory);
    document.cookie = `drawHistory=${encodeURIComponent(JSON.stringify(newHistory))}; path=/`;
  };

  return { history, openHistory, setOpenHistory, addHistory };
}