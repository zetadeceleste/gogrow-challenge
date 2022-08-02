import React from "react";

import { AppProvider } from "./context/AppContext";
import AppRouter from "./routers/AppRouter";
import "./styles/main.scss";

const App = () => (
  <AppProvider>
    <AppRouter />
  </AppProvider>
);
export default App;
