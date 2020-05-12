import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./state/store";
import "./App.css";

import { HomeScreen } from "./screens/home";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeScreen />
    </PersistGate>
  </Provider>
);
