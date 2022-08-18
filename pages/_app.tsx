import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../src/context/UserContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />;
    </UserContext.Provider>
  );
}

export default MyApp;
