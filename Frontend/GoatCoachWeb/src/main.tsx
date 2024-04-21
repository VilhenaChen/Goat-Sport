import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import store from "./store";
import { theme } from "./ui/theme";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore typing issues https://github.com/rt2zz/redux-persist/issues/1375
            <PersistGate loading={<div />} persistor={persistor}>
              <App />
            </PersistGate>
          }
        </Provider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
