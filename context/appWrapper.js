import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AppWrapper({ children }) {
  const [appState, setAppState] = useState({ userID: null, userName: null });

  return (
    <Context.Provider value={[appState, setAppState]}>
      {children}
    </Context.Provider>
  );
}
export function useAppContext() {
  return useContext(Context);
}
