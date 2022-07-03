import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.scss";

import { FirebaseProvider } from "./Components/Firebase";
import { AppProvider } from "./Components/Context";

// App Starts Here
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </AppProvider>
  </React.StrictMode>
);
