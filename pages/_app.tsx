import Loader from "@/components/common/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <AuthProvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={1000}
      >
        {loading ? <Loader /> : <Component {...pageProps} />}
      </SnackbarProvider>
    </AuthProvider>
  );
}
