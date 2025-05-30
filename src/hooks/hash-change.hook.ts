'use client';

import { useState, useEffect } from "react";

export const useHashChange=() => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleHashChange = () => {
        console.log("Hash changed:", window.location.hash);
      setHash(window.location.hash);
    };

    setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}
