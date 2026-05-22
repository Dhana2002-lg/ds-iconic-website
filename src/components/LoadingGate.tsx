import { useEffect, useState, type ReactNode } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

export function LoadingGate({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ✅ loader only first time
    const firstLoad = sessionStorage.getItem("first-load-done");

    if (!firstLoad) {
      setLoading(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("first-load-done", "true");
        setLoading(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}