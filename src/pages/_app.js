import "@/styles/globals.css";
import { createContext, useState } from "react";
export const ToggleContext = createContext();
export default function App({ Component, pageProps }) {
  const [toggleColor, setToggleColor] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleColor, setToggleColor }}>
      <Component {...pageProps} />
    </ToggleContext.Provider>
  );
}


