import React, { createContext, useContext, useEffect, useReducer } from "react";

import { appReducer, initializer } from "./appReducer";
import { setAppData } from "../../utils/SessionUtil";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, dispatch] = useReducer(appReducer, {}, initializer);

  useEffect(() => {
    setAppData(appData);
  }, [appData]);

  return (
    <AppContext.Provider value={{ appData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
