import { useState, useCallback } from "react";

export function useUnavailable() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const show = useCallback((msg) => {
    setMessage(msg || "");
    setVisible(true);
  }, []);

  const hide = useCallback(() => setVisible(false), []);

  return { visible, message, show, hide };
}
