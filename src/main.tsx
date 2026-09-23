import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </HashRouter>,
);
